
const pengrajinData = [
    {
        nama: "Ibu Retno",
        asal: "Bantul, Yogyakarta",
        keahlian: "Anyaman bambu dan batok kelapa",
        foto: "ibu-retno.jpg"
    },
    {
        nama: "Bapak Gede Sujana",
        asal: "Gianyar, Bali",
        keahlian: "Ukiran kayu dan patung tradisional",
        foto: "bapak-gede.jpg"
    },
    {
        nama: "Ibu Sri Wahyuni",
        asal: "Klaten, Jawa Tengah",
        keahlian: "Kerajinan lurik dan tas tenun",
        foto: "ibu-sri.jpg"
    },
    {
        nama: "Bapak Sumarna",
        asal: "Bandung, Jawa Barat",
        keahlian: "Alat musik bambu dan dekorasi rumah",
        foto: "bapak-sumarna.jpg"
    },
    {
        nama: "Bapak Sumarna",
        asal: "Bandung, Jawa Barat",
        keahlian: "Alat musik bambu dan dekorasi rumah",
        foto: "bapak-sumarna.jpg"
    },
    {
        nama: "Bapak Sumarna",
        asal: "Bandung, Jawa Barat",
        keahlian: "Alat musik bambu dan dekorasi rumah",
        foto: "bapak-sumarna.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    fetch("data/pengrajin_data.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("pengrajin-list");

            for (const daerah in data) {
                const section = document.createElement("section");
                section.classList.add("mb-5");

                const title = document.createElement("h3");
                title.classList.add("mb-4", "text-primary", "border-bottom", "pb-2");
                title.textContent = daerah;

                const row = document.createElement("div");
                row.classList.add("row", "g-4");

                data[daerah].forEach(p => {
                    const col = document.createElement("div");
                    col.classList.add("col-md-4");

                    col.innerHTML = `
                        <div class="card shadow-sm h-100">
                            <img src="${p.foto}" class="card-img-top" alt="${p.nama}">
                            <div class="card-body">
                                <h5 class="card-title">${p.nama}</h5>
                                <p class="card-text">${p.deskripsi}</p>
                                <span class="badge bg-success mb-2">${p.keahlian}</span>
                                <div class="rating">
                                    ${generateStars(p.rating)}
                                    <small class="text-muted ms-2">${p.rating.toFixed(1)} / 5</small>
                                </div>
                            </div>
                        </div>
                    `;
                    row.appendChild(col);
                });

                section.appendChild(title);
                section.appendChild(row);
                container.appendChild(section);
            }
        })
        .catch(err => {
            console.error("Gagal memuat data pengrajin:", err);
        });
});

function generateStars(rating) {
    const fullStar = '<i class="bi bi-star-fill text-warning"></i>';
    const halfStar = '<i class="bi bi-star-half text-warning"></i>';
    const emptyStar = '<i class="bi bi-star text-warning"></i>';
    let stars = "";

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars += fullStar;
        } else if (rating >= i - 0.5) {
            stars += halfStar;
        } else {
            stars += emptyStar;
        }
    }
    return stars;
}

