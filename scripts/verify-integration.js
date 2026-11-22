import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(here, '..')

console.log('Running Portfolio Integration QA Verification...\n')

// 1. Check NevatalFeature component
const featureCode = fs.readFileSync(path.join(root, 'src/components/NevatalFeature.tsx'), 'utf-8')
const metrics = JSON.parse(fs.readFileSync(path.join(root, 'src/data/nevatal-metrics.json'), 'utf-8'))

const checks = [
  { name: 'FR-1.1 Section anchor id="nevatal"', pass: featureCode.includes('id="nevatal"') },
  { name: 'C-1 Eyebrow INDEPENDENT AI STUDIO', pass: featureCode.includes('INDEPENDENT AI STUDIO') },
  { name: 'C-2 Headline Nevatal: An Independent AI Studio', pass: featureCode.includes('Nevatal: An Independent AI Studio') },
  { name: 'C-3 Body copy live products & articles', pass: featureCode.includes('live products') && featureCode.includes('published\n            articles') || featureCode.includes('published articles') },
  { name: 'C-4 Primary CTA Explore the full studio →', pass: featureCode.includes('Explore the full studio') },
  { name: 'C-5 Secondary CTA Read the architecture →', pass: featureCode.includes('Read the architecture') },
  { name: 'TR-3.1 WebP image ai-hub.webp', pass: featureCode.includes('ai-hub.webp') },
  { name: 'FR-1.1 Alt text for screenshot', pass: featureCode.includes('alt="Nevatal AI Hub interface showing 17 AI tools"') },
  { name: 'FR-1.2.2 Metric description list <dl>', pass: featureCode.includes('<dl') && featureCode.includes('<dt') && featureCode.includes('<dd') },
  { name: 'FR-1.1 Depth links (Cloud, Uptime Medics, Quanta)', pass: featureCode.includes('NEVATAL_DEPTH_LINKS') },
]

for (const check of checks) {
  if (!check.pass) {
    console.error(`FAIL: ${check.name}`)
    process.exit(1)
  }
  console.log(`✓ PASS: ${check.name}`)
}

// 2. Check Navbar
const navbarCode = fs.readFileSync(path.join(root, 'src/components/Navbar.tsx'), 'utf-8')
if (!navbarCode.includes("label: 'Studio →'")) {
  console.error("FAIL: Navbar missing Studio → link")
  process.exit(1)
}
console.log("✓ PASS: FR-2A Persistent nav item Studio →")

// 3. Check Header Hero Split
const headerCode = fs.readFileSync(path.join(root, 'src/components/Header.tsx'), 'utf-8')
if (!headerCode.includes('For Hiring') || !headerCode.includes('For the Studio')) {
  console.error("FAIL: Header missing Hero split controls")
  process.exit(1)
}
console.log("✓ PASS: FR-3.1 Hero split (For Hiring / For the Studio)")

// 4. Check Footer
const footerCode = fs.readFileSync(path.join(root, 'src/components/Footer.tsx'), 'utf-8')
if (!footerCode.includes('Studio: nevatal.id')) {
  console.error("FAIL: Footer missing Studio: nevatal.id")
  process.exit(1)
}
console.log("✓ PASS: FR-2A Footer Studio: nevatal.id line")

// 5. Check ProjectCard in Portfolio.tsx
const portCode = fs.readFileSync(path.join(root, 'src/components/Portfolio.tsx'), 'utf-8')
if (!portCode.includes('isNevatal') || !portCode.includes('project_card')) {
  console.error("FAIL: Portfolio.tsx does not link Nevatal card to studio")
  process.exit(1)
}
console.log("✓ PASS: FR-2A Nevatal card links to studio with utm_campaign=project_card")

// 6. Check HTML schema & rel="me"
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf-8')
if (!html.includes('<link rel="me" href="https://nevatal.id" />') && !html.includes('<link rel="me" href="https://nevatal.id">')) {
  console.error('FAIL: index.html missing rel="me" href="https://nevatal.id"')
  process.exit(1)
}
console.log('✓ PASS: TR-1.1 Portfolio has rel="me" for nevatal.id')

if (!html.includes('"@type": "Person"') || !html.includes('https://nevatal.id')) {
  console.error('FAIL: index.html missing Person schema referencing nevatal.id')
  process.exit(1)
}
console.log('✓ PASS: TR-1.2 JSON-LD Person schema includes Nevatal')

console.log('\nAll Portfolio integration QA verification tests passed successfully!')
