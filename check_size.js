import https from 'https';
import sizeOf from 'image-size';

https.get('https://i.ibb.co/WWLsLPD9/Screen-Shot-2026-03-23-at-15-50-42-PM.png', (res) => {
  const chunks = [];
  res.on('data', (chunk) => chunks.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    try {
      const dimensions = sizeOf(buffer);
      console.log(dimensions.width, dimensions.height);
    } catch (e) {
      console.error(e);
    }
  });
});
