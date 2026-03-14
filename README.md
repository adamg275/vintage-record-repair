# Vintage Record Player Repair & Restoration

A Vite + React site for a vintage record player repair, restoration and resale business. The site is now structured around Decap-managed content so gallery images, shop listings, service pricing and key site copy can be updated without editing React components.

## What is in the project

- `src/content/site/settings.json`: SEO, brand, hero, about and contact content.
- `src/content/site/services.json`: repair pricing, service plans and the `How It Works` page content.
- `src/content/gallery/*.json`: gallery entries that point at uploaded images.
- `src/content/listings/*.json`: webshop listings with descriptions, status, price, image and optional checkout URL.
- `public/admin/config.yml`: Decap CMS collections for all editable content.

## CMS workflow

1. Open `/admin/` and log in with Netlify Identity.
2. Upload images through the CMS. Files are stored in `public/uploads`.
3. Create or edit gallery entries and shop listings.
4. Publish changes. The frontend reads the JSON content directly, so the gallery and shop update automatically.

## Shop and payment infrastructure

Each listing supports an optional `checkoutUrl`.

- Leave `checkoutUrl` blank to show an enquiry button.
- Add a PayPal checkout URL to show a direct `Buy now` button.

This keeps payments out of the frontend code while still allowing direct purchase flows.

## Netlify and Porkbun email setup

Recommended setup:

1. Host the website on Netlify.
2. Keep your domain email mailbox on Porkbun.
3. In Netlify, enable form notifications for the `enquiry` form and send them to `gary@vintagerecordplayers.co.uk`.
4. Use the custom domain in Netlify and keep the mailbox DNS records managed in Porkbun.
5. The production site URL is set to `https://vintagerecordplayers.co.uk` for canonical tags and richer SEO metadata.

## Accessibility and SEO notes

The site includes:

- semantic sections and page headings
- a skip link and focus-visible styling
- improved color contrast
- reduced-motion support
- dynamic page titles and meta descriptions
- basic schema markup
- a Netlify SPA redirect and favicon/manifest setup

## Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

