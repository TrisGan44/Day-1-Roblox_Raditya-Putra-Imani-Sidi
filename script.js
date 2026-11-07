/* ==========================================================
   PasarKita - logika aplikasi (HTML + CSS + JavaScript biasa)
   ========================================================== */

// ---------- 1. DATA ----------
const KUNCI_PRODUK = "pasarkita_produk_baru";     // kunci localStorage untuk produk buatan pengguna
const KUNCI_KERANJANG = "pasarkita_keranjang";    // kunci localStorage untuk keranjang
const KATEGORI = ["Elektronik", "Fashion", "Buku", "Hobi"];
const EMOJI_KATEGORI = { Elektronik: "🎧", Fashion: "👕", Buku: "📚", Hobi: "🎸" };

// Data contoh (array JavaScript biasa, tanpa database)
const produkContoh = [
  { id: 1, emoji: "🎧", nama: "Headphone Bluetooth", harga: 250000, kategori: "Elektronik", penjual: "Toko Nada", deskripsi: "Baterai tahan 20 jam, suara jernih.", dibuat: new Date("2026-10-01").getTime() },
  { id: 2, emoji: "⌚", nama: "Jam Tangan Digital", harga: 175000, kategori: "Elektronik", penjual: "Gadget Budi", deskripsi: "Tahan air, ada stopwatch dan alarm.", dibuat: new Date("2026-10-05").getTime() },
  { id: 3, emoji: "👕", nama: "Kemeja Flanel", harga: 120000, kategori: "Fashion", penjual: "Butik Sari", deskripsi: "Bahan katun lembut, ukuran M dan L.", dibuat: new Date("2026-10-08").getTime() },
  { id: 4, emoji: "👟", nama: "Sepatu Sneakers", harga: 350000, kategori: "Fashion", penjual: "Langkah Kita", deskripsi: "Ringan dan nyaman untuk sehari-hari.", dibuat: new Date("2026-10-12").getTime() },
  { id: 5, emoji: "📘", nama: "Buku Belajar Python", harga: 95000, kategori: "Buku", penjual: "Rak Ilmu", deskripsi: "Cocok untuk pemula, banyak contoh latihan.", dibuat: new Date("2026-10-15").getTime() },
  { id: 6, emoji: "📖", nama: "Novel Laskar Pelangi", harga: 70000, kategori: "Buku", penjual: "Rak Ilmu", deskripsi: "Kondisi bagus, hanya dibaca satu kali.", dibuat: new Date("2026-10-18").getTime() },
  { id: 7, emoji: "🎸", nama: "Gitar Akustik", harga: 850000, kategori: "Hobi", penjual: "Musik Raya", deskripsi: "Senar baru, termasuk tas gitar.", dibuat: new Date("2026-10-22").getTime() },
  { id: 8, emoji: "🧩", nama: "Puzzle 1000 Keping", harga: 85000, kategori: "Hobi", penjual: "Dunia Main", deskripsi: "Gambar pemandangan gunung, lengkap.", dibuat: new Date("2026-10-26").getTime() }
];

// ---------- 2. STATE (data yang berubah-ubah) ----------
let produkPengguna = muatData(KUNCI_PRODUK);   // produk yang dijual pengguna
let keranjang = muatData(KUNCI_KERANJANG);     // isi: { id, jumlah }
let kategoriAktif = "Semua";

// ---------- 3. ELEMEN HTML ----------
const $ = (id) => document.getElementById(id);
const daftarProduk = $("daftarProduk"), kotakCari = $("kotakCari"), pilihUrutan = $("pilihUrutan");
const panel = $("panelKeranjang"), lapisan = $("lapisan");

// ---------- 4. FUNGSI BANTU ----------
// Membaca array dari localStorage (aman jika data rusak / kosong)
function muatData(kunci) {
  try { return JSON.parse(localStorage.getItem(kunci)) || []; }
  catch (e) { return []; }
}
function simpanData(kunci, data) {
  try { localStorage.setItem(kunci, JSON.stringify(data)); } catch (e) { /* abaikan */ }
}
// 150000 -> "Rp 150.000"
function formatRupiah(angka) { return "Rp " + angka.toLocaleString("id-ID"); }
// Mencegah teks buatan pengguna dibaca sebagai kode HTML
function aman(teks) {
  const div = document.createElement("div");
  div.textContent = teks;
  return div.innerHTML;
}
function semuaProduk() { return produkContoh.concat(produkPengguna); }
function cariProduk(id) { return semuaProduk().find((p) => p.id === id); }

// ---------- 5. MENAMPILKAN PRODUK ----------
// Menyaring (pencarian + kategori) lalu mengurutkan produk
function ambilProdukTampil() {
  const kata = kotakCari.value.trim().toLowerCase();
  const hasil = semuaProduk().filter((p) =>
    p.nama.toLowerCase().includes(kata) &&
    (kategoriAktif === "Semua" || p.kategori === kategoriAktif)
  );
  const urutan = pilihUrutan.value;
  if (urutan === "termurah") hasil.sort((a, b) => a.harga - b.harga);
  else if (urutan === "termahal") hasil.sort((a, b) => b.harga - a.harga);
  else hasil.sort((a, b) => b.dibuat - a.dibuat);   // terbaru di atas
  return hasil;
}

function tampilkanProduk() {
  const hasil = ambilProdukTampil();
  $("infoHasil").textContent = hasil.length + " produk ditemukan";
  if (hasil.length === 0) {
    daftarProduk.innerHTML = '<p class="kosong">Produk tidak ditemukan. Coba kata kunci atau kategori lain.</p>';
    return;
  }
  daftarProduk.innerHTML = hasil.map((p) => `
    <article class="kartu">
      <div class="gambar">${p.emoji}</div>
      <div class="isi">
        <span class="label">${aman(p.kategori)}</span>
        <h3>${aman(p.nama)}</h3>
        <p class="desk">${aman(p.deskripsi)}</p>
        <p class="penjual">Penjual: ${aman(p.penjual)}</p>
        <div class="bawah">
          <strong>${formatRupiah(p.harga)}</strong>
          <button class="tombol" data-aksi="tambah" data-id="${p.id}">+ Keranjang</button>
        </div>
      </div>
    </article>`).join("");
}

// Membuat tombol filter kategori dan pilihan kategori di form jual
function siapkanKategori() {
  $("filterKategori").innerHTML = ["Semua", ...KATEGORI].map((k) =>
    `<button class="chip ${k === kategoriAktif ? "aktif" : ""}" data-kategori="${k}">${k}</button>`
  ).join("");
  $("jualKategori").innerHTML = '<option value="">Pilih kategori</option>' +
    KATEGORI.map((k) => `<option value="${k}">${k}</option>`).join("");
}

// ---------- 6. KERANJANG ----------
function tambahKeKeranjang(id) {
  const item = keranjang.find((i) => i.id === id);
  if (item) item.jumlah++; else keranjang.push({ id: id, jumlah: 1 });
  perbaruiKeranjang();
}
function ubahJumlah(id, perubahan) {
  const item = keranjang.find((i) => i.id === id);
  if (!item) return;
  item.jumlah += perubahan;
  if (item.jumlah <= 0) hapusDariKeranjang(id); else perbaruiKeranjang();
}
function hapusDariKeranjang(id) {
  keranjang = keranjang.filter((i) => i.id !== id);
  perbaruiKeranjang();
}

// Menyimpan keranjang lalu menggambar ulang tampilannya
function perbaruiKeranjang() {
  simpanData(KUNCI_KERANJANG, keranjang);
  // buang item yang produknya sudah tidak ada
  const baris = keranjang.map((i) => ({ produk: cariProduk(i.id), jumlah: i.jumlah })).filter((b) => b.produk);
  const totalItem = baris.reduce((t, b) => t + b.jumlah, 0);
  const totalHarga = baris.reduce((t, b) => t + b.produk.harga * b.jumlah, 0);
  $("jumlahKeranjang").textContent = totalItem;

  if (baris.length === 0) {
    $("isiKeranjang").innerHTML = '<p class="info">Keranjang masih kosong. Pilih produk dulu, ya.</p>';
    $("formCheckout").hidden = true;
    return;
  }
  $("formCheckout").hidden = false;
  $("isiKeranjang").innerHTML = baris.map((b) => `
    <div class="item">
      <span class="emoji">${b.produk.emoji}</span>
      <div><div class="nama">${aman(b.produk.nama)}</div>${formatRupiah(b.produk.harga)}</div>
      <div class="aksi">
        <button data-aksi="kurang" data-id="${b.produk.id}" aria-label="Kurangi jumlah">−</button>
        <span>${b.jumlah}</span>
        <button data-aksi="tambah" data-id="${b.produk.id}" aria-label="Tambah jumlah">+</button>
        <button class="hapus" data-aksi="hapus" data-id="${b.produk.id}">Hapus</button>
      </div>
    </div>`).join("") +
    `<div class="total"><span>Total</span><span>${formatRupiah(totalHarga)}</span></div>`;
}

function bukaKeranjang() { panel.classList.add("terbuka"); lapisan.classList.add("terbuka"); }
function tutupKeranjang() { panel.classList.remove("terbuka"); lapisan.classList.remove("terbuka"); }

// ---------- 7. CHECKOUT ----------
function tampilError(idError, pesan) { $(idError).textContent = pesan; return pesan === ""; }

function validasiCheckout() {
  const nama = $("coNama").value.trim();
  const alamat = $("coAlamat").value.trim();
  const telepon = $("coTelepon").value.trim();
  // Hasil tiap pengecekan: true jika valid
  const a = tampilError("errNama", nama.length < 3 ? "Nama minimal 3 huruf." : "");
  const b = tampilError("errAlamat", alamat.length < 10 ? "Alamat minimal 10 karakter." : "");
  const c = tampilError("errTelepon", /^(\+62|62|0)8\d{8,11}$/.test(telepon) ? "" : "Nomor telepon tidak valid (contoh: 08123456789).");
  return a && b && c;
}

$("formCheckout").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validasiCheckout()) return;
  const nama = $("coNama").value.trim();
  keranjang = [];                       // kosongkan keranjang
  perbaruiKeranjang();
  e.target.reset();
  $("isiKeranjang").hidden = true;
  $("konfirmasi").hidden = false;
  $("konfirmasi").innerHTML = `<h3>Pesanan berhasil! 🎉</h3>
    <p>Terima kasih, ${aman(nama)}. Pesananmu sedang diproses.</p>
    <button class="tombol" id="lanjutBelanja">Lanjut belanja</button>`;
});

// ---------- 8. FORM JUAL BARANG ----------
$("formJual").addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = $("jualNama").value.trim();
  const harga = Number($("jualHarga").value);
  const kategori = $("jualKategori").value;
  const deskripsi = $("jualDeskripsi").value.trim();
  const pesan = $("pesanJual");

  if (nama.length < 3 || !(harga > 0) || kategori === "" || deskripsi === "") {
    pesan.textContent = "Lengkapi semua kolom: nama (min. 3 huruf), harga lebih dari 0, kategori, dan deskripsi.";
    pesan.className = "pesan lebar salah";
    return;
  }
  produkPengguna.push({
    id: Date.now(), emoji: EMOJI_KATEGORI[kategori], nama: nama, harga: Math.round(harga),
    kategori: kategori, penjual: "Kamu", deskripsi: deskripsi, dibuat: Date.now()
  });
  simpanData(KUNCI_PRODUK, produkPengguna);
  e.target.reset();
  pesan.textContent = "Barang berhasil dipasang! Lihat di daftar produk.";
  pesan.className = "pesan lebar benar";

  // Reset filter supaya produk baru langsung terlihat di paling atas
  kotakCari.value = ""; kategoriAktif = "Semua"; pilihUrutan.value = "terbaru";
  siapkanKategori();
  tampilkanProduk();
});

// ---------- 9. EVENT LAINNYA ----------
kotakCari.addEventListener("input", tampilkanProduk);          // cari saat mengetik
pilihUrutan.addEventListener("change", tampilkanProduk);

$("filterKategori").addEventListener("click", (e) => {
  const tombol = e.target.closest("[data-kategori]");
  if (!tombol) return;
  kategoriAktif = tombol.dataset.kategori;
  siapkanKategori();
  tampilkanProduk();
});

// Satu pendengar untuk semua tombol di daftar produk & keranjang
function tanganiAksi(e) {
  const tombol = e.target.closest("[data-aksi]");
  if (!tombol) return;
  const id = Number(tombol.dataset.id);
  if (tombol.dataset.aksi === "tambah") tambahKeKeranjang(id);
  if (tombol.dataset.aksi === "kurang") ubahJumlah(id, -1);
  if (tombol.dataset.aksi === "hapus") hapusDariKeranjang(id);
}
daftarProduk.addEventListener("click", tanganiAksi);
$("isiKeranjang").addEventListener("click", tanganiAksi);

$("tombolKeranjang").addEventListener("click", () => {
  $("konfirmasi").hidden = true;      // sembunyikan konfirmasi lama
  $("isiKeranjang").hidden = false;
  bukaKeranjang();
});
$("tutupKeranjang").addEventListener("click", tutupKeranjang);
lapisan.addEventListener("click", tutupKeranjang);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") tutupKeranjang(); });
$("konfirmasi").addEventListener("click", (e) => {
  if (e.target.id === "lanjutBelanja") { tutupKeranjang(); $("konfirmasi").hidden = true; $("isiKeranjang").hidden = false; }
});

// ---------- 10. MULAI ----------
siapkanKategori();
tampilkanProduk();
perbaruiKeranjang();
