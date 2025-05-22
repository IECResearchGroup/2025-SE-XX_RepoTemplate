const express = require('express');
const app = express();
const port = 3000;

app.get('/api/client', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({ ip: clientIp, time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
