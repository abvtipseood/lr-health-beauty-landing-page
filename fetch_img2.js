import https from 'https';

https.get('https://ibb.co/KjJmJLNZ', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/href="([^"]+)"/g) || [];
    const imgMatches = data.match(/src="([^"]+)"/g) || [];
    console.log("HREFs:", matches.filter(m => m.includes('ibb.co') || m.includes('.png') || m.includes('.jpg')));
    console.log("SRCs:", imgMatches.filter(m => m.includes('ibb.co') || m.includes('.png') || m.includes('.jpg')));
  });
}).on('error', (err) => {
  console.error(err);
});
