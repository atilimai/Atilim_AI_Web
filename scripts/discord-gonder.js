/*
 * Haftalık raporu Discord'a gönderir.
 *
 * Çalışma mantığı: content/haberler.json içindeki en yeni sayıyı okur,
 * daha önce gönderilip gönderilmediğine content/.son-gonderilen dosyasından
 * bakar, gönderilmemişse haberleri embed'lere çevirip webhook'a yollar ve
 * durumu kaydeder.
 *
 * Her haber AYRI bir embed olur: başlık (sitedeki tam metne bağlı), özet,
 * tam içerik, görsel ve kaynak. Discord bir mesajda en fazla 10 embed ve
 * TOPLAM 6000 karakter kabul ettiği için embed'ler gruplara bölünüp arka
 * arkaya birkaç mesaj olarak gönderilir.
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
const SITE    = (process.env.SITE_URL || "").trim().replace(/\/+$/, "");
const KURU    = process.env.KURU_CALISMA === "1";

const DATA  = path.join("content", "haberler.json");
const STATE = path.join("content", ".son-gonderilen");
const RENK  = parseInt("E63A4B", 16);   // sitedeki --red

/* Discord'un sert sınırları. Aşılırsa istek 400 döner.
 * "toplam" TEK BİR EMBED'in değil, bir mesajdaki TÜM embed'lerin toplamıdır;
 * title + description + author.name + footer.text + alanlar hepsi sayılır. */
const LIMIT = {
  baslik: 256,
  aciklama: 4096,
  yazarAd: 256,
  dipnot: 2048,
  toplam: 6000,
  embedSayisi: 10,
  govde: 2000,        // mesajin content alani
};

function kirp(s, n) {
  s = String(s == null ? "" : s).trim();
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…";
}

function cik(kod, mesaj) {
  (kod === 0 ? console.log : console.error)(mesaj);
  process.exit(kod);
}

/* Bir embed'in Discord'un 6000'lik kotasına yazdığı karakter sayısı. */
function embedUzunluk(e) {
  return (e.title || "").length +
         (e.description || "").length +
         (e.author?.name || "").length +
         (e.footer?.text || "").length;
}

function httpMu(u) {
  return typeof u === "string" && /^https?:\/\//i.test(u.trim());
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

/* ---------- embed'leri kur: haber basina bir embed ---------- */

/* Sitedeki tam metin sayfasi haber.html?sayi=..&sira=.. adresinde ve "sira"
 * haberin dizideki indeksi. Ayni semayi burada da kuruyoruz ki basliga
 * tiklayan uye yazinin sitedeki haline gitsin. */
function detayAdresi(sira) {
  if (!SITE || !sayi.haberler[sira].icerik) return "";
  return `${SITE}/haber.html?sayi=${encodeURIComponent(sayi.sayi)}&sira=${sira}`;
}

const embedler = sayi.haberler.map((h, sira) => {
  const detay = detayAdresi(sira);

  /* Ozet ve tam metin arka arkaya; ikisi de varsa aralarinda bos satir.
   * Site icerigi bos satirla ayrilmis paragraflar olarak isliyor (haber.html),
   * Discord da ayni sekilde gosterdigi icin metne dokunmuyoruz. */
  const parcalar = [];
  if (h.ozet) parcalar.push(String(h.ozet).trim());
  if (h.icerik) parcalar.push(String(h.icerik).trim());

  /* Dis kaynak linki basliga konmadiysa aciklamanin sonunda dursun ki
   * haber hem sitedeki haline hem de kaynagina baglansin. */
  if (h.link && detay) parcalar.push(`[Kaynağa git](${h.link})`);

  const embed = {
    color: RENK,
    author: { name: kirp([h.etiket, h.tarih].filter(Boolean).join(" · ") || "Haber", LIMIT.yazarAd) },
    title: kirp(h.baslik || "Başlıksız haber", LIMIT.baslik),
  };
  if (h.kaynak) embed.footer = { text: kirp(`Kaynak: ${h.kaynak}`, LIMIT.dipnot) };

  /* Aciklamaya kalan yer iki sinirin kucugu: embed'in kendi 4096'si ve
   * mesaj basina 6000'den baslik/yazar/dipnota giden payin artakalani.
   * Metin sigmiyorsa kesip sitedeki tam haline bir bag birakiyoruz —
   * baslik zaten oraya gidiyor ama kesildigi belli olmazsa uye metnin
   * yarim oldugunu anlamaz. */
  const tamMetin = parcalar.join("\n\n");
  const kuyruk = detay ? `\n\n[Yazının tamamı sitede →](${detay})` : "";
  const butce = Math.min(LIMIT.aciklama, LIMIT.toplam - embedUzunluk(embed));

  embed.description =
    tamMetin.length <= butce
      ? tamMetin
      : butce > kuyruk.length
        ? kirp(tamMetin, butce - kuyruk.length) + kuyruk
        : kirp(tamMetin, butce);

  const adres = detay || (httpMu(h.link) ? h.link : "");
  if (adres) embed.url = adres;

  if (httpMu(h.gorsel)) {
    embed.image = { url: h.gorsel.trim() };
    /* Dogrudan resim adresi olmayan bir link (ornegin bir arama/yonlendirme
     * adresi) 400 vermez ama Discord'da hicbir sey gostermez; veriyi
     * duzeltebilmek icin uyariyoruz. */
    if (!/\.(png|jpe?g|gif|webp|avif)(\?|$)/i.test(h.gorsel.trim())) {
      console.error(`  uyarı: "${kirp(h.baslik, 40)}" görseli doğrudan bir resim adresi değil, Discord'da görünmeyebilir.`);
    }
  } else if (h.gorsel) {
    console.error(`  uyarı: "${kirp(h.baslik, 40)}" görseli http(s) ile başlamıyor, atlandı.`);
  }

  return embed;
});

/* ---------- mesajlara bol: en fazla 10 embed ve 6000 karakter ---------- */

const gruplar = [];
let grup = [];
let grupUzunluk = 0;

for (const e of embedler) {
  const u = embedUzunluk(e);
  if (grup.length && (grup.length >= LIMIT.embedSayisi || grupUzunluk + u > LIMIT.toplam)) {
    gruplar.push(grup);
    grup = [];
    grupUzunluk = 0;
  }
  grup.push(e);
  grupUzunluk += u;
}
if (grup.length) gruplar.push(grup);

const tarihYazi = (() => {
  const t = new Date(sayi.tarih);
  if (isNaN(t.getTime())) return "";
  return t.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
})();

/* Ilk mesajin ustunde sayi basligi durur; bolunmusse sonrakiler "devam" der.
 * Basliga ham URL koymuyoruz: mesaj govdesindeki adresler ayrica onizleme
 * embed'i uretip kotayi ve gorunumu bozar. */
const govdeler = gruplar.map((_, i) =>
  i === 0
    ? kirp(`**Haftalık Rapor · ${sayi.sayi}. sayı**${tarihYazi ? ` · ${tarihYazi}` : ""}`, LIMIT.govde)
    : kirp(`**${sayi.sayi}. sayı — devamı (${i + 1}/${gruplar.length})**`, LIMIT.govde)
);

const mesajlar = gruplar.map((embedGrubu, i) => ({
  username: "Atılım AI Rapor",
  content: govdeler[i],
  embeds: embedGrubu,
}));

/* ---------- gönder ---------- */

if (KURU) {
  console.log(JSON.stringify(mesajlar, null, 2));
  console.log(
    `\n(kuru çalışma — gönderilmedi) ${embedler.length} haber, ` +
    `${mesajlar.length} mesaj, ${gruplar.map((g) => g.reduce((n, e) => n + embedUzunluk(e), 0)).join(" + ")} karakter`
  );
  process.exit(0);
}

if (!WEBHOOK) cik(1, "DISCORD_WEBHOOK tanımlı değil. Depo ayarlarından secret ekleyin.");

const bekle = (sn) => new Promise((r) => setTimeout(r, sn * 1000));

async function gonder(govde, sira, deneme = 1) {
  let yanit;
  try {
    yanit = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(govde),
    });
  } catch (e) {
    /* Hata metnini yazdırmıyoruz; içinde webhook adresi geçebilir. */
    cik(1, `Discord'a bağlanılamadı (ağ hatası), ${sira}. mesaj.`);
  }

  if (yanit.status === 429 && deneme < 3) {
    let sn = 2;
    try {
      sn = (await yanit.clone().json()).retry_after || 2;
    } catch (e) { /* gövde JSON değilse varsayılanı kullan */ }
    console.log(`Hız sınırı, ${sn} sn bekleniyor…`);
    await bekle(sn + 0.5);
    return gonder(govde, sira, deneme + 1);
  }

  if (!yanit.ok) {
    const metin = await yanit.text().catch(() => "");
    cik(1, `Discord ${yanit.status} döndü (${sira}. mesaj). ${kirp(metin, 400)}`);
  }
}

(async () => {
  for (let i = 0; i < mesajlar.length; i++) {
    await gonder(mesajlar[i], i + 1);
    /* Webhook'lar kanal basina hizli ardisik isteklerde 429 yiyor; aradaki
     * kisa bekleme cogu durumda yeniden denemeye hic gerek birakmiyor. */
    if (i < mesajlar.length - 1) await bekle(1);
  }

  /* Durum yalnizca TUM mesajlar gittikten sonra yazilir. Ortada bir mesaj
   * patlarsa dosya guncellenmez; sonraki calisma sayiyi bastan gonderir,
   * yani ilk mesajlar kanalda ikinci kez gorunebilir. */
  fs.writeFileSync(STATE, kimlik + "\n");
  console.log(`${kimlik}. sayı gönderildi — ${embedler.length} haber, ${mesajlar.length} mesaj.`);
})();
