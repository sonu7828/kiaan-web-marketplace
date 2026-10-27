import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Monthly bar chart data: [month, feeCollection (0-3000), expenses (0-3000)]
const monthsData = [
  { m: 'Jan', fee: 3000, exp: 600 },
  { m: 'Feb', fee: 1650, exp: 1250 },
  { m: 'Mar', fee: 900,  exp: 1100 },
  { m: 'Apr', fee: 2100, exp: 1450 },
  { m: 'May', fee: 1950, exp: 850 },
  { m: 'Jun', fee: 750,  exp: 550 },
  { m: 'Jul', fee: 1600, exp: 2300 },
  { m: 'Aug', fee: 1750, exp: 1350 },
  { m: 'Sep', fee: 750,  exp: 550 },
  { m: 'Oct', fee: 750,  exp: 550 },
  { m: 'Nov', fee: 750,  exp: 550 },
  { m: 'Dec', fee: 750,  exp: 550 },
];

function generateChartBars(startX, baseY, chartH, maxVal) {
  const stepX = 72;
  let svgBars = '';
  monthsData.forEach((d, i) => {
    const x = startX + i * stepX;
    const feeH = Math.round((d.fee / maxVal) * chartH);
    const expH = Math.round((d.exp / maxVal) * chartH);
    const feeY = baseY - feeH;
    const expY = baseY - expH;

    // Green Fee bar
    svgBars += `<rect x="${x}" y="${feeY}" width="16" height="${feeH}" rx="3" fill="#10B981" />`;
    // Red Expense bar
    svgBars += `<rect x="${x + 20}" y="${expY}" width="16" height="${expH}" rx="3" fill="#EF4444" />`;
    // Month Label
    svgBars += `<text x="${x + 18}" y="${baseY + 24}" text-anchor="middle" fill="#94A3B8" font-size="11.5" class="semi-bold">${d.m}</text>`;
  });
  return svgBars;
}

const chartStartX = 75;
const chartBaseY = 186;
const chartHeight = 160;
const chartMaxVal = 3000;
const chartBarsSvg = generateChartBars(chartStartX, chartBaseY, chartHeight, chartMaxVal);

const svg = `
<svg width="1376" height="860" viewBox="0 0 1376 860" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Ambient Glow (Education Warm Amber/Indigo Theme) -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.22" />
      <stop offset="45%" stop-color="#4F46E5" stop-opacity="0.12" />
      <stop offset="85%" stop-color="#0A0C12" stop-opacity="0" />
    </radialGradient>

    <!-- Window Drop Shadow -->
    <filter id="winShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="35" flood-color="#000000" flood-opacity="0.85" />
      <feDropShadow dx="0" dy="0" stdDeviation="25" flood-color="#F59E0B" flood-opacity="0.14" />
    </filter>

    <!-- Card Background Gradient -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#181D2A" />
      <stop offset="100%" stop-color="#131722" />
    </linearGradient>

    <!-- Active Menu Button Gradient -->
    <linearGradient id="activeMenuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>

    <style>
      .font-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif; }
      .title-bold { font-weight: 700; }
      .semi-bold { font-weight: 600; }
      .regular { font-weight: 400; }
    </style>
  </defs>

  <!-- ─── CANVAS BACKGROUND ─── -->
  <rect width="1376" height="860" fill="#0A0C12" />
  <circle cx="688" cy="400" r="580" fill="url(#bgGlow)" />

  <!-- ─── FLOATING macOS MAIN WINDOW ─── -->
  <g filter="url(#winShadow)">
    <rect x="60" y="55" width="1256" height="750" rx="16" fill="#10131B" stroke="#252A38" stroke-width="1.2" />

    <!-- Window Top Header Bar -->
    <path d="M 60 71 A 16 16 0 0 1 76 55 L 1300 55 A 16 16 0 0 1 1316 71 L 1316 99 L 60 99 Z" fill="#141824" />
    <line x1="60" y1="99" x2="1316" y2="99" stroke="#212636" stroke-width="1" />

    <!-- Traffic Light Controls -->
    <circle cx="86" cy="77" r="6" fill="#FF5F56" />
    <circle cx="106" cy="77" r="6" fill="#FFBD2E" />
    <circle cx="126" cy="77" r="6" fill="#27C93F" />

    <!-- Window Title / Breadcrumb -->
    <text x="688" y="82" text-anchor="middle" fill="#94A3B8" font-size="12.5" class="font-sans semi-bold" letter-spacing="0.3">
      Campus ERP &amp; LMS Portal <tspan fill="#64748B">•</tspan> Academic Administration &amp; Fee Management
    </text>

    <!-- Top Right Status Pill -->
    <rect x="1155" y="66" width="145" height="22" rx="11" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.35)" stroke-width="1" />
    <circle cx="1169" cy="77" r="3.5" fill="#F59E0B" />
    <text x="1180" y="81" fill="#F59E0B" font-size="10" class="font-sans title-bold" letter-spacing="0.5">ACADEMIC ERP</text>
  </g>

  <!-- ─── WINDOW BODY CONTENT ─── -->
  <g class="font-sans">

    <!-- ════════ LEFT SIDEBAR ════════ -->
    <rect x="60" y="100" width="220" height="705" fill="#10182E" />
    <line x1="280" y1="100" x2="280" y2="805" stroke="#1F2842" stroke-width="1" />

    <!-- Skool Time Logo & Brand -->
    <g transform="translate(80, 118)">
      <rect x="0" y="0" width="36" height="36" rx="8" fill="#1E2A4A" stroke="#2F4275" stroke-width="1" />
      <path d="M 8 26 L 18 20 L 28 26 L 28 14 L 18 10 L 8 14 Z" fill="#FBBF24" />
      <path d="M 18 10 L 18 20" stroke="#0F172A" stroke-width="1.5" />
      <text x="46" y="24" fill="#FFFFFF" font-size="17" class="title-bold">Skool Time</text>
    </g>

    <!-- Menu Section Header: Main -->
    <g transform="translate(76, 175)">
      <g transform="translate(0, 4)">
        <rect x="0" y="0" width="5" height="5" rx="1" fill="#FBBF24" />
        <rect x="7" y="0" width="5" height="5" rx="1" fill="#FBBF24" />
        <rect x="0" y="7" width="5" height="5" rx="1" fill="#FBBF24" />
        <rect x="7" y="7" width="5" height="5" rx="1" fill="#FBBF24" />
      </g>
      <text x="18" y="14" fill="#FBBF24" font-size="13" class="title-bold">Main</text>
      <text x="180" y="14" fill="#FBBF24" font-size="10">▾</text>
    </g>

    <!-- Active Menu: Dashboard (Blue pill) -->
    <g transform="translate(76, 202)">
      <rect x="0" y="0" width="188" height="38" rx="8" fill="url(#activeMenuGrad)" />
      <text x="14" y="24" fill="#FFFFFF" font-size="12.5" class="title-bold">»&#160;&#160;Dashboard</text>
    </g>

    <!-- Nav Items -->
    <g transform="translate(76, 260)">
      <!-- Front Office -->
      <text x="0" y="14" fill="#FFFFFF" font-size="14">🏛</text>
      <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Front Office</text>
      <text x="180" y="14" fill="#64748B" font-size="12">›</text>

      <!-- Student Information -->
      <g transform="translate(0, 36)">
        <text x="0" y="14" fill="#FFFFFF" font-size="14">👤</text>
        <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Student Information</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Academics -->
      <g transform="translate(0, 72)">
        <text x="0" y="14" fill="#FFFFFF" font-size="14">🎓</text>
        <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Academics</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Examinations -->
      <g transform="translate(0, 108)">
        <text x="0" y="14" fill="#FFFFFF" font-size="14">📝</text>
        <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Examinations</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Zoom Live Classes -->
      <g transform="translate(0, 144)">
        <text x="0" y="14" fill="#FFFFFF" font-size="14">📹</text>
        <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Zoom Live Classes</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Human Resource -->
      <g transform="translate(0, 180)">
        <text x="0" y="14" fill="#FFFFFF" font-size="14">📢</text>
        <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Human Resource</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Inventory -->
      <g transform="translate(0, 216)">
        <text x="0" y="14" fill="#FFFFFF" font-size="14">📦</text>
        <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Inventory</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Front CMS -->
      <g transform="translate(0, 252)">
        <text x="0" y="14" fill="#FFFFFF" font-size="14">💻</text>
        <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Front CMS</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Alumni -->
      <g transform="translate(0, 288)">
        <text x="0" y="14" fill="#FFFFFF" font-size="14">🌟</text>
        <text x="26" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Alumni</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>
    </g>


    <!-- ════════ MAIN ADMIN DASHBOARD AREA ════════ -->
    <g transform="translate(305, 115)">

      <!-- Top Header Row -->
      <text x="0" y="28" fill="#F8FAFC" font-size="24" class="title-bold">Admin Dashboard</text>

      <!-- Search Input box on top right -->
      <g transform="translate(815, 6)">
        <rect x="0" y="0" width="170" height="34" rx="8" fill="#181D2A" stroke="#2D354A" stroke-width="1" />
        <text x="14" y="21" fill="#64748B" font-size="12">🔍&#160;&#160;Search...</text>
      </g>

      <!-- ─── TOP METRICS: ROW 1 (FINANCES & FEES) ─── -->

      <!-- Card 1: Fee Awaiting payment -->
      <g transform="translate(0, 52)">
        <rect width="234" height="96" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="18" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Fee Awaiting</text>
        <text x="18" y="44" fill="#94A3B8" font-size="11.5" class="semi-bold">payment</text>
        <rect x="188" y="16" width="28" height="28" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1" />
        <text x="202" y="34" text-anchor="middle" fill="#C084FC" font-size="13">💳</text>

        <text x="18" y="78" fill="#F8FAFC" font-size="21" class="title-bold">2450<tspan fill="#64748B" font-size="15" font-weight="500">/5000</tspan></text>
      </g>

      <!-- Card 2: Monthly Fee Collection -->
      <g transform="translate(250, 52)">
        <rect width="234" height="96" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="18" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Monthly Fee</text>
        <text x="18" y="44" fill="#94A3B8" font-size="11.5" class="semi-bold">Collection</text>
        <rect x="188" y="16" width="28" height="28" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1" />
        <text x="202" y="34" text-anchor="middle" fill="#10B981" font-size="13">₹</text>

        <text x="18" y="78" fill="#10B981" font-size="21" class="title-bold">₹ 9,00,000</text>
      </g>

      <!-- Card 3: Expenses this Month -->
      <g transform="translate(500, 52)">
        <rect width="234" height="96" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="18" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Expenses this</text>
        <text x="18" y="44" fill="#94A3B8" font-size="11.5" class="semi-bold">Month</text>
        <rect x="188" y="16" width="28" height="28" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.4)" stroke-width="1" />
        <text x="202" y="34" text-anchor="middle" fill="#EF4444" font-size="13">👛</text>

        <text x="18" y="78" fill="#EF4444" font-size="21" class="title-bold">₹ 5,72,136</text>
      </g>

      <!-- Card 4: Profits this Month -->
      <g transform="translate(750, 52)">
        <rect width="234" height="96" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="18" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Profits this</text>
        <text x="18" y="44" fill="#94A3B8" font-size="11.5" class="semi-bold">Month</text>
        <rect x="188" y="16" width="28" height="28" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1" />
        <text x="202" y="34" text-anchor="middle" fill="#F59E0B" font-size="13">💰</text>

        <text x="18" y="78" fill="#38BDF8" font-size="21" class="title-bold">₹ 3,27,864</text>
      </g>


      <!-- ─── TOP METRICS: ROW 2 (ATTENDANCE & LEADS) ─── -->

      <!-- Card 5: Teachers Present Today -->
      <g transform="translate(0, 160)">
        <rect width="234" height="96" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="18" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Teachers Present</text>
        <text x="18" y="44" fill="#94A3B8" font-size="11.5" class="semi-bold">Today</text>
        <rect x="188" y="16" width="28" height="28" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1" />
        <text x="202" y="34" text-anchor="middle" fill="#C084FC" font-size="13">💼</text>

        <text x="18" y="78" fill="#F8FAFC" font-size="21" class="title-bold">72<tspan fill="#64748B" font-size="15" font-weight="500">/80</tspan></text>
      </g>

      <!-- Card 6: Students Present Today -->
      <g transform="translate(250, 160)">
        <rect width="234" height="96" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="18" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Students Present</text>
        <text x="18" y="44" fill="#94A3B8" font-size="11.5" class="semi-bold">Today</text>
        <rect x="188" y="16" width="28" height="28" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1" />
        <text x="202" y="34" text-anchor="middle" fill="#10B981" font-size="13">🎓</text>

        <text x="18" y="78" fill="#10B981" font-size="21" class="title-bold">4396<tspan fill="#64748B" font-size="15" font-weight="500">/5000</tspan></text>
      </g>

      <!-- Card 7: Staff Present Today -->
      <g transform="translate(500, 160)">
        <rect width="234" height="96" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="18" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Staff Present</text>
        <text x="18" y="44" fill="#94A3B8" font-size="11.5" class="semi-bold">Today</text>
        <rect x="188" y="16" width="28" height="28" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.4)" stroke-width="1" />
        <text x="202" y="34" text-anchor="middle" fill="#EF4444" font-size="13">👥</text>

        <text x="18" y="78" fill="#F8FAFC" font-size="21" class="title-bold">40<tspan fill="#64748B" font-size="15" font-weight="500">/40</tspan></text>
      </g>

      <!-- Card 8: Converted Leads this Month -->
      <g transform="translate(750, 160)">
        <rect width="234" height="96" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="18" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Converted Leads</text>
        <text x="18" y="44" fill="#94A3B8" font-size="11.5" class="semi-bold">this Month</text>
        <rect x="188" y="16" width="28" height="28" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1" />
        <text x="202" y="34" text-anchor="middle" fill="#F59E0B" font-size="13">🎯</text>

        <text x="18" y="78" fill="#FBBF24" font-size="21" class="title-bold">2<tspan fill="#64748B" font-size="15" font-weight="500">/10</tspan></text>
      </g>


      <!-- ─── BOTTOM SECTION: FEE COLLECTION AND EXPENSES (BAR CHART) ─── -->
      <g transform="translate(0, 268)">
        <rect width="985" height="395" rx="14" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />

        <!-- Chart Title -->
        <text x="24" y="38" fill="#F8FAFC" font-size="17" class="title-bold">Fee Collection and Expenses</text>

        <!-- Right Dropdowns -->
        <g transform="translate(670, 16)">
          <rect x="0" y="0" width="145" height="32" rx="6" fill="#1A202E" stroke="#2D354A" stroke-width="1" />
          <text x="14" y="21" fill="#CBD5E1" font-size="11.5" class="semi-bold">Session: 2024-25</text>
          <text x="130" y="21" fill="#94A3B8" font-size="10">▾</text>

          <rect x="155" y="0" width="130" height="32" rx="6" fill="#1A202E" stroke="#2D354A" stroke-width="1" />
          <text x="169" y="21" fill="#CBD5E1" font-size="11.5" class="semi-bold">All Months</text>
          <text x="270" y="21" fill="#94A3B8" font-size="10">▾</text>
        </g>

        <!-- Chart Legend -->
        <g transform="translate(24, 62)">
          <rect x="0" y="0" width="12" height="12" rx="3" fill="#10B981" />
          <text x="18" y="10" fill="#94A3B8" font-size="11.5" class="semi-bold">Fee Collection</text>

          <rect x="120" y="0" width="12" height="12" rx="3" fill="#EF4444" />
          <text x="138" y="10" fill="#94A3B8" font-size="11.5" class="semi-bold">Expenses</text>
        </g>

        <!-- Y-Axis Grid Lines & Labels -->
        <g transform="translate(24, 85)">
          <!-- ₹ 3000 -->
          <text x="42" y="30" text-anchor="end" fill="#64748B" font-size="11.5" class="semi-bold">₹ 3000</text>
          <line x1="50" y1="26" x2="940" y2="26" stroke="#21283B" stroke-dasharray="4 4" stroke-width="1" />

          <!-- ₹ 2500 -->
          <text x="42" y="57" text-anchor="end" fill="#64748B" font-size="11.5" class="semi-bold">₹ 2500</text>
          <line x1="50" y1="53" x2="940" y2="53" stroke="#21283B" stroke-dasharray="4 4" stroke-width="1" />

          <!-- ₹ 2000 -->
          <text x="42" y="84" text-anchor="end" fill="#64748B" font-size="11.5" class="semi-bold">₹ 2000</text>
          <line x1="50" y1="80" x2="940" y2="80" stroke="#21283B" stroke-dasharray="4 4" stroke-width="1" />

          <!-- ₹ 1500 -->
          <text x="42" y="111" text-anchor="end" fill="#64748B" font-size="11.5" class="semi-bold">₹ 1500</text>
          <line x1="50" y1="107" x2="940" y2="107" stroke="#21283B" stroke-dasharray="4 4" stroke-width="1" />

          <!-- ₹ 1000 -->
          <text x="42" y="138" text-anchor="end" fill="#64748B" font-size="11.5" class="semi-bold">₹ 1000</text>
          <line x1="50" y1="134" x2="940" y2="134" stroke="#21283B" stroke-dasharray="4 4" stroke-width="1" />

          <!-- ₹ 500 -->
          <text x="42" y="165" text-anchor="end" fill="#64748B" font-size="11.5" class="semi-bold">₹ 500</text>
          <line x1="50" y1="161" x2="940" y2="161" stroke="#21283B" stroke-dasharray="4 4" stroke-width="1" />

          <!-- ₹ 0 Baseline -->
          <text x="42" y="190" text-anchor="end" fill="#64748B" font-size="11.5" class="semi-bold">₹ 0</text>
          <line x1="50" y1="186" x2="940" y2="186" stroke="#2D354A" stroke-width="1.2" />

          <!-- 12 Months Bars (Green Fee Collection + Red Expenses) -->
          ${chartBarsSvg}
        </g>
      </g>

    </g>

  </g>
</svg>
`;

async function run() {
  const outputPath = path.resolve('public/images/marketplace/campus-erp.jpg');
  console.log('Rendering Campus ERP SVG to JPEG:', outputPath);

  const buffer = Buffer.from(svg.trim());
  await sharp(buffer)
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);

  console.log('Successfully generated campus-erp.jpg at 1376x860 with crystal clear text & chart!');
}

run().catch(err => {
  console.error('Error generating image:', err);
  process.exit(1);
});
