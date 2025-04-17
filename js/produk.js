let count = 1;
let dataTable;

document.addEventListener('DOMContentLoaded', () => {
dataTable = $('#tabel-produk').DataTable({
    responsive: true
});

fetch('data/produk.json')
    .then(res => res.json())
    .then(data => {
    data.forEach(item => {
        dataTable.row.add([
        count++,
        item.nama,
        item.kategori,
        `Rp ${parseInt(item.harga).toLocaleString()}`,
        item.stok,
        item.deskripsi,
        item.pengrajin
        ]).draw();
    });
});

const form = document.getElementById('form-produk');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const kategori = document.getElementById('kategori').value;
    const harga = document.getElementById('harga').value;
    const stok = document.getElementById('stok').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const pengrajin = document.getElementById('pengrajin').value;

dataTable.row.add([
    count++,
    nama,
    kategori,
    `Rp ${parseInt(harga).toLocaleString()}`,
    stok,
    deskripsi,
    pengrajin
    ]).draw();

form.reset();
    });
});
