# Duyurular Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** WhatsApp'tan bota iletilen topluluk duyurularını sitenin ana sayfasında (`#duyurular`) ve `duyurular.html` arşivinde yayımlamak; panelde 📢 sekmesiyle raptiyelemek/silmek; geçmişi bir kerelik içe aktarmak.

**Architecture:** Meta Cloud API webhook'u panelde (`/api/whatsapp`) imzayı doğrular, medyayı indirip site deposuna (`images/duyurular/`) ve kaydı `content/duyurular.json`'a GitHub Contents API ile commit eder. Site JSON'u `fetch` edip `textContent`/DOM düğümleriyle çizer. Saf mantık (doğrulama, birleştirme, dışa aktarım ayrıştırma) bağımlılıksız `.ts` modüllerde, `node --test` ile sınanır.

**Tech Stack:** Site: düz HTML/CSS/JS, ham WebGL. Panel: Next.js 16 App Router, React 19, TypeScript, Tailwind 4, `sharp` (yalnız bot rotası), Node 26 `node --test` (yerleşik TS tip ayıklama).

**Spec:** `docs/superpowers/specs/2026-11-10-duyurular-design.md`

**Depolar:** site = bu worktree (`duyurular` dalı). Panel = `/private/tmp/claude-501/-Users-ardaomeroglu-Atilim-AI-Web--claude-worktrees-competent-wescoff-969dcd/926e08cd-a130-446e-876c-ef710ff2df20/scratchpad/panel` (`duyurular` dalı). `~/Atilim_AI_Panel`'e dokunulmaz. Önce iki deponun `CLAUDE.md`/`AGENTS.md`'sini, site için `EKIP.md` ve `DESIGN.md`'yi oku.

## Global Constraints

- Site: bağımlılık yok, derleme yok, CDN yok. Panelden/bottan gelen metin `textContent` ya da `createTextNode` ile basılır; `innerHTML` yasak.
- Site arayüzü TR/EN (`data-i18n` + EN sözlüğü `[null, "…"]` kalıbı) ve koyu/açık tema (yalnız mevcut CSS değişkenleri). Duyuru metni çevrilmez; İngilizcede `T.tr(el)` ile `lang="tr"`.
- Tasarım (yerleşim, kart, raptiye, arşiv, panel sekmesi, Diffusion modeli) `impeccable:impeccable` skill'iyle ve `DESIGN.md` kurallarıyla; `DESIGN.md`'de olmayan renk/yazı tipi/gölge yok.
- Başkanın adı, numarası, gönderen adı ve hiçbir sır depoya, JSON'a, commit mesajına, loga girmez. Loglarda yalnız mesaj kimliği (`wamid…`).
- Kartta imza yok: yalnız tarih/saat + metin + medya.
- Zaman biçimi JSON'da `YYYY-MM-DDTHH:MM:SS+03:00` (Europe/Istanbul, 2016'dan beri sabit UTC+3). Kartta TR `18 Ekim 2026, 14:32`, EN `18 October 2026, 14:32` (`atilimai.tarih(zaman.slice(0,10)) + ", " + zaman.slice(11,16)`).
- Metin en çok 4096 karakter. Video MP4 ≤ 16 MB. Görsel çıktısı WebP, uzun kenar ≤ 1600 px, hedef ≤ 1 MB, tavan 2 MB, EXIF yok.
- Medya yolu `images/duyurular/<sha256 ilk 16 hex>.(webp|mp4)`; JSON'da göreli (`images/duyurular/…`).
- Çapa `d-` + `sha256(id)` ilk 8 hex. İçe aktarılan kayıt `id: "imp-" + sha256(zaman+"\n"+metin)` ilk 16 hex.
- Raptiye: en çok 3 `sabit: true`; sunucu da uygular.
- Discord'a gitmez (iş akışı yalnız `content/haberler.json`'da tetiklenir; ona dokunma).
- Commit mesajları Türkçe, sonunda `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

### Veri sözleşmesi (`content/duyurular.json`, en yeni başta)

```json
{ "_aciklama": "Bot ve panel yazar; elle düzenleme gerekmez",
  "duyurular": [ { "id": "wamid.HBgM…", "capa": "d-9f2c1a7e", "mesajlar": ["wamid…"],
    "kaynak": "whatsapp", "zaman": "2026-10-18T14:32:00+03:00", "metin": "*Toplantı* yarın…",
    "sabit": false,
    "medya": [ { "tur": "gorsel", "src": "images/duyurular/9f2c1a7e44b0d3a1.webp", "en": 1600, "boy": 1067 },
               { "tur": "video", "src": "images/duyurular/ab12cd34ef567890.mp4" } ] } ] }
```
`kaynak` ∈ `whatsapp | aktarim`. `sabit` yoksa false. Bilinmeyen alanlar serileştirmede atılır.

## Review Focus

1. **Meta aynı olayı tekrar yollar** (200 geç dönerse ya da ağ titrerse) → ikinci kez commit yok, ikinci yanıt yok. Test: Task P1 `birlestir` tekrar kimliği; Task P3 `mesajlariAyikla` + tekrar kontrolü.
2. **Aynı anda iki iletim** (görsel + açıklamasız ikinci görsel saniyeler içinde) → 409'da yeniden oku-birleştir, ikisi de aynı duyuruda. Test: Task P1 iki ardışık `birlestir` çağrısı; P3'te 409 döngüsü 4 deneme.
3. **Kötü niyetli metin** (`<img onerror>`, `javascript:` bağlantı, 500 karakterlik tek kelime) → düz metin basılır, yalnız `http(s)` bağlantı olur, kart taşmaz. Test: Task S1 XSS fixture adımı.
4. **Başkan desteklenmeyen tür iletir** (belge, ses, çıkartma, 16 MB üstü video) → yayın yok, başkana neden yazılır. Test: Task P3 `mesajlariAyikla` tür süzgeci + P2 boyut reddi.
5. **Raptiyeli duyuru silinir / 4. raptiye denenir** → silme raptiyeyi de götürür; 4. raptiye 409 ve Türkçe hata. Test: Task P4 `sabitle` ve `sil` saf fonksiyon testleri.

---

## PANEL

### Task P1: Duyuru sözleşmesi ve birleştirme

**Files:**
- Modify: `src/config/site.ts` (SITE_REPO'ya `duyuruPath: "content/duyurular.json"`, `duyuruMediaDir: "images/duyurular"`, `canonicalUrl: "https://atilimai.org/"`)
- Create: `src/lib/site/duyuru.ts` (hiç import yok — node testi doğrudan yükleyebilsin)
- Create: `src/lib/site/duyuru.test.mjs`
- Modify: `package.json` (`"test": "node --test src/lib/site/ scripts/"`)

**Interfaces:**
- Produces:
  - `type DuyuruMedya = { tur: "gorsel"; src: string; en: number; boy: number } | { tur: "video"; src: string }`
  - `interface Duyuru { id: string; capa: string; mesajlar: string[]; kaynak: "whatsapp" | "aktarim"; zaman: string; metin: string; sabit: boolean; medya: DuyuruMedya[] }`
  - `interface DuyuruDoc { duyurular: Duyuru[] }`
  - `class DuyuruError extends Error { status: number }`
  - `parseDuyuruDoc(text: string): DuyuruDoc` — bozuk kayıt atlanır, bozuk JSON `DuyuruError(…, 502)`.
  - `serializeDuyuruDoc(doc: DuyuruDoc): string` — `_aciklama` başta, 2 boşluk girinti, sonda `\n`, yalnız sözleşme alanları, `zaman`'a göre azalan.
  - `capaOf(id: string): Promise<string>` (`crypto.subtle` SHA-256; `"d-" + 8 hex`)
  - `istanbulZamani(unixSaniye: number): string` → `YYYY-MM-DDTHH:MM:SS+03:00` (shortcut yorumu: sabit +3, Türkiye yaz saatine dönerse `Intl` ile değiştir).
  - `interface Gelen { id: string; zaman: string; metin: string; medya: DuyuruMedya[] }`
  - `birlestir(doc: DuyuruDoc, gelen: Gelen, capa: string): { doc: DuyuruDoc; sonuc: "yeni" | "eklendi" | "tekrar"; hedef: Duyuru }`
  - `BIRLESTIRME_SN = 120`, `METIN_SINIRI = 4096`, `SABIT_SINIRI = 3`

- [ ] **Step 1: Write the failing tests** (`node:test`, `node:assert/strict`, `import … from "./duyuru.ts"`)
  - `parse: bozuk kayıt atlanır` — `{"duyurular":[null,{"id":"a","zaman":"2026-10-18T14:32:00+03:00","metin":"x","medya":[{"tur":"gorsel","src":"javascript:alert(1)","en":1,"boy":1}]}]}` → 1 kayıt, medya `[]` (src yalnız `^images/duyurular/[0-9a-f]{16}\.(webp|mp4)$`), `sabit === false`; `capa` eksik ya da `/^d-[0-9a-f]{8}$/` dışı kayıt atlanır (sunucu her zaman yazar).
  - `serialize: bilinmeyen alan atılır ve sıra korunur` — `foo` alanı çıktıda yok; iki kayıt ters verilince en yeni başta.
  - `birlestir: metinli mesaj yeni duyuru` — boş doc + metinli gelen → `sonuc "yeni"`, `mesajlar [id]`, `kaynak "whatsapp"`.
  - `birlestir: açıklamasız medya 120 sn içinde eklenir` — önce metinli (14:32:00), sonra medyalı metinsiz (14:33:59) → `"eklendi"`, tek kayıt, 2 mesaj, medya 1.
  - `birlestir: 120 sn sonrası ayrı duyuru` — 14:34:01 → `"yeni"`, 2 kayıt.
  - `birlestir: aynı kimlik tekrar` — aynı `id` ikinci kez → `"tekrar"`, doc değişmez (derin eşit).
  - `birlestir: metin 4096'da kesilmez, reddedilir` — 4097 karakter → `DuyuruError` status 400.
  - `istanbulZamani(1792323120)` → `"2026-10-18T14:32:00+03:00"`.

- [ ] **Step 2:** `npm test` → FAIL (modül yok).
- [ ] **Step 3:** Implement `src/lib/site/duyuru.ts` (`news.ts`'in doğrulama/hata kalıbı; yorumlar Türkçe, *neden* odaklı).
- [ ] **Step 4:** `npm test` → PASS; `npx tsc --noEmit` temiz.
- [ ] **Step 5:** Commit `Duyuru sözleşmesi ve birleştirme kuralı`.

### Task P2: Bot medyası (sharp)

**Files:**
- Modify: `package.json`, `package-lock.json` (`npm i sharp`)
- Create: `src/lib/site/duyuru-medya.ts` (yalnız `sharp` ve `node:crypto` import eder)
- Create: `src/lib/site/duyuru-medya.test.mjs`

**Interfaces:**
- Consumes: yok.
- Produces:
  - `VIDEO_SINIRI = 16 * 1024 * 1024`, `GORSEL_TAVAN = 2 * 1024 * 1024`
  - `class MedyaError extends Error {}` — mesaj başkana gidecek Türkçe cümle (ör. "Video 16 MB'tan büyük, siteye konmadı.").
  - `gorselHazirla(bytes: Buffer): Promise<{ bytes: Buffer; ad: string; en: number; boy: number }>` — `sharp(b).rotate().resize({width:1600,height:1600,fit:"inside",withoutEnlargement:true}).webp({quality:82})`; > 1 MB ise q70; hâlâ > 1 MB ise 1200 px q70; > 2 MB `MedyaError`. Metaveri yazılmaz (sharp varsayılanı). `ad` = sha256(çıktı) 16 hex + `.webp`.
  - `videoHazirla(bytes: Buffer): { bytes: Buffer; ad: string }` — `bytes.toString("ascii",4,8) === "ftyp"` değilse ya da > `VIDEO_SINIRI` ise `MedyaError`. `ad` = sha256 16 hex + `.mp4`.

- [ ] **Step 1: Failing tests** — `gorselHazirla`: sharp ile üretilmiş 3000×2000 JPEG (EXIF `Orientation` 6 ile) → çıktı RIFF/WEBP, `en ≤ 1600`, döndürülmüş (en < boy), `sharp(out).metadata()` `exif` yok, `ad` `/^[0-9a-f]{16}\.webp$/`. `videoHazirla`: `Buffer.from("0000ftypisom…")` geçer; `"\x00\x00\x00\x18moov"` `MedyaError`; 16 MB + 1 bayt `MedyaError`.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implement.
- [ ] **Step 4:** `npm test` → PASS; `npm run build` temiz (sharp Next sunucu paketinde dış modül; gerekirse `next.config.ts` `serverExternalPackages: ["sharp"]` — Next 16 belgesinde `node_modules/next/dist/docs/` kontrol et).
- [ ] **Step 5:** Commit `Bot medyası: görsel WebP'ye, video MP4 denetimi`.

### Task P3: WhatsApp webhook

**Files:**
- Create: `src/lib/whatsapp.ts` (saf kısım: import yok)
- Create: `src/lib/whatsapp.test.mjs`
- Create: `src/app/api/whatsapp/route.ts`

**Interfaces:**
- Consumes: P1 (`parseDuyuruDoc`, `serializeDuyuruDoc`, `birlestir`, `capaOf`, `istanbulZamani`, `METIN_SINIRI`), P2 (`gorselHazirla`, `videoHazirla`, `MedyaError`), `readRepoFile`/`writeRepoFile`/`writeRepoBinary`/`statRepoFile` (`src/lib/github/client.ts`), `SITE_REPO`.
- Produces (`src/lib/whatsapp.ts`):
  - `imzaDogru(hamGovde: string, baslik: string | null, sir: string): Promise<boolean>` — `X-Hub-Signature-256: sha256=<hex>`; HMAC-SHA256 (`crypto.subtle`) sabit zamanlı karşılaştırma (uzunluk farkı → false).
  - `interface WaMesaj { id: string; from: string; zaman: number; tur: "metin" | "gorsel" | "video" | "desteksiz"; metin: string; medyaId?: string }`
  - `mesajlariAyikla(payload: unknown): WaMesaj[]` — `entry[].changes[].value.messages[]`; `text.body`, `image.{id,caption}`, `video.{id,caption}`; diğer `type` → `"desteksiz"`; `statuses` olayları yok sayılır.
  - `GRAPH = "https://graph.facebook.com/v23.0"`

Rota davranışı (`export const maxDuration = 60; export const runtime = "nodejs"`):
- `GET`: `hub.mode === "subscribe"` ve `hub.verify_token === WA_VERIFY_TOKEN` → 200 düz metin `hub.challenge`; değilse 403.
- `POST`: `await request.text()` → `imzaDogru(…, WA_APP_SECRET)` yanlışsa 401 (gövde yok). JSON parse hatası 400. Hemen `200` döner; işi `after()` (`next/server`) içinde yapar:
  1. `mesajlariAyikla` → `from` `WA_IZINLI` (virgülle ayrılmış, yalnız rakam) dışındaysa sessizce atla (yanıt da yok).
  2. Sıralı işle (eşzamanlı commit 409 üretir). `desteksiz` → başkana "Bu tür (…) desteklenmiyor; yalnız metin, görsel ve video." Metin > 4096 → başkana neden.
  3. Medya: `GET {GRAPH}/{medyaId}` (Bearer `WA_TOKEN`) → `url`, sonra `GET url` (Bearer) → bayt; `gorselHazirla`/`videoHazirla`; `statRepoFile` yoksa `writeRepoBinary(yol, …, "Duyuru medyası: <ad>")`.
  4. JSON: `readRepoFile(duyuruPath)` (dosya S1'de oluşturulur; 404 → başkana "Site deposunda duyuru dosyası yok" yanıtı) → `birlestir` → `"tekrar"` ise dur (yanıt yok) → `writeRepoFile(…, sha, "Duyuru: <capa>")`. 409'da baştan oku-birleştir, en çok 4 deneme.
  5. Yanıt `POST {GRAPH}/{WA_PHONE_ID}/messages` `{messaging_product:"whatsapp", to: from, type:"text", context:{message_id:id}, text:{body}}`; gövde tam olarak `✓ Alındı, 1–2 dakika içinde sitede: https://atilimai.org/duyurular.html#<capa>` ya da `✗ Siteye konmadı: <neden>`. Yanıt hatası yalnız loglanır.
  - Her `fetch` `AbortSignal.timeout(20_000)`. Log satırı yalnız `[whatsapp] <wamid> <durum>`; `from`, metin, ad loglanmaz.

- [ ] **Step 1: Failing tests** — `imzaDogru`: bilinen gövde+sır için doğru başlık true; tek hex değişik false; `null` false; `sha256=` önekisiz false. `mesajlariAyikla`: metin, açıklamalı görsel, açıklamasız video, `type:"audio"` → `desteksiz`, yalnız `statuses` olan payload → `[]`, `null` → `[]`.
- [ ] **Step 2:** `npm test` → FAIL. **Step 3:** Implement lib + rota. **Step 4:** `npm test` PASS, `npm run build` + `npm run lint` temiz.
- [ ] **Step 5: curl doğrulaması** (`npm run dev`, sahte `WA_APP_SECRET=test WA_VERIFY_TOKEN=v WA_IZINLI=900000000000`, `GITHUB_TOKEN` yok): GET doğru token → challenge; yanlış → 403. POST imzasız → 401; doğru imza + izinsiz numara → 200 ve logda GitHub çağrısı yok. (Gerçek commit canlı kurulumdan sonra.)
- [ ] **Step 6:** Commit `WhatsApp webhook: imzalı ileti → duyuru commit'i`.

### Task P4: Panel duyuru API'si (liste / raptiye / sil)

**Files:**
- Create: `src/app/api/site/duyuru/route.ts`
- Modify: `src/lib/site/duyuru.ts` (+ testler `duyuru.test.mjs`)

**Interfaces:**
- Consumes: P1, `requireMember` (`src/lib/drive/server.ts`), `canPublishNews` (`src/lib/members.ts`), GitHub istemcisi, `recordActivity` (news rotasındaki `logPublish` kalıbı).
- Produces:
  - `sabitle(doc: DuyuruDoc, id: string, sabit: boolean): DuyuruDoc` — yoksa `DuyuruError(404)`; 4. raptiye `DuyuruError("En fazla 3 duyuru raptiyelenebilir. Önce birinin raptiyesini kaldır.", 409)`.
  - `sil(doc: DuyuruDoc, id: string): { doc: DuyuruDoc; sahipsizMedya: string[] }` — silinen kaydın medyasından başka kayıtta geçmeyenler.
  - `GET` → `{ duyurular, sha }` (her üye). `PATCH ?id=&sabit=true|false` ve `DELETE ?id=` → `canPublishNews` değilse 403; `requireMember` başka siteden isteği zaten reddeder. Yazım `sha` korumalı, 409'da bir kez yeniden dener. DELETE: önce JSON, sonra `sahipsizMedya` sıralı silinir (silinemeyen loglanır, yanıtı bozmaz). Yanıt `{ duyurular, sha }`.
- [ ] **Step 1: Failing tests** — `sabitle` 3 doluyken 4. → 409; aynı kaydı tekrar `true` yapmak sayıyı artırmaz; `sil` iki kaydın paylaştığı medya `sahipsizMedya`'da yok, yalnız birinin kullandığı var; raptiyeli kaydı silmek raptiye sayısını düşürür.
- [ ] **Step 2–4:** FAIL → implement → `npm test` PASS, build/lint temiz.
- [ ] **Step 5:** Commit `Panel duyuru API'si: listele, raptiyele, sil`.

### Task P5: 📢 Duyurular penceresi (UI — impeccable)

**Files:**
- Create: `src/components/apps/DuyuruApp.tsx`
- Modify: `src/lib/apps.ts` (`AppId` + `APPS.duyurular`, başlık "Duyurular", `DEFAULT_SHORTCUTS`'a ekle, persist `version` +1 ve `migrate`), `src/components/apps/registry.tsx`, `src/components/ui/icons.tsx` (gerekirse megafon ikonu), `src/lib/window-store.ts` (migrate)

**Interfaces:**
- Consumes: P4 uçları.
- Produces: `export function DuyuruApp()`.

Davranış: liste (en yeni başta): tarih/saat, metnin ilk 3 satırı, medya küçük resmi (`https://atilimai.org/<src>`; yeni medya ~1 dk görünmeyebilir → "Sitede birkaç dakika içinde" yer tutucu), 📌 düğmesi (`aria-pressed`, 3 doluyken diğerleri devre dışı değil, basınca sunucu hatası gösterilir), Sil (onay istemi: "Bu duyuru siteden ve medyasıyla birlikte depodan silinir. Geri alınamaz."). `canPublishNews` değilse yalnız liste. Boş / yükleniyor / hata halleri. `NewsApp.tsx` ve `useSiteNews.ts` istek/hata kalıbını izle. Önce `impeccable:impeccable` ile panelin mevcut görsel dilini çıkar; yeni renk yok.

- [ ] **Step 1:** impeccable ile tasarım kararları (pencere içi yerleşim, raptiye durumu, telefon modu `max-md:`).
- [ ] **Step 2:** Implement. **Step 3:** `npm run build` + `npm run lint` temiz. **Step 4:** Tarayıcıda (giriş gerekmeyen kısım için bileşeni sahte veriyle değil, build doğrulamasıyla; giriş gerekirse ekran görüntüsü kullanıcı kurulumundan sonra) — kontrol edilemeyeni raporla.
- [ ] **Step 5:** Commit `Panel: 📢 Duyurular penceresi`.

### Task P6: Geçmiş içe aktarma betiği

**Files:**
- Create: `src/lib/site/duyuru-aktarim.ts` (saf ayrıştırıcı, import yok)
- Create: `src/lib/site/duyuru-aktarim.test.mjs`
- Create: `scripts/duyuru-aktar.mjs`

**Interfaces:**
- Consumes: P1 (`parseDuyuruDoc`, `serializeDuyuruDoc`, `capaOf`), P2 (`gorselHazirla`, `videoHazirla`).
- Produces:
  - `interface HamMesaj { zaman: string; gonderen: string; metin: string; ekler: string[] }`
  - `ayristir(metin: string): HamMesaj[]` — Android `18.10.2026 14:32 - Ad: metin` (ve `18/10/2026, 14:32 - …`), iOS `[18.10.2026 14:32:05] Ad: metin`; baştaki U+200E/U+202F temizlenir; satır başı tarihsiz satırlar önceki mesaja eklenir; `Ad:` içermeyen satırlar sistem satırıdır (atılır); ekler: `<ad> (dosya ekli)`, `<ad> (file attached)`, `<ek: <ad>>`, `<attached: <ad>>`; `Bu mesaj silindi`, `This message was deleted`, `<Medya dahil edilmedi>`, `<Media omitted>` atılır.
  - `duyurulastir(mesajlar: HamMesaj[], gonderen: string, baslangic: string): Gelen[]` — yalnız `gonderen` eşleşen ve `zaman >= baslangic` olanlar; P1 birleştirme kuralı (açıklamasız ek 120 sn içinde öncekine).
- Betik: `node scripts/duyuru-aktar.mjs <klasör> --gonderen "<ad>" --site <site-deposu> [--baslangic 2026-10-18]`. Klasördeki `.txt`'yi bulur, ekleri `<klasör>/<ad>`'dan okur; kuru çalıştırma: sayı, ilk/son tarih, her duyurunun tarih + ilk 60 karakter + ek sayısı; `evet` yazılmazsa çıkar. `evet`: medyayı hazırlar ve `<site>/images/duyurular/`'a yazar, `content/duyurular.json`'u birleştirir (`imp-` kimliği tekrarsa atla), `git -C <site> add … && git commit -m "Duyurular: geçmiş içe aktarımı (N duyuru)"`. Gönderen adı hiçbir dosyaya, commit'e, çıktı dosyasına yazılmaz (ekrana yalnız sayılar ve metin özeti).
- [ ] **Step 1: Failing tests** — Android TR örneği 3 mesaj (biri çok satırlı, biri `IMG-20261018-WA0003.jpg (dosya ekli)` açıklamasız, bir sistem satırı "Mesajlar ve aramalar uçtan uca şifrelidir"); iOS örneği `[18.10.2026 14:32:05] Ad: ‎<ek: 00000012-PHOTO-2026-10-18-14-32-05.jpg>`; 17.10.2026 tarihli mesaj kesimle düşer; başka gönderen düşer; silinmiş mesaj düşer; `zaman` `"2026-10-18T14:32:00+03:00"` (iOS saniyeyle).
- [ ] **Step 2–4:** FAIL → implement → PASS.
- [ ] **Step 5:** Commit `Geçmiş duyuruları içe aktarma betiği`. (Gerçek zip kullanıcıdan gelince ayrıştırıcı ona göre düzeltilir.)

### Task P7: Panel belgeleri

**Files:** Modify `AGENTS.md` (+ "Duyurular hattı" bölümü: akış şeması, ortam değişkenleri `WA_VERIFY_TOKEN WA_APP_SECRET WA_TOKEN WA_PHONE_ID WA_IZINLI`, test numarası uyarısı, sharp'ın yalnız bot rotasında olduğu, `npm test`; "Komutlar"a `npm test`; "Test takımı yok" cümlesini düzelt).
- [ ] Commit `Belgeler: duyuru hattı`.

---

## SITE

### Task S1: Ana sayfa `#duyurular` bölümü (UI — impeccable)

**Files:**
- Modify: `index.html` — menüye `<a href="#duyurular" data-b="duyurular" data-i18n="nav.duyurular">Duyurular</a>` (Hakkımızda'dan sonra); `#hakkimizda`'dan sonra yeni `<div class="gecis" aria-hidden="true"></div>` + `<section id="duyurular">` (`h2 data-i18n="duyurular.baslik"`, `#duyuruList`, arşiv bağlantısı `duyurular.html` "Bütün duyurular"); yeni betik bölümü `3a. Duyurular` (3. Haftalık rapor bloğunun kalıbı: `ZAMAN_ASIMI = 10000`, üç durum + Yeniden dene + odak); EN anahtarları; CSS.
- Create: `content/duyurular.json` → `{"_aciklama": "Bot ve panel yazar; elle düzenleme gerekmez", "duyurular": []}`

**Interfaces:**
- Produces (S2 bunları kopyalar, iki yerde `/* kopya: index.html ↔ duyurular.html */` yorumu):
  - `temizDuyuru(d) → {capa, zaman, metin, sabit, medya[]} | null` — `capa` `/^d-[0-9a-f]{8}$/`, `zaman` sözleşme biçimi, `metin` string, medya `src` `^images/duyurular/[0-9a-f]{16}\.(webp|mp4)$` ya da `^https?://`.
  - `waBicim(metin) → DocumentFragment` — `*kalın*`→`<strong>`, `_italik_`→`<em>`, `~çizili~`→`<s>`, ```` ```mono``` ````→`<code>`, `https?://\S+` → `<a target=_blank rel="noopener noreferrer">` + `.gizli` "(yeni sekmede açılır)", `\n` → `<br>`. Tümü `createTextNode`/`createElement`; iç içe biçim gerekmez.
  - `zamanYaz(zaman) → string` (Global Constraints'teki biçim).
  - `duyuruYaz(d, medyali: boolean) → HTMLElement` — `<article id=capa>`; medyalı: `<img src width height loading=lazy alt="">` (alt boş: anlamı metin taşıyor; WhatsApp açıklama vermez), `<video controls preload=none>`; metin kartında medyası olan duyuru "Görsel/video arşivde" bağlantısı `duyurular.html#<capa>`. `overflow-wrap:anywhere`.
- Seçim kuralı (`secilenler(hepsi) → {liste, medyali}`): `sabit` sayısı 1 → `[o]`, medyalı; 2–3 → sabitler, metin; 0 → ilk 3, metin. Raptiyeliler `zaman` azalan. Altında `hepsi.length - liste.length > 0` ise "Arşivde N duyuru daha" (`akis.kalan`/`kalan1` kalıbı, yeni anahtarlar `duyuru.kalan`, `duyuru.kalan1`) → `duyurular.html`.
- Boş: "Henüz duyuru yok." (`duyuru.yok`); hata: `akis.hata` metni yerine duyuruya özgü `duyuru.hata`; yükleniyor `duyuru.yukleniyor`.

- [ ] **Step 1:** `impeccable:impeccable` ile tasarım: bölümün yeri (Hakkımızda ile Rapor arası), kart dili (rapor satırıyla akraba ama ayrı), raptiye işareti (görünür ama süs değil), medyalı tek kart düzeni, mobil. `DESIGN.md`'ye uy; karar notunu commit'e koy.
- [ ] **Step 2:** Implement HTML/CSS/JS.
- [ ] **Step 3: Fixture doğrulaması** (commit edilmez; önizleme sunucusunda `content/duyurular.json`'u geçici değiştirerek): (a) boş, (b) 0 raptiye 5 kayıt, (c) 1 raptiye medyalı, (d) 3 raptiye, (e) XSS: metin `<img src=x onerror=alert(1)> javascript:alert(1) ` + 500 harflik tek kelime, `src:"javascript:alert(1)"` → alert yok, bağlantı yok, taşma yok, medya atlanır, (f) 404 → hata + Yeniden dene. ≥1152 ve 390 px, TR/EN, koyu/açık.
- [ ] **Step 4:** `grep -n innerHTML index.html` yeni satır yok.
- [ ] **Step 5:** Commit `Ana sayfaya Duyurular bölümü`.

### Task S2: `duyurular.html` arşivi

**Files:**
- Create: `duyurular.html` (`haberler.html` kalıbı: görünüm başlangıç bloğu birebir, menü, `bekliyor`, üç durum, görünüm denetimi)
- Modify: `sitemap.xml` (+`https://atilimai.org/duyurular.html`, mevcut girdilerin biçimiyle), başlangıç/denetim bloklarındaki "beş sayfada aynı"/"dört sayfada aynı" yorumları tüm sayfalarda güncel sayıya; menülerde Duyurular bağlantısı diğer sayfalarda varsa ekle (`haberler.html`, `haber.html`, `katil.html`, `404.html` menüsünü kontrol et).

**Interfaces:**
- Consumes: S1'in `temizDuyuru`, `waBicim`, `zamanYaz`, `duyuruYaz` (kopya, yorumlu).
- Davranış: tümü medyalı, en yeni başta; çizimden sonra `location.hash` `#d-…` ise o karta kaydır ve odakla; bilinmeyen çapa sessiz. `<title>`, `meta description`, canonical `https://atilimai.org/duyurular.html`, EN karşılıkları.
- [ ] **Step 1:** impeccable ile arşiv düzeni (medya ızgarası değil okuma sütunu; video/görsel en-boy oranıyla yer tutar, düzen kaymaz).
- [ ] **Step 2:** Implement. **Step 3:** S1 fixture'larıyla (b)(c)(e)(f) + `duyurular.html#d-xxxxxxxx` çapası. **Step 4:** Commit `Duyurular arşivi sayfası`.

### Task S3: Alan katmanına 6. model — Diffusion (impeccable)

**Files:** Modify `index.html` bölüm `5. Alan`.

**Interfaces:**
- `difuzyonYap(i, out)` — gürültüden şekle çözülen noktalar (görsel tasarım impeccable ile; model uzayı diğerleriyle aynı ölçek ±1.5×±1).
- `yapici = [monogramYap, agYap, difuzyonYap, matrisYap, akisYap, inisYap]` (Diffusion yeni 2. bant = Hakkımızda→Duyurular geçişi).
- Gölgelendirici: `attribute vec3 a5;` `uniform float w5;` `p = …+a5*w5`; öznitelik sayısı 7→8 (WebGL1 alt sınırı 8): `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` ölç, < 8 ise `kapat()`.
- `sinirX/sinirY` 6 eleman, `DOLGU` 6 eleman (yeni değer ölçümle), `YALPA` aynen; sabit `5`'ler `yapici.length`; `Math.min(3, …)` → `yapici.length - 2`, `p >= 4` → `p >= yapici.length - 1`, `wt` dizisi uzunluğu `yapici.length`; uniform listesine `w5`.
- [ ] **Step 1:** impeccable ile modelin görünümü (DESIGN.md "Alan" bölümü renkleri).
- [ ] **Step 2:** Implement. **Step 3:** EKIP.md'deki iki test (tarama = 0, kırpılma = 0) **altı bant için** + 1152 px kapısı (altında WebGL bağlamı yok) — yöntem: proje belleğindeki başsız Brave düzeneği (`alan-kayis-revizyonu`, `tema-ve-dil` bellek notları). Sonuçları commit mesajına yaz.
- [ ] **Step 4:** Commit `Alan: 6. model Diffusion`.

### Task S4: Site belgeleri

**Files:** Modify `EKIP.md` (yeni "Duyurular" bölümü: veri sözleşmesi, bot akışı, raptiye kuralı, `duyurular.html`, kopya çiziciler; "Alan katmanı" altı model; sayfa haritası), `PRODUCT.md` (Duyurular bölümü ve ürün kuralları; imza yok, WhatsApp kaynağı), `DESIGN.md` (S1/S2/S3 kararları), `README.md` gerekiyorsa.
- [ ] Commit `Belgeler: duyurular ve 6. model`.
