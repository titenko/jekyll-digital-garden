# Jekyll Digital Garden by Mative

Main page:

![screenshot](https://github.com/titenko/jekyll-garden/blob/main/assets/img/Screenshot-Jekyll-Garden-New.png)

Menu:

![screenshot](https://github.com/titenko/jekyll-garden/blob/main/assets/img/Screenshot-Jekyll-Garden-New-Menu.png)

Search

![screenshot](https://github.com/titenko/jekyll-garden/blob/main/assets/img/Screenshot-Jekyll-Garden-New-Search.png)

A simple Jekyll theme that turns your Obsidian notes into a beautiful website. 

**⚠️ This is a modified version of the original Jekyll Garden theme by [Jekyll-Garden](https://github.com/Jekyll-Garden/jekyll-garden.github.io).**  
This fork is customized and extended for a more modern, responsive, and feature-rich experience.  
**Original repository:** [https://github.com/Jekyll-Garden/jekyll-garden.github.io](https://github.com/Jekyll-Garden/jekyll-garden.github.io)

> **This version is based on the original Jekyll Garden theme but includes significant enhancements to layout, structure, and interactivity.**

---

## ✨ Key Modifications Compared to the Original

### 🖼 Redesigned Header
- Completely restructured site header layout
- Light/dark theme toggle with new JavaScript logic
- Site title dynamically fetched from `_config.yml`
- Logo added (editable via `/assets/img/`)
- Unified menu experience across mobile and desktop
- Responsive and modern dropdown menu with new JS code

### 🧱 Structural and Visual Changes
- New custom CSS for styling and layout improvements
- Moved the search bar to the top and enabled it on all pages
- Updated base page layout and structure
- Improved mobile viewport with appropriate meta tags
- Footer now displays the current year automatically
- Post template includes auto-generated post date
- Updated `Gemfile` with newer versions and added libraries
- Isolated header styles into `header.css`
- Layout refinements (text width, spacing, padding)

---

## 🧠 What It Does

Jekyll Garden connects your notes together with simple `[[note title]]` links, just like in Obsidian. You can find any note quickly with the built-in search that works as you type. The design focuses on your content with a clean, minimal look that works great on phones, tablets, and computers. Choose between dark and light themes, and when you want to write traditional blog posts, you can do that too. The theme also supports mathematical expressions if you need to write equations.

---

## 🚀 Getting Started

Getting started is straightforward. First, download this theme to your computer. Then edit the settings in the `_config.yml` file with your website information. Add your notes to the `_notes` folder, and finally deploy to GitHub Pages, Netlify, or any web hosting service.

### Basic Setup

Edit `_config.yml` with your information:

```yaml
title: "My Website"
heading: "Your Name"
description: "A brief description of your site"
url: "https://yoursite.com"
```

---

## 🌐 Deployment Options

You can deploy your site to a subdomain (like `notes.yoursite.com`) or a subdirectory (like `yoursite.com/notes`):

**For subdomains:**
```yaml
url: "https://notes.yoursite.com"
baseurl: ""
```

**For subdirectories:**
```yaml
url: "https://yoursite.com"
baseurl: "/notes"
```

See `SUBDOMAIN_SETUP.md` for more details.

---

## 📝 Writing Notes

### Creating a Note

Each note is just a markdown file with a title. You write your content in markdown format, just like you would in Obsidian or any other markdown editor.

```yaml
---
title: "My First Note"
date: 2025-01-15
---
```

---

## 🔗 Features

### Linking Notes Together
Connect your notes by using `[[note title]]` to link to other notes. This creates the same kind of connections you're used to in Obsidian, but now they work on your website too.

### Simple Linking
Write `[[note title]]` and the links are created automatically. When you hover over a link, you'll see a preview of the connected note.

### Search
Finding content is easy with the built-in search. It searches through all your notes instantly as you type.

### Backlinks
See which notes link to the current one you're reading.

### Math Support
Use `$x = y$` for inline math and `$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$` for complex equations.

---

## 📦 How to Publish

### GitHub Pages (Free)
Push your repository to GitHub and enable Pages in the settings.

### Netlify (Free)
Connect the GitHub repository to Netlify and deploy automatically.

### Local Testing
```bash
bundle install
bundle exec jekyll serve
```

---

## 🎨 Customization

- Edit styles: `assets/css/style.css`, `assets/css/header.css`
- Customize layout: `_layouts/`
- Add or tweak JS as needed

---

## 🤝 Contributing

Feel free to fork this version and improve it further. Pull requests are welcome!

---

## 📄 License

MIT License — use it freely in personal or commercial projects.
