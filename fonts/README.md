# Yazı tipleri

Site yazı tiplerini Google Fonts'tan çekmiyor; bu klasörden sunuyor. Üç
ailenin beşi dosya, hepsi SIL Open Font License 1.1 altında. Telif satırı ve
lisans adresi her dosyanın `name` tablosunda duruyor.

| Dosya | Aile | İçerik | Kaynak |
|---|---|---|---|
| `newsreader.woff2` | Newsreader, düz | değişken: `wght` 300–400, `opsz` 6–72 | Newsreader Project Authors |
| `newsreader-italik.woff2` | Newsreader, italik | değişken: `opsz` 36–72, `wght` 300 sabit | Newsreader Project Authors |
| `public-sans.woff2` | Public Sans | değişken: `wght` 400–500 | Public Sans Project Authors (USWDS) |
| `plex-mono-400.woff2` | IBM Plex Mono 400 | statik | IBM Corp. |
| `plex-mono-500.woff2` | IBM Plex Mono 500 | statik | IBM Corp. |

**Nasıl üretildi (11 Ekim 2026).** Google Fonts API'sinin `text=` parametresiyle,
yalnızca şu karakterleri taşıyan tek dosyalar istendi: Temel Latin, Latin-1 Ek,
Latin Genişletilmiş-A (Türkçe `ı İ ş Ş ğ Ğ` burada), `Ș ș Ț ț`, tipografik
tırnak, tire ve noktalama, `€ ₺ ™ − ≈ ≠ ≤ ≥` ve `← ↑ → ↓`. Google iki alt
kümeye (latin + latin-ext) bölüyordu ve Türkçe sayfa ikisini birden
indiriyordu; tek dosya bunu kaldırdı. Ardından fontTools `instancer` ile
değişken eksenler sayfaların kullandığı aralığa daraltıldı.

Toplam ~430 KB'tan ~220 KB'a indi (ana sayfa); okuma sayfaları ~160 KB yükler,
çünkü italik orada hiç çizilmiyor ve tarayıcı onu indirmiyor.

**Plex Mono'ya dokunulmadı.** IBM Plex'in lisansı "Plex" adını ayrılmış ad
olarak tutuyor; değiştirilmiş bir sürüm o adla dağıtılamaz. Bu iki dosya
Google'ın `text=` çıktısının kendisi, eksen ya da glif işlemi yapılmadı.

**Kümede olmayan bir karakter** (ör. Yunan harfi, Vietnamca vurgulu harf)
panelden gelirse o tek glif yedek yazı tipinden (Georgia / sistem) çizilir;
metin kaybolmaz. Kümeyi genişletmen gerekirse aynı yolu izle ve
`DESIGN.md` → Typography'deki notu güncelle.
