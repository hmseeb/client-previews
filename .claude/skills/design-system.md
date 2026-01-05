# Design System

Service business website design system optimized for conversions.

## Color Tokens

```css
@theme {
  --color-forest: #2D5A27;
  --color-forest-dark: #1B3B1B;
  --color-forest-light: #4A7C43;
  --color-harvest: #D4A84B;
  --color-harvest-dark: #B8923F;
  --color-accent: #E85D04;
  --color-sage: #5A6B5A;
  --color-moss: #D1D9D1;
  --color-stone: #9CA89C;
  --color-cream: #F8FAF7;
}
```

**Usage:**
- 70% white/light backgrounds
- 20% forest green (headers, nav, footer)
- 10% gold/orange (CTAs, phone numbers)

## Typography

```css
--font-display: 'Playfair Display', Georgia, serif;  /* Headings */
--font-body: 'Source Sans 3', system-ui, sans-serif; /* Body */
--font-accent: 'Oswald', sans-serif;                 /* Stats */
```

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Sans+3:wght@400;600;700&family=Oswald:wght@500;600&display=swap');
```

## Component Patterns

### Buttons

```jsx
// Primary CTA (gold)
className="bg-harvest hover:bg-harvest-dark text-forest-dark font-semibold px-6 py-3 rounded-lg shadow-lg"

// Secondary (green)
className="bg-forest hover:bg-forest-dark text-white font-semibold px-6 py-3 rounded-lg"

// Phone (orange, urgent)
className="bg-accent text-white font-bold px-6 py-3 rounded-lg"
```

### Cards

```jsx
// Service card
className="bg-white p-6 rounded-xl border border-moss shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"

// Testimonial card
className="bg-white p-6 rounded-xl border-l-4 border-forest shadow-md"

// Stat card
className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
```

### Form Inputs

```jsx
className="w-full px-4 py-3 rounded-xl border border-moss focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all outline-none"
```

## Section Blueprints

### Hero
- Full-width background image with gradient overlay
- H1 headline with location
- Subheadline (trust signal)
- Dual CTAs: primary form + secondary phone
- Star rating display
- Min height: 600px desktop, 500px mobile

### Trust Bar
- Horizontal badges: Licensed, Insured, Local, Satisfaction
- Light background (cream or forest-dark)
- Icons + text pairs

### Services Grid
- 6 cards, 3 columns desktop, 1 mobile
- Icon in colored circle
- Title + description + "Learn More" link

### Stats Grid
- 4 stats: Years, Customers, Rating, Response Time
- Large numbers (Oswald font)
- Small labels uppercase

### Testimonials
- 3 cards with star ratings
- Quote text + customer name + location
- Source logo (Google, Yelp)

### Contact
- Split: info left, form right
- Form: name, phone, email, service dropdown, message
- Contact details with icons

### Mobile Sticky CTA
- Fixed bottom bar
- Two buttons: Call Now + Get Quote
- Shadow-up effect

## File Templates

### package.json
```json
{
  "name": "[branch-name]",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.18",
    "@vitejs/plugin-react": "^5.1.1",
    "lucide-react": "^0.562.0",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

### vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="[inline-svg]" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="[Business] - [Service] in [City]. Call [Phone]" />
    <title>[Business] | [Service] in [City]</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### src/main.jsx
```jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
```

### src/index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Sans+3:wght@400;600;700&family=Oswald:wght@500;600&display=swap');
@import "tailwindcss";

@theme {
  --color-forest: #2D5A27;
  --color-forest-dark: #1B3B1B;
  --color-forest-light: #4A7C43;
  --color-harvest: #D4A84B;
  --color-harvest-dark: #B8923F;
  --color-accent: #E85D04;
  --color-sage: #5A6B5A;
  --color-moss: #D1D9D1;
  --color-stone: #9CA89C;
  --color-cream: #F8FAF7;
  
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Source Sans 3', system-ui, sans-serif;
  --font-accent: 'Oswald', sans-serif;
}

html { scroll-behavior: smooth; }
body { font-family: var(--font-body); color: #1A1A1A; line-height: 1.6; }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); line-height: 1.1; }
.stat-number { font-family: var(--font-accent); }
```

## Lucide Icons

Common icons for services:
- TreeDeciduous, Leaf, Flower2, Scissors (landscaping)
- CloudLightning (storm/emergency)
- Droplets (irrigation)
- Shield, Award, BadgeCheck, ThumbsUp (trust)
- Phone, Mail, MapPin, Clock (contact)
- Star, Quote (testimonials)
- Menu, X, ChevronRight (navigation)
