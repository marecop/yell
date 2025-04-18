const http = require('http');
const fs = require('fs');
const path = require('path');

// 設置環境變數
const port = process.env.PORT || 10000;

// 創建 HTML 響應
const maintenanceHtml = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>黃色航空 - 即將上線</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #f3f4f6;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      max-width: 500px;
      padding: 2rem;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h1 {
      color: #f59e0b;
      font-size: 1.875rem;
      margin-bottom: 1rem;
    }
    p {
      color: #4b5563;
      margin-bottom: 1.5rem;
    }
    .contact-info {
      color: #6b7280;
    }
    .contact-info p {
      margin: 0.5rem 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>黃色航空</h1>
    <p>我們的網站即將上線！請耐心等待，或通過以下方式與我們聯繫。</p>
    <div class="contact-info">
      <p>電話: +886 2123 4567</p>
      <p>電子郵件: info@yellowairlines.com</p>
    </div>
  </div>
</body>
</html>
`;

// 創建伺服器
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(maintenanceHtml);
});

// 啟動伺服器
server.listen(port, () => {
  console.log(`伺服器運行在 http://localhost:${port}`);
}); 