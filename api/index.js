export default function handler(req, res) {
  res.statusCode = 301;
  res.setHeader('Location', 'https://google.com');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.end();
}
