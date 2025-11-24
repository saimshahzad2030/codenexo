import { SERVICES } from '@/constants/services';

export default function sitemap() {
  const now = new Date();
  return [
    { url: 'https://codenexo.vercel.app', lastModified: now },
    { url: 'https://codenexo.vercel.app/services', lastModified: now },
    ...SERVICES.map(s => ({
      url: `https://codenexo.vercel.app/services/${s.slug}`,
      lastModified: now,
    })),
    { url: 'https://codenexo.vercel.app/about', lastModified: now },
    { url: 'https://codenexo.vercel.app/contact', lastModified: now },
  ];
}
