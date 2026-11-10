# Duyurular: WhatsApp → site (ana sayfa bölümü + arşiv + 3B Diffusion modeli)

## Context
Topluluk başkanı duyuruları WhatsApp Topluluğu'nun duyuru alt
sohbetine telefondan atıyor. Aynı metin + görsel/video sitede de görünmeli. Başkan panel
kullanmayacak, sunucu yok, ücretsiz olmalı, hiçbir yerde LLM/Claude token'ı harcanmayacak.
WhatsApp'ın grup/topluluk okuma API'si yok (Coexistence de grupları aktarmıyor; skill/plugin/MCP
aramasında çözüm çıkmadı) → resmî Cloud API botuna **iletme**. Başlangıçta Meta'nın test numarası.

## Kesin kararlar
- Ana sayfa sırası: Giriş · Hakkımızda · **Duyurular** · Haftalık rapor · Etkinlikler · Projeler.
- Kimlikler: `#giris #hakkimizda #duyurular #rapor #etkinlikler #projeler`; çeviri anahtarları da
  (`nav.s1`→`nav.hakkimizda`…). Eski `#sN` yönlendirmesi yok.
- Ana sayfa **raptiyeye göre**: panelde her duyurunun yanında 📌, en fazla 3 (sunucu da sınırı uygular).
  1 raptiye → o duyuru görsel/videosuyla; 2–3 raptiye → yalnız metin; raptiye yok → son 3 duyuru
  yalnız metin. Metin kartında medyası olan duyuru "Görsel/video arşivde" ile `duyurular.html#…`
  çapasına bağlanır. Altında "arşivde N duyuru daha" → `duyurular.html` (hepsi medyalı, en yeni başta).
  WhatsApp'taki sabitleme API'de görünmez; tek kaynak paneldeki raptiye.
  Veri: duyuru kaydında `"sabit": true` (yoksa false). Panel API: `PATCH ?id=&sabit=` (yetki = silme ile aynı).
- Tüm tasarım (yerleşim, kartlar, raptiye görünümü, arşiv, 3B model) `DESIGN.md` kurallarıyla ve
  **impeccable** skill'iyle.
- Kart: "18 Ekim 2026, 14:32" (EN "18 October 2026, 14:32", Europe/Istanbul) + metin birebir;
  WhatsApp biçimleri (*kalın* _italik_ ~çizili~ ```mono```, bağlantı, satır sonu) DOM düğümüyle.
- Medya site deposunda `images/duyurular/<sha256-16>.webp|mp4`. Video MP4 kalır.
  Bot görselleri sunucuda `sharp` ile WebP (yalnız bot rotası; panel/rapor yüklemeleri tarayıcıda kalır).
- Birleştirme: metinli (veya açıklamalı medyalı) mesaj yeni duyuru; açıklamasız medya 2 dk içinde
  önceki duyuruya eklenir, değilse kendi duyurusu.
- Webhook panel deposunda. Bot her duyuruya onay/hata yanıtı verir.
- Panelde "📢 Duyurular" sekmesi: **listele + 📌 raptiyele (en fazla 3) + sil** (duyuru atma yok).
  Silme medyayı da siler.
- Geçmiş: 18 Ekim 2026'dan bugüne, WhatsApp "Sohbeti dışa aktar (medya dahil)" ile bir kerelik içe
  aktarma; tarih/saat dışa aktarımdaki gibi birebir.
- 3B: 6. model **Diffusion** (gürültüden şekle çözülen noktalar), görsel tasarım impeccable skill'iyle.
- Discord'a gitmez.
- Akış A: başkan bugünkü gibi topluluğa atar, sonra mesajı uzun basıp bota **iletir**. Ban riskli
  gayriresmî dinleyici ve Oracle sunucusu elendi. Yeni duyurularda site saati = iletme anı (Cloud API
  `timestamp`); başkana "atınca hemen ilet" denir. Geçmiş duyurular dışa aktarımdan birebir saatle.
- Meta geliştirici hesabı ve uygulama `atilimyapayzeka@gmail.com` üzerine kurulur.
- Video sınırı 16 MB. Bot yanıtı: "✓ Alındı, 1–2 dakika içinde sitede: https://atilimai.org/duyurular.html#…"
  / hata nedeni.
- Kartta gönderen imzası **yok**: ne kişi adı ne topluluk adı; kart yalnız tarih/saat + metin + medya.

## Mimari
Başkan → topluluğa atar → bot numarasına iletir → Meta imzalı POST →
`panel/api/whatsapp` (HMAC doğrula → izinli numara → 200 dön → `after()` içinde: medya indir,
görsel→WebP, medyayı commit, sonra JSON'u sha korumalı commit (409'da yeniden birleştir, 4 deneme),
başkana yanıt). Site `content/duyurular.json`'u okur. Discord iş akışı yalnız `haberler.json`'da
tetiklendiği için etkilenmez.

### Veri sözleşmesi (`content/duyurular.json`, en yeni başta)
```json
{ "_aciklama": "Bot ve panel yazar; elle düzenleme gerekmez",
  "duyurular": [ { "id": "wamid.HBgM…", "capa": "d-9f2c1a7e", "mesajlar": ["wamid…"],
    "kaynak": "whatsapp", "zaman": "2026-10-18T14:32:00+03:00", "metin": "*Toplantı* yarın…",
    "medya": [ { "tur": "gorsel", "src": "images/duyurular/9f2c1a7e44b0d3a1.webp", "en": 1600, "boy": 1067 },
               { "tur": "video", "src": "images/duyurular/ab12cd34ef567890.mp4" } ] } ] }
```
Numara ve gönderen adı hiçbir zaman JSON'a, loga, depoya yazılmaz. İçe aktarılanlar `id: "imp-<hash>"`.

- İzinli numaradan iletilen duyuru doğrudan yayımlanır (onay adımı yok); silme panelden.

## Uygulama süreci (onaydan sonra)
1. Adım 0 kuralları → `CLAUDE.md` + `AGENTS.md`.
2. superpowers: bu plan → `docs/superpowers/specs/2026-11-10-duyurular-design.md` (commit),
   sonra `writing-plans` ile görev planı; yürütme subagent-driven (Sonnet), her görev Opus review.
3. Site UI ve Diffusion modeli **impeccable** skill'iyle; DESIGN.md / PRODUCT.md dışına çıkılmaz.
4. Dal: site `duyurular` (main'den), panel `duyurular` (main'den, scratchpad klonu).
5. Bitince security-audit + alan testleri + önizleme doğrulaması; PR'lar.
Açık karar kalmadı.

## Grilling sonucu (hepsi kabul)
Kimlik değişikliği ayrı ilk commit, eski `#sN` kırılır · öznitelik 7→8, gerekirse paketleme ·
tek JSON (büyüyünce yıla böl notu) · "✓ gelmezse 2 dk sonra yeniden ilet" kuralı · süresiz sistem
kullanıcı jetonu · aktarım betiği panelde, ada göre süzer, dry-run + `evet` · silme yalnız yayın
yetkilisine, paylaşılan medya korunur · düzeltme = sil + yeniden ilet · `duyurular.html` indekslenir +
sitemap · dallar `duyurular` (site main'den, panel main'den), PR'lar; panel yayını `npm run yayinla`
(giriş yoksa adımlar verilir) · arayüz TR/EN, metin çevrilmez, 4096 sınırı · imza yok.

## Adım 0 — depo kuralları (CLAUDE.md + AGENTS.md, ikisi birebir aynı)
- Alt ajanlar `model: sonnet` (Sonnet 5.5). Ana oturum (Opus 5.5) her çıktıyı review eder; yetersizse
  eksik notlarıyla aynı görevi yeniden Sonnet'e yollar.
- **Uyarı:** WhatsApp botu Meta **test numarasıyla** çalışıyor (5 alıcı sınırı, Meta kapatabilir).
  Bot susarsa önce buna ve token'ın süresine bak. Kalıcı numaraya geçiş yalnız ortam değişkeni.

## SITE deposu (`Atilim_AI_Web`)
1. **Kimlik yeniden adlandırma** (ayrı commit): `index.html` id'leri, `data-b`, `href`, CSS `#s0`,
   `#s1 .wrap` (alan, ~1602), çeviri anahtarları; `discord.md:51`, `PRODUCT.md`, `DESIGN.md`, `EKIP.md`.
   Doğrulama: `grep -rnE '#s[0-4]\b|nav\.s[0-4]|id="s[0-4]"'` → 0; menü tıklama.
2. **`#duyurular` bölümü** `#hakkimizda`'dan sonra + yeni `.gecis` bandı; menü bağlantısı.
   "3. Haftalık rapor" bloğunun kalıbı: yükleniyor / "Henüz duyuru yok." / yüklenemedi + Yeniden dene,
   `ZAMAN_ASIMI` 10 s, `GOSTER=3`, süzgeç (`temizHaber` eşi: `src` yalnız `images/duyurular/` ya da
   http(s), metin string). Çizici `duyuruYaz()`: textContent, `atilimai.tr()`, `overflow-wrap:anywhere`,
   `<img width height loading=lazy>`, `<video controls preload=none>`. EN çeviri anahtarları.
3. **`duyurular.html`**: `haberler.html` kalıbı (başlangıç bloğu, görünüm denetimi, menü, `bekliyor`,
   üç durum), `#d-…` çapasına kaydırma. Çizici kopyalanır, iki yerde "kopya" yorumu.
4. **Alan: Diffusion modeli** (impeccable skill'iyle tasarım): `difuzyonYap` → `yapici[2]`;
   `sinirX/sinirY`, `DOLGU`, `YALPA` girişleri; shader `a5`/`w5` (öznitelik sayısı 7→8 = WebGL1
   alt sınırı, ölç; aşarsa paketle); sabit `5`'ler `yapici.length`, `min(3,…)`/`p>=4` model sayısından.
5. Belgeler: `EKIP.md` yeni "Duyurular" bölümü + "Alan katmanı" (6 model), `PRODUCT.md`, `DESIGN.md`,
   `sitemap.xml` (+`duyurular.html`), Adım 0.

## PANEL deposu (`atilimai/Atilim_AI_Panel`, main'den dal)
1. `npm i sharp`; `src/config/site.ts`: `duyuruPath`, `duyuruMediaDir`, `canonicalUrl: https://atilimai.org`.
2. `src/lib/site/duyuru.ts`: tipler, doğrula/serileştir (`news.ts` kalıbı), saf birleştirme fonksiyonu
   + node testi.
3. `src/lib/site/duyuru-medya.ts`: sharp `rotate()`, 1600 px, webp q82→q70→1200 px, 1 MB hedef,
   2 MB tavan, EXIF yok; mp4 sihirli bayt (`ftyp`) + boyut sınırı; sha256-16 ad.
4. `src/app/api/whatsapp/route.ts` (panelde middleware yok, kendi korumasını yapar): GET doğrulama;
   POST ham gövde + `timingSafeEqual` HMAC (`WA_APP_SECRET`), `WA_IZINLI` dışı sessizce yok,
   mesaj kimliğiyle tekrar engeli, `maxDuration=60`, `after()`, medya sıralı işlenir, yanıt hatası
   yayını bozmaz, loglarda yalnız mesaj kimliği.
5. `src/app/api/site/duyuru/route.ts`: GET liste, DELETE (`requireMember` + yayın yetkisi);
   önce JSON, sonra başka kayıt kullanmıyorsa medya.
6. `src/components/apps/DuyuruApp.tsx` (📢) + `src/lib/apps.ts` + `registry.tsx`; `NewsApp.tsx` kalıbı.
7. `scripts/duyuru-aktar.mjs <klasör> --gonderen "<rehberdeki ad>"`: Android/iOS satır biçimleri, çok satır,
   ek işaretleri, sistem satırları, silinmiş mesaj, 18.10.2026 kesimi, birleştirme kuralı, kuru çalıştırma
   listesi (ilk/son tarih gösterilir) → `evet` yazınca commit.
8. Vercel ortamı: `WA_VERIFY_TOKEN WA_APP_SECRET WA_TOKEN(sistem kullanıcı jetonu, süresiz) WA_PHONE_ID
   WA_IZINLI`; panel `npm run yayinla` ile yayınlanır; Meta'da webhook `https://panel.atilimai.org/api/whatsapp`,
   `messages` aboneliği, başkanın numarası test alıcısı.

## Kullanıcıya verilecek el adımları
Dışa aktarma, Meta/bot kurulumu ve her manuel iş: ekran ekran, düğme adıyla, dosyanın nereye düştüğü,
bilgisayara nasıl atılacağı, hangi klasöre konacağı, tek kopyala-yapıştır komutu ve beklenen çıktıyla.

## Doğrulama
- Webhook: imzalı fixture ile curl → kötü imza 401, izinsiz numara yazmaz, metin commit, tekrar id
  ikinci commit yok; birleştirme testi. Canlı: metin, açıklamalı görsel, 2 dk içinde ikinci görsel,
  sınır üstü video; yanıtlar.
- Site (önizleme sunucusu): üç durum, XSS fixture (`<img onerror>`, `javascript:`, uzun kelime),
  TR/EN, koyu/açık, ≥1152 ve mobil; arşiv çapaları.
- Alan: EKIP.md'deki iki test (scissor tarama = 0, kırpılma = 0) altı bant için + 1152 px kapısı.
- security-audit: webhook ve silme rotaları. Son kod review (Opus).

## Riskler
Eşzamanlı yazma (409 → yeniden birleştir) · `after()` yarıda ölürse yanıt gelmez (başkan "✓ gelmezse
yeniden ilet") · test numarası/jeton · video depo büyümesi · yayın 1–2 dk gecikir · çalınan telefon =
herkese açık yayın (tek çare panelden silme) · düzeltme = sil + yeniden ilet.
