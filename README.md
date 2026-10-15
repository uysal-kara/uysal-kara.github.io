# uysal-kara.github.io

Jekyll-based personal blog and portfolio site hosted on GitHub Pages.

## Features

- **Modern Design**: Updated CSS with responsive layout, smooth transitions, and improved typography
- **SEO Optimized**: Enhanced meta tags with OpenGraph, Twitter Cards, and structured data
- **Accessibility**: Improved HTML5 structure with proper ARIA attributes
- **Syntax Highlighting**: Modern Dracula-inspired code highlighting
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Analytics**: Google Analytics integration ready
- **Social Icons**: Inline SVG icons for footer links

## Project Structure

```
├── _config.yml          # Site configuration (social links, analytics)
├── _includes/           # HTML snippets and includes
│   ├── analytics.html   # Google Analytics script
│   ├── meta.html        # SEO meta tags and OpenGraph
│   └── svg-icons.html   # Social media icon links
├── _layouts/            # Page layouts
│   ├── default.html     # Main layout with HTML5 boilerplate
│   ├── page.html        # Page layout (for static pages)
│   └── post.html        # Blog post layout with meta info
├── _posts/              # Blog posts (Markdown files)
├── _sass/               # SCSS stylesheets
│   ├── _highlights.scss # Syntax highlighting (Dracula theme)
│   ├── _reset.scss      # Modern CSS reset
│   ├── _svg-icons.scss  # Social icon styling
│   └── _variables.scss  # Design tokens and breakpoints
├── images/              # Static images
├── 404.md               # Custom 404 page
├── about.md             # About page with expertise section
├── index.html           # Homepage with blog posts
├── style.scss           # Main stylesheet
└── Gemfile              # Ruby gems for local development
```

## Getting Started

### Local Development

1. Install Jekyll and dependencies:
   ```bash
   gem install bundler
   bundle install
   ```

2. Serve the site locally:
   ```bash
   jekyll serve
   ```

3. View at `http://127.0.0.1:4000/`

### Adding Blog Posts

Create new posts in `_posts/` with the filename format: `YYYY-MM-DD-title.md`

Example:
```markdown
---
layout: post
title: "My New Post"
date: 2024-01-15 10:00:00
tags: [jekyll, blog]
---

Your content here...
```

## Customization

- **Social Links**: Update `_config.yml` footer-links section
- **Colors/Design**: Modify `_sass/_variables.scss` for design tokens
- **Meta Tags**: Update `_includes/meta.html` for SEO
- **Analytics**: Add your Google Analytics ID to `_config.yml`

## Credits

- [Jekyll](https://github.com/jekyll/jekyll) - Static site generator
- [SVG Icons](https://github.com/neilorangepeel/Free-Social-Icons) - Social media icons
- [Source Sans Pro](https://fonts.google.com/) - Google Font for typography
- [Dracula Theme](https://draculatheme.com/) - Syntax highlighting colors
