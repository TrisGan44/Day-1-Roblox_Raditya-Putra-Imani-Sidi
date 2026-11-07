# PasarKita - Website Jual Beli Sederhana

**Nama:** Raditya Putra Imani Sidi

## Deskripsi Singkat

Repository ini berisi **PasarKita**, sebuah website marketplace (jual beli online) sederhana yang dibuat dengan **HTML, CSS, dan JavaScript murni** tanpa framework maupun library eksternal. Pengunjung dapat melihat daftar produk, mencari, memfilter, mengurutkan, memasukkan produk ke keranjang, melakukan checkout sederhana, dan memasang barang untuk dijual. Tidak ada pembayaran sungguhan maupun database; data produk contoh disimpan dalam array JavaScript, sedangkan keranjang dan produk buatan pengguna disimpan di `localStorage` browser.

Kode awal website ini dibuat dengan bantuan AI menggunakan prompt terstruktur (Role, Task, Context, Format), lalu dikelola versinya dengan Git dan GitHub sesuai materi workshop.

## Tujuan Repository

1. Sebagai **bahan belajar** pemrograman web dasar bagi mahasiswa tahun pertama (struktur HTML, styling CSS responsif, logika JavaScript, dan `localStorage`).
2. Sebagai **latihan praktik** membuat aplikasi dengan bantuan AI melalui prompt yang spesifik.
3. Sebagai **latihan version control**: membuat repository, `commit`, `push` ke GitHub, dan mengelola perubahan.
4. Sebagai **dokumentasi** kegiatan workshop *"From AI to GitHub: Building with AI, Managing Change with GitHub"*.

## Fitur Website

- Daftar minimal 8 produk dalam bentuk kartu (gambar emoji, nama, harga format `Rp 150.000`, kategori, nama penjual).
- Pencarian produk berdasarkan nama saat mengetik.
- Filter kategori (Semua, Elektronik, Fashion, Buku, Hobi).
- Pengurutan: harga terendah, harga tertinggi, dan terbaru.
- Keranjang belanja dengan tombol `+` dan `-`, tombol hapus, dan total harga.
- Form checkout (nama, alamat, nomor telepon) dengan validasi, lalu pesan konfirmasi dan keranjang dikosongkan.
- Form "Jual barang" yang langsung menambahkan produk baru ke daftar.
- Keranjang dan produk buatan pengguna tersimpan di `localStorage`.
- Seluruh antarmuka berbahasa Indonesia dan responsif untuk HP maupun desktop.

## Struktur File

```
pasarkita/
├── index.html   # struktur halaman (header, produk, form jual, keranjang)
├── style.css    # seluruh tampilan dan layout responsif
├── script.js    # logika: render, cari, filter, urut, keranjang, checkout, jual, localStorage
└── README.md    # dokumentasi repository dan workshop
```

## Cara Menjalankan

1. Unduh atau `clone` repository ini.
2. Pastikan `index.html`, `style.css`, dan `script.js` berada dalam satu folder.
3. Buka `index.html` di browser (Chrome, Edge, atau Firefox). Tidak perlu instalasi apa pun.

```bash
git clone <url-repository>
cd pasarkita
# lalu buka index.html di browser
```

---

# Dokumentasi Kegiatan Workshop

## Informasi Kegiatan

| Keterangan | Detail |
|---|---|
| Judul | From AI to GitHub: Building with AI, Managing Change with GitHub |
| Pemateri | Nugi Farhan (Senior Product Designer, pengalaman 6 tahun; pernah menjadi UX Advisor di Bangkit, DBS CodingCamp, dan BI Hackathon) |
| Hari | Day 1 |
| Topik | Membuat dan mengembangkan aplikasi dengan AI, serta manajemen perubahan dan kolaborasi dengan Git dan GitHub |
| Proyek | Student Task Planner (diterapkan pada repository ini menjadi website jual beli PasarKita) |

### Capaian Pembelajaran

- Dapat menjelaskan bagaimana prompt AI yang lebih spesifik menghasilkan hasil yang lebih baik.
- Dapat membedakan Git dan GitHub.
- Dapat mengidentifikasi repository, commit, branch, dan pull request.
- Dapat melakukan version controlling.

## 1. Rangkuman Materi

### A. Prompt Engineering

**Pengertian.** Prompt adalah instruksi atau masukan yang diberikan kepada model AI untuk mendapatkan hasil tertentu. Bentuknya bisa pertanyaan sederhana, kata kunci, instruksi yang rumit, atau potongan kode. Prompt engineering adalah cara merancang instruksi agar AI memberikan jawaban yang tepat, relevan, dan layak digunakan.

**Context is key.** Prompt singkat seperti "Create student task planner" menghasilkan jawaban yang umum dan menebak-nebak. Prompt yang disertai konteks (tujuan, kebutuhan, batasan) menghasilkan hasil yang jauh lebih sesuai.

**Struktur prompt yang baik:**

| Bagian | Fungsi | Contoh dari materi |
|---|---|---|
| Role | Peran yang diminta dari AI | "You are helping me build a beginner-friendly student task planner..." |
| Task | Tujuan yang ingin dicapai | Bagian `## Goal` |
| Context | Kebutuhan dan batasan | Bagian `## Requirements` dan `## Constraints` |
| Format | Bentuk keluaran yang diinginkan | Bagian `## Output` (kode lengkap, cara menjalankan, cara menguji) |

**Taktik prompt (sumber: Google Cloud):** gunakan kata kerja aksi, tentukan panjang dan format keluaran, tentukan target audiens, sertakan fakta dan data yang relevan, rujuk sumber atau dokumen tertentu, serta definisikan istilah kunci.

**Keuntungan prompt engineering:** meningkatkan performa model AI, mengurangi bias dan respons yang ofensif, meningkatkan kontrol dan prediktabilitas, serta memberikan pengalaman yang lebih baik.

### B. Git dan GitHub

- **Git** adalah *version control system* terdistribusi (DVCS) yang melacak siapa, kapan, dan apa yang berubah pada suatu file. Git diciptakan oleh Linus Torvalds pada tahun 2005 dan bekerja secara lokal.
- **GitHub** adalah platform berbasis web untuk menyimpan repository Git secara online dan mendukung kolaborasi.

**Tiga area dalam Git workflow:**

1. **Working directory**: salinan satu versi proyek yang sedang dikerjakan di komputer.
2. **Staging area (index)**: tempat menampung perubahan yang akan dimasukkan ke commit berikutnya.
3. **Git directory (repository)**: tempat Git menyimpan metadata dan database objek proyek; bagian inilah yang disalin saat `clone`.

**Perintah Git penting:**

| Perintah | Fungsi |
|---|---|
| `git init` | Memulai repository baru |
| `git clone "url"` | Menyalin repository dari GitHub ke komputer |
| `git add .` / `git add -A` / `git add --all` | Memindahkan perubahan ke staging area |
| `git commit -m 'pesan'` | Menyimpan perubahan dari staging area ke repository |
| `git remote add <nama> <url>` | Menghubungkan repository lokal dengan repository online |
| `git push origin main` | Mengirim branch saat ini ke repository online |
| `git pull origin main` | Mengambil perubahan dari online lalu menggabungkannya ke branch saat ini |

**Setup yang dilakukan:**

1. Install Git, lalu cek dengan `git --version`.
2. Atur identitas: `git config --global user.name "Nama"` dan `git config --global user.email "email"`, cek dengan `git config --global --list`.
3. Install VS Code dan aktifkan perintah `code` lewat *Shell Command: Install 'code' command in PATH*.
4. Buat SSH key dengan `ssh-keygen -t ed25519 -C "email@domain.com"`, tambahkan ke ssh-agent, lalu daftarkan public key di pengaturan *SSH and GPG keys* GitHub.
5. Verifikasi koneksi dengan `ssh -T git@github.com`.

### C. Praktik: Student Task Planner

Alur kerja yang dipraktikkan:

1. Siapkan platform AI (Claude, Antigravity, atau ChatGPT).
2. Tulis prompt untuk membuat web atau aplikasi.
3. Tambahkan ke Git dengan `git init`.
4. `commit` dan `push` ke GitHub.
5. Lakukan perubahan.
6. `commit` dan `push` lagi ke GitHub.

## 2. Poin Penting dan Pengetahuan Baru

1. **Kualitas jawaban AI bergantung pada kualitas prompt.** Prompt dengan struktur Role, Task, Context, dan Format menghasilkan kode yang jauh lebih sesuai kebutuhan dibanding prompt satu kalimat.
2. **Constraint dan output perlu ditulis eksplisit.** Contohnya "hanya HTML, CSS, vanilla JavaScript" dan "jelaskan cara menjalankan serta cara menguji" membuat hasilnya mudah dipahami pemula.
3. **Hasil AI harus diverifikasi.** Contoh prompt dari workshop menutup dengan instruksi agar AI tidak mengklaim aplikasi berfungsi sebelum perilakunya diperiksa.
4. **Git dan GitHub itu berbeda.** Git adalah alat pelacak versi di komputer lokal, sedangkan GitHub adalah layanan online untuk menyimpan dan berkolaborasi.
5. **Ada tiga area kerja di Git** (working directory, staging area, repository), dan `git add` serta `git commit` adalah dua langkah terpisah.
6. **`git add .`, `git add -A`, dan `git add --all` sama-sama menyiapkan perubahan** untuk di-commit; yang perlu dipahami adalah apa yang masuk ke staging area sebelum commit.
7. **SSH key (Ed25519) lebih praktis dan aman** untuk menghubungkan komputer ke GitHub tanpa mengetik password berulang kali.
8. **Commit dan push rutin itu penting.** Seperti lelucon "In case of fire: git commit, git push, leave building" di slide, kebiasaan ini menjaga pekerjaan tetap aman dan terdokumentasi.

## 3. Pendapat Pribadi tentang Day 1 Proyek Workshop

Day 1 workshop ini menurut saya sangat bermanfaat dan menyenangkan. Materinya disusun runtut: dimulai dari cara "berbicara" dengan AI lewat prompt yang baik, lalu dilanjutkan ke cara menyimpan dan mengelola hasilnya dengan Git dan GitHub. Dua topik ini terasa saling melengkapi, karena AI membantu membuat sesuatu dengan cepat, sedangkan Git memastikan setiap perubahan tercatat rapi.

Saya paling terbantu dengan contoh perbandingan prompt tanpa konteks dan dengan konteks, karena langsung terlihat mengapa prompt yang spesifik menghasilkan jawaban yang lebih baik. Penyampaian materi oleh Kak Nugi juga santai dan mudah diikuti, dengan humor dan contoh nyata, sehingga konsep yang awalnya terdengar teknis seperti staging area dan SSH key jadi lebih mudah dipahami.

Proyek Student Task Planner sebagai latihan juga pilihan yang bagus: sederhana, tetapi cukup untuk mencoba alur lengkap dari menulis prompt, membuat aplikasi, `commit`, `push`, sampai mengubah dan mengunggahnya lagi. Setelah Day 1, saya jadi lebih percaya diri menggunakan AI sebagai asisten belajar dan memakai GitHub untuk proyek-proyek kuliah berikutnya. Terima kasih kepada pemateri dan penyelenggara workshop!

---

Dibuat oleh **Raditya Putra Imani Sidi**.