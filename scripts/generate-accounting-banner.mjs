import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1376" height="860" viewBox="0 0 1376 860" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Ambient Glow (Teal & Cyan Financial Theme) -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#14B8A6" stop-opacity="0.22" />
      <stop offset="40%" stop-color="#0284C7" stop-opacity="0.14" />
      <stop offset="85%" stop-color="#0A0C12" stop-opacity="0" />
    </radialGradient>

    <!-- Window Drop Shadow -->
    <filter id="winShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="35" flood-color="#000000" flood-opacity="0.85" />
      <feDropShadow dx="0" dy="0" stdDeviation="25" flood-color="#14B8A6" flood-opacity="0.15" />
    </filter>

    <!-- Chart Line Shadow -->
    <filter id="chartGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#38BDF8" flood-opacity="0.4" />
    </filter>

    <!-- Card Background Gradient -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#181D2A" />
      <stop offset="100%" stop-color="#131722" />
    </linearGradient>

    <!-- Active Menu Button Gradient -->
    <linearGradient id="activeMenuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>

    <!-- Brand Logo Gradient -->
    <linearGradient id="brandLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>

    <!-- Sales Line Area Fill Gradient -->
    <linearGradient id="salesAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.0" />
    </linearGradient>

    <!-- Purchase Line Area Fill Gradient -->
    <linearGradient id="purchaseAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#10B981" stop-opacity="0.0" />
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
      Business Accounting &amp; GST Inventory Portal <tspan fill="#64748B">•</tspan> Enterprise Financial ERP
    </text>

    <!-- Top Right Status Pill -->
    <rect x="1140" y="66" width="160" height="22" rx="11" fill="rgba(20, 184, 166, 0.12)" stroke="rgba(20, 184, 166, 0.35)" stroke-width="1" />
    <circle cx="1154" cy="77" r="3.5" fill="#14B8A6" />
    <text x="1165" y="81" fill="#14B8A6" font-size="10" class="font-sans title-bold" letter-spacing="0.5">FINANCE &amp; GST</text>
  </g>

  <!-- ─── WINDOW BODY CONTENT ─── -->
  <g class="font-sans">

    <!-- ════════ LEFT SIDEBAR ════════ -->
    <rect x="60" y="100" width="220" height="705" fill="#111523" />
    <line x1="280" y1="100" x2="280" y2="805" stroke="#1E2538" stroke-width="1" />

    <!-- Brand Logo -->
    <g transform="translate(80, 118)">
      <rect x="0" y="0" width="36" height="36" rx="10" fill="url(#brandLogoGrad)" />
      <!-- Accounting / Chart Nodes icon -->
      <path d="M 10 26 L 16 18 L 22 22 L 28 12" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <circle cx="28" cy="12" r="2.5" fill="#FFFFFF" />
      <text x="46" y="17" fill="#F8FAFC" font-size="13.5" class="title-bold">Business Accounting</text>
      <text x="46" y="31" fill="#94A3B8" font-size="9.5" class="semi-bold">&amp; GST Inventory</text>
    </g>

    <!-- Active Menu: Dashboard -->
    <g transform="translate(74, 180)">
      <rect x="0" y="0" width="192" height="38" rx="8" fill="url(#activeMenuGrad)" />
      <!-- Dashboard Icon -->
      <path d="M 16 23 L 23 16 L 30 23 L 28 23 L 28 28 L 18 28 L 18 23 Z" fill="#FFFFFF" />
      <text x="38" y="24" fill="#FFFFFF" font-size="13" class="title-bold">Dashboard</text>
    </g>

    <!-- Nav Items with Collapsible Arrows -->
    <g transform="translate(74, 235)">
      <!-- Sales -->
      <text x="14" y="14" fill="#64748B" font-size="14">📦</text>
      <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Sales</text>
      <text x="180" y="14" fill="#64748B" font-size="11">⌄</text>

      <!-- Purchase -->
      <g transform="translate(0, 36)">
        <text x="14" y="14" fill="#64748B" font-size="14">🛍️</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Purchase</text>
        <text x="180" y="14" fill="#64748B" font-size="11">⌄</text>
      </g>

      <!-- Inventory -->
      <g transform="translate(0, 72)">
        <text x="14" y="14" fill="#64748B" font-size="14">🗄️</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Inventory</text>
        <text x="180" y="14" fill="#64748B" font-size="11">⌄</text>
      </g>

      <!-- Accounting -->
      <g transform="translate(0, 108)">
        <text x="14" y="14" fill="#64748B" font-size="14">📑</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Accounting</text>
        <text x="180" y="14" fill="#64748B" font-size="11">⌄</text>
      </g>

      <!-- GST -->
      <g transform="translate(0, 144)">
        <text x="14" y="14" fill="#64748B" font-size="14">🏛️</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">GST</text>
        <text x="180" y="14" fill="#64748B" font-size="11">⌄</text>
      </g>

      <!-- Reports -->
      <g transform="translate(0, 180)">
        <text x="14" y="14" fill="#64748B" font-size="14">📊</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Reports</text>
        <text x="180" y="14" fill="#64748B" font-size="11">⌄</text>
      </g>

      <!-- Business Settings -->
      <g transform="translate(0, 216)">
        <text x="14" y="14" fill="#64748B" font-size="14">⚙️</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Business Settings</text>
      </g>
    </g>


    <!-- ════════ MAIN CONTENT AREA ════════ -->

    <!-- Top Action / Header Bar -->
    <g transform="translate(300, 114)">
      <!-- Hamburger Icon -->
      <path d="M 0 11 L 18 11 M 0 17 L 18 17 M 0 23 L 18 23" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" />

      <!-- Search Bar -->
      <rect x="32" y="2" width="480" height="36" rx="8" fill="#151A27" stroke="#283046" stroke-width="1" />
      <circle cx="50" cy="20" r="5" stroke="#64748B" stroke-width="1.6" fill="none" />
      <line x1="54" y1="24" x2="59" y2="29" stroke="#64748B" stroke-width="1.6" stroke-linecap="round" />
      <text x="68" y="24" fill="#64748B" font-size="12.5" class="regular">Search anything... (e.g. invoice, product, customer)</text>

      <!-- Notification Bell -->
      <g transform="translate(860, 5)">
        <circle cx="16" cy="15" r="14" fill="#1A2030" stroke="#283248" stroke-width="1" />
        <path d="M 12 18 C 12 14 13 10 16 10 C 19 10 20 14 20 18 L 22 20 L 10 20 Z" fill="#94A3B8" />
        <circle cx="16" cy="22" r="1.5" fill="#94A3B8" />
        <circle cx="23" cy="8" r="4.5" fill="#EF4444" />
        <text x="23" y="11" text-anchor="middle" fill="#FFFFFF" font-size="8" class="title-bold">3</text>
      </g>

      <!-- User Profile -->
      <g transform="translate(905, 4)">
        <circle cx="18" cy="16" r="16" fill="#8B5CF6" />
        <text x="18" y="20.5" text-anchor="middle" fill="#FFFFFF" font-size="11" class="title-bold">PS</text>
        <text x="42" y="14" fill="#F8FAFC" font-size="13" class="semi-bold">Priya Sharma</text>
        <text x="42" y="27" fill="#64748B" font-size="10" class="regular">Admin</text>
      </g>
    </g>

    <!-- Welcome & Greeting Line -->
    <g transform="translate(300, 168)">
      <text x="0" y="26" fill="#F8FAFC" font-size="22" class="title-bold">Good Morning, Priya!</text>
      <text x="0" y="44" fill="#94A3B8" font-size="12.5" class="regular">Here's what's happening with your business today.</text>

      <!-- Date Dropdown Button -->
      <rect x="830" y="8" width="165" height="32" rx="7" fill="#151A27" stroke="#283046" stroke-width="1" />
      <text x="844" y="28" fill="#94A3B8" font-size="12">📅</text>
      <text x="864" y="28" fill="#CBD5E1" font-size="12" class="semi-bold">Wed, 22 Oct 2025</text>
      <text x="980" y="28" fill="#64748B" font-size="10">⌄</text>
    </g>


    <!-- ════════ ROW 1: 5 KEY METRIC STAT CARDS ════════ -->
    <g transform="translate(300, 230)">
      
      <!-- Card 1: Total Sales -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="190" height="92" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        <rect x="14" y="14" width="34" height="34" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="rgba(59, 130, 246, 0.3)" stroke-width="1" />
        <text x="31" y="36" text-anchor="middle" fill="#60A5FA" font-size="15">💵</text>
        <text x="56" y="24" fill="#94A3B8" font-size="11" class="semi-bold">Total Sales</text>
        <text x="56" y="44" fill="#F8FAFC" font-size="16" class="title-bold">₹ 1,48,500</text>
        <text x="56" y="62" fill="#10B981" font-size="10" class="semi-bold">↑ 12% <tspan fill="#64748B" class="regular">from last month</tspan></text>
      </g>

      <!-- Card 2: Total Purchase -->
      <g transform="translate(201, 0)">
        <rect x="0" y="0" width="190" height="92" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        <rect x="14" y="14" width="34" height="34" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
        <text x="31" y="36" text-anchor="middle" fill="#34D399" font-size="15">🛒</text>
        <text x="56" y="24" fill="#94A3B8" font-size="11" class="semi-bold">Total Purchase</text>
        <text x="56" y="44" fill="#F8FAFC" font-size="16" class="title-bold">₹ 98,750</text>
        <text x="56" y="62" fill="#10B981" font-size="10" class="semi-bold">↑ 8% <tspan fill="#64748B" class="regular">from last month</tspan></text>
      </g>

      <!-- Card 3: Total Profit -->
      <g transform="translate(402, 0)">
        <rect x="0" y="0" width="190" height="92" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        <rect x="14" y="14" width="34" height="34" rx="8" fill="rgba(249, 115, 22, 0.15)" stroke="rgba(249, 115, 22, 0.3)" stroke-width="1" />
        <text x="31" y="36" text-anchor="middle" fill="#FB923C" font-size="15">📈</text>
        <text x="56" y="24" fill="#94A3B8" font-size="11" class="semi-bold">Total Profit</text>
        <text x="56" y="44" fill="#F8FAFC" font-size="16" class="title-bold">₹ 49,750</text>
        <text x="56" y="62" fill="#10B981" font-size="10" class="semi-bold">↑ 15% <tspan fill="#64748B" class="regular">from last month</tspan></text>
      </g>

      <!-- Card 4: Inventory Value -->
      <g transform="translate(603, 0)">
        <rect x="0" y="0" width="190" height="92" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        <rect x="14" y="14" width="34" height="34" rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(139, 92, 246, 0.3)" stroke-width="1" />
        <text x="31" y="36" text-anchor="middle" fill="#A78BFA" font-size="15">📦</text>
        <text x="56" y="24" fill="#94A3B8" font-size="11" class="semi-bold">Inventory Value</text>
        <text x="56" y="44" fill="#F8FAFC" font-size="16" class="title-bold">₹ 2,35,600</text>
        <text x="56" y="62" fill="#10B981" font-size="10" class="semi-bold">↑ 5% <tspan fill="#64748B" class="regular">from last month</tspan></text>
      </g>

      <!-- Card 5: GST Payable -->
      <g transform="translate(804, 0)">
        <rect x="0" y="0" width="191" height="92" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        <rect x="14" y="14" width="34" height="34" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.3)" stroke-width="1" />
        <text x="31" y="36" text-anchor="middle" fill="#F87171" font-size="15">🏛️</text>
        <text x="56" y="24" fill="#94A3B8" font-size="11" class="semi-bold">GST Payable</text>
        <text x="56" y="44" fill="#F8FAFC" font-size="16" class="title-bold">₹ 18,420</text>
        <text x="56" y="62" fill="#EF4444" font-size="10" class="semi-bold">↓ 3% <tspan fill="#64748B" class="regular">from last month</tspan></text>
      </g>

    </g>


    <!-- ════════ ROW 2: CHARTS (OVERVIEW + STOCK SUMMARY) ════════ -->
    <g transform="translate(300, 336)">
      
      <!-- Card A: Sales & Purchase Overview (Line Chart) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="620" height="208" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        
        <!-- Header & Legend -->
        <text x="18" y="24" fill="#38BDF8" font-size="14">📊</text>
        <text x="38" y="24" fill="#F8FAFC" font-size="13" class="title-bold">Sales &amp; Purchase Overview</text>
        
        <!-- Legend Pills -->
        <g transform="translate(450, 14)">
          <circle cx="6" cy="8" r="4" fill="#38BDF8" />
          <text x="14" y="11" fill="#CBD5E1" font-size="10.5" class="semi-bold">Sales</text>
          <circle cx="68" cy="8" r="4" fill="#10B981" />
          <text x="76" y="11" fill="#CBD5E1" font-size="10.5" class="semi-bold">Purchase</text>
        </g>

        <!-- Chart Grid Lines & Y-Labels -->
        <!-- Chart Bounds: X: 70 to 590 (width 520, step = 520/7 = 74.3)
             Y values:
             ₹ 2,00,000 -> Y=50
             ₹ 1,50,000 -> Y=80
             ₹ 1,00,000 -> Y=110
             ₹ 50,000   -> Y=140
             ₹ 0        -> Y=170
        -->
        <g transform="translate(18, 0)">
          <!-- Y-Labels -->
          <text x="45" y="53" text-anchor="end" fill="#64748B" font-size="9" class="regular">₹ 2,00,000</text>
          <line x1="52" y1="50" x2="585" y2="50" stroke="#1E2538" stroke-dasharray="3,3" stroke-width="1" />

          <text x="45" y="83" text-anchor="end" fill="#64748B" font-size="9" class="regular">₹ 1,50,000</text>
          <line x1="52" y1="80" x2="585" y2="80" stroke="#1E2538" stroke-dasharray="3,3" stroke-width="1" />

          <text x="45" y="113" text-anchor="end" fill="#64748B" font-size="9" class="regular">₹ 1,00,000</text>
          <line x1="52" y1="110" x2="585" y2="110" stroke="#1E2538" stroke-dasharray="3,3" stroke-width="1" />

          <text x="45" y="143" text-anchor="end" fill="#64748B" font-size="9" class="regular">₹ 50,000</text>
          <line x1="52" y1="140" x2="585" y2="140" stroke="#1E2538" stroke-dasharray="3,3" stroke-width="1" />

          <text x="45" y="173" text-anchor="end" fill="#64748B" font-size="9" class="regular">₹ 0</text>
          <line x1="52" y1="170" x2="585" y2="170" stroke="#252E42" stroke-width="1" />

          <!-- X-Axis Labels: 8 days (7 intervals of 74.7px)
               P0: 62, P1: 136, P2: 211, P3: 285, P4: 360, P5: 435, P6: 510, P7: 585
          -->
          <text x="62" y="188" text-anchor="middle" fill="#64748B" font-size="9" class="semi-bold">15 Oct</text>
          <text x="136" y="188" text-anchor="middle" fill="#64748B" font-size="9" class="semi-bold">16 Oct</text>
          <text x="211" y="188" text-anchor="middle" fill="#64748B" font-size="9" class="semi-bold">17 Oct</text>
          <text x="285" y="188" text-anchor="middle" fill="#64748B" font-size="9" class="semi-bold">18 Oct</text>
          <text x="360" y="188" text-anchor="middle" fill="#64748B" font-size="9" class="semi-bold">19 Oct</text>
          <text x="435" y="188" text-anchor="middle" fill="#64748B" font-size="9" class="semi-bold">20 Oct</text>
          <text x="510" y="188" text-anchor="middle" fill="#64748B" font-size="9" class="semi-bold">21 Oct</text>
          <text x="585" y="188" text-anchor="middle" fill="#64748B" font-size="9" class="semi-bold">22 Oct</text>

          <!-- Purchase Line Area & Path (Green #10B981) -->
          <!-- Points: (62,148), (136,140), (211,130), (285,138), (360,122), (435,123), (510,129), (585,108) -->
          <polygon points="62,148 136,140 211,130 285,138 360,122 435,123 510,129 585,108 585,170 62,170" fill="url(#purchaseAreaGrad)" />
          <polyline points="62,148 136,140 211,130 285,138 360,122 435,123 510,129 585,108" fill="none" stroke="#10B981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="62" cy="148" r="3.5" fill="#10B981" />
          <circle cx="136" cy="140" r="3.5" fill="#10B981" />
          <circle cx="211" cy="130" r="3.5" fill="#10B981" />
          <circle cx="285" cy="138" r="3.5" fill="#10B981" />
          <circle cx="360" cy="122" r="3.5" fill="#10B981" />
          <circle cx="435" cy="123" r="3.5" fill="#10B981" />
          <circle cx="510" cy="129" r="3.5" fill="#10B981" />
          <circle cx="585" cy="108" r="4.5" fill="#10B981" stroke="#FFFFFF" stroke-width="1.5" />

          <!-- Sales Line Area & Path (Blue #38BDF8) -->
          <!-- Points: (62,126), (136,118), (211,108), (285,116), (360,98), (435,90), (510,95), (585,78) -->
          <polygon points="62,126 136,118 211,108 285,116 360,98 435,90 510,95 585,78 585,170 62,170" fill="url(#salesAreaGrad)" />
          <polyline points="62,126 136,118 211,108 285,116 360,98 435,90 510,95 585,78" fill="none" stroke="#38BDF8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" filter="url(#chartGlow)" />
          <circle cx="62" cy="126" r="3.5" fill="#38BDF8" />
          <circle cx="136" cy="118" r="3.5" fill="#38BDF8" />
          <circle cx="211" cy="108" r="3.5" fill="#38BDF8" />
          <circle cx="285" cy="116" r="3.5" fill="#38BDF8" />
          <circle cx="360" cy="98" r="3.5" fill="#38BDF8" />
          <circle cx="435" cy="90" r="3.5" fill="#38BDF8" />
          <circle cx="510" cy="95" r="3.5" fill="#38BDF8" />
          <circle cx="585" cy="78" r="4.5" fill="#38BDF8" stroke="#FFFFFF" stroke-width="1.5" />
        </g>
      </g>

      <!-- Card B: Stock Summary (Donut Chart) -->
      <g transform="translate(634, 0)">
        <rect x="0" y="0" width="361" height="208" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        
        <!-- Header -->
        <text x="18" y="24" fill="#A78BFA" font-size="14">📦</text>
        <text x="38" y="24" fill="#F8FAFC" font-size="13" class="title-bold">Stock Summary</text>

        <!-- Donut Chart & Legend Group -->
        <g transform="translate(18, 42)">
          
          <!-- Donut SVG: Center at (90, 75), R=58, strokeWidth=18 -->
          <!-- Circumference = 2 * PI * 58 = 364.42
               Total = 245
               In Stock: 180 (73.5%) -> arc: 267.7
               Low Stock: 35 (14.3%) -> arc: 52.1
               Out of Stock: 15 (6.1%) -> arc: 22.3
               Reserved: 15 (6.1%) -> arc: 22.3
          -->
          <g transform="translate(90, 75)">
            <!-- Base track -->
            <circle cx="0" cy="0" r="58" fill="none" stroke="#1E2538" stroke-width="18" />

            <!-- In Stock (Green #10B981) - 73.5% -->
            <circle cx="0" cy="0" r="58" fill="none" stroke="#10B981" stroke-width="18"
                    stroke-dasharray="267.7 364.4" stroke-dashoffset="0" transform="rotate(-90)" />

            <!-- Low Stock (Orange #F59E0B) - 14.3% -->
            <circle cx="0" cy="0" r="58" fill="none" stroke="#F59E0B" stroke-width="18"
                    stroke-dasharray="52.1 364.4" stroke-dashoffset="-267.7" transform="rotate(-90)" />

            <!-- Out of Stock (Red #EF4444) - 6.1% -->
            <circle cx="0" cy="0" r="58" fill="none" stroke="#EF4444" stroke-width="18"
                    stroke-dasharray="22.3 364.4" stroke-dashoffset="-319.8" transform="rotate(-90)" />

            <!-- Reserved (Purple #8B5CF6) - 6.1% -->
            <circle cx="0" cy="0" r="58" fill="none" stroke="#8B5CF6" stroke-width="18"
                    stroke-dasharray="22.3 364.4" stroke-dashoffset="-342.1" transform="rotate(-90)" />

            <!-- Center Text -->
            <text x="0" y="-4" text-anchor="middle" fill="#94A3B8" font-size="10" class="regular">Total Items</text>
            <text x="0" y="16" text-anchor="middle" fill="#F8FAFC" font-size="19" class="title-bold">245</text>
          </g>

          <!-- Legend List on Right -->
          <g transform="translate(185, 20)">
            <!-- In Stock -->
            <circle cx="6" cy="12" r="5" fill="#10B981" />
            <text x="20" y="16" fill="#CBD5E1" font-size="12" class="semi-bold">In Stock</text>
            <text x="135" y="16" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">180</text>

            <!-- Low Stock -->
            <g transform="translate(0, 32)">
              <circle cx="6" cy="12" r="5" fill="#F59E0B" />
              <text x="20" y="16" fill="#CBD5E1" font-size="12" class="semi-bold">Low Stock</text>
              <text x="135" y="16" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">35</text>
            </g>

            <!-- Out of Stock -->
            <g transform="translate(0, 64)">
              <circle cx="6" cy="12" r="5" fill="#EF4444" />
              <text x="20" y="16" fill="#CBD5E1" font-size="12" class="semi-bold">Out of Stock</text>
              <text x="135" y="16" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">15</text>
            </g>

            <!-- Reserved -->
            <g transform="translate(0, 96)">
              <circle cx="6" cy="12" r="5" fill="#8B5CF6" />
              <text x="20" y="16" fill="#CBD5E1" font-size="12" class="semi-bold">Reserved</text>
              <text x="135" y="16" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">15</text>
            </g>
          </g>

        </g>
      </g>

    </g>


    <!-- ════════ ROW 3: TRANSACTIONS + TOP PRODUCTS + QUICK ACTIONS ════════ -->
    <g transform="translate(300, 556)">
      
      <!-- Card C: Recent Transactions Table -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="395" height="212" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        
        <!-- Header -->
        <text x="16" y="22" fill="#38BDF8" font-size="13">📄</text>
        <text x="34" y="22" fill="#F8FAFC" font-size="12.5" class="title-bold">Recent Transactions</text>
        <text x="375" y="22" text-anchor="end" fill="#38BDF8" font-size="11" class="semi-bold">View All</text>

        <!-- Table Columns Header -->
        <text x="16" y="44" fill="#64748B" font-size="9" class="semi-bold">DATE</text>
        <text x="80" y="44" fill="#64748B" font-size="9" class="semi-bold">TYPE</text>
        <text x="136" y="44" fill="#64748B" font-size="9" class="semi-bold">PARTY NAME</text>
        <text x="286" y="44" fill="#64748B" font-size="9" class="semi-bold">AMOUNT</text>
        <text x="365" y="44" text-anchor="end" fill="#64748B" font-size="9" class="semi-bold">STATUS</text>
        <line x1="16" y1="50" x2="378" y2="50" stroke="#1E2538" stroke-width="1" />

        <!-- Row 1: 22 Oct 2025 | Sales | ABC Traders | ₹ 28,500 | Paid -->
        <g transform="translate(16, 68)">
          <text x="0" y="0" fill="#94A3B8" font-size="10" class="regular">22 Oct 2025</text>
          <text x="64" y="0" fill="#10B981" font-size="9.5" class="semi-bold">↗ Sales</text>
          <text x="120" y="0" fill="#F8FAFC" font-size="10.5" class="semi-bold">ABC Traders</text>
          <text x="270" y="0" fill="#F8FAFC" font-size="10.5" class="title-bold">₹ 28,500</text>
          <rect x="318" y="-10" width="44" height="15" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="0.8" />
          <text x="340" y="1" text-anchor="middle" fill="#34D399" font-size="8.5" class="semi-bold">Paid</text>
        </g>

        <!-- Row 2: 21 Oct 2025 | Purchase | Shree Manufacturers | ₹ 45,000 | Paid -->
        <g transform="translate(16, 99)">
          <text x="0" y="0" fill="#94A3B8" font-size="10" class="regular">21 Oct 2025</text>
          <text x="64" y="0" fill="#F87171" font-size="9.5" class="semi-bold">↙ Purchase</text>
          <text x="120" y="0" fill="#F8FAFC" font-size="10.5" class="semi-bold">Shree Manufacturers</text>
          <text x="270" y="0" fill="#F8FAFC" font-size="10.5" class="title-bold">₹ 45,000</text>
          <rect x="318" y="-10" width="44" height="15" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="0.8" />
          <text x="340" y="1" text-anchor="middle" fill="#34D399" font-size="8.5" class="semi-bold">Paid</text>
        </g>

        <!-- Row 3: 20 Oct 2025 | Sales | Retail Mart | ₹ 12,800 | Paid -->
        <g transform="translate(16, 130)">
          <text x="0" y="0" fill="#94A3B8" font-size="10" class="regular">20 Oct 2025</text>
          <text x="64" y="0" fill="#10B981" font-size="9.5" class="semi-bold">↗ Sales</text>
          <text x="120" y="0" fill="#F8FAFC" font-size="10.5" class="semi-bold">Retail Mart</text>
          <text x="270" y="0" fill="#F8FAFC" font-size="10.5" class="title-bold">₹ 12,800</text>
          <rect x="318" y="-10" width="44" height="15" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="0.8" />
          <text x="340" y="1" text-anchor="middle" fill="#34D399" font-size="8.5" class="semi-bold">Paid</text>
        </g>

        <!-- Row 4: 19 Oct 2025 | Purchase | Global Suppliers | ₹ 32,400 | Pending -->
        <g transform="translate(16, 161)">
          <text x="0" y="0" fill="#94A3B8" font-size="10" class="regular">19 Oct 2025</text>
          <text x="64" y="0" fill="#F87171" font-size="9.5" class="semi-bold">↙ Purchase</text>
          <text x="120" y="0" fill="#F8FAFC" font-size="10.5" class="semi-bold">Global Suppliers</text>
          <text x="270" y="0" fill="#F8FAFC" font-size="10.5" class="title-bold">₹ 32,400</text>
          <rect x="318" y="-10" width="44" height="15" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.3)" stroke-width="0.8" />
          <text x="340" y="1" text-anchor="middle" fill="#FBBF24" font-size="8.5" class="semi-bold">Pending</text>
        </g>

        <!-- Row 5: 18 Oct 2025 | Sales | XYZ Enterprises | ₹ 18,750 | Paid -->
        <g transform="translate(16, 192)">
          <text x="0" y="0" fill="#94A3B8" font-size="10" class="regular">18 Oct 2025</text>
          <text x="64" y="0" fill="#10B981" font-size="9.5" class="semi-bold">↗ Sales</text>
          <text x="120" y="0" fill="#F8FAFC" font-size="10.5" class="semi-bold">XYZ Enterprises</text>
          <text x="270" y="0" fill="#F8FAFC" font-size="10.5" class="title-bold">₹ 18,750</text>
          <rect x="318" y="-10" width="44" height="15" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="0.8" />
          <text x="340" y="1" text-anchor="middle" fill="#34D399" font-size="8.5" class="semi-bold">Paid</text>
        </g>
      </g>

      <!-- Card D: Top Selling Products Table -->
      <g transform="translate(407, 0)">
        <rect x="0" y="0" width="345" height="212" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        
        <!-- Header -->
        <text x="16" y="22" fill="#F59E0B" font-size="13">🛒</text>
        <text x="34" y="22" fill="#F8FAFC" font-size="12.5" class="title-bold">Top Selling Products</text>
        <text x="325" y="22" text-anchor="end" fill="#38BDF8" font-size="11" class="semi-bold">View All</text>

        <!-- Table Columns Header -->
        <text x="16" y="44" fill="#64748B" font-size="9" class="semi-bold">PRODUCT</text>
        <text x="195" y="44" fill="#64748B" font-size="9" class="semi-bold">QTY SOLD</text>
        <text x="325" y="44" text-anchor="end" fill="#64748B" font-size="9" class="semi-bold">REVENUE</text>
        <line x1="16" y1="50" x2="328" y2="50" stroke="#1E2538" stroke-width="1" />

        <!-- Row 1: Laptop Bag | 45 | ₹ 67,500 -->
        <g transform="translate(16, 68)">
          <rect x="0" y="-11" width="22" height="20" rx="4" fill="#1E2538" />
          <text x="11" y="3" text-anchor="middle" font-size="10">💼</text>
          <text x="28" y="2" fill="#F8FAFC" font-size="11" class="semi-bold">Laptop Bag</text>
          <text x="210" y="2" fill="#CBD5E1" font-size="11" class="regular">45</text>
          <text x="312" y="2" text-anchor="end" fill="#F8FAFC" font-size="11" class="title-bold">₹ 67,500</text>
        </g>

        <!-- Row 2: Wireless Mouse | 38 | ₹ 47,600 -->
        <g transform="translate(16, 99)">
          <rect x="0" y="-11" width="22" height="20" rx="4" fill="#1E2538" />
          <text x="11" y="3" text-anchor="middle" font-size="10">🖱️</text>
          <text x="28" y="2" fill="#F8FAFC" font-size="11" class="semi-bold">Wireless Mouse</text>
          <text x="210" y="2" fill="#CBD5E1" font-size="11" class="regular">38</text>
          <text x="312" y="2" text-anchor="end" fill="#F8FAFC" font-size="11" class="title-bold">₹ 47,600</text>
        </g>

        <!-- Row 3: Notebook | 120 | ₹ 36,000 -->
        <g transform="translate(16, 130)">
          <rect x="0" y="-11" width="22" height="20" rx="4" fill="#1E2538" />
          <text x="11" y="3" text-anchor="middle" font-size="10">📓</text>
          <text x="28" y="2" fill="#F8FAFC" font-size="11" class="semi-bold">Notebook</text>
          <text x="210" y="2" fill="#CBD5E1" font-size="11" class="regular">120</text>
          <text x="312" y="2" text-anchor="end" fill="#F8FAFC" font-size="11" class="title-bold">₹ 36,000</text>
        </g>

        <!-- Row 4: Pen Drive | 75 | ₹ 30,000 -->
        <g transform="translate(16, 161)">
          <rect x="0" y="-11" width="22" height="20" rx="4" fill="#1E2538" />
          <text x="11" y="3" text-anchor="middle" font-size="10">💾</text>
          <text x="28" y="2" fill="#F8FAFC" font-size="11" class="semi-bold">Pen Drive</text>
          <text x="210" y="2" fill="#CBD5E1" font-size="11" class="regular">75</text>
          <text x="312" y="2" text-anchor="end" fill="#F8FAFC" font-size="11" class="title-bold">₹ 30,000</text>
        </g>

        <!-- Row 5: Keyboard | 28 | ₹ 22,400 -->
        <g transform="translate(16, 192)">
          <rect x="0" y="-11" width="22" height="20" rx="4" fill="#1E2538" />
          <text x="11" y="3" text-anchor="middle" font-size="10">⌨️</text>
          <text x="28" y="2" fill="#F8FAFC" font-size="11" class="semi-bold">Keyboard</text>
          <text x="210" y="2" fill="#CBD5E1" font-size="11" class="regular">28</text>
          <text x="312" y="2" text-anchor="end" fill="#F8FAFC" font-size="11" class="title-bold">₹ 22,400</text>
        </g>
      </g>

      <!-- Card E: Quick Actions (Vertical Stack of 5 Action Buttons) -->
      <g transform="translate(764, 0)">
        <rect x="0" y="0" width="231" height="212" rx="10" fill="url(#cardGrad)" stroke="#22283A" stroke-width="1" />
        
        <!-- Header -->
        <text x="16" y="22" fill="#38BDF8" font-size="13">⚡</text>
        <text x="34" y="22" fill="#F8FAFC" font-size="12.5" class="title-bold">Quick Actions</text>

        <!-- Button 1: Create Sales Invoice (Blue #2563EB) -->
        <g transform="translate(12, 34)">
          <rect x="0" y="0" width="207" height="30" rx="6" fill="#2563EB" />
          <text x="12" y="19" fill="#FFFFFF" font-size="12">🧾</text>
          <text x="32" y="19" fill="#FFFFFF" font-size="11" class="semi-bold">Create Sales Invoice</text>
          <text x="195" y="19" fill="#FFFFFF" font-size="11" text-anchor="end">›</text>
        </g>

        <!-- Button 2: Create Purchase Order (Emerald #059669) -->
        <g transform="translate(12, 68)">
          <rect x="0" y="0" width="207" height="30" rx="6" fill="#059669" />
          <text x="12" y="19" fill="#FFFFFF" font-size="12">📋</text>
          <text x="32" y="19" fill="#FFFFFF" font-size="11" class="semi-bold">Create Purchase Order</text>
          <text x="195" y="19" fill="#FFFFFF" font-size="11" text-anchor="end">›</text>
        </g>

        <!-- Button 3: Add New Product (Purple #7C3AED) -->
        <g transform="translate(12, 102)">
          <rect x="0" y="0" width="207" height="30" rx="6" fill="#7C3AED" />
          <text x="12" y="19" fill="#FFFFFF" font-size="12">➕</text>
          <text x="32" y="19" fill="#FFFFFF" font-size="11" class="semi-bold">Add New Product</text>
          <text x="195" y="19" fill="#FFFFFF" font-size="11" text-anchor="end">›</text>
        </g>

        <!-- Button 4: Generate GST Report (Orange #EA580C) -->
        <g transform="translate(12, 136)">
          <rect x="0" y="0" width="207" height="30" rx="6" fill="#EA580C" />
          <text x="12" y="19" fill="#FFFFFF" font-size="12">📊</text>
          <text x="32" y="19" fill="#FFFFFF" font-size="11" class="semi-bold">Generate GST Report</text>
          <text x="195" y="19" fill="#FFFFFF" font-size="11" text-anchor="end">›</text>
        </g>

        <!-- Button 5: View Reports (Dark Outline #1E2538) -->
        <g transform="translate(12, 170)">
          <rect x="0" y="0" width="207" height="30" rx="6" fill="#151A27" stroke="#283248" stroke-width="1" />
          <text x="12" y="19" fill="#94A3B8" font-size="12">📑</text>
          <text x="32" y="19" fill="#CBD5E1" font-size="11" class="semi-bold">View Reports</text>
          <text x="195" y="19" fill="#64748B" font-size="11" text-anchor="end">›</text>
        </g>
      </g>

    </g>


    <!-- ════════ WINDOW FOOTER ════════ -->
    <g transform="translate(300, 786)">
      <line x1="0" y1="0" x2="995" y2="0" stroke="#1A2030" stroke-width="1" />
      <text x="0" y="13" fill="#64748B" font-size="9.5" class="regular">Kiaan Technology © 2025. All rights reserved.</text>
      <text x="995" y="13" text-anchor="end" fill="#64748B" font-size="9.5" class="semi-bold">Business Accounting &amp; GST Inventory v1.0</text>
    </g>

  </g>
</svg>
`;

async function generate() {
  const outputPath = path.join(process.cwd(), 'public', 'images', 'marketplace', 'accounting-gst.jpg');
  console.log(`Rendering Accounting & GST SVG to JPEG: ${outputPath}`);

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);

  console.log('Successfully generated accounting-gst.jpg at 1376x860 with crystal clear text & charts!');
}

generate().catch(err => {
  console.error('Failed to generate banner:', err);
  process.exit(1);
});
