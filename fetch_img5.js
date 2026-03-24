import https from 'https';

https.get('https://ibb.co/tRZG74p', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const imgMatches = data.match(/src="([^"]+)"/g) || [];
    console.log("SRCs:", imgMatches.filter(m => m.includes('ibb.co') || m.includes('.png') || m.includes('.jpg')));
  });
}).on('error', (err) => {
  console.error(err);
});
