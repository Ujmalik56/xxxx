export default function handler(req, res) {
  // Permanent redirect - no page visible
  res.writeHead(301, {
    'Location': 'https://yt.webbloggin.online/nevir/',
    'Cache-Control': 'public, max-age=31536000'
  });
  res.end();
}
