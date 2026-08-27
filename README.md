# Atılım AI — Topluluk Sitesi

Atılım Üniversitesi Yapay Zekâ Topluluğu'nun tanıtım sitesi ve haftalık rapor
arşivi. Üç sayfa, sıfır bağımlılık, derleme adımı yok: dosyalar ne ise tarayıcı
onu çalıştırıyor.

- **Canlı:** <https://atilimai.github.io/Atilim_AI_Web/>
- **Geliştirici rehberi:** [`EKIP.md`](EKIP.md) — yapı, veri akışı, tuzaklar
- **İçerik nereden geliyor:** haberleri [yönetim paneli](https://github.com/atilimai/Atilim_AI_Panel) yazıyor

> Yeni geliştiriyorsan (özellikle bir yapay zekâ aracıyla çalışıyorsan) önce
> `EKIP.md` dosyasını oku. `index.html` tek başına 1450 satır; rehber, nereye
> bakman gerektiğini baştan söylüyor.

## Çalıştırma

Kurulum yok, ama dosyayı **çift tıklayarak açma**: sayfalar haberleri `fetch`
ile okuyor ve `file://` üzerinden bu engelleniyor. Yerel bir sunucu yeter:

```bash
python -m http.server 8000
# ya da:  npx serve .
# sonra:  http://localhost:8000
```

## Sayfalar

| Dosya | Ne |
|---|---|
| `index.html` | Ana sayfa: tanıtım, etkinlikler, projeler, haftalık rapor özeti |
| `haberler.html` | Haber arşivi; tam metni olan kartlar yerinde açılır |
| `haber.html` | Tek bir haberin ayrıntı sayfası (`?sayi=13&sira=0`) |
| `content/haberler.json` | **Tek veri kaynağı.** Site de Discord botu da bunu okur |
| `scripts/discord-gonder.js` | Yeni sayıyı Discord'a gönderen iş |
| `.github/workflows/haftalik-rapor.yml` | Yukarıdaki işi tetikleyen Actions akışı |

## Haber yayınlama

Haberler elle düzenlenmez; yönetim panelindeki **Haftalık Rapor** penceresinden
yayımlanır. Akış şöyle işler:

```
Panel → content/haberler.json'a commit → GitHub Pages siteyi günceller
                                       → Actions işi Discord'a mesaj atar
```

Discord işi yalnızca `content/haberler.json` değiştiğinde çalışır ve her sayıyı
**bir kez** gönderir; aynı sayı numarasıyla yapılan düzeltme siteye yansır ama
Discord'a gitmez. Gönderim durumu `content/.son-gonderilen` dosyasında tutulur.

Bir haberin `icerik` alanı doluysa site onu ayrıntı sayfasında açar ve arşivde
kart yerinde genişler; boşsa kart yalnızca özeti gösterir ve başlık doğrudan
kaynağa gider.

## Yayınlama

`main` dalına giden her push GitHub Pages tarafından otomatik yayınlanır;
yapılacak bir şey yok. Derleme adımı olmadığı için değişiklik genelde bir
dakika içinde canlıda olur.

## Katkı

- Bağımlılık ekleme. Site bilerek düz HTML/CSS/JS; bir çatı ya da paket
  eklemek bu tercihi bozar.
- Panelden gelen metin **düz metindir**; sayfalar her şeyi `textContent` ile
  basar. `innerHTML` kullanma — haber metnindeki bir etiket çalışan koda
  dönüşür.
- Değişikliği yerel sunucuda gerçek `content/haberler.json` ile dene; boş
  alanlar (kaynak, görsel, tam metin) farklı çiziliyor.
- Tuzaklar ve kilitli kararlar [`EKIP.md`](EKIP.md) içinde.
