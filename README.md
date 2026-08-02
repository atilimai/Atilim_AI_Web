# Atılım AI — Topluluk Sitesi

Atılım Üniversitesi yapay zekâ topluluğunun web sitesi. Tek dosyalık, derleme adımı olmayan bir statik site: WebGL ile çizilen bir parçacık alanı, scroll'a bağlı olarak beş farklı şekle dönüşüyor.

**Canlı:** `https://KULLANICI.github.io/DEPO/` _(GitHub Pages açıldıktan sonra güncelleyin)_

---

## Çalıştırma

Kurulum yok. `index.html` dosyasını tarayıcıda açmak yeterli.

Yerelde sunucu üzerinden denemek isterseniz:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Dosya yapısı

```
index.html      Her şey burada — HTML, CSS ve JavaScript tek dosyada
README.md
.gitignore
```

Tek dosya olması bilinçli bir tercih: prototipin bağımlılığı yok, kimse `npm install` çalıştırmak zorunda kalmıyor. Site büyüdüğünde bölmek gerekecek, aşağıya bakın.

## Kodun içinde ne nerede

`index.html` içindeki script altı bölüme ayrılmış durumda:

| Bölüm | İçerik |
|---|---|
| 1. Sound | Web Audio ile sentezlenen ambiyans müziği ve efektler |
| 2. Scroll progress | Scroll konumu, aktif bölüm takibi |
| 3. Reveal on scroll | Metinlerin görünüre girerken açılması |
| 4. Audio controls | Ses aç/kapat ve seviye kontrolü |
| 5. Custom cursor | Özel imleç, mıknatıslı butonlar, kart eğilmesi |
| 6. The 3D field | Parçacık sistemi, morph hedefleri, kamera |

## Sık yapılacak değişiklikler

**İçerik.** Bölümler `<section id="s0">` … `<section id="s4">` olarak sırayla duruyor. Metinler doğrudan HTML içinde, ayrı bir veri dosyası yok.

**Renkler.** Dosyanın en üstündeki `:root` bloğunda. `--blue` ve `--red` üniversitenin kurumsal renklerinden geliyor.

**Bölüm eklemek.** Dört yere dokunmak gerekiyor:

1. Yeni bir `<section>` ekleyin
2. `builders` dizisine aynı imzada bir hedef fonksiyonu ekleyin — `function(i, out)` alıp `out[0..2]`'ye koordinat yazar
3. `CAM_Z`, `CAM_X`, `CAM_Y`, `DRIFT` dizilerine birer değer ekleyin
4. `ROOT` dizisine bir akor kökü ekleyin (yarım ton cinsinden)

Scroll bölümlemesi dizi uzunluklarından otomatik türemiyor — `smooth * 4` ve `Math.min(3, ...)` ifadelerindeki sayıları da bir artırın.

**Ses.** `Sound` modülünün başındaki `ROOT`, `CHORD` ve `PENT` armoniyi belirliyor. Akorlarda üçlü yok, bu yüzden ne neşeli ne kederli duyuluyor. Tını için `droneG.gain` (ağırlık), `filt.frequency` (parlaklık), `soften.frequency` (genel yumuşaklık).

## Haftalık rapor ve Discord

Haberler `content/haberler.json` içinde durur. Site de, Discord botu da aynı dosyayı okur — içerik tek yerde tutulur.

### Yeni sayı yayımlamak

`content/haberler.json` içindeki `sayilar` dizisinin **başına** yeni bir nesne ekleyin:

```json
{
  "sayi": 13,
  "tarih": "2026-08-10",
  "haberler": [
    {
      "etiket": "Model",
      "tarih": "7 Ağu",
      "baslik": "Haber başlığı",
      "ozet": "İki cümlelik özet.",
      "link": "https://kaynak.example.com"
    }
  ]
}
```

`link` boş bırakılabilir. Dosyayı `main`'e pushladığınızda GitHub Actions devreye girer, siteyi günceller ve Discord'a gönderir.

### Kurulum (bir kez)

1. Discord'da kanal ayarları → Entegrasyonlar → Webhook oluştur → adresi kopyalayın
2. GitHub'da depo → Settings → Secrets and variables → Actions → New repository secret
3. İsim `DISCORD_WEBHOOK`, değer kopyaladığınız adres
4. `.github/workflows/haftalik-rapor.yml` içindeki `SITE_URL` satırını kendi Pages adresinizle değiştirin

Webhook adresini asla depoya yazmayın. Adresi gören herkes kanalınıza istediği mesajı gönderebilir; sızarsa Discord'dan webhook'u silip yenisini oluşturmak gerekir.

### Nasıl çalışıyor

`content/haberler.json` değiştiğinde workflow tetiklenir ve `scripts/discord-gonder.js` çalışır. Script en yeni sayıyı okur, `content/.son-gonderilen` dosyasına bakarak daha önce gönderilip gönderilmediğini kontrol eder, gönderilmemişse webhook'a bir embed yollar ve durumu geri commit eder.

Bu sayede eski bir sayıda yazım hatası düzeltseniz bile mesaj tekrar gitmez.

Elle göndermek isterseniz: Actions sekmesi → ilgili workflow → Run workflow.

### Yerelde denemek

```bash
# Göndermeden sadece payload'u görmek için
KURU_CALISMA=1 node scripts/discord-gonder.js

# Gerçekten göndermek için (test kanalı kullanın)
DISCORD_WEBHOOK="https://discord.com/api/webhooks/..." node scripts/discord-gonder.js
```

Script Discord'un sınırlarını kendi kontrol eder: embed başına en fazla 25 alan, alan değeri 1024 karakter, toplam 6000 karakter. Aşarsa sondan haber atarak sığdırır. Hız sınırına takılırsa bekleyip tekrar dener.

## Erişilebilirlik ve performans

- `prefers-reduced-motion` açıksa giriş animasyonu, salınım ve imleç efektleri kapanıyor
- WebGL yoksa canvas gizleniyor, içerik olduğu gibi okunuyor
- Web Audio yoksa ses kontrolü gizleniyor
- Ses varsayılan olarak kapalı — davetsiz ses çalmıyor
- Mobilde parçacık sayısı 26.000'den 9.000'e düşüyor

Mobilde bunun yeterli olup olmadığını ucuz bir Android cihazda ölçmek gerekiyor. Gerekirse mobilde 3B tamamen kapatılıp düz arka plana düşülebilir.

## Bağımlılıklar

CDN üzerinden, `package.json` yok:

- [Three.js](https://threejs.org) r128 — cdnjs
- Space Grotesk, Inter, JetBrains Mono — Google Fonts

## Yol haritası

- [ ] Gerçek içerik (aşağıdaki nota bakın)
- [ ] Discord davet bağlantısı
- [ ] Haftalık raporu Markdown dosyalarından besleme
- [ ] GitHub Actions ile haftalık raporu Discord'a gönderme
- [ ] Site büyüyünce Next.js + React Three Fiber'a taşıma

## Katkı

Topluluk üyeleri doğrudan `main`'e push etmek yerine branch açıp PR göndersin. Prototip aşamasında küçük düzeltmeler için doğrudan push da sorun değil.

---

> **Not:** Bu depodaki metinler, üye sayıları, projeler ve haberler **örnek içeriktir**. Site yayına alınmadan önce gerçek bilgilerle değiştirilmelidir.
