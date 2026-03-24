import https from 'https';

https.get('https://ibb.co/KjJmJLNZ', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/<meta property="og:image"\s+content="([^"]+)"/i) || data.match(/<link rel="image_src"\s+href="([^"]+)"/i);
    if (match) {
      console.log(match[1]);
    } else {
      console.log('Not found');
    }
  });
}).on('error', (err) => {
  console.error(err);
});
