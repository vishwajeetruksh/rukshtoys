import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Ruksh Gadgets | Toys, Gadgets & More',
  description: 'Shop fun toys, gadgets and gift-ready products from Ruksh Gadgets. Pan-India delivery available.',
  metadataBase: new URL('https://rukshgadgets.com')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<footer className="footer"><div className="container footer-inner"><div><strong>Ruksh Gadgets</strong><p>Your A–Z Online Store</p></div><div className="footer-links"><a href="https://www.facebook.com/profile.php?id=61594020520042" target="_blank" rel="noreferrer">Facebook</a><a href="https://wa.me/919180129974" target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="copyright">© {new Date().getFullYear()} Ruksh Gadgets. All rights reserved.</div></footer></body></html>;
}
