import Link from 'next/link';
export default function NotFound(){return <main className="not-found container"><h1>Product not found</h1><p>That product may have been removed or renamed.</p><Link href="/" className="primary-btn">Back to products</Link></main>}
