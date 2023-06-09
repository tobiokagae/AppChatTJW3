const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Menyajikan file statis dari folder 'public'
app.use(express.static('public'));

// Menangani koneksi socket
io.on('connection', (socket) => {
  console.log('User terhubung');

  // Menangani pesan yang diterima
  socket.on('chat message', (message) => {
    console.log('Pesan diterima:', message);

    // Mengirim pesan ke semua pengguna terhubung
    io.emit('chat message', message);
  });

  // Menangani pemutusan koneksi socket
  socket.on('disconnect', () => {
    console.log('User terputus');
  });
});

// Menjalankan server
const port = 3000;
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
