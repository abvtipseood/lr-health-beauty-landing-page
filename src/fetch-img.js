const res = await fetch('https://ibb.co/nsp0TQHY');
const text = await res.text();
const match = text.match(/<meta property="og:image" content="([^"]+)"/);
if (match) console.log(match[1]);
