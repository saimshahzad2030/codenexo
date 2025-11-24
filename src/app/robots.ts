export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://codenexo.vercel.app/sitemap.xml',
  };
}
