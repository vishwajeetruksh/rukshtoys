# Ruksh Gadgets — Static Next.js Storefront

A static product catalogue built with Next.js App Router. Products are managed from `src/data/products.ts` and product images live in `public/products/`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build static site

```bash
npm run build
```

The static site is generated into `out/` and can be deployed to any static host.

## Change business details

- WhatsApp number: search for `919180129974` and replace it with the business WhatsApp number.
- Facebook: replace `https://www.facebook.com/rukshgadgets` if the final Page URL differs.
- Domain: update `metadataBase` in `src/app/layout.tsx`.
- Products/prices: edit `src/data/products.ts`.
- Product photos: replace the SVG placeholders in `public/products/` with the real product images, keeping the same filenames or updating the `image` fields.
