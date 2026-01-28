// server.js veya app.js dosyasında
const express = require('express');
const app = express();

// Content Security Policy header'ı düzelt
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' http://localhost:4200 ws://localhost:4200; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'"
  );
  next();
});

// CORS ayarları
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Diğer middleware ve route'lar...
app.use(express.json());
app.use(express.static('public'));

// Örnek route
app.get('/', (req, res) => {
  res.json({ message: 'Backend çalışıyor!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Form verilerini işle
  console.log('İletişim formu alındı:', { name, email, message });
  
  // Email gönderme veya veritabanına kaydetme işlemleri...
  
  res.json({ success: true, message: 'Mesaj alındı!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});