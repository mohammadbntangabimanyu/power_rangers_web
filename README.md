# Power Rangers Markas Web

Sebuah SPA (Single Page Application) interaktif bertema Power Rangers, dibangun dengan React + Vite + GSAP.

## 🚀 Setup & Instalasi

### 1. Install Dependencies
```bash
npm install
```

### 2. Tempatkan Asset
Salin file-file berikut dari folder assets kamu ke `src/assets/`:

**`src/assets/`**
- `ASET_LOGO.png` — Logo Power Rangers utama
- `hero.png` — (opsional, hero background)

**`src/assets/cursors/`**
- `cursor_bam.png`
- `cursor_kapow.png`
- `cursor_omg.png`
- `cursor_DANGER.png`

**`src/assets/helms/`**
- `helm_merah.png`
- `helm_biru.png`
- `helm_hitam.png`
- `helm_kuning.png`
- `helm_hijau.png`
- `helm_pink.png` ← **BARU**

**`src/assets/pose/`** ← **FOLDER BARU**
- `pose_merah.png`
- `pose_biru.png`
- `pose_hitam.png`
- `pose_kuning.png`
- `pose_hijau.png`
- `pose_pink.png`

**`src/assets/posters/`**
- `POSTER_1.jpeg`
- `POSTER_2.jpeg`
- `POSTER_3.jpeg`
- `POSTER_4.jpeg`
- `POSTER_5.jpeg`

### 3. Jalankan Dev Server
```bash
npm run dev
```

### 4. Build untuk Production
```bash
npm run build
```

## 🎮 Fitur

| Fitur | Deskripsi |
|-------|-----------|
| **Custom Cursor** | Titik putih dengan `mix-blend-mode: difference`. Label "CLICK!" muncul saat hover logo |
| **Sticker Stamping** | Klik logo 1-4x = stiker komik muncul di posisi kursor. Klik ke-5 = redirect Wikipedia |
| **Neon Title** | "IT'S MORPHIN TIME!" dengan efek flicker merah menyala |
| **Ranger Grid** | 5 helm grayscale → berwarna saat hover. Tombol `+` membuat semua berubah warna |
| **Poster Fountain** | GSAP: poster terbang dari titik kursor saat mouse digerakkan |

## 🛠 Tech Stack
- **React 18** + **Vite 5**
- **GSAP 3** (GreenSock Animation Platform)
- **CSS Variables** + `mix-blend-mode` + `backdrop-filter`
- **Google Fonts**: Black Ops One, Bebas Neue, Rajdhani
