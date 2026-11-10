# Bu depoda çalışmadan önce

**Önce [`EKIP.md`](EKIP.md) dosyasını oku.** Sayfa haritası, veri sözleşmesi,
Discord akışı, alan katmanı ve tuzaklar orada.

Özellikle: `index.html` tek dosyada stil + içerik + betik taşır ve dosyanın
yarısından fazlası kaydırmayla değişen 3B alan katmanıdır. Ne aradığına göre
git, dosyayı baştan sona okuma:

| Ne arıyorsan | Nasıl bulacaksın |
|---|---|
| haber akışı | `grep -n "haberler.json" index.html` |
| 3B alan katmanı | `grep -n "5. Alan" index.html` |
| betiğin bölümleri | `grep -n "^/\* ===" -A2 index.html` |
| tema ve dil | `EKIP.md` → "Tema ve dil"; `grep -n "Görünüm" index.html` |

Görsel bir karar vereceksen `DESIGN.md`, ürün bağlamı gerekiyorsa `PRODUCT.md`.

Bağımlılık eklenmeyecek: site bilerek düz HTML/CSS/JS, derleme adımı yok ve
CDN'den betik çekilmiyor — 3B alan da bu yüzden ham WebGL, kütüphane değil.
Panelden gelen metin `textContent` ile basılır, `innerHTML` kullanılmaz.

**Arşivde iki sayı var.** İlk bülten (1. sayı, 2 haber) 23 Eylül 2026'da,
2. sayı (5 haber) 6 Ekim 2026'da panelden yayımlandı. Metin yazarken arşivin gösterdiğinden uzun bir yayın
geçmişi ima etme.

## Alt ajanlar ve review

Alt ajanlar `model: sonnet` (Sonnet 5.5) ile başlatılır. Ana oturum (Opus 5.5)
her alt ajan çıktısını review eder; yetersizse eksikleri not ederek aynı görevi
yeniden Sonnet'e yollar. Review edilmemiş alt ajan çıktısı commit edilmez.

## WhatsApp botu — test numarası uyarısı

Duyuru botu (panel `/api/whatsapp`) Meta'nın **test numarasıyla** çalışıyor:
en fazla 5 alıcı eklenebilir ve Meta test numarasını haber vermeden kapatabilir.
`WA_TOKEN` süresiz **sistem kullanıcı jetonu** olmalı; geçici (24 saatlik)
jeton botu bir gün sonra susturur. Bot yanıt vermiyorsa önce numaranın ve
jetonun durumuna bak. Kalıcı numaraya geçiş yalnız ortam değişkeni değişikliğidir
(`WA_PHONE_ID`, `WA_TOKEN`), kod değişmez.
