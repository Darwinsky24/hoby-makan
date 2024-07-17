document.addEventListener('DOMContentLoaded', (event) => {
  const clickMeButton = document.getElementById('clickMeButton');
  const message = document.getElementById('message');

  clickMeButton.addEventListener('click', () => {
    message.textContent = 'Button Clicked!';
  });
});
// Contoh skrip JavaScript untuk menampilkan pesan setelah pengiriman formulir
document.getElementById('ratingForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah pengiriman default
  // Lakukan validasi atau tindakan lainnya
  alert('Terima kasih atas rating Anda!');
});

// login........................................................
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Contoh validasi sederhana
  if (!username || !password) {
    alert('Silakan isi username dan password.');
    return;
  }

  // Contoh autentikasi sederhana, bisa diganti dengan logika autentikasi yang sesuai
  if (username === 'admin' && password === 'password') {
    alert('Login berhasil!');
    // Redirect ke halaman home.html atau halaman lain
    location.href = '../index.html';
  } else {
    alert('Login gagal. Silakan cek kembali username dan password Anda.');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formLogin');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Anda bisa tambahkan logika validasi atau proses lainnya di sini
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
      alert('Silakan isi username dan password.');
      return;
    }

    // Contoh autentikasi sederhana, bisa diganti dengan logika autentikasi yang sesuai
    if (username === 'admin' && password === 'password') {
      alert('Login berhasil!');
      // Redirect ke halaman home.html atau halaman lain
      location.href = '../index.html';
    } else {
      alert('Login gagal. Silakan cek kembali username dan password Anda.');
    }
  });
});

function searchRecipe() {
    var searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
    var menus = {
      'asem asem daging': '..../Resep Detail/resepdetail.html',
      'ayam habang': '..../Resep Detail/resepdetail2.html',
      'mangut lele': '../Resep Detail/resepdetail3.html',
      'ayam goreng sasando': '..../Resep Detail/resepdetail4.html',
    };
  
    // Cek apakah nilai pencarian ada dalam objek menus
    if (menus.hasOwnProperty(searchValue)) {
      // Jika ada, arahkan langsung ke halaman detail resep
      window.location.href = menus[searchValue];
    } else {
      // Jika tidak ada, tampilkan pesan "Menu yang Anda cari tidak ada"
      alert('Menu yang Anda cari tidak ada');
    }
  }
  
