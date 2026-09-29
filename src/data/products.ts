export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  actualPrice?: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: 'digital-warrior-robot',
    name: 'Digital Warrior Robot',
    category: 'Robots',
    price: 699,
    actualPrice: 1099,
    image: '/products/digital-warrior-robot.svg',
    badge: 'Popular',
    description: 'A fun interactive robot made for action-packed play and imaginative adventures.',
    features: ['Interactive play', 'Kid-friendly design', 'Great for gifting']
  },
  {
    slug: 'mini-sky-rider-helicopter',
    name: 'Mini Sky Rider Helicopter',
    category: 'Vehicles',
    price: 299,
    actualPrice: 599,
    image: '/products/mini-sky-rider-helicopter.svg',
    badge: 'Hot Deal',
    description: 'Bring flying fun into playtime with this compact toy helicopter.',
    features: ['Lightweight', 'Easy to play', 'Fun indoor toy']
  },
  {
    slug: 'gear-twist-fidget-ball',
    name: 'Gear Twist Fidget Ball',
    category: 'Fidget Toys',
    price: 199,
    actualPrice: 299,
    image: '/products/gear-twist-fidget-ball.svg',
    description: 'A satisfying gear-style fidget toy for hands-on play and everyday fun.',
    features: ['Hands-on play', 'Portable size', 'Gift-friendly']
  },
  {
    slug: 'boombuddy-mini-speaker',
    name: 'BoomBuddy Mini Speaker',
    category: 'Gadgets',
    price: 199,
    actualPrice: 299,
    image: '/products/boombuddy-mini-speaker.svg',
    description: 'A compact mini speaker that adds music and fun wherever you go.',
    features: ['Compact design', 'Portable', 'Great gift idea']
  },
  {
    slug: 'roboroll-stunt-rider',
    name: 'RoboRoll Stunt Rider',
    category: 'Vehicles',
    price: 499,
    actualPrice: 699,
    image: '/products/roboroll-stunt-rider.svg',
    badge: 'New',
    description: 'A playful stunt vehicle built to make toy-time more exciting.',
    features: ['Stunt-style play', 'Action focused', 'Fun for kids']
  },
  {
    slug: 'pink-kids-laptop',
    name: 'Pink Kids Learning Laptop',
    category: 'Learning Toys',
    price: 599,
    actualPrice: 799,
    image: '/products/pink-kids-laptop.svg',
    description: 'A playful kids laptop for pretend work, learning and imaginative play.',
    features: ['Learning-style play', 'Bright design', 'Gift-ready choice']
  }
];

export const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];
