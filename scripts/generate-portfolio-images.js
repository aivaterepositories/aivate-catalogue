// Portfolio Screenshot Placeholder Generator
// Creates professional gradient-based placeholders for portfolio projects
// Can be replaced with real screenshots later

const fs = require('fs');
const path = require('path');

const projects = [
  {
    name: 'Gordon AI Studio',
    slug: 'gordon-ai-studio',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tagline: 'AI-Powered Medical Practice Platform',
    tech: ['Next.js 16', 'TypeScript', 'Supabase', 'OpenAI']
  },
  {
    name: 'Temp Power Systems CRM',
    slug: 'temp-power-systems',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tagline: 'Enterprise Equipment Management System',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    name: 'SevenSidedCube',
    slug: 'sevensidedcube',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tagline: 'Modern Agency Landing Page',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    name: 'Fine Dining Landing',
    slug: 'fine-dining',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tagline: 'Luxury Restaurant Experience',
    tech: ['Next.js', 'Tailwind CSS', 'Custom Animations']
  },
  {
    name: 'Health Services',
    slug: 'health-services',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    tagline: 'Healthcare Provider Platform',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    name: 'Salon Landing Page',
    slug: 'salon',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    tagline: 'Modern Beauty & Style',
    tech: ['Next.js', 'Tailwind CSS', 'Google Fonts']
  },
  {
    name: 'EduLearn Platform',
    slug: 'edulearn',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    tagline: 'Educational Technology Platform',
    tech: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL']
  },
  {
    name: 'Aivate Solutions',
    slug: 'aivate-solutions',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    tagline: 'AI-Powered Business Solutions',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI']
  }
];

// Generate SVG placeholder
function generateSVG(project) {
  return `<svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${project.gradient.match(/#[0-9a-f]{6}/gi)[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${project.gradient.match(/#[0-9a-f]{6}/gi)[1]};stop-opacity:1" />
    </linearGradient>
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1600" height="1000" fill="url(#grad)"/>
  <rect width="1600" height="1000" fill="url(#grid)"/>

  <text x="800" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="white" text-anchor="middle">${project.name}</text>
  <text x="800" y="480" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="rgba(255,255,255,0.9)" text-anchor="middle">${project.tagline}</text>

  <g transform="translate(800, 540)">
    ${project.tech.map((tech, i) => {
      const x = (i - (project.tech.length - 1) / 2) * 160;
      return `<rect x="${x - 60}" y="0" width="120" height="44" rx="8" fill="rgba(255,255,255,0.2)"/>
              <text x="${x}" y="28" font-family="system-ui" font-size="18" font-weight="500" fill="white" text-anchor="middle">${tech}</text>`;
    }).join('\n    ')}
  </g>

  <text x="1560" y="970" font-family="system-ui" font-size="14" font-weight="500" fill="rgba(255,255,255,0.6)" text-anchor="end">Agency-OS Portfolio</text>
</svg>`;
}

// Create output directory
const outputDir = path.join(__dirname, '../public/portfolio');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate all placeholders
console.log('Generating portfolio screenshots...\n');

projects.forEach(project => {
  const svg = generateSVG(project);
  const outputPath = path.join(outputDir, `${project.slug}.svg`);
  fs.writeFileSync(outputPath, svg);
  console.log(`✓ Generated: ${project.slug}.svg`);
});

console.log(`\n✓ All ${projects.length} portfolio screenshots generated!`);
console.log('Location: /public/portfolio/');
console.log('\nNote: These are professional placeholder images.');
console.log('Replace with actual screenshots when available.');
