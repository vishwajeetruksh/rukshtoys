import type { MetadataRoute } from 'next';
import { products } from '@/data/products';

export const dynamic = 'force-static';

const siteUrl = new URL('https://rukshgadgets.com');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl.toString(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...products.map(({ slug }) => ({
      url: new URL(`/products/${slug}`, siteUrl).toString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    }))
  ];
}