# Bu depoda çalışmadan önce

**Önce [`EKIP.md`](EKIP.md) dosyasını oku.** Sayfa haritası, veri sözleşmesi,
Discord akışı ve tuzaklar orada.

Özellikle: `index.html` tek dosyada stil + içerik + betik taşır. Haberlerle
ilgili iş yapıyorsan yalnızca "Haftalık rapor" bölümü ilgilendirir —
`grep -n "haberler.json" index.html` seni oraya götürür; dosyanın tamamını
okumana gerek yok.

Görsel bir karar vereceksen `DESIGN.md`, ürün bağlamı gerekiyorsa `PRODUCT.md`.

Bağımlılık eklenmeyecek: site bilerek düz HTML/CSS/JS, derleme adımı yok ve
CDN'den betik çekilmiyor. Panelden gelen metin `textContent` ile basılır,
`innerHTML` kullanılmaz.
