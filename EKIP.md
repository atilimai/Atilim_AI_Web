# EKIP.md — Atılım AI Topluluk Sitesi

Bu dosya, siteye katkı verecek herkes ve **her yapay zeka aracı** için yazıldı.
Amacı: dosyaları baştan sona taramadan doğru yere dokunabilmen. Kodun *ne*
yaptığı koddan okunur; burada *neden* öyle olduğu ve nereye dokunursan neyin
kırılacağı yazıyor.

**Yapay zeka aracıyla çalışıyorsan okuma sırası:**

1. Bu dosyanın "Site 60 saniyede", "Sayfa haritası", "Tuzaklar" başlıkları
   — `index.html`'e dokunacaksan "Alan katmanı" da
2. Görsel bir karar vereceksen `DESIGN.md`, ürün bağlamı gerekiyorsa
   `PRODUCT.md` — ikisi de depo kökünde
3. Dokunacağın sayfanın ilgili bölümü

`index.html`'in tamamını okutma: tek dosyada stil + içerik + betik var.
Aradığın yeri numarayla değil, arayarak bul:

| Ne arıyorsan | Nasıl bulacaksın |
|---|---|
| haber akışı | `grep -n "haberler.json" index.html` |
| 3B alan katmanı | `grep -n "6. Alan" index.html` |
| betiğin bölümleri | `grep -n "^/\* ===" -A2 index.html` |
| bir stil kuralı | `grep -n "^\.sinif-adi{" index.html` |

Bu dosyada bilerek satır numarası ve bölüm numarası yok: ikisi de her
düzenlemede kayıyor, belge de sessizce yalan söylemeye başlıyor. Buraya
numara ekleme.

---

## Site 60 saniyede

Statik bir tanıtım sitesi ve haber arşivi. Derleme adımı, paket yöneticisi ve
bağımlılık **yok**; dosyalar doğrudan GitHub Pages'ten sunuluyor. Üç içerik
sayfası var ve üçü de aynı veri dosyasını okuyor: `content/haberler.json`.
Dördüncü dosya `404.html` veri okumaz; Pages onu yalnızca eksik adreslerde sunar.

İçerik elle düzenlenmiyor — haberleri kulübün [yönetim
paneli](https://github.com/atilimai/Atilim_AI_Panel) bu depoya commit atarak
yayımlıyor.

## Sayfa haritası

### `index.html`

Tek dosyada stil + içerik + betik. Betik adlandırılmış bölümlere ayrılmış;
hepsini `grep -n "^/\* ===" -A2 index.html` ile listeleyebilirsin:

| Bölüm | Ne yapar |
|---|---|
| 1 · Kabuk | Nav durumu, mobil menü, aktif bölüm işareti |
| 2 · Belirme | Görünürlüğe göre beliren animasyonlar (`.reveal`) |
| **3 · Haftalık rapor** | **`content/haberler.json` buradan okunuyor** |
| 4 · Ölçümler ve modal | Sayaçlar, GitHub depo listesi modali, arka plan kaydırma kilidi |
| 5 · Etkinlik akordeonu | Etkinlik satırlarının açılıp kapanması ve gösterge işareti |
| **6 · Alan** | **Kaydırmayla değişen 3B model katmanı — ayrı `<script>`, dosyanın en büyük parçası** |

Haberle ilgili her iş "Haftalık rapor" bölümünde. **Akışın üç durumu var ve
üçü ayrı cümle söyler:** yükleniyor, veri okundu ama sayı yok, istek düştü.
Üçüncüsü *"Haftalık rapor şu an yüklenemedi."* der ve bir **Yeniden dene**
düğmesi verir — yerelde `file://` ile açtığında ya da bağlantın koptuğunda
göreceğin budur.

Bu ayrım şart, çünkü eskiden hata dalı sayfayı olduğu gibi bırakıyordu ve
statik biçimlendirme *"Henüz yayımlanmış bir sayı yok."* dediği için ağ hatası
boş arşiv gibi görünüyordu. Arşiv bugün gerçekten boş olduğundan bu doğruydu —
ama **ilk sayı yayımlandığı gün** bağlantısı kopan her ziyaretçiye site hiç
yayın yapılmadığını söyleyecekti. İki durumu bir daha birleştirme.

Ana sayfa sayının **tamamını değil ilk üç haberini** çiziyor (`GOSTER`
sabiti); gerisi sessizce düşmüyor, "kalan N haberi arşivde" satırıyla anılıp
arşive bırakılıyor. Panelin üst sınırı bir sayıda 25 haber, ve o sınırda
sınırsız akış telefonda sayfayı üç katına çıkarıyordu.

Eski notlarda geçen ama artık **olmayan** şeyler: ses sentezi, ses kontrolleri,
özel imleç ve mıknatıs düğmeler. Bunları arama; kod değil, tarih.

three.js'li parçacık alanı da kaldırıldı — ama yerine **ham WebGL ile yazılmış
yeni bir alan katmanı** geldi. Aşağıdaki "Alan katmanı" başlığına bak;
"kaldırılmış" diye silme.

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

### `404.html`

Pages'in eksik adresler için sunduğu sayfa. Gece dünyasında, `index.html`'in
belirteçleriyle; kendi kopyasını taşır, ortak stil dosyası yok.

**İçindeki her yol kökten mutlaktır** (`/Atilim_AI_Web/...`) ve bu bilinçli:
Pages bu dosyayı eksik olan *her* yol için sunuyor, `/a/b/c` adresinde göreli
bir `haberler.html` `/a/b/haberler.html`'e çözülüp kırılıyordu. **Depo adı
değişirse bu dosyadaki bütün yolları güncelle** — hiçbiri göreli değil.

Denenen adresi `location.pathname`'den okuyup `textContent` ile basar; betik
yoksa o satır `hidden` kalır, boş bir etiket göstermez.

## Alan katmanı

`index.html`'in içinde, ayrı bir `<script>` içinde duran ham WebGL katmanı.
`grep -n "6. Alan" index.html` seni oraya götürür. **Kütüphane yok** — three.js
bilerek kaldırıldı, yerine gölgelendirici ve model üreticileri elle yazıldı.

Ne yapar: kaydırdıkça beş model arasında dönüşür — monogram, sinir ağı, dikkat
matrisi, belirteç akışı, gradyan inişi. İki hali var: okuma sütununun sağındaki
bölgede duran küçük **mercek**, bölümler arasında ekranın ortasına gelip büyüyen
**levha**. Levha ekranı kaplamaz; en çok 800 × 500 px'dir.

Neden bu kadar dikkat isteyen bir şey: **hiçbir koşulda metnin üstüne
düşmemesi** gerekiyor. Bu opasiteyle değil geometriyle sağlanıyor — sürücü
yalnızca `gl.scissor` dikdörtgeninin içine boyayabiliyor, o dikdörtgen de ya boş
alet rayı ya da içinde metin olmayan bölüm arası bant oluyor.

**Kırmadan dokunmak için bilmen gerekenler:**

- **Yığın düzeni.** Tuval `z-index:0`'da ve konumlandırılmış olduğu için normal
  akıştaki metnin *üstüne* boyar; bu yüzden `main,footer{position:relative;
  z-index:1}` kuralı var. Bu seçiciyi **genişletme**. Bir kez `nav, .modal,
  .atla` da eklenmişti ve üçünün kendi `position`/`z-index` değerlerini ezip
  sticky başlığı, modali ve atlama bağlantısını bozmuştu — masaüstünde hiç
  görünmeden.
- **Geçiş bantları.** Bölümler arasındaki boş `.gecis` div'leri süs değil;
  levhanın açılacağı, içinde metin bulunmayan alanı onlar tanımlıyor. Silersen
  levha hali tamamen kaybolur. İçlerine metin koyma — bir başlık, bir açıklama,
  hiçbir şey. Yükseklikleri üç yerde kapanıyor: `no-alan`, azaltılmış hareket ve
  1152 px altı.
- **Sığdırma izdüşüm uzayında yapılır.** Perspektif böleni noktadan noktaya
  değiştiği için model uzayında hesaplanan sınır yanıltır ve eğik modeller
  (gradyan inişi) kırpılır. `ortala()` bunu her noktanın izdüşümünden, yalpalama
  aralığını tarayarak ölçüyor. Formülü basitleştirmeye kalkma.
- **1152 px altında alan katmanı hiç yok.** Ne mercek, ne levha: bir medya
  sorgusu tuvali gizliyor, `.gecis` bantları `--sp-sec`'e kapanıyor ve çizim
  döngüsünde `EN < 1152` guard'ı var. Döngü kare istemeye devam ettiği için
  pencereyi genişletince alan kendiliğinden geri gelir; yeniden yükleme
  gerekmiyor.

  Eskiden telefonda levha çalışıyordu ve bantlar `min(72vh,540px)` kalıyordu:
  dördü toplam ~1.780 px boş kaydırma ekliyor, arkasında da 7.500 parçacık
  dönüyordu. Ölçüldü — 390 px'de sayfa ~7.100 px'den 5.339 px'e indi. Kampüs
  Discord bağlantısından gelen cihaz sınıfı bilgi taşımayan bir katman için pil
  ve ısı ödemesin. **Bu sınırı gevşetirsen o bedeli geri getirirsin.**
- **WebGL yoksa** gövdeye `no-alan` eklenir, tuval gizlenir, bantlar kapanır ve
  sayfa alan katmanı hiç yokmuş gibi görünür. `prefers-reduced-motion` açıksa
  döngü hiç başlamaz, tek durağan kare çizilir.
- **İçerik taşıyan hiçbir kap merceğin bölgesine girmemeli.** 1152 px üstünde
  `main .wrap` *ve* `footer .wrap` aynı sağ payı alıyor. `nav` bilerek dışarıda:
  o krom, hem de dikey olarak merceğin üstünde duruyor. Footer'a bu pay
  verilmeden önce kapanış düğmesi 1920 px'de merceğin dikdörtgeninin içine
  düşüyordu, alt bilgi de gövde metninden ~600 px sağda hizasız duruyordu.
  Sayfaya tam genişlikte yeni bir içerik kabı eklersen aynı tuzağa düşersin.
- **Değişiklik yaptıysan kırpılma testini koştur:** modeli her iki halde çizip
  tuvali geri oku, scissor dikdörtgeninin dış 3 pikselinde yanan piksel say.
  Sıfırdan büyük her sonuç, modelin kesildiği anlamına gelir.

Ayrıntılı gerekçeler ve ölçülmüş kanıtlar `DESIGN.md` → Components → The field.

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
  birkaç mesaj halinde gönderilir.
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
  protokolünde bu engellenir. Ana sayfa *"Haftalık rapor şu an yüklenemedi."*
  der, okuma sayfaları kendi hata kartını gösterir. Yerel sunucu kullan.
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
- **Logo varlıkları türetilmiştir ve zincir beş dosya.** `images/ai_s.png`
  kaynaktır. Ondan üretilenler: `favicon.png` ve `images/ai_mark.png` (renkler
  ters çevrilip siyah atılarak), `favicon.svg` ve `apple-touch-icon.png` (A
  işaretinin geometrisi elle çizilerek), `images/og.jpg` (paylaşım kartı,
  `ai_mark.png`'yi kullanıyor). **Kaynağı değiştirirsen beşini de yeniden
  üret**, yoksa sekme logosu, nav işareti, telefon simgesi ve paylaşım kartı
  kaynaktan ayrı düşer.

  `favicon.svg` ile `apple-touch-icon.png` kaynağın birebir küçültülmüşü
  *değil*: kaynaktaki saç çizgisi 16 px'te kayboluyor, o yüzden çizgi
  kalınlaştırıldı ve sağdaki ince "i" dilimi elendi. Geometri iki dosyada da
  aynı (32'lik kutuda `M25 5.5 L7 25.5 L17 25.5` ve `M25 5.5 L25 22.6`,
  çizgi 2.2); birini değiştirirsen diğerini de değiştir.

  `images/og.jpg` tarayıcıda `<canvas>` ile üretiliyor — makinede
  ImageMagick/PIL yok, `sips` de birleştirme yapamıyor. Kartın metni
  değişirse görseli yeniden üretmek gerekir; metin JPEG'e gömülü.
  **Yazı tiplerini `document.fonts.load()`'a metinle birlikte geçir:** Google
  Fonts `latin-ext` alt kümesini yalnızca ihtiyaç duyulunca indiriyor, boş
  çağrıda `ğ`/`ı`/`ş` inmiyor ve canvas o harflerde yedek yazı tipine düşüyor.

- **Paylaşım kartı yalnızca yayımlandıktan sonra görünür.** `og:image`
  `https://atilimai.github.io/...` adresini gösteriyor; kazıyıcılar oradan
  çekiyor, yereldeki dosyadan değil. Discord daha önce paylaşılmış bir
  bağlantının önizlemesini birkaç gün önbellekte tutabilir.
- **Araç klasörleri.** `.serena/`, `.playwright-mcp/` ve `.impeccable/` üçü de
  `.gitignore`'da. `.impeccable/` tasarım sistemi sidecar'ını ve kritik arşivini
  tutar; yerel araç durumudur, depoya girmemeli.
- **Henüz hiçbir bülten yayımlanmadı ve arşiv artık boş.** `content/haberler.json`
  9 Eylül 2026'da temizlendi: `sayilar` boş bir dizi. `index.html`'deki üç örnek
  haber satırı da kaldırıldı; yerinde betiğin bastığı boş durum cümlesi duruyor.
  Metin yazarken siteye yayımlama geçmişi atfetme. İlk gerçek sayı panelden
  gelecek; `content/.son-gonderilen` **14** olduğu için Discord'a yalnızca
  14'ten büyük numaralı bir sayı gider.
- **Dokunma hedefi 44 px, satır sonu `overflow-wrap:anywhere`.** İkisi de
  ölçülerek getirildi: panelin izin verdiği 200 karakterlik bölünmez bir başlık
  okuma sayfalarında binlerce piksel yatay taşma yapıyordu. Panelden **ya da
  GitHub API'sinden** veri basan yeni bir metin öğesi eklersen `overflow-wrap`
  vermeyi unutma — ızgara ve flex çocuklarına `min-width:0` da gerekiyor, yoksa
  kural yazsan bile öğe içeriğinin altına inemez.
- **Buluşma saati "17.30" doğrulanmış değil.** Yönetim kurulu onaylayana kadar
  yer tutucu. `[ADET]`'lerin aksine kendini yer tutucu olarak *ilan etmiyor*:
  ziyaretçi kesin bir olgu okuyor, yanlışsa öğrenci yanlış saatte gelir.
  `index.html`'de üç yerde görünüyor — kahraman satırı, etkinlikler bölümünün
  girişi, footer'ın kapanış satırı. `grep -n "17.30" index.html` dördünü
  listeler; dördüncüsü kahramanın üstündeki uyarı yorumudur. **Üçünü birlikte
  değiştir, yorumu da güncelle ya da kaldır.**
- **Etkinlik listesi haftalık buluşma değil.** Haftalık buluşma her perşembe,
  tarih takibi gerektirmiyor. Listedeki tarihli satırlar ondan ayrı, hafta
  sonuna denk gelen özel etkinlikler. Bölümün girişi bu ayrımı açıkça söylüyor;
  silme. Söylenmediğinde sayfa üç yerde "her perşembe" derken dört cumartesi
  tarihi listeliyor ve takvime bakan öğrenci siteyi olgusal bir hatada
  yakalıyor.
- **Bölüm başlıklarının üstüne etiket koyma.** Dört tanesi vardı (mono 12 px,
  büyük harf, kehribar) ve kaldırıldı: `DESIGN.md`'nin kod yazılmadan önce isim
  vererek reddettiği kalıbın kendisiydi, ayrıca kategori etiketini eylem
  rengiyle basmak İki Kaynak Kuralı'nı kırıyordu. Başlıklar kendi ağırlığını
  taşıyor, bölüm adları menüde zaten var.
- **API'den gelen sayıyı biçimlendirmeye gömme.** Depo modalindeki dil, yıldız,
  çatal ve güncelleme tarihi `hidden` geliyor ve yalnızca yanıt ulaşınca
  açılıyor. Eskiden değerler HTML'in içindeydi; kimliksiz GitHub çağrısı saatte
  60 ile sınırlı ve kampüs ağı tek IP paylaştığı için istek sessizce düştüğünde
  fosil sayılar canlı veri gibi ekranda kalıyordu. İstek başarısız olursa tek
  satırlık dürüst bir not basılıyor.
- **Açılır bir satıra durağan halde gösterge ver.** Etkinlik satırları ve
  ölçüm satırları yalnızca `:hover` opaklığıyla işaretliydi — imleç gelene
  kadar görünmez, dokunmatikte hiç görünmez. Etkinliklerin açıklamaları,
  içindeki "önkoşul yok, laptop yeterli" cümlesi dahil, kimsenin göremediği bir
  tetiğin arkasında kalıyordu. Şimdi çizilmiş bir chevron üç hali de söylüyor,
  ve **betik yoksa gizleniyor**: yapılamayacak bir etkileşimi haber vermesin.
- **Azaltılmış hareket iptalinin seçicisi, geçişi kuran kuralla aynı
  özgüllükte olmalı.** Akordeonun kapalı hali `.js` kapısının arkasına
  taşındığında kuran seçici `.js .tl .detay` (0,3,0) oldu, iptal ise
  `.tl .detay` (0,2,0) kaldı — `prefers-reduced-motion` kaynakta doğru
  görünürken sessizce çalışmayı bıraktı. Bir kurala kapı sınıfı eklersen
  azaltılmış hareket bloğuna da ekle.

## Kilitli kararlar

- **Bağımlılık yok.** Çatı, paket yöneticisi, derleme adımı eklenmeyecek ve
  CDN'den betik çekilmeyecek. Site bu sadelikte olduğu için Pages'te bedavaya
  ve anında yayınlanıyor.
- **İçerik panelden gelir.** JSON'u elle düzenlemek son çare; doğrulama ve
  sorumluluk kaydı panel tarafında.
- **Tam metin düz metindir.** HTML kabul etmiyoruz; panelden ham HTML yazma
  seçeneği bilerek elendi.
- **Discord her sayıyı bir kez gönderir.** Düzeltmeler sessizdir.
