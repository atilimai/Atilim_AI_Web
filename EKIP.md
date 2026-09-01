# EKIP.md — Atılım AI Topluluk Sitesi

Bu dosya, siteye katkı verecek herkes ve **her yapay zekâ aracı** için yazıldı.
Amacı: dosyaları baştan sona taramadan doğru yere dokunabilmen. Kodun *ne*
yaptığı koddan okunur; burada *neden* öyle olduğu ve nereye dokunursan neyin
kırılacağı yazıyor.

**Yapay zekâ aracıyla çalışıyorsan okuma sırası:**

1. Bu dosyanın "Site 60 saniyede", "Sayfa haritası", "Tuzaklar" başlıkları
2. Görsel bir karar vereceksen `DESIGN.md`, ürün bağlamı gerekiyorsa
   `PRODUCT.md` — ikisi de depo kökünde
3. Dokunacağın sayfanın ilgili bölümü

`index.html`'in tamamını okutma: tek dosyada stil + içerik + betik var.
Aradığın yeri numarayla değil, arayarak bul:

| Ne arıyorsan | Nasıl bulacaksın |
|---|---|
| haber akışı | `grep -n "haberler.json" index.html` |
| betiğin bölümleri | `grep -n "^/\* ===" -A2 index.html` |
| bir stil kuralı | `grep -n "^\.sinif-adi{" index.html` |

Bu dosyada bilerek satır numarası ve bölüm numarası yok: ikisi de her
düzenlemede kayıyor, belge de sessizce yalan söylemeye başlıyor. Buraya
numara ekleme.

---

## Site 60 saniyede

Statik bir tanıtım sitesi ve haber arşivi. Derleme adımı, paket yöneticisi ve
bağımlılık **yok**; dosyalar doğrudan GitHub Pages'ten sunuluyor. Üç sayfa var
ve üçü de aynı veri dosyasını okuyor: `content/haberler.json`.

İçerik elle düzenlenmiyor — haberleri kulübün [yönetim
paneli](https://github.com/atilimai/Atilim_AI_Panel) bu depoya commit atarak
yayımlıyor.

## Sayfa haritası

### `index.html`

Tek dosyada stil + içerik + betik. Betik adlandırılmış bölümlere ayrılmış;
hepsini `grep -n "^/\* ===" -A2 index.html` ile listeleyebilirsin:

| Bölüm | Ne yapar |
|---|---|
| Kabuk | Nav durumu, mobil menü, aktif bölüm işareti |
| Belirme | Görünürlüğe göre beliren animasyonlar (`.reveal`) |
| **Haftalık rapor** | **`content/haberler.json` buradan okunuyor** |
| Ölçümler ve modal | Sayaçlar ve GitHub depo listesi modali |
| Etkinlik akordeonu | Etkinlik satırlarının açılıp kapanması |

Haberle ilgili her iş "Haftalık rapor" bölümünde. Fetch başarısız olursa
sayfadaki hazır içerik olduğu gibi kalır — yerelde `file://` ile açtığında
olan budur.

Ana sayfa sayının **tamamını değil ilk üç haberini** çiziyor (`GOSTER`
sabiti); gerisi sessizce düşmüyor, "kalan N haberi arşivde" satırıyla anılıp
arşive bırakılıyor. Panelin üst sınırı bir sayıda 25 haber, ve o sınırda
sınırsız akış telefonda sayfayı üç katına çıkarıyordu.

Eski notlarda geçen ama artık **olmayan** şeyler: ses sentezi, ses kontrolleri,
özel imleç ve mıknatıs düğmeler, ve arka plandaki 3B parçacık alanı (three.js
ile birlikte kaldırıldı). Bunları arama; kod değil, tarih.

### `haberler.html`

Bütün sayıların arşivi. Her haber bir kart; **tam metni olan kartlar tıklanınca
yerinde açılır**. İki sınıf var, karıştırma: `.acilir` kartın *açılabilir*
olduğunu işaretler (tam metni olmayan kartta hiç yoktur), `.acik` ise o an
*açık* olduğunu. Açılan bölümün kendisi `.tam`.

Tek bir tıklama dinleyicisi kartın üstünde durur ve bağlantı tıklamalarını
dışarıda bırakır — yoksa kaynağı yeni sekmede açarken kart da açılıp
kapanıyordu.

### `haber.html`

Tek haberin ayrıntı sayfası. Adres: `haber.html?sayi=12&sira=0` — sayı numarası
ve o sayının içindeki sıra. Aynı JSON'u okur, ilgili haberi bulur, `icerik`
alanını paragraflara bölerek basar.

**Beş ayrı durum ayrı ayrı karşılanır** ve her biri gerçek bir `<h1>` ve kendi
`document.title`'ı ile çizilir; sayfa hiçbir durumda boş ya da başlıksız
kalmaz: adres eksik · adres bozuk · haber bulunamadı · tam metni yok ·
yüklenemedi. Hepsini `grep -n 'durum("' haber.html` ile görürsün.

"Adres eksik" ile "adres bozuk" neden ayrı: `Number(null)` sıfır olduğu için
hiç parametresiz bir adres sayısal testi geçiyor ve kullanıcıya "sayı
düzenlenmiş olabilir" deniyordu. Parametrenin varlığı artık sayısal testten
**önce** sorgulanıyor.

Stil `haberler.html`'den devralındı; yazı gövdesi için birkaç kural eklendi.

## Veri sözleşmesi

`content/haberler.json`:

```json
{
  "_aciklama": "elle düzenleyenler için not; kod okumaz",
  "sayilar": [
    {
      "sayi": 13,
      "tarih": "2026-08-26",
      "haberler": [
        {
          "etiket": "Model",
          "tarih": "24 Ağu",
          "baslik": "…",
          "ozet": "kartta görünen kısa metin",
          "icerik": "tam metin; boş satır paragraf ayırır, HTML değil",
          "link": "https://… (dış kaynak, boş olabilir)",
          "gorsel": "https://… (boş olabilir)",
          "kaynak": "Kaynak adı (boş olabilir)"
        }
      ]
    }
  ]
}
```

Kurallar:

- **Sayılar en yeniden eskiye sıralanır.** Ana sayfa `sayilar[0]`'ın ilk üç
  haberini gösterir, arşiv hepsini; Discord botu `sayilar[0]`'ı bütünüyle
  gönderir. Yeni sayı dizinin **başına** eklenir.
- `icerik` **düz metindir.** Boş satır paragrafları ayırır, tek satır sonu
  paragraf içinde kalır. Sayfalar metni `textContent` ile bastığı için
  içindeki etiketler yazıya dönüşür, çalışmaz.
- `icerik` doluysa: arşivde kart açılır, ana sayfada "Devamını oku" çıkar,
  başlık ayrıntı sayfasına bağlanır. Boşsa eski davranış sürer — başlık
  doğrudan `link`'e gider.
- Boş bırakılan alanlar hiç çizilmez (kaynak şeridi, görsel, düğmeler).

Bu dosyayı elle düzenlemek yerine panelden yayımla: panel doğrulama yapıyor
(boş sayı, tekrarlı numara, bozuk tarih, `http(s)` olmayan bağlantı reddedilir)
ve alan sırasını koruyarak yazıyor.

## Discord yayını

`scripts/discord-gonder.js`, `.github/workflows/haftalik-rapor.yml` tarafından
**yalnızca `content/haberler.json` değiştiğinde** çalıştırılır.

- En yeni sayıyı okur, `content/.son-gonderilen` dosyasına bakar, o sayı daha
  önce gönderildiyse hiçbir şey yapmaz. Yani aynı sayıdaki düzeltme siteye
  yansır, Discord'a gitmez.
- Her haber ayrı bir embed olur. Discord bir mesajda en fazla 10 embed ve
  toplam 6000 karakter kabul ettiği için embed'ler gruplanıp arka arkaya
  birkaç mesaj hâlinde gönderilir.
- Gönderimden sonra `.son-gonderilen` dosyasını `main`'e geri push eder
  (commit mesajında `[skip ci]` var, kendini tetiklemez).
- Webhook adresi `DISCORD_WEBHOOK` secret'ından gelir. **Asla koda yazma** —
  depoya girdiği anda adresi gören herkes kanala mesaj atabilir.

Yerelde denemek:

```bash
KURU_CALISMA=1 node scripts/discord-gonder.js          # göndermez, yazdırır
DISCORD_WEBHOOK="https://discord.com/api/webhooks/…" \
  node scripts/discord-gonder.js                       # gerçekten gönderir
```

## Yayınlama

`main`'e push → GitHub Pages otomatik yayınlar. Derleme yok, genelde bir dakika.
Yayının bittiğini görmek için sayfayı sert yenile (Ctrl+Shift+R); tarayıcı eski
HTML'i önbellekte tutabiliyor.

## Tuzaklar

- **`file://` ile açma.** Sayfalar haberleri `fetch` ile okur, dosya
  protokolünde bu engellenir; sayfa "haberler yüklenemedi" der. Yerel sunucu
  kullan.
- **`innerHTML` kullanma.** Panelden gelen metin kullanıcı girdisidir; her şey
  `textContent` ile basılıyor ve bu bilinçli. Tek istisna, sayfaların kendi
  oluşturduğu DOM düğümleridir.
- **Bağlantı alanları `href`/`src` niteliğine giriyor.** Panel `http(s)` dışını
  reddediyor; burada da varsayma, doğrulanmış veriye güven.
- **Üç sayfa aynı JSON'u okuyor.** Alan adı değiştirirsen `index.html`
  ("Haftalık rapor" bölümü), `haberler.html`, `haber.html` ve
  `scripts/discord-gonder.js` — dördü birden güncellenmeli. Panel tarafındaki
  sözleşme de (`src/lib/site/news.ts`) aynı adları kullanıyor.
- **Ayrıntı sayfası sıraya göre çalışıyor** (`?sira=0`). Bir sayının haber
  sırası değişirse eski bağlantılar başka habere düşer. Kalıcı bağlantı
  gerekiyorsa haberlere kimlik alanı eklemek gerekir — bugün yok.
- **Panelin önizlemesi bu depodaki `haberler.html`'i çekiyor.** Sayfanın kendi
  `fetch("content/haberler.json")` çağrısını taslak veriye yönlendirerek
  çiziyor. Yani o çağrının biçimini değiştirirsen panelin önizlemesi bozulur;
  buna dokunacaksan panel tarafında `src/lib/site/preview.ts` dosyasına da bak.
- **Dış betik yok.** Site hiçbir CDN'den kod çekmiyor; tek dış kaynak Google
  Fonts stil dosyası. Bir kütüphaneye ihtiyacın olduğunu düşünüyorsan önce
  "Kilitli kararlar"a bak.
- **Logo varlıkları türetilmiştir.** `images/ai_s.png` kaynaktır; `favicon.png`
  ve `images/ai_mark.png` ondan üretildi — renkler ters çevrilip siyah
  atılarak. Kaynağı değiştirirsen ikisini de yeniden üretmen gerekir, yoksa
  sekme logosu ile nav işareti kaynaktan ayrı düşer.
- **Araç klasörleri.** `.serena/` ve `.playwright-mcp/` `.gitignore`'da (şu an
  diskte yoklar). `.impeccable/` — tasarım sistemi sidecar'ı ve kritik arşivi —
  `.gitignore`'da değil, `git status`'te takip edilmeyen olarak görünür.

## Kilitli kararlar

- **Bağımlılık yok.** Çatı, paket yöneticisi, derleme adımı eklenmeyecek ve
  CDN'den betik çekilmeyecek. Site bu sadelikte olduğu için Pages'te bedavaya
  ve anında yayınlanıyor.
- **İçerik panelden gelir.** JSON'u elle düzenlemek son çare; doğrulama ve
  sorumluluk kaydı panel tarafında.
- **Tam metin düz metindir.** HTML kabul etmiyoruz; panelden ham HTML yazma
  seçeneği bilerek elendi.
- **Discord her sayıyı bir kez gönderir.** Düzeltmeler sessizdir.
