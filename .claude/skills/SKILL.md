---
name: client-website-preview
description: Generate and deploy client website previews for landscaping, tree care, lawn maintenance, and outdoor service businesses. Use when user provides business data (name, phone, address, services) and wants a live preview website. Creates React/Vite/Tailwind site, pushes to GitHub branch, and returns Vercel preview URL.
---

# Client Website Preview

Build and deploy client preview websites from business data.

## Prerequisites

**Required:** GitHub MCP connected  
**Recommended:** Vercel MCP connected (for deployment verification)

Check prerequisites before proceeding:
1. Test GitHub MCP with any github operation
2. If GitHub unavailable → STOP, notify user
3. Check Vercel MCP availability, note for later

## Input Requirements

Minimum required:
- Business name
- Phone number  
- Address/service area

Optional:
- Services offered
- Hours of operation
- Taglines/USPs
- Testimonials
- Brand colors

## Workflow

### 1. Generate Branch Name

Convert business name to kebab-case:
- "Green Hawaii Landscaping" → `green-hawaii`
- "Bob's Tree Service" → `bobs-tree-service`
- Remove special characters, suffixes (LLC, Inc), lowercase

### 2. Generate Images

**Primary:** Use nanobanana image generation
- Hero: Professional service scene matching business type/location
- Gallery: 4-6 realistic project photos

**Fallback:** Unsplash URLs (see references/fallback-images.md)

### 3. Build Website

**Stack:** Vite + React + Tailwind CSS v4

**Design System:** See references/design-system.md for:
- Color tokens (forest/gold palette)
- Typography (Playfair Display + Source Sans)
- Component patterns
- Section blueprints

**Required Sections:**
1. Top bar (phone, hours, location)
2. Navigation header
3. Hero (headline, CTAs, rating)
4. Trust bar
5. Services grid (6 cards)
6. About/Why Choose Us + stats
7. Gallery
8. Testimonials (3 cards)
9. Service area + map
10. Contact section + form
11. Emergency banner
12. Footer
13. Mobile sticky CTA

### 4. Push to GitHub

Repository: `hmseeb/client-previews`

```
github:create_branch → [branch-name] from main
github:create_or_update_file → package.json
github:create_or_update_file → vite.config.js
github:create_or_update_file → index.html
github:create_or_update_file → src/main.jsx
github:create_or_update_file → src/index.css
github:create_or_update_file → src/App.jsx
```

### 5. Verify Deployment

**If Vercel MCP available:**
1. Wait 30-60 seconds
2. `Vercel:list_deployments` for project
3. Check status → if error, get build logs and debug
4. Fix and re-push if needed

**If Vercel MCP unavailable:**
- Provide expected URL
- Ask user to verify manually

### 6. Deliver

**URL Pattern:**
```
https://client-previews-git-[branch]-badaaas.vercel.app
```

**Response format:**
```
done! here's your preview:

**[Business Name]**
🔗 [preview URL]

built with:
- [key features]
- [image source: AI-generated or unsplash]
```

## Error Handling

| Error | Action |
|-------|--------|
| GitHub MCP missing | STOP, notify user |
| Branch exists | Ask: overwrite or new name? |
| Image gen fails | Use unsplash fallback |
| Push fails | Retry once, then notify |
| Vercel build fails | Fetch logs, fix, re-push |
| Vercel MCP missing | Continue, manual verify |
