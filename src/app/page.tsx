import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">RUKSH GADGETS 🛍️</span>
            <h1>Fun finds for <span>curious minds.</span></h1>
            <p>Discover exciting toys, smart little gadgets and gift-ready picks — all in one place.</p>
            <div className="hero-actions"><a href="#products" className="primary-btn">Explore Products</a><a href="https://wa.me/919180129974?text=Hi%20Ruksh%20Gadgets%2C%20I%20want%20to%20know%20more%20about%20your%20products." className="secondary-btn" target="_blank" rel="noreferrer">Chat on WhatsApp</a></div>
            <div className="trust-row"><span>✓ Pan-India Delivery</span><span>✓ Easy WhatsApp Orders</span></div>
          </div>
          <div className="hero-card"><div className="floating">✨</div><div className="hero-bubble">TOYS<br/><strong>& GADGETS</strong></div><div className="hero-spark">⚙️</div><div className="hero-spark second">🚀</div></div>
        </div>
      </section>

      <section id="products" className="products-section container">
        <div className="section-head"><div><p className="eyebrow">SHOP RUKSH</p><h2>Explore our products</h2></div><p>Fresh picks for playtime, gifting and everyday fun.</p></div>
        <div className="category-row">{categories.map(c => <a key={c} href={c === 'All' ? '#products' : `#${c.toLowerCase().replace(/\s+/g,'-')}`}>{c}</a>)}</div>
        <div className="product-grid">{products.map(product => <ProductCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="cta"><div className="container cta-inner"><div><p className="eyebrow">NEED HELP CHOOSING?</p><h2>Send us a message.</h2><p>Tell us what you’re looking for and we’ll help you find a suitable pick.</p></div><a href="https://wa.me/919180129974?text=Hi%20Ruksh%20Gadgets%2C%20I%20need%20help%20choosing%20a%20product." target="_blank" rel="noreferrer" className="primary-btn">Message on WhatsApp →</a></div></section>
    </main>
  );
}
