import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const TODAY = '2026-09-18';

const CORE_PAGES = [
  {
    path: '',
    changefreq: 'weekly',
    priority: '1.0',
    images: [
      {
        path: '/og-image.png',
        title: 'Thirza Ahmad Tsaqif Portfolio Showcase',
        caption: 'AI Engineer and Full-Stack Developer Portfolio showcasing RAG, LLMs, and Software Engineering projects'
      },
      {
        path: '/profile.png',
        title: 'Thirza Ahmad Tsaqif Profile Photo',
        caption: 'Thirza Ahmad Tsaqif - AI & Full-Stack Software Engineer'
      }
    ]
  },
  {
    path: '/portfolio',
    changefreq: 'weekly',
    priority: '0.95',
    images: [
      {
        path: '/images/projects/ragreader.png',
        title: 'RAGReader Project Showcase',
        caption: 'Evaluation platform for benchmarking Retrieval-Augmented Generation pipelines'
      },
      {
        path: '/images/projects/crag.png',
        title: 'Multi-Hop CRAG Pipeline Architecture',
        caption: 'Corrective RAG pipeline combining Hybrid Retrieval and dynamic context evaluation'
      },
      {
        path: '/images/projects/nevatal.jpg',
        title: 'Nevatal AI Workspace',
        caption: 'Full-stack AI platform built for Google Chrome Built-in AI Challenge 2025'
      },
      {
        path: '/images/projects/ollie.png',
        title: 'Ollie Chatbot Assistant',
        caption: 'HR and employee assistant with FaceNet facial verification and custom Indonesian voice'
      },
      {
        path: '/images/projects/5s-ai-camera.png',
        title: '5S AI Camera Computer Vision',
        caption: 'Industrial computer vision 5S compliance monitoring using ConvNeXt and vision-language models'
      },
      {
        path: '/images/projects/5why-ai.png',
        title: '5Why AI Root Cause Analysis',
        caption: 'Automated 5-Whys diagnostic engine powered by dense-sparse RAG and DeepSeek'
      },
      {
        path: '/images/projects/pasal.png',
        title: 'Pasal Voice Assistant',
        caption: 'Self-hosted privacy-focused Indonesian voice assistant with local LLM and speech synthesis'
      },
      {
        path: '/images/projects/url-shortener.png',
        title: 'Production URL Shortener',
        caption: 'High-performance short link platform with Redis rate-limiting and analytics'
      },
      {
        path: '/images/projects/chattydesk.jpg',
        title: 'ChattyDesk Desktop Application',
        caption: 'Cross-platform desktop application for multi-LLM workflows'
      },
      {
        path: '/images/projects/siinven.png',
        title: 'SiInven Enterprise Inventory System',
        caption: 'Enterprise inventory management system built with Spring Boot, PostgreSQL, and React'
      },
      {
        path: '/images/projects/sit.png',
        title: 'Integrated Information Systems BEM UI',
        caption: 'Enterprise portal and LINE Bot managing operations for 200+ members'
      }
    ]
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: '0.90',
    images: [
      {
        path: '/profile.png',
        title: 'Thirza Ahmad Tsaqif Profile',
        caption: 'Information Systems student at Universitas Indonesia specializing in AI and Full-Stack development'
      }
    ]
  },
  {
    path: '/experiences',
    changefreq: 'monthly',
    priority: '0.85'
  },
  {
    path: '/writings',
    changefreq: 'weekly',
    priority: '0.85'
  },
  {
    path: '/skills',
    changefreq: 'monthly',
    priority: '0.80'
  },
  {
    path: '/education',
    changefreq: 'monthly',
    priority: '0.70'
  },
  {
    path: '/contact',
    changefreq: 'monthly',
    priority: '0.70'
  },
  {
    path: '/CV_ThirzaAhmadTsaqif.pdf',
    changefreq: 'monthly',
    priority: '0.85'
  },
  {
    path: '/llms.txt',
    changefreq: 'weekly',
    priority: '0.80'
  },
  {
    path: '/llms-full.txt',
    changefreq: 'weekly',
    priority: '0.75'
  }
];

const PROJECTS = [
  {
    slug: 'ragreader',
    title: 'RAGReader - Benchmarking & Evaluation Platform for RAG',
    caption: 'Evaluation platform for benchmarking and identifying the most effective Retrieval-Augmented Generation pipeline configurations',
    priority: '0.85',
    image: '/images/projects/ragreader.png'
  },
  {
    slug: 'multi-hop-corrective-with-reranker-rag-pipeline',
    title: 'Multi Hop Corrective with Reranker RAG Pipeline (CRAG)',
    caption: 'Multi-Hop RAG pipeline combining Hybrid Retrieval with Corrective RAG dynamic context evaluation to eliminate hallucinations',
    priority: '0.85',
    image: '/images/projects/crag.png'
  },
  {
    slug: 'nevatal',
    title: 'Nevatal - Full-Stack AI Functions Platform',
    caption: 'Full-stack AI platform developed for Google Chrome Built-in AI Challenge 2025 integrating Gemini and document RAG',
    priority: '0.85',
    image: '/images/projects/nevatal.jpg'
  },
  {
    slug: 'integrated-information-systems-sit',
    title: 'Integrated Information Systems (SIT) - BEM Universitas Indonesia',
    caption: 'Enterprise student affairs and finance system with LINE Messaging Bot using Django, Firebase, and Railway',
    priority: '0.80',
    image: '/images/projects/sit.png'
  },
  {
    slug: 'ollie-chatbot',
    title: 'Ollie Chatbot - HR Assistant with Biometrics & Voice',
    caption: 'HR and employee assistant chatbot for OPPO Manufacturing Indonesia with FaceNet facial verification, custom Indonesian xTTS, and Faiss RAG',
    priority: '0.85',
    image: '/images/projects/ollie.png'
  },
  {
    slug: '5s-ai-camera',
    title: '5S AI Camera - Factory Compliance Computer Vision',
    caption: 'Real-time industrial computer vision 5S compliance monitoring system using ConvNeXt, PyTorch, Ollama Gemma Vision, and OwlViT',
    priority: '0.85',
    image: '/images/projects/5s-ai-camera.png'
  },
  {
    slug: '5why-ai-application',
    title: '5Why AI Application - Automated Root Cause Analysis',
    caption: 'AI-powered Root Cause Analysis tool leveraging Dense and Sparse RAG with Faiss, MiniLM, and DeepSeek LLMs',
    priority: '0.85',
    image: '/images/projects/5why-ai.png'
  },
  {
    slug: 'kjri-new-york-chatbot-maleo-ai',
    title: 'KJRI New York Chatbot - Consular AI Assistant',
    caption: 'Consular inquiry chatbot for Indonesian Consulate General in New York using FastAPI, Vectorshift, and OpenAI GPT',
    priority: '0.80'
  },
  {
    slug: 'pfn-chatbot',
    title: 'PFN Chatbot - Film Metadata & Archive AI Assistant',
    caption: 'AI chatbot for Produksi Film Negara delivering metadata about film archives and Indonesian cinema history',
    priority: '0.80'
  },
  {
    slug: 'jne-self-kiosk-backend',
    title: 'JNE Self Kiosk Backend - High Concurrency Parcel API',
    caption: 'Parcel self-service delivery backend service built with Go (Labstack Echo) and automated GitHub Actions CI/CD',
    priority: '0.80'
  },
  {
    slug: 'pasal-voice-assistant',
    title: 'Pasal Voice Assistant - Local Indonesian Voice AI',
    caption: 'Fully self-hosted Indonesian voice assistant with Indonesian TTS/STT, Gemma 3, Ollama GemmaEmbedding, and ChromaDB',
    priority: '0.85',
    image: '/images/projects/pasal.png'
  },
  {
    slug: 'daily-task-wallpaper-generator-with-genshin-impact-theme',
    title: 'Daily Task Wallpaper Generator - Genshin Impact Theme',
    caption: 'Automated daily wallpaper generator syncing Google Calendar tasks with dynamic Genshin Impact desktop backgrounds',
    priority: '0.80',
    image: '/images/projects/genshin.png'
  },
  {
    slug: 'url-shortener',
    title: 'Production URL Shortener Platform',
    caption: 'Production-ready short link service with Redis rate-limiting, click analytics, and PostgreSQL built with Django',
    priority: '0.85',
    image: '/images/projects/url-shortener.png'
  },
  {
    slug: 'my-hearing',
    title: 'My Hearing - Hearing Health Management App',
    caption: 'Mobile hearing health application with real-time decibel monitoring, noise hazard alerts, and audiometry tracking',
    priority: '0.80',
    image: '/images/projects/myhearing.png'
  },
  {
    slug: 'siinven',
    title: 'SiInven - Enterprise Inventory Management System',
    caption: 'Enterprise inventory management system developed with Java Spring Boot, PostgreSQL, Docker, React, and Tailwind CSS',
    priority: '0.80',
    image: '/images/projects/siinven.png'
  },
  {
    slug: 'etl-university-project',
    title: 'ETL University Data Pipeline Project',
    caption: 'End-to-end data pipeline from transactional staging to dimension-fact data warehousing with PostgreSQL',
    priority: '0.75'
  },
  {
    slug: 'open-recruitment-website-api',
    title: 'Open Recruitment Website API',
    caption: 'Recruitment portal backend handling applicant screening, document submissions, and evaluation rubrics',
    priority: '0.75',
    image: '/images/projects/oprec.png'
  },
  {
    slug: 'api-lpj-online',
    title: 'API LPJ Online - Accountability Reporting System',
    caption: 'Accountability and financial reporting portal for student organizations with automated approval workflows',
    priority: '0.75',
    image: '/images/projects/lpj.png'
  },
  {
    slug: 'chattydesk',
    title: 'ChattyDesk - Multi-LLM Cross-Platform Desktop Client',
    caption: 'Cross-platform desktop application for multi-LLM workflows enabling unified chat with Gemini, Claude, and GPT',
    priority: '0.85',
    image: '/images/projects/chattydesk.jpg'
  },
  {
    slug: 'best-staff-voting-website-api',
    title: 'Best Staff Voting Website API',
    caption: 'Organizational peer voting platform with secure token-based balloting and automated result tallying',
    priority: '0.75',
    image: '/images/projects/best-staff.png'
  },
  {
    slug: 'apap-medika',
    title: 'APAP Medika - Healthcare Clinic Management System',
    caption: 'Healthcare workflow system for appointment booking, medical record tracking, and dispensary inventory',
    priority: '0.75'
  },
  {
    slug: 'knowlxcircle-application',
    title: 'Knowlxcircle - Crowdsourced Knowledge Sharing Platform',
    caption: 'Crowdsourced knowledge base and interactive Q&A community with category tagging and search',
    priority: '0.80',
    image: '/images/projects/knowlxcircle.png'
  },
  {
    slug: 'gemini-japanese',
    title: 'Gemini Japanese - AI-Powered Language Learning',
    caption: 'Japanese language learning application leveraging Google Gemini for nuanced translation and grammar guidance',
    priority: '0.80'
  },
  {
    slug: 'literalstoryboard',
    title: 'LiteralStoryboard - AI Board Game & Narrative Engine',
    caption: 'Interactive board game and procedural story generator created with Amazon Q AI assistance',
    priority: '0.80'
  },
  {
    slug: 'recipe-recommender',
    title: 'Recipe Recommender - Semantic Recipe Search',
    caption: 'Recipe suggestion application recommending culinary dishes based on available pantry ingredients',
    priority: '0.75'
  },
  {
    slug: 'recommendica',
    title: 'Recommendica - Research Paper Recommendation RAG',
    caption: 'Scholarly paper discovery system using dense vector embeddings and semantic search',
    priority: '0.80',
    image: '/images/projects/research-recommendation.png'
  },
  {
    slug: 'ecofriendly-recipe-recommender',
    title: 'Ecofriendly Recipe Recommender - Low-Carbon Cooking',
    caption: 'Eco-friendly recipe recommender utilizing RAG with Mistral 7B and BM25 hybrid search',
    priority: '0.80',
    image: '/images/projects/ecofriendly.png'
  },
  {
    slug: 'wikipedia-based-hybrid-rag',
    title: 'Wikipedia-based Hybrid GraphRAG & VectorRAG',
    caption: 'Hybrid knowledge graph and vector retrieval architecture utilizing Wikipedia knowledge dumps and Neo4j',
    priority: '0.80'
  },
  {
    slug: 'dosage-recommender',
    title: 'Dosage Recommender - Clinical Medicine Dosage Tool',
    caption: 'Clinical dosage calculation tool providing personalized medical dosage guidelines based on patient factors',
    priority: '0.75'
  },
  {
    slug: 'endorbit',
    title: 'Endorbit - Conversational E-Commerce Recommender',
    caption: 'Conversational e-commerce chatbot recommending products based on customer query analysis',
    priority: '0.75'
  }
];

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemapXml(baseUrl) {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
  ];

  // 1. Core pages
  for (const page of CORE_PAGES) {
    const loc = cleanBase + page.path + (page.path === '' ? '/' : '');
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(loc)}</loc>`);
    lines.push(`    <lastmod>${TODAY}</lastmod>`);
    lines.push(`    <changefreq>${page.changefreq}</changefreq>`);
    lines.push(`    <priority>${page.priority}</priority>`);

    if (page.images && page.images.length > 0) {
      for (const img of page.images) {
        lines.push('    <image:image>');
        lines.push(`      <image:loc>${escapeXml(cleanBase + img.path)}</image:loc>`);
        if (img.title) lines.push(`      <image:title>${escapeXml(img.title)}</image:title>`);
        if (img.caption) lines.push(`      <image:caption>${escapeXml(img.caption)}</image:caption>`);
        lines.push('    </image:image>');
      }
    }

    lines.push('  </url>');
  }

  // 2. Individual project deep links
  for (const proj of PROJECTS) {
    const loc = `${cleanBase}/projects/${proj.slug}`;
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(loc)}</loc>`);
    lines.push(`    <lastmod>${TODAY}</lastmod>`);
    lines.push('    <changefreq>monthly</changefreq>');
    lines.push(`    <priority>${proj.priority}</priority>`);

    if (proj.image) {
      lines.push('    <image:image>');
      lines.push(`      <image:loc>${escapeXml(cleanBase + proj.image)}</image:loc>`);
      lines.push(`      <image:title>${escapeXml(proj.title)}</image:title>`);
      lines.push(`      <image:caption>${escapeXml(proj.caption)}</image:caption>`);
      lines.push('    </image:image>');
    }

    lines.push('  </url>');
  }

  lines.push('</urlset>');
  lines.push('');
  return lines.join('\n');
}

// Generate sitemaps for both domains and default
const publicDir = path.join(rootDir, 'public');

const sitemapId = generateSitemapXml('https://www.nevatal.id');
const sitemapTech = generateSitemapXml('https://www.nevatal.tech');
const sitemapDefault = sitemapId; // nevatal.id is canonical

fs.writeFileSync(path.join(publicDir, 'sitemap-id.xml'), sitemapId, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'sitemap-tech.xml'), sitemapTech, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapDefault, 'utf-8');

console.log(`Generated sitemaps successfully with ${CORE_PAGES.length + PROJECTS.length} URLs each:`);
console.log(`- ${path.join(publicDir, 'sitemap-id.xml')}`);
console.log(`- ${path.join(publicDir, 'sitemap-tech.xml')}`);
console.log(`- ${path.join(publicDir, 'sitemap.xml')}`);
