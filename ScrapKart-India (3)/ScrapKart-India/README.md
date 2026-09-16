# ScrapKart India

A full-stack (React + Node/Express + MongoDB) website for a vehicle scrapping
business: free doorstep pickup, instant payment, and legal documentation for
end-of-life cars and bikes.

This is an **original build** — its structure and functionality (quote form,
cities served, services, process, FAQ, blog, contact) follow the common
pattern used by vehicle-scrapping platforms, but the copy, visual design, and
code are original to this project, with ScrapKart India's own branding and
contact details wired in throughout.

## Tech stack

**Frontend:** React 18, Vite, React Router, Tailwind CSS, Axios
**Backend:** Node.js, Express, MongoDB, Mongoose

## Project structure

```
ScrapKart-India/
├── frontend/
│   ├── src/
│   │   ├── components/   Header, Footer, forms, FAQ accordion, floating CTAs
│   │   ├── pages/         Home, Contact, Blog, BlogDetail, Privacy, Terms, 404
│   │   ├── api/           Axios client
│   │   └── constants.js  Brand name, phone, WhatsApp, email, cities, address
│   └── ...
└── backend/
    ├── models/            Quote, Contact, Blog (Mongoose schemas)
    ├── controllers/        Request handlers with validation
    ├── routes/             /api/quotes, /api/contact, /api/blogs
    ├── middleware/          Centralized error handling
    └── seed/               Seeds 3 original blog articles
```

## Getting started

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set your MongoDB connection string:

```
MONGODB_URI=mongodb://127.0.0.1:27017/scrapkart-india
PORT=5000
CLIENT_URL=http://localhost:5173
```

Then run:

```bash
npm run dev
```

The API starts at `http://localhost:5000`. Health check: `GET /api/health`.

Optional — seed the blog with 3 sample articles:

```bash
npm run seed
```

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The site opens at `http://localhost:5173`. It talks to the backend at the
URL set in `VITE_API_URL` (defaults to `http://localhost:5000/api`).

**If `npm install` was run before on a different machine/OS**, or if you
ever see an error mentioning `@rollup/rollup-<platform>` or "Cannot find
module" when running `npm run dev`, it's a known npm bug with platform-
specific optional dependencies, not an issue with the project itself. Fix:

```bash
rm -rf node_modules package-lock.json   # Windows PowerShell: Remove-Item -Recurse -Force node_modules; Remove-Item package-lock.json
npm cache clean --force
npm install
npm run dev
```

Also extract the project to a simple path without spaces or brackets (e.g.
`C:\Projects\ScrapKart-India`, not `Downloads\ScrapKart-India (1)`) —
Windows + npm can occasionally misbehave with those characters in the path.

## API endpoints

| Method | Route              | Purpose                          |
|--------|--------------------|-----------------------------------|
| POST   | `/api/quotes`      | Submit an instant quote request   |
| GET    | `/api/quotes`      | List quote requests (admin use)   |
| POST   | `/api/contact`     | Submit the contact form           |
| GET    | `/api/contact`     | List contact messages (admin use) |
| GET    | `/api/blogs`       | List published blog posts         |
| GET    | `/api/blogs/:slug` | Get a single blog post            |

All POST routes run server-side validation and return clear error messages;
all model fields have matching Mongoose-level validation as a second layer.

## Contact details used throughout the site

- **Call:** +91 73517 97042 (`tel:+917351797042`)
- **WhatsApp:** +91 73517 97042 (`https://wa.me/917351797042`)
- **Email:** Scrapkartindia.in@gmail.com (`mailto:...`)

These are wired into the header, footer, floating buttons, hero CTAs, and
the contact page.

## What's included vs. what you'll want to add

Included and working: quote form → MongoDB, contact form → MongoDB, blog
listing/detail from the database, FAQ accordion, responsive layout, working
call/WhatsApp/email links throughout, form validation with clear error and
success states, centralized backend error handling.

Not included (intentionally, so nothing ships as filler): real product
photography (the hero/about sections use an original SVG illustration —
swap in your own photos), an admin dashboard UI for viewing submitted quotes
and messages (the `GET` endpoints exist; you can pair them with your own
auth-gated admin page), city-specific landing pages, and live customer
review integration.

## Design notes

Color palette: deep green (`#0F4D34`) for trust/primary actions, copper
(`#B5651D`) as the metal/value accent, warm off-white background, near-black
ink text. Headings use Archivo, body text uses Work Sans. All tokens are
defined in `frontend/tailwind.config.js` — change them there to re-theme the
whole site.
