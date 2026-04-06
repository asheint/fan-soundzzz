/**
 * Post-build prerender script.
 *
 * After `vite build`, injects the correct per-page <title>, <meta description>,
 * <link canonical> and og: tags into each route's static HTML — giving crawlers
 * real content on first-wave (before JavaScript executes).
 *
 * Tags are injected with data-rh="true" so react-helmet-async recognises and
 * replaces them cleanly on hydration, preventing duplicate tag warnings.
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
    path: '/',
    title: 'Fan Sounds for Sleep | Free White Noise | Fan SoundZzz',
    description:
      'Free high-quality fan sounds for better sleep. Stream realistic stand fan white noise online. No downloads needed. Fall asleep faster with Fan SoundZzz.',
    canonical: 'https://fansoundzzz.com/',
    ogUrl: 'https://fansoundzzz.com/',
  },
  {
    path: '/about',
    title: 'About | Fan SoundZzz',
    description:
      'Learn about Fan SoundZzz — the story behind the app, the science of fan white noise for sleep, and how it helps you fall asleep faster.',
    canonical: 'https://fansoundzzz.com/about',
    ogUrl: 'https://fansoundzzz.com/about',
  },
  {
    path: '/fan-models',
    title: 'Fan Models | Stand Fan, Ceiling Fan & More | Fan SoundZzz',
    description:
      'Browse all fan sound models on Fan SoundZzz. Choose from pedestal fans, ceiling fans, box fans and more — each with realistic white noise sounds for sleep.',
    canonical: 'https://fansoundzzz.com/fan-models',
    ogUrl: 'https://fansoundzzz.com/fan-models',
  },
  {
    path: '/stand-fan-controls',
    title: 'Stand Fan Controls | Online Fan Sound Machine | Fan SoundZzz',
    description:
      'Control your virtual stand fan online. Adjust speed and oscillation for the perfect white noise. Free fan sounds for sleep on Fan SoundZzz.',
    canonical: 'https://fansoundzzz.com/stand-fan-controls',
    ogUrl: 'https://fansoundzzz.com/stand-fan-controls',
  },
]

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

for (const route of routes) {
  let html = baseHtml

  // Inject title + meta description with data-rh="true" so react-helmet-async
  // recognises them as its own and replaces (not duplicates) on hydration
  const headTags = [
    `<title data-rh="true">${route.title}</title>`,
    `<meta data-rh="true" name="description" content="${route.description}" />`,
    `<link data-rh="true" rel="canonical" href="${route.canonical}" />`,
  ].join('\n    ')

  html = html.replace('</head>', `    ${headTags}\n  </head>`)

  // Update og: tags already in the static HTML to match this route
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${route.ogUrl}$2`
  )
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${route.title}$2`
  )
  html = html.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${route.description}$2`
  )

  // Write output
  if (route.path === '/') {
    // Homepage: overwrite dist/index.html directly
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8')
  } else {
    const routeDir = path.join(distDir, route.path.slice(1))
    fs.mkdirSync(routeDir, { recursive: true })
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8')
  }
  console.log(`✅ Pre-rendered: ${route.path}`)
}

console.log('\n🎉 Pre-rendering complete! All routes have static HTML.')

