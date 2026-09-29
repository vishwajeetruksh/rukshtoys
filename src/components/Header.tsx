import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="logo" aria-label="Ruksh Gadgets home">
          <span className="logo-mark">RG</span>
          <span><strong>Ruksh</strong> Gadgets</span>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <a href="#products">Products</a>
          <a href="https://www.facebook.com/profile.php?id=61594020520042" target="_blank" rel="noreferrer">Facebook</a>
          <a className="nav-wa" href="https://wa.me/919180129974" target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
