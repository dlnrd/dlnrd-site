---
title: "dlnrd.dev"
summary: "My personal website (that you're likely on)"
image: "/projects/dlnrd-site/cover.jpg"
published: true
tags:
    - Astro
    - HTML 
    - CSS
    - JS
    - Github Actions
---

# [dlnrd.dev](https://github.com/dlnrd/dlnrd-site)
#### My personal porfolio website/place for stuff I want to share. Built with Astro.
## Goals for the project:
- Lightweight/Performant
- Easy to develop, maintain and update
- Content focused:
    - Projects
    - Posts
    - Photos
    - More?
- Minimalistic design

I wanted it to be easy to develop, maintain and update with minimal use of large web frameworks like React/Vue/Svelte while retaining all the flexibility and requirements of modern websites.
## What is Astro?
[Astro](https://astro.build) is a web framework for people like me who don’t really want to deal with web frameworks or JavaScript unless absolutely necessary. It’s built around the idea that most of the web doesn’t need to be a giant bundle of client-side code, so Astro ships zero JS by default, giving you fast, lightweight pages without any extra effort.

If you require more interactivity, Astro is fully compatible with lots of existing web frameworks React/Vue/Svelte which can be used simultaneously and only when needed and will automatically only include the required packages to make it as lightweight as possible.

Astro claims to be for "content-driven" websites, and from my experience, it actually delivers. It has automatic file based routing for content pages with very good compatibility with Markdown/MDX (the page you're reading is a markdown file rendered through Astro, with some CSS tweaks).
## Features
### Light/Dark mode
![lightdark](/projects/dlnrd-site/light-dark.jpg)
Using the sun/moon button on the header, you can toggle between light and dark mode. On first viewing of the site it will default to your devices default colour scheme but uses cookies to remember if you've changed it.
### Grid/List view
You can swap between list and grid view of the projects on either the home page or projects tab. Mostly personal preference, list will save some space as it doesn't display thumbnails for the projects. Mostly personal preference, list will save some space as it doesn't display thumbnails for the projects.
## Deployment
Previously utilising the npm module `gh-pages` to manage deployment of the site to Github Pages, I've since moved to using Github Actions to automatically rebuild and deploy the site when pushing to the repo. Doing so removed the necessity to have a main and dev branch (as `gh-pages` deploys all code regardless of if it's been commit or not), alongside removing the publicly available gh-pages branch for the built static site and simplified the build and deployment process dramatically.

The Github Action script can be found <a href="https://github.com/dlnrd/dlnrd-site/blob/main/.github/workflows/deploy.yml">here</a>.
