import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import Link from 'next/link';

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  const wa = `https://wa.me/919180129974?text=${encodeURIComponent(`Hi Ruksh Gadgets, I want to order: ${product.name}`)}`;
  return <main className="detail-page container"><Link href="/" className="back">← Back to products</Link><div className="detail-grid"><div className="detail-image"><img src={product.image} alt={product.name} /></div><div className="detail-copy"><p className="category">{product.category}</p><h1>{product.name}</h1><p className="detail-desc">{product.description}</p><div className="detail-price"><strong>₹{product.price.toLocaleString('en-IN')}/-</strong>{product.actualPrice && <span>₹{product.actualPrice.toLocaleString('en-IN')}/-</span>}</div><a href={wa} target="_blank" rel="noreferrer" className="primary-btn large">Order on WhatsApp</a><h3>Product highlights</h3><ul>{product.features.map(f => <li key={f}>{f}</li>)}</ul><p className="delivery">🚚 Pan-India Delivery Available</p></div></div></main>;
}
