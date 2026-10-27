import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Helper to calculate SVG donut arc path
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function createDonutSegment(cx, cy, r, width, startAngle, endAngle, color) {
  // SVG stroke-dasharray approach for perfect antialiasing
  const circumference = 2 * Math.PI * r;
  const angleSpan = endAngle - startAngle;
  const strokeLength = (angleSpan / 360) * circumference;
  const spaceLength = circumference - strokeLength;
  const offset = -((startAngle / 360) * circumference) + (circumference * 0.25);
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${width}" stroke-dasharray="${strokeLength} ${spaceLength}" stroke-dashoffset="${offset}" stroke-linecap="round"/>`;
}

// Donut 1: Normal Work Order (15 total: Closed 5, Pending 5, Open 5)
// Green #10B981, Amber #F59E0B, Cyan #06B6D4
const d1_cx = 405, d1_cy = 275, d1_r = 54, d1_w = 20;
// Donut 2: PM Work Order (27 total: Closed 10, Overdue 9, Open 8)
// Green #10B981, Red #F43F5E, Cyan #06B6D4
const d2_cx = 740, d2_cy = 275, d2_r = 54, d2_w = 20;
// Donut 4: Product Outage (Red 48-72h, Cyan 0-24h)
const d4_cx = 445, d4_cy = 600, d4_r = 54, d4_w = 20;
// Donut 5: Inspection Work Order (15 total: Closed 5, Overdue 5, Open 5)
const d5_cx = 945, d5_cy = 600, d5_r = 54, d5_w = 20;

const svg = `
<svg width="1376" height="860" viewBox="0 0 1376 860" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Ambient Glow -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.28" />
      <stop offset="45%" stop-color="#06B6D4" stop-opacity="0.10" />
      <stop offset="85%" stop-color="#0B0D14" stop-opacity="0" />
    </radialGradient>

    <!-- Card Background Gradient -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#181D29" />
      <stop offset="100%" stop-color="#141822" />
    </linearGradient>

    <!-- Filter Header Gradient -->
    <linearGradient id="filterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#4F46E5" />
    </linearGradient>

    <!-- Action View Button Gradient -->
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>

    <!-- Gauge Gradient Arc -->
    <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#EF4444" />
      <stop offset="50%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>

    <!-- Window Drop Shadow -->
    <filter id="winShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="35" flood-color="#000000" flood-opacity="0.85" />
      <feDropShadow dx="0" dy="0" stdDeviation="25" flood-color="#6366F1" flood-opacity="0.18" />
    </filter>

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

  <!-- ─── FLOATING macOS WINDOW ─── -->
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
      Society Maintenance Portal <tspan fill="#64748B">•</tspan> Maintenance Status Dashboard
    </text>

    <!-- Top Right Status Pill -->
    <rect x="1175" y="66" width="125" height="22" rx="11" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.35)" stroke-width="1" />
    <circle cx="1189" cy="77" r="3.5" fill="#10B981" />
    <text x="1200" y="81" fill="#10B981" font-size="10" class="font-sans title-bold" letter-spacing="0.5">LIVE SYSTEM</text>
  </g>

  <!-- ─── WINDOW BODY CONTENT ─── -->
  <g class="font-sans">
    <!-- ════════ LEFT FILTER SIDEBAR ════════ -->
    <rect x="60" y="100" width="220" height="705" fill="#131620" />
    <line x1="280" y1="100" x2="280" y2="805" stroke="#212636" stroke-width="1" />

    <!-- Filter Title Banner (Matching user screenshot) -->
    <rect x="76" y="115" width="188" height="36" rx="8" fill="url(#filterGrad)" />
    <text x="96" y="138" fill="#FFFFFF" font-size="14" class="title-bold" letter-spacing="0.4">Filter</text>
    <!-- Hamburger icon -->
    <line x1="240" y1="129" x2="252" y2="129" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
    <line x1="240" y1="133" x2="252" y2="133" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
    <line x1="240" y1="137" x2="252" y2="137" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />

    <!-- Form Input 1: Organization -->
    <text x="76" y="174" fill="#94A3B8" font-size="11" class="semi-bold">Organization</text>
    <rect x="76" y="182" width="188" height="32" rx="6" fill="#181D2A" stroke="#2D354A" stroke-width="1" />
    <text x="88" y="203" fill="#F8FAFC" font-size="12" class="semi-bold">SIERRA</text>
    <text x="246" y="203" fill="#94A3B8" font-size="11">▾</text>

    <!-- Form Input 2: Site -->
    <text x="76" y="235" fill="#94A3B8" font-size="11" class="semi-bold">Site</text>
    <rect x="76" y="243" width="188" height="32" rx="6" fill="#181D2A" stroke="#2D354A" stroke-width="1" />
    <text x="88" y="264" fill="#F8FAFC" font-size="12" class="semi-bold">INDIA</text>
    <text x="246" y="264" fill="#94A3B8" font-size="11">▾</text>

    <!-- Form Input 3: Date Range -->
    <text x="76" y="296" fill="#94A3B8" font-size="11" class="semi-bold">Date Range</text>
    <rect x="76" y="304" width="188" height="32" rx="6" fill="#181D2A" stroke="#2D354A" stroke-width="1" />
    <text x="88" y="325" fill="#CBD5E1" font-size="11" class="regular">Last 30 Days (default)</text>
    <text x="246" y="325" fill="#94A3B8" font-size="11">▾</text>

    <!-- Form Input 4: From -->
    <text x="76" y="357" fill="#94A3B8" font-size="11" class="semi-bold">From</text>
    <rect x="76" y="365" width="188" height="32" rx="6" fill="#181D2A" stroke="#2D354A" stroke-width="1" />
    <text x="88" y="386" fill="#F8FAFC" font-size="11.5" class="semi-bold">13/12/2019</text>
    <text x="246" y="386" fill="#94A3B8" font-size="11">▾</text>

    <!-- Form Input 5: To -->
    <text x="76" y="418" fill="#94A3B8" font-size="11" class="semi-bold">To</text>
    <rect x="76" y="426" width="188" height="32" rx="6" fill="#181D2A" stroke="#2D354A" stroke-width="1" />
    <text x="88" y="447" fill="#F8FAFC" font-size="11.5" class="semi-bold">21/12/2019</text>
    <text x="246" y="447" fill="#94A3B8" font-size="11">▾</text>

    <!-- View Button -->
    <rect x="194" y="475" width="70" height="32" rx="6" fill="url(#btnGrad)" />
    <text x="229" y="496" text-anchor="middle" fill="#FFFFFF" font-size="12" class="title-bold">View</text>

    <!-- Sidebar Mini Info Box -->
    <rect x="76" y="540" width="188" height="240" rx="10" fill="#161B26" stroke="#242B3C" stroke-width="1" />
    <text x="90" y="565" fill="#818CF8" font-size="11" class="title-bold" letter-spacing="0.5">COMMUNITY METRICS</text>

    <text x="90" y="595" fill="#94A3B8" font-size="11">Total Flats / Units</text>
    <text x="90" y="613" fill="#F8FAFC" font-size="15" class="title-bold">480 Units</text>

    <text x="90" y="645" fill="#94A3B8" font-size="11">Monthly Collection</text>
    <text x="90" y="663" fill="#10B981" font-size="15" class="title-bold">₹12,45,000</text>

    <text x="90" y="695" fill="#94A3B8" font-size="11">Avg Resolution Time</text>
    <text x="90" y="713" fill="#F8FAFC" font-size="15" class="title-bold">3.2 Hours</text>

    <rect x="90" y="735" width="160" height="6" rx="3" fill="#242B3C" />
    <rect x="90" y="735" width="135" height="6" rx="3" fill="#10B981" />
    <text x="90" y="757" fill="#94A3B8" font-size="10">84% On-Time Resolution</text>

    <!-- ════════ MAIN CONTENT AREA ════════ -->

    <!-- Sub-Header Status Bar (Matching screenshot) -->
    <rect x="281" y="100" width="1035" height="42" fill="#141824" />
    <line x1="281" y1="142" x2="1316" y2="142" stroke="#212636" stroke-width="1" />

    <!-- Dashboard Title -->
    <text x="305" y="126" fill="#F8FAFC" font-size="16" class="title-bold">Maintenance Status Dashboard</text>

    <!-- Date Range Tag -->
    <text x="610" y="126" fill="#818CF8" font-size="11" class="semi-bold">
      From: 13/12/2019 <tspan fill="#64748B">To:</tspan> 21/12/2019
    </text>

    <!-- Status Legend Dots -->
    <circle cx="985" cy="122" r="4.5" fill="#10B981" />
    <text x="996" y="126" fill="#94A3B8" font-size="11.5">Closed</text>

    <circle cx="1065" cy="122" r="4.5" fill="#F59E0B" />
    <text x="1076" y="126" fill="#94A3B8" font-size="11.5">Pending</text>

    <circle cx="1150" cy="122" r="4.5" fill="#06B6D4" />
    <text x="1161" y="126" fill="#94A3B8" font-size="11.5">Open</text>

    <circle cx="1225" cy="122" r="4.5" fill="#EF4444" />
    <text x="1236" y="126" fill="#94A3B8" font-size="11.5">Overdue</text>


    <!-- ════════ ROW 1 OF CARDS ════════ -->

    <!-- ── CARD 1: Normal Work Order ── -->
    <g transform="translate(305, 158)">
      <rect width="320" height="305" rx="12" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
      <text x="20" y="32" fill="#F8FAFC" font-size="15" class="title-bold">Normal Work Order</text>
      <!-- Details Button -->
      <rect x="235" y="18" width="68" height="22" rx="6" fill="#6366F1" />
      <text x="269" y="33" text-anchor="middle" fill="#FFFFFF" font-size="10.5" class="title-bold">Details ↗</text>

      <!-- Donut Chart -->
      <!-- Center at (100, 165), radius 52, stroke 20 -->
      <!-- 3 equal parts: Closed (5) - green, Pending (5) - amber, Open (5) - cyan -->
      <circle cx="100" cy="165" r="52" fill="none" stroke="#10B981" stroke-width="20" stroke-dasharray="108 218" stroke-dashoffset="0" />
      <circle cx="100" cy="165" r="52" fill="none" stroke="#F59E0B" stroke-width="20" stroke-dasharray="108 218" stroke-dashoffset="-109" />
      <circle cx="100" cy="165" r="52" fill="none" stroke="#06B6D4" stroke-width="20" stroke-dasharray="108 218" stroke-dashoffset="-218" />
      
      <!-- Inner text -->
      <text x="100" y="162" text-anchor="middle" fill="#FFFFFF" font-size="20" class="title-bold">15</text>
      <text x="100" y="178" text-anchor="middle" fill="#94A3B8" font-size="9" class="semi-bold">TOTAL</text>

      <!-- Legend & Counts Table -->
      <g transform="translate(195, 110)">
        <text x="0" y="20" fill="#10B981" font-size="12" class="semi-bold">Closed</text>
        <text x="95" y="20" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">5</text>

        <text x="0" y="55" fill="#F59E0B" font-size="12" class="semi-bold">Pending</text>
        <text x="95" y="55" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">5</text>

        <text x="0" y="90" fill="#06B6D4" font-size="12" class="semi-bold">Open</text>
        <text x="95" y="90" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">5</text>

        <line x1="0" y1="108" x2="95" y2="108" stroke="#2B3346" stroke-width="1" />

        <text x="0" y="128" fill="#F8FAFC" font-size="12.5" class="title-bold">TOTAL</text>
        <text x="95" y="128" text-anchor="end" fill="#F8FAFC" font-size="14" class="title-bold">15</text>
      </g>
    </g>

    <!-- ── CARD 2: PM Work Order ── -->
    <g transform="translate(645, 158)">
      <rect width="320" height="305" rx="12" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
      <text x="20" y="32" fill="#F8FAFC" font-size="15" class="title-bold">PM Work Order</text>
      <rect x="235" y="18" width="68" height="22" rx="6" fill="#6366F1" />
      <text x="269" y="33" text-anchor="middle" fill="#FFFFFF" font-size="10.5" class="title-bold">Details ↗</text>

      <!-- Donut: Total 27. Closed 10 (121), Overdue 9 (109), Open 8 (96) -->
      <circle cx="100" cy="165" r="52" fill="none" stroke="#10B981" stroke-width="20" stroke-dasharray="121 205" stroke-dashoffset="0" />
      <circle cx="100" cy="165" r="52" fill="none" stroke="#EF4444" stroke-width="20" stroke-dasharray="109 217" stroke-dashoffset="-121" />
      <circle cx="100" cy="165" r="52" fill="none" stroke="#06B6D4" stroke-width="20" stroke-dasharray="96 230" stroke-dashoffset="-230" />

      <text x="100" y="162" text-anchor="middle" fill="#FFFFFF" font-size="20" class="title-bold">27</text>
      <text x="100" y="178" text-anchor="middle" fill="#94A3B8" font-size="9" class="semi-bold">TOTAL</text>

      <g transform="translate(195, 110)">
        <text x="0" y="20" fill="#10B981" font-size="12" class="semi-bold">Closed</text>
        <text x="95" y="20" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">10</text>

        <text x="0" y="55" fill="#EF4444" font-size="12" class="semi-bold">Overdue</text>
        <text x="95" y="55" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">9</text>

        <text x="0" y="90" fill="#06B6D4" font-size="12" class="semi-bold">Open</text>
        <text x="95" y="90" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">8</text>

        <line x1="0" y1="108" x2="95" y2="108" stroke="#2B3346" stroke-width="1" />

        <text x="0" y="128" fill="#F8FAFC" font-size="12.5" class="title-bold">TOTAL</text>
        <text x="95" y="128" text-anchor="end" fill="#F8FAFC" font-size="14" class="title-bold">27</text>
      </g>
    </g>

    <!-- ── CARD 3: PM Hit Rate (Speedometer Gauge) ── -->
    <g transform="translate(985, 158)">
      <rect width="315" height="305" rx="12" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
      <text x="20" y="32" fill="#F8FAFC" font-size="15" class="title-bold">PM Hit Rate</text>
      <rect x="230" y="18" width="68" height="22" rx="6" fill="#6366F1" />
      <text x="264" y="33" text-anchor="middle" fill="#FFFFFF" font-size="10.5" class="title-bold">Details ↗</text>

      <!-- Speedometer Arc -->
      <g transform="translate(100, 165)">
        <!-- Outer Track -->
        <circle cx="0" cy="0" r="62" fill="none" stroke="#252C3D" stroke-width="14" stroke-dasharray="292 389" stroke-dashoffset="48" stroke-linecap="round" />
        <circle cx="0" cy="0" r="62" fill="none" stroke="url(#gaugeGrad)" stroke-width="14" stroke-dasharray="292 389" stroke-dashoffset="48" stroke-linecap="round" />

        <!-- Tick Marks & Numbers -->
        <text x="-48" y="30" fill="#64748B" font-size="8.5">0</text>
        <text x="-52" y="-5" fill="#64748B" font-size="8.5">20</text>
        <text x="-38" y="-38" fill="#64748B" font-size="8.5">40</text>
        <text x="-5" y="-50" fill="#64748B" font-size="8.5">50</text>
        <text x="28" y="-38" fill="#64748B" font-size="8.5">60</text>
        <text x="42" y="-5" fill="#64748B" font-size="8.5">80</text>
        <text x="36" y="30" fill="#64748B" font-size="8.5">100</text>

        <!-- Center Needle Pivot -->
        <circle cx="0" cy="0" r="7" fill="#6366F1" stroke="#FFFFFF" stroke-width="1.5" />
        <!-- Needle pointing down-left to 0 -->
        <line x1="0" y1="0" x2="-35" y2="24" stroke="#F8FAFC" stroke-width="2.5" stroke-linecap="round" />
      </g>

      <!-- Completed Tasks Metric (matching screenshot) -->
      <g transform="translate(200, 135)">
        <text x="40" y="20" text-anchor="middle" fill="#94A3B8" font-size="12" class="semi-bold">Completed</text>
        <text x="40" y="38" text-anchor="middle" fill="#94A3B8" font-size="12" class="semi-bold">Tasks in</text>

        <rect x="0" y="55" width="80" height="42" rx="8" fill="#6366F1" />
        <text x="40" y="83" text-anchor="middle" fill="#FFFFFF" font-size="20" class="title-bold">0%</text>
      </g>
    </g>


    <!-- ════════ ROW 2 OF CARDS ════════ -->

    <!-- ── CARD 4: Product Outage ── -->
    <g transform="translate(305, 480)">
      <rect width="485" height="305" rx="12" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
      <text x="20" y="32" fill="#F8FAFC" font-size="15" class="title-bold">Product Outage</text>
      <rect x="400" y="18" width="68" height="22" rx="6" fill="#6366F1" />
      <text x="434" y="33" text-anchor="middle" fill="#FFFFFF" font-size="10.5" class="title-bold">Details ↗</text>

      <!-- Donut: 48-72h (red), 0-24h (cyan) -->
      <circle cx="130" cy="165" r="58" fill="none" stroke="#EF4444" stroke-width="22" stroke-dasharray="290 364" stroke-dashoffset="0" />
      <circle cx="130" cy="165" r="58" fill="none" stroke="#06B6D4" stroke-width="22" stroke-dasharray="74 364" stroke-dashoffset="-290" />

      <text x="130" y="162" text-anchor="middle" fill="#FFFFFF" font-size="20" class="title-bold">1</text>
      <text x="130" y="178" text-anchor="middle" fill="#94A3B8" font-size="9" class="semi-bold">OUTAGE</text>

      <!-- Legend -->
      <g transform="translate(265, 95)">
        <text x="0" y="20" fill="#06B6D4" font-size="12.5" class="semi-bold">0-24 Hours</text>
        <text x="160" y="20" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">0</text>

        <text x="0" y="55" fill="#94A3B8" font-size="12.5" class="semi-bold">24-48 Hours</text>
        <text x="160" y="55" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">0</text>

        <text x="0" y="90" fill="#EF4444" font-size="12.5" class="semi-bold">48-72 Hours</text>
        <text x="160" y="90" text-anchor="end" fill="#EF4444" font-size="14" class="title-bold">1</text>

        <text x="0" y="125" fill="#94A3B8" font-size="12.5" class="semi-bold">Above 72</text>
        <text x="160" y="125" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">0</text>

        <line x1="0" y1="145" x2="160" y2="145" stroke="#2B3346" stroke-width="1" />

        <text x="0" y="168" fill="#F8FAFC" font-size="13" class="title-bold">TOTAL OUTAGE</text>
        <text x="160" y="168" text-anchor="end" fill="#EF4444" font-size="15" class="title-bold">1</text>
      </g>
    </g>

    <!-- ── CARD 5: Inspection Work Order ── -->
    <g transform="translate(815, 480)">
      <rect width="485" height="305" rx="12" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
      <text x="20" y="32" fill="#F8FAFC" font-size="15" class="title-bold">Inspection Work Order</text>
      <rect x="400" y="18" width="68" height="22" rx="6" fill="#6366F1" />
      <text x="434" y="33" text-anchor="middle" fill="#FFFFFF" font-size="10.5" class="title-bold">Details ↗</text>

      <!-- Donut: Total 15 (Closed 5, Overdue 5, Open 5) -->
      <circle cx="130" cy="165" r="58" fill="none" stroke="#10B981" stroke-width="22" stroke-dasharray="121 243" stroke-dashoffset="0" />
      <circle cx="130" cy="165" r="58" fill="none" stroke="#EF4444" stroke-width="22" stroke-dasharray="121 243" stroke-dashoffset="-121" />
      <circle cx="130" cy="165" r="58" fill="none" stroke="#06B6D4" stroke-width="22" stroke-dasharray="122 243" stroke-dashoffset="-242" />

      <text x="130" y="162" text-anchor="middle" fill="#FFFFFF" font-size="20" class="title-bold">15</text>
      <text x="130" y="178" text-anchor="middle" fill="#94A3B8" font-size="9" class="semi-bold">TOTAL</text>

      <!-- Legend -->
      <g transform="translate(265, 95)">
        <text x="0" y="25" fill="#10B981" font-size="13" class="semi-bold">Closed</text>
        <text x="160" y="25" text-anchor="end" fill="#F8FAFC" font-size="14" class="title-bold">5</text>

        <text x="0" y="65" fill="#EF4444" font-size="13" class="semi-bold">Overdue</text>
        <text x="160" y="65" text-anchor="end" fill="#F8FAFC" font-size="14" class="title-bold">5</text>

        <text x="0" y="105" fill="#06B6D4" font-size="13" class="semi-bold">Open</text>
        <text x="160" y="105" text-anchor="end" fill="#F8FAFC" font-size="14" class="title-bold">5</text>

        <line x1="0" y1="135" x2="160" y2="135" stroke="#2B3346" stroke-width="1" />

        <text x="0" y="162" fill="#F8FAFC" font-size="13" class="title-bold">TOTAL</text>
        <text x="160" y="162" text-anchor="end" fill="#F8FAFC" font-size="15" class="title-bold">15</text>
      </g>
    </g>

  </g>
</svg>
`;

async function run() {
  const outputPath = path.resolve('public/images/marketplace/society-maintenance.jpg');
  console.log('Rendering SVG to JPEG:', outputPath);

  const buffer = Buffer.from(svg.trim());
  await sharp(buffer)
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);

  console.log('Successfully generated society-maintenance.jpg at 1376x860!');
}

run().catch(err => {
  console.error('Error generating image:', err);
  process.exit(1);
});
