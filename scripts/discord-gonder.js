/*
 * Haftalık raporu Discord'a gönderir.
 *
 * Çalışma mantığı: content/haberler.json içindeki en yeni sayıyı okur,
 * daha önce gönderilip gönderilmediğine content/.son-gonderilen dosyasından
 * bakar, gönderilmemişse webhook'a bir embed yollar ve durumu kaydeder.
 *
 * Webhook adresi DISCORD_WEBHOOK ortam değişkeninden gelir. Asla koda
 * yazmayın — depoya girdiği anda adresi gören herkes kanala mesaj atabilir.
 *
 * Yerelde denemek için:
 *   DISCORD_WEBHOOK="https://discord.com/api/webhooks/..." node scripts/discord-gonder.js
 *   KURU_CALISMA=1 node scripts/discord-gonder.js     (göndermez, sadece yazdırır)
 */

const fs = require("fs");
const path = require("path");

const WEBHOOK = process.env.DISCORD_WEBHOOK;
const SITE    = (process.env.SITE_URL || "").trim();
const KURU    = process.env.KURU_CALISMA === "1";

const DATA  = path.join("content", "haberler.json");
const STATE = path.join("content", ".son-gonderilen");
const RENK  = parseInt("E63A4B", 16);   // sitedeki --red

/* Discord'un sert sınırları. Aşılırsa istek 400 döner. */
const LIMIT = { baslik: 256, alanAd: 256, alanDeger: 1024, toplam: 6000, alanSayisi: 25 };

function kirp(s, n) {
  s = String(s == null ? "" : s).trim();
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…";
}

function cik(kod, mesaj) {
  (kod === 0 ? console.log : console.error)(mesaj);
  process.exit(kod);
}

/* ---------- veriyi oku ---------- */

if (!fs.existsSync(DATA)) cik(1, `${DATA} bulunamadı.`);

let veri;
try {
  veri = JSON.parse(fs.readFileSync(DATA, "utf8"));
} catch (e) {
  cik(1, `${DATA} geçerli JSON değil: ${e.message}`);
}

const sayi = veri && Array.isArray(veri.sayilar) ? veri.sayilar[0] : null;
if (!sayi) cik(1, "haberler.json içinde sayı yok.");
if (!Array.isArray(sayi.haberler) || sayi.haberler.length === 0) {
  cik(1, `${sayi.sayi}. sayıda hiç haber yok.`);
}

/* ---------- daha önce gönderildi mi ---------- */

const kimlik = String(sayi.sayi);
if (fs.existsSync(STATE) && fs.readFileSync(STATE, "utf8").trim() === kimlik) {
  cik(0, `${kimlik}. sayı zaten gönderilmiş, atlanıyor.`);
}

/* ---------- embed'i kur ---------- */

const alanlar = sayi.haberler.slice(0, LIMIT.alanSayisi).map((h) => {
  const baslik = h.link ? `[${kirp(h.baslik, 200)}](${h.link})` : `**${kirp(h.baslik, 200)}**`;
  return {
    name: kirp([h.etiket, h.tarih].filter(Boolean).join(" · ") || "Haber", LIMIT.alanAd),
    value: kirp(`${baslik}\n${h.ozet || ""}`, LIMIT.alanDeger),
    inline: false,
  };
});

const embed = {
  title: kirp(`Haftalık Rapor · ${sayi.sayi}. sayı`, LIMIT.baslik),
  color: RENK,
  fields: alanlar,
  footer: { text: "Atılım AI · Perşembe 18:00, B-204" },
};

if (SITE) embed.url = SITE.replace(/\/+$/, "") + "/#s3";

/* Geçersiz tarih toISOString()'i patlatır, o yüzden kontrol ediyoruz. */
const t = new Date(sayi.tarih);
if (!isNaN(t.getTime())) embed.timestamp = t.toISOString();

/* Toplam karakter sınırı: aşarsak sondan alan atarız. */
const uzunluk = (e) =>
  (e.title || "").length +
  (e.footer?.text || "").length +
  e.fields.reduce((n, f) => n + f.name.length + f.value.length, 0);

while (embed.fields.length > 1 && uzunluk(embed) > LIMIT.toplam) embed.fields.pop();

const govde = {
  username: "Atılım AI Rapor",
  embeds: [embed],
};

/* ---------- gönder ---------- */

if (KURU) {
  console.log(JSON.stringify(govde, null, 2));
  console.log(`\n(kuru çalışma — gönderilmedi) ${embed.fields.length} haber, ${uzunluk(embed)} karakter`);
  process.exit(0);
}

if (!WEBHOOK) cik(1, "DISCORD_WEBHOOK tanımlı değil. Depo ayarlarından secret ekleyin.");

async function gonder(deneme = 1) {
  let yanit;
  try {
    yanit = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(govde),
    });
  } catch (e) {
    /* Hata metnini yazdırmıyoruz; içinde webhook adresi geçebilir. */
    cik(1, "Discord'a bağlanılamadı (ağ hatası).");
  }

  if (yanit.status === 429 && deneme < 3) {
    let bekle = 2;
    try {
      bekle = (await yanit.clone().json()).retry_after || 2;
    } catch (e) { /* gövde JSON değilse varsayılanı kullan */ }
    console.log(`Hız sınırı, ${bekle} sn bekleniyor…`);
    await new Promise((r) => setTimeout(r, (bekle + 0.5) * 1000));
    return gonder(deneme + 1);
  }

  if (!yanit.ok) {
    const metin = await yanit.text().catch(() => "");
    cik(1, `Discord ${yanit.status} döndü. ${kirp(metin, 400)}`);
  }

  fs.writeFileSync(STATE, kimlik + "\n");
  console.log(`${kimlik}. sayı gönderildi — ${embed.fields.length} haber.`);
}

gonder();
