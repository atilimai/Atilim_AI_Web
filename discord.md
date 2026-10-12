# discord.md — Siteden kaldırılan Discord parçaları

12 Ekim 2026'da ekip kararıyla Discord sitenin görünen her yerinden kaldırıldı.
"Topluluğa katıl" artık [`katil.html`](katil.html) sayfasına gidiyor; orada dört
eşit bağlantı var: WhatsApp grubu, Instagram, LinkedIn, e-posta.

Bu dosya, gerekirse geri ekleyebilmen için **kaldırılan her şeyin birebir
kopyasını** tutuyor. Yerleri satır numarasıyla değil, arayarak bul (EKIP.md'nin
kuralı: numaralar her düzenlemede kayıyor).

- **Davet adresi:** `https://discord.gg/uUzsA7uDzU`
- **Bot dokunulmadan çalışıyor.** `scripts/discord-gonder.js`,
  `.github/workflows/haftalik-rapor.yml`, `content/.son-gonderilen` ve
  `DISCORD_WEBHOOK` secret'ı değişmedi; her yeni sayı yine bir kez Discord'a
  gönderiliyor. Değişen yalnızca sitenin bundan söz etmemesi.

---

## 1. `index.html` — menüdeki "Topluluğa katıl" (`.kat`)

Bul: `grep -n 'class="kat"' index.html`

Kaldırılan:

```html
<a class="kat" href="https://discord.gg/uUzsA7uDzU" target="_blank" rel="noopener">Topluluğa katıl<svg class="ok" aria-hidden="true"><use href="#i-dis"/></svg><span class="gizli"> (yeni sekmede açılır)</span></a>
```

Şu anki:

```html
<a class="kat" href="katil.html">Topluluğa katıl<svg class="ok" aria-hidden="true"><use href="#i-ileri"/></svg></a>
```

## 2. `index.html` — kahramandaki birincil düğme (`.btn.p`)

Bul: `grep -n 'class="btn p"' index.html`

Kaldırılan:

```html
<a class="btn p" href="https://discord.gg/uUzsA7uDzU" target="_blank" rel="noopener">Topluluğa katıl<svg class="ok" aria-hidden="true"><use href="#i-dis"/></svg><span class="gizli"> (yeni sekmede açılır)</span></a>
```

Şu anki:

```html
<a class="btn p" href="katil.html">Topluluğa katıl<svg class="ok" aria-hidden="true"><use href="#i-ileri"/></svg></a>
```

## 3. `index.html` — haftalık rapor bölümünün girişi (`#s3 .giris`)

Bul: `grep -n 'Haftalık rapor her salı' index.html`

Kaldırılan hali (ikinci cümle silindi):

```html
<p class="giris reveal">Haftalık rapor her salı yayımlanır ve önceki salıdan o güne kadarki yapay zeka haberlerini derler. Her sayı burada çıkar, aynısı otomatik olarak Discord kanalına da gider.</p>
```

Şu anki:

```html
<p class="giris reveal">Haftalık rapor her salı yayımlanır ve önceki salıdan o güne kadarki yapay zeka haberlerini derler.</p>
```

## 4. Alt bilgideki "Discord" bağlantısı — dört sayfa

Dördünde de "Discord" bağlantısının yerine `Topluluğa katıl` geldi. Bul:
`grep -n 'Topluluğa katıl</a>' index.html haberler.html haber.html 404.html`

`index.html`, `haberler.html`, `haber.html` — kaldırılan:

```html
<a href="https://discord.gg/uUzsA7uDzU" target="_blank" rel="noopener">Discord<svg class="ok" aria-hidden="true"><use href="#i-dis"/></svg><span class="gizli"> (yeni sekmede açılır)</span></a>
```

yerine:

```html
<a href="katil.html">Topluluğa katıl</a>
```

`404.html` — aynı kaldırılan satır; yerine gelen yol kökten mutlak (404 her
eksik adreste sunulduğu için, bkz. EKIP.md):

```html
<a href="/Atilim_AI_Web/katil.html">Topluluğa katıl</a>
```

Bağlantıların sırası: `index.html`'de Haberler · Topluluğa katıl · GitHub;
`haberler.html`'de Ana sayfa · Topluluğa katıl; `haber.html`'de Haberler ·
Ana sayfa · Topluluğa katıl; `404.html`'de Haberler · Topluluğa katıl · GitHub.
Discord geri gelirse eski yeri, "Topluluğa katıl"ın şu anki yeriydi.

## 5. `haberler.html` — betik kapalıyken gösterilen not (`<noscript>`)

Bul: `grep -n 'arşivi tarayıcıda hazırlıyor' haberler.html`

Kaldırılan:

```html
<p class="durum">Bu sayfa arşivi tarayıcıda hazırlıyor ve bunun için
  JavaScript gerekiyor. JavaScript'i tarayıcı ayarlarından açabilir ya da
  haftalık raporu Discord kanalımızdan takip edebilirsin.</p>
<p class="durum-eylem">
  <a class="oku" href="https://discord.gg/uUzsA7uDzU" target="_blank" rel="noopener">Discord'a git<svg class="ok" aria-hidden="true"><use href="#i-dis"/></svg><span class="gizli"> (yeni sekmede açılır)</span></a>
  <a class="oku" href="index.html"><svg class="ok bas" aria-hidden="true"><use href="#i-geri"/></svg>Ana sayfa</a>
</p>
```

Şu anki: cümle *"…JavaScript'i tarayıcı ayarlarından açabilirsin."* diye
bitiyor, eylem satırında yalnızca "Ana sayfa" kaldı.

## 6. `haber.html` — betik kapalıyken gösterilen not (`.betiksiz`)

Bul: `grep -n 'yazının metnini tarayıcıda' haber.html`

Kaldırılan:

```html
<p class="durum">Bu sayfa yazının metnini tarayıcıda hazırlıyor ve bunun
  için JavaScript gerekiyor. JavaScript'i tarayıcı ayarlarından açabilir
  ya da haftalık raporu Discord kanalımızdan takip edebilirsin.</p>
<p class="durum-eylem">
  <a class="oku" href="https://discord.gg/uUzsA7uDzU" target="_blank" rel="noopener">Discord'a git<svg class="ok" aria-hidden="true"><use href="#i-dis"/></svg><span class="gizli"> (yeni sekmede açılır)</span></a>
  <a class="oku" href="index.html"><svg class="ok bas" aria-hidden="true"><use href="#i-geri"/></svg>Ana sayfa</a>
</p>
```

Şu anki: aynı kısaltma, eylem satırında yalnızca "Ana sayfa".

## 7. `index.html` — yeniden yazılan iki stil yorumu

Görünmüyorlar ama ziyaretçiyi "Discord'dan gelen biri" olarak anlatıyorlardı.

- `.foot-posta` notu. Eskisi: *"Discord'da olmayan biri (sponsor, baska
  topluluk, hoca) icin tek kapi."* Şimdi: *"Topluluk kanallarında olmayan biri
  … için doğrudan adres."*
- 1152px altı bant notu. Eskisi: *"Kampüs Discord bağlantısından gelen cihaz
  sınıfı bu bedeli ödemesin."* Şimdi: *"Kampüs kanallarındaki bir bağlantıdan
  gelen cihaz sınıfı…"*

## Bilerek bırakılanlar

Şu geliştirici yorumları Discord'u anıyor ve **yerinde kaldı**: sitede
görünmüyorlar, hâlâ doğrular, ve silinirlerse kalıcı `haber.html?sayi=&sira=`
adres şemasının neden değiştirilemeyeceği unutulur (eski Discord mesajları o
adreslere bağlanıyor). Bul: `grep -n -i discord *.html`

- `index.html` — haftalık rapor betiğinin başı ("site ve Discord botu aynı…")
  ve `?sira=` notu ("Discord'daki eski bağlantılar ona dayanıyor").
- `haberler.html` — betik başı, tek adreslik satırı görsele çeviren kuralın
  kopyaları notu (`TEK_ADRES`), `?sira=` notu.
- `haber.html` — adres şeması notu, aynı `TEK_ADRES` kopyaları notu, yükleme
  hâli notu ("Discord'daki bağlantıdan telefonla gelen okur").

`i-dis` simgesi de kaldı: adındaki "dis" *dış* bağlantı demek, Discord değil.

## Geri eklemek istersen

1. Yukarıdaki "kaldırılan" blokları ilgili yerlerine geri koy. Katılım yolu
   `katil.html` olarak kalacaksa menü ve kahraman düğmesini değiştirme; Discord'u
   o sayfaya beşinci bir satır olarak eklemek yeterli:

   ```html
   <li><a class="kapi" href="https://discord.gg/uUzsA7uDzU" target="_blank" rel="noopener">
     <span class="kapi-metin"><span class="kapi-ad">Discord</span> <span class="kapi-yer">discord.gg</span></span>
     <svg class="ok" aria-hidden="true"><use href="#i-dis"/></svg><span class="gizli"> (yeni sekmede açılır)</span></a></li>
   ```

   İki `span` arasındaki boşluk şart: o olmadan ekran okuyucu "Discorddiscord.gg"
   diye okuyor.
2. Belgeleri birlikte güncelle: `PRODUCT.md` (Operating Context, Brand
   Commitments), `DESIGN.md` (Navigation, Footer, Join page), `EKIP.md` (sayfa
   haritası, Discord yayını) ve `README.md`.
