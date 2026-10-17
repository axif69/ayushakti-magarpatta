const https = require('https');

https.get('https://www.ayushakti.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    const urls = html.match(/https?:\/\/[^"\s\<\>]+\.(?:jpg|png|webp|jpeg)/gi) || [];
    console.log(JSON.stringify([...new Set(urls)].filter(u => !u.includes('logo') && !u.includes('icon')), null, 2));
  });
});
