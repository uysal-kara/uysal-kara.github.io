# uysal-kara.github.io

Hugo-based personal blog and portfolio site hosted on GitHub Pages.

## Features

- **Modern Design**: Clean responsive layout with smooth transitions and improved typography
- **SEO Optimized**: Meta tags with OpenGraph and Twitter Cards
- **Accessibility**: HTML5 structure with proper ARIA attributes
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Analytics**: Google Analytics integration
- **Social Icons**: Inline SVG icons for footer links

## Project Structure

```
├── content/             # Site content
│   ├── _index.md        # Homepage
│   ├── about/           # About page
│   └── posts/           # Blog posts
├── themes/mytheme/      # Hugo theme
│   ├── assets/css/      # Stylesheets
│   └── layouts/         # Page templates
├── images/              # Static images
├── hugo.toml            # Site configuration
├── 404.md               # Custom 404 page
└── CNAME                  # Custom domain
```

## Getting Started

### Local Development

1. Install Hugo extended version:
   ```bash
   # macOS
   brew install hugo

   # Windows (winget)
   winget install Hugo.Hugo

   # Or download from https://gohugo.io/installation/
   ```

2. Serve the site locally:
   ```bash
   hugo server
   ```

3. View at `http://127.0.0.1:1313/`

### Adding Blog Posts

Create new posts in `content/posts/` with the filename format: `title.md`

Example:
```markdown
---
title: "My New Post"
date: 2024-01-15
description: "Post description"
tags: [hugo, blog]
---

Your content here...
```

## Customization

- **Site Config**: Edit `hugo.toml` for title, description, social links, and analytics
- **Styles**: Modify `themes/mytheme/assets/css/main.css`
- **Layouts**: Update templates in `themes/mytheme/layouts/`
- **Analytics**: Set `params.analytics` in `hugo.toml`

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on push to `master`.
