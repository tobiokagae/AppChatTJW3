// Mendapatkan elemen input nama pengguna dan pesan
const inputUsername = document.getElementById('ACLI');
const inputMessage = document.getElementById('inputMessage');

// Mengirim nama pengguna dan pesan saat tombol Kirim diklik
document.getElementById('btnSend').addEventListener('click', () => {
    const username = inputUsername.value;
    const message = inputMessage.value;

  // Mengirim objek data yang berisi nama pengguna dan pesan
    socket.emit('chat message', { username: username, message: message });

  // Membersihkan input nama pengguna dan pesan
    inputUsername.value = '';
    inputMessage.value = '';
});
