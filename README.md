This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Private case study

`/work/window-depot-network-os` is an invite-only Window Depot USA / Network OS writeup. It is not linked from `/work`, not included in the sitemap, and disallowed in `robots.txt`.

Set `CASE_STUDY_WDUSA_PASSWORD` in the environment. Do not commit the value.

On Vercel: Project Settings, Environment Variables. Add `CASE_STUDY_WDUSA_PASSWORD` for Production, and for Preview if a preview deploy should unlock. Redeploy after saving so the runtime picks it up. The password is compared on POST to `/api/work/window-depot-network-os/unlock`. A correct password sets an HttpOnly, Secure, SameSite=Lax cookie (`wdusa_network_os`) scoped to the case study path for 14 days. Changing the env value invalidates existing cookies.

Local `next dev` omits the Secure flag so the cookie can be stored on `http://localhost`. Production (`NODE_ENV=production`, including Vercel) always sets Secure.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
