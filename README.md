# Supplier.id — B2B Marketplace

Frontend untuk marketplace B2B **Supplier.id**, diimplementasikan dari desain Figma
dengan fidelitas visual tinggi (warna, tipografi, spacing, dan aset asli dari Figma).

> Better sourcing. Stronger business.

## Teknologi

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (design token dari Figma di `src/app/globals.css`)
- Font **Inter** via `next/font`

## Menjalankan proyek

```bash
npm install     # sekali saja, memasang dependency
npm run dev     # jalankan server pengembangan
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Perintah lain:

```bash
npm run build   # build produksi
npm run start   # jalankan hasil build produksi
npm run lint    # periksa kualitas kode
```

## Struktur

```
src/
├─ app/
│  ├─ layout.tsx              # layout global (Navbar + Footer)
│  ├─ page.tsx                # Homepage (sesuai frame Figma)
│  ├─ globals.css             # design token & utility
│  ├─ products/
│  │  ├─ page.tsx             # daftar produk + pencarian/filter
│  │  └─ [slug]/page.tsx      # detail produk
│  └─ suppliers/
│     ├─ page.tsx             # daftar supplier
│     └─ [slug]/page.tsx      # detail supplier
├─ components/                # komponen reusable (Navbar, kartu, tombol, dll)
└─ lib/
   └─ data.ts                 # konten (produk, supplier, kategori)
```

## Halaman

| Rute | Keterangan |
|------|------------|
| `/` | Homepage: hero, kategori, produk unggulan, supplier rekomendasi |
| `/products` | Daftar produk dengan pencarian (`?q=`) dan filter kategori (`?category=`) |
| `/products/[slug]` | Detail produk + produk lain dari supplier yang sama |
| `/suppliers` | Daftar supplier terverifikasi |
| `/suppliers/[slug]` | Profil supplier + katalog produknya |

Semua warna, ukuran teks, radius, dan spacing diambil langsung dari desain Figma.
