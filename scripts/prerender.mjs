/**
 * Post-build prerender script.
 *
 * After `vite build`, this copies dist/index.html into each route directory
 * and injects the correct <title>, <meta description>, <link canonical>, and
 * <meta og:url> for that route — giving Google real HTML content to index
 * on its first-wave crawl (before JavaScript executes).
 *
 * No puppeteer / headless browser required.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')

const routes = [
  {
    path: '/about',
    title: 'About | Fan SoundZzz',
    description:
      'Learn about Fan SoundZzz — the story behind the app, the science of fan white noise for sleep, and how it helps you fall asleep faster.',
    canonical: 'https://fansoundzzz.com/about',
  },
  {
    path: '/fan-models',
    title: 'Fan Models | Stand Fan, Ceiling Fan & More | Fan SoundZzz',
    description:
      'Browse all available fan sound models on Fan SoundZzz. Choose from pedestal stand fans, ceiling fans, box fans and more — each with realistic white noise sounds for sleep.',
    canonical: 'https://fansoundzzz.com/fan-models',
  },
  {
    path: '/stand-fan-controls',
    title: 'Stand Fan Controls | Online Fan Sound Machine | Fan SoundZzz',
    description:
      'Control your virtual stand fan online. Adjust speed and oscillation for the perfect white noise. Free fan sounds for sleep on Fan SoundZzz.',
    canonical: 'https://fansoundzzz.com/stand-fan-controls',
  },
]

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

for (const route of routes) {
  let html = baseHtml

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${route.description}" />`
  )

  // Replace og:url
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${route.canonical}" />`
  )

  // Replace og:title
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  )

  // Replace og:description
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  )

  // Inject canonical (not present in base HTML — react-helmet-async handles
  // it client-side, so we add it statically here for the first-wave crawl)
  html = html.replace(
    '<link rel="manifest"',
    `<link rel="canonical" href="${route.canonical}" />\n    <link rel="manifest"`
  )

  // Write to dist/<route>/index.html
  const routeDir = path.join(distDir, route.path.slice(1))
  fs.mkdirSync(routeDir, { recursive: true })
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8')
  console.log(`✅ Pre-rendered: ${route.path}`)
}

console.log('\n🎉 Pre-rendering complete! All routes have static HTML.')
