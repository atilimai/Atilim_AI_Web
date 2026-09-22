# Bu depoda çalışmadan önce

**Önce [`EKIP.md`](EKIP.md) dosyasını oku.** Sayfa haritası, veri sözleşmesi,
Discord akışı, alan katmanı ve tuzaklar orada.

Özellikle: `index.html` tek dosyada stil + içerik + betik taşır ve dosyanın
yarısından fazlası kaydırmayla değişen 3B alan katmanıdır. Ne aradığına göre
git, dosyayı baştan sona okuma:

| Ne arıyorsan | Nasıl bulacaksın |
|---|---|
| haber akışı | `grep -n "haberler.json" index.html` |
| 3B alan katmanı | `grep -n "6. Alan" index.html` |
| betiğin bölümleri | `grep -n "^/\* ===" -A2 index.html` |

Görsel bir karar vereceksen `DESIGN.md`, ürün bağlamı gerekiyorsa `PRODUCT.md`.

Bağımlılık eklenmeyecek: site bilerek düz HTML/CSS/JS, derleme adımı yok ve
CDN'den betik çekilmiyor — 3B alan da bu yüzden ham WebGL, kütüphane değil.
Panelden gelen metin `textContent` ile basılır, `innerHTML` kullanılmaz.

**Henüz hiçbir bülten yayımlanmadı.** `content/haberler.json`'daki üç kayıt da
yer tutucu; sitenin yayımlama geçmişi varmış gibi metin yazma.
