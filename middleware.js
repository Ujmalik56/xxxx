export default function middleware(req) {
  const url = new URL(req.url);
  
  // Instant redirect to your website
  return Response.redirect('https://yt.webbloggin.online/nevir/', 301);
}

export const config = {
  matcher: '/:path*'
};
