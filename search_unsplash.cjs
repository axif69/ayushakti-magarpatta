const https = require('https');

const query = 'ayurveda-treatment';
https.get(`https://unsplash.com/napi/search/photos?query=${query}&per_page=20`, {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
}, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('Results count:', json.results ? json.results.length : 0);
      if (json.results) {
        json.results.forEach(r => {
          console.log(r.id, r.alt_description, r.urls.regular);
        });
      }
    } catch(e) {
      console.error(e.message);
    }
  });
});
