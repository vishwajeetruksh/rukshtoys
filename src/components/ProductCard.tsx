import Link from 'next/link';
import type { Product } from '@/data/products';

const money = (n: number) => `₹${n.toLocaleString('en-IN')}/-`;

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image-wrap">
        {product.badge && <span className="badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-body">
        <p className="category">{product.category}</p>
        <Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link>
        <div className="price-row">
          <strong>{money(product.price)}</strong>
          {product.actualPrice && <span>{money(product.actualPrice)}</span>}
        </div>
        <a
          className="whatsapp-btn"
          href={`https://wa.me/919180129974?text=${encodeURIComponent(`Hi Ruksh Gadgets, I want to order: ${product.name}`)}`}
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
