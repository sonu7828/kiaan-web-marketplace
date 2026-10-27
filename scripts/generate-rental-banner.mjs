import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1376" height="860" viewBox="0 0 1376 860" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Ambient Glow (Card 2: Blue/Cyan theme) -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.28" />
      <stop offset="45%" stop-color="#0284C7" stop-opacity="0.12" />
      <stop offset="85%" stop-color="#0A0C12" stop-opacity="0" />
    </radialGradient>

    <!-- Window Drop Shadow -->
    <filter id="winShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="35" flood-color="#000000" flood-opacity="0.85" />
      <feDropShadow dx="0" dy="0" stdDeviation="25" flood-color="#0284C7" flood-opacity="0.16" />
    </filter>

    <!-- Mobile Frame Drop Shadow -->
    <filter id="mobileShadow" x="-30%" y="-20%" width="160%" height="140%">
      <feDropShadow dx="12" dy="20" stdDeviation="28" flood-color="#000000" flood-opacity="0.95" />
      <feDropShadow dx="0" dy="0" stdDeviation="18" flood-color="#06B6D4" flood-opacity="0.25" />
    </filter>

    <!-- Property Card Gradient -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#181D2A" />
      <stop offset="100%" stop-color="#131722" />
    </linearGradient>

    <!-- Add Property Button Gradient -->
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>

    <!-- Mobile Rent Due Card Gradient -->
    <linearGradient id="rentDueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10B981" />
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
      Rental Property Management Portal <tspan fill="#64748B">•</tspan> Properties &amp; Rent Ledger
    </text>

    <!-- Top Right Status Pill -->
    <rect x="1165" y="66" width="135" height="22" rx="11" fill="rgba(2, 132, 199, 0.12)" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1" />
    <circle cx="1179" cy="77" r="3.5" fill="#38BDF8" />
    <text x="1190" y="81" fill="#38BDF8" font-size="10" class="font-sans title-bold" letter-spacing="0.5">PROPERTY CRM</text>
  </g>

  <!-- ─── WINDOW BODY CONTENT ─── -->
  <g class="font-sans">

    <!-- ════════ LEFT MINI NAV BAR ════════ -->
    <rect x="60" y="100" width="56" height="705" fill="#121622" />
    <line x1="116" y1="100" x2="116" y2="805" stroke="#1F2536" stroke-width="1" />

    <!-- Nav Icon 1: Grid -->
    <g transform="translate(76, 125)">
      <rect x="0" y="0" width="9" height="9" rx="2" fill="#64748B" />
      <rect x="13" y="0" width="9" height="9" rx="2" fill="#64748B" />
      <rect x="0" y="13" width="9" height="9" rx="2" fill="#64748B" />
      <rect x="13" y="13" width="9" height="9" rx="2" fill="#64748B" />
    </g>

    <!-- Nav Icon 2: Active Home with glowing pill -->
    <rect x="70" y="168" width="36" height="36" rx="9" fill="rgba(2, 132, 199, 0.18)" stroke="#0284C7" stroke-width="1.2" />
    <path d="M 88 177 L 78 186 L 82 186 L 82 195 L 94 195 L 94 186 L 98 186 Z" fill="#38BDF8" />

    <!-- Nav Icon 3: Dollar -->
    <circle cx="88" cy="235" r="11" fill="none" stroke="#64748B" stroke-width="1.6" />
    <text x="88" y="240" text-anchor="middle" fill="#64748B" font-size="13" class="title-bold">$</text>

    <!-- Nav Icon 4: Users -->
    <circle cx="88" cy="280" r="5" fill="#64748B" />
    <path d="M 80 295 A 8 8 0 0 1 96 295 Z" fill="#64748B" />

    <!-- Nav Icon 5: Settings -->
    <circle cx="88" cy="760" r="5" fill="none" stroke="#64748B" stroke-width="1.8" />
    <line x1="88" y1="752" x2="88" y2="768" stroke="#64748B" stroke-width="1.8" />
    <line x1="80" y1="760" x2="96" y2="760" stroke="#64748B" stroke-width="1.8" />


    <!-- ════════ RIGHT PROPERTIES DASHBOARD AREA ════════ -->
    <g transform="translate(375, 115)">
      <!-- Breadcrumb -->
      <text x="0" y="12" fill="#94A3B8" font-size="11" class="semi-bold" letter-spacing="0.5">DASHBOARD / PROPERTIES</text>

      <!-- Page Title -->
      <text x="0" y="44" fill="#F8FAFC" font-size="26" class="title-bold">Properties</text>

      <!-- Search & Status filter pills -->
      <g transform="translate(180, 22)">
        <rect x="0" y="0" width="180" height="28" rx="6" fill="#181D2A" stroke="#262D3D" stroke-width="1" />
        <text x="12" y="18" fill="#64748B" font-size="11">Search properties...</text>
      </g>

      <!-- + Add Property Button -->
      <rect x="770" y="14" width="145" height="38" rx="8" fill="url(#btnGrad)" />
      <text x="842" y="38" text-anchor="middle" fill="#FFFFFF" font-size="13" class="title-bold">+ Add property</text>

      <!-- ─── 4 PROPERTY CARDS GRID (2x2) ─── -->

      <!-- CARD 1 (Top-Left): Unit 14 -->
      <g transform="translate(0, 75)">
        <rect width="445" height="280" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />

        <!-- Green Home Icon Badge -->
        <rect x="18" y="18" width="44" height="44" rx="10" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1.2" />
        <path d="M 40 29 L 30 38 L 33 38 L 33 49 L 47 49 L 47 38 L 50 38 Z" fill="#10B981" />

        <!-- Unit Title & Address -->
        <text x="74" y="36" fill="#F8FAFC" font-size="17" class="title-bold">Unit 14</text>
        <text x="74" y="55" fill="#94A3B8" font-size="11.5">277 West Street, New York, 50001</text>

        <!-- Specs Row -->
        <text x="74" y="88" fill="#94A3B8" font-size="11">
          <tspan fill="#F8FAFC" font-weight="600">110 ft²</tspan> &#160;•&#160; 
          <tspan fill="#F8FAFC" font-weight="600">1</tspan> bed &#160;•&#160; 
          <tspan fill="#F8FAFC" font-weight="600">1</tspan> bath
        </text>

        <!-- Status Badges -->
        <text x="74" y="115" fill="#94A3B8" font-size="11">Online rent:</text>
        <circle cx="145" cy="111" r="3.5" fill="#10B981" />
        <text x="154" y="115" fill="#10B981" font-size="11" class="semi-bold">Enabled</text>

        <text x="74" y="140" fill="#94A3B8" font-size="11">Lease:</text>
        <text x="115" y="140" fill="#F8FAFC" font-size="11" class="semi-bold">12/2/2021 - 12/2/2022</text>

        <!-- Divider -->
        <line x1="18" y1="165" x2="427" y2="165" stroke="#252C3C" stroke-width="1" />

        <!-- Due & Amount -->
        <text x="18" y="195" fill="#94A3B8" font-size="11.5" class="semi-bold">Due 12/2/22</text>
        <text x="427" y="195" text-anchor="end" fill="#F8FAFC" font-size="19" class="title-bold">-$250.00</text>

        <!-- Progress Bar (Cyan - Processing) -->
        <rect x="18" y="210" width="409" height="6" rx="3" fill="#252D3F" />
        <rect x="18" y="210" width="205" height="6" rx="3" fill="#06B6D4" />
        <circle cx="223" cy="213" r="5" fill="#06B6D4" stroke="#10131B" stroke-width="2" />

        <text x="18" y="240" fill="#06B6D4" font-size="11.5" class="semi-bold">Processing</text>
        <text x="427" y="240" text-anchor="end" fill="#94A3B8" font-size="11">Est. arrival: 15/2/22</text>
      </g>

      <!-- CARD 2 (Top-Right): Unit 16 -->
      <g transform="translate(470, 75)">
        <rect width="445" height="280" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />

        <!-- Green Home Icon Badge -->
        <rect x="18" y="18" width="44" height="44" rx="10" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1.2" />
        <path d="M 40 29 L 30 38 L 33 38 L 33 49 L 47 49 L 47 38 L 50 38 Z" fill="#10B981" />

        <!-- Unit Title & Address -->
        <text x="74" y="36" fill="#F8FAFC" font-size="17" class="title-bold">Unit 16</text>
        <text x="74" y="55" fill="#94A3B8" font-size="11.5">277 West Street, New York, 50001</text>

        <!-- Specs Row -->
        <text x="74" y="88" fill="#94A3B8" font-size="11">
          <tspan fill="#F8FAFC" font-weight="600">110 ft²</tspan> &#160;•&#160; 
          <tspan fill="#F8FAFC" font-weight="600">1</tspan> bed &#160;•&#160; 
          <tspan fill="#F8FAFC" font-weight="600">1</tspan> bath
        </text>

        <!-- Status Badges -->
        <text x="74" y="115" fill="#94A3B8" font-size="11">Online rent:</text>
        <circle cx="145" cy="111" r="3.5" fill="#10B981" />
        <text x="154" y="115" fill="#10B981" font-size="11" class="semi-bold">Enabled</text>

        <text x="74" y="140" fill="#94A3B8" font-size="11">Lease:</text>
        <text x="115" y="140" fill="#F8FAFC" font-size="11" class="semi-bold">12/2/2021 - 12/2/2022</text>

        <!-- Divider -->
        <line x1="18" y1="165" x2="427" y2="165" stroke="#252C3C" stroke-width="1" />

        <!-- Due & Amount -->
        <text x="18" y="195" fill="#94A3B8" font-size="11.5" class="semi-bold">Due 12/2/22</text>
        <text x="427" y="195" text-anchor="end" fill="#F8FAFC" font-size="19" class="title-bold">-$250.00</text>

        <!-- Progress Bar (Emerald Green - Paid) -->
        <rect x="18" y="210" width="409" height="6" rx="3" fill="#252D3F" />
        <rect x="18" y="210" width="409" height="6" rx="3" fill="#10B981" />

        <text x="18" y="240" fill="#10B981" font-size="11.5" class="semi-bold">Paid</text>
        <text x="427" y="240" text-anchor="end" fill="#10B981" font-size="11">Arrived: 15/2/22</text>
      </g>

      <!-- CARD 3 (Bottom-Left): 890 Prairie Grass Dr -->
      <g transform="translate(0, 380)">
        <rect width="445" height="280" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />

        <!-- Blue Home Icon Badge -->
        <rect x="18" y="18" width="44" height="44" rx="10" fill="rgba(2, 132, 199, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.2" />
        <path d="M 40 29 L 30 38 L 33 38 L 33 49 L 47 49 L 47 38 L 50 38 Z" fill="#38BDF8" />

        <!-- Unit Title & Address -->
        <text x="74" y="36" fill="#F8FAFC" font-size="17" class="title-bold">890 Prairie Grass Dr</text>
        <text x="74" y="55" fill="#94A3B8" font-size="11.5">Las Vegas, 89123</text>

        <!-- Specs Row -->
        <text x="74" y="88" fill="#94A3B8" font-size="11">
          <tspan fill="#F8FAFC" font-weight="600">110 ft²</tspan> &#160;•&#160; 
          <tspan fill="#F8FAFC" font-weight="600">1</tspan> bed &#160;•&#160; 
          <tspan fill="#F8FAFC" font-weight="600">1</tspan> bath
        </text>

        <!-- Status Badges -->
        <text x="74" y="115" fill="#94A3B8" font-size="11">Online rent:</text>
        <circle cx="145" cy="111" r="3.5" fill="#10B981" />
        <text x="154" y="115" fill="#10B981" font-size="11" class="semi-bold">Enabled</text>

        <text x="74" y="140" fill="#94A3B8" font-size="11">Lease:</text>
        <text x="115" y="140" fill="#F8FAFC" font-size="11" class="semi-bold">12/2/2021 - 12/2/2022</text>

        <!-- Divider -->
        <line x1="18" y1="165" x2="427" y2="165" stroke="#252C3C" stroke-width="1" />

        <!-- Due & Amount -->
        <text x="18" y="195" fill="#94A3B8" font-size="11.5" class="semi-bold">Due 12/2/22</text>
        <text x="427" y="195" text-anchor="end" fill="#EF4444" font-size="19" class="title-bold">-$250.00</text>

        <!-- Progress Bar (Red - Failed) -->
        <rect x="18" y="210" width="409" height="6" rx="3" fill="#252D3F" />
        <rect x="18" y="210" width="120" height="6" rx="3" fill="#EF4444" />

        <text x="18" y="240" fill="#EF4444" font-size="11.5" class="semi-bold">Failed</text>
        <text x="427" y="240" text-anchor="end" fill="#EF4444" font-size="11">Insufficient funds</text>
      </g>

      <!-- CARD 4 (Bottom-Right): 890 Prairie Grass Dr (Bank not connected) -->
      <g transform="translate(470, 380)">
        <rect width="445" height="280" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />

        <!-- Blue Home Icon Badge -->
        <rect x="18" y="18" width="44" height="44" rx="10" fill="rgba(2, 132, 199, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.2" />
        <path d="M 40 29 L 30 38 L 33 38 L 33 49 L 47 49 L 47 38 L 50 38 Z" fill="#38BDF8" />

        <!-- Unit Title & Address -->
        <text x="74" y="36" fill="#F8FAFC" font-size="17" class="title-bold">890 Prairie Grass Dr</text>
        <text x="74" y="55" fill="#94A3B8" font-size="11.5">Las Vegas, 89123</text>

        <!-- Specs Row -->
        <text x="74" y="88" fill="#94A3B8" font-size="11">
          <tspan fill="#F8FAFC" font-weight="600">110 ft²</tspan> &#160;•&#160; 
          <tspan fill="#F8FAFC" font-weight="600">1</tspan> bed &#160;•&#160; 
          <tspan fill="#F8FAFC" font-weight="600">1</tspan> bath
        </text>

        <!-- Status Badges -->
        <text x="74" y="115" fill="#94A3B8" font-size="11">Online rent:</text>
        <circle cx="145" cy="111" r="3.5" fill="#F59E0B" />
        <text x="154" y="115" fill="#F59E0B" font-size="11" class="semi-bold">Bank not connected</text>

        <text x="74" y="140" fill="#94A3B8" font-size="11">Lease:</text>
        <text x="115" y="140" fill="#F8FAFC" font-size="11" class="semi-bold">12/2/2021 - 12/2/2022</text>

        <!-- Divider -->
        <line x1="18" y1="165" x2="427" y2="165" stroke="#252C3C" stroke-width="1" />

        <!-- Due & Amount -->
        <text x="18" y="200" fill="#94A3B8" font-size="11.5" class="semi-bold">Scheduled</text>
        <text x="427" y="200" text-anchor="end" fill="#F8FAFC" font-size="19" class="title-bold">-$250.00</text>
        <text x="427" y="240" text-anchor="end" fill="#94A3B8" font-size="11">Due on 12/2/2022</text>
      </g>
    </g>

  </g>

  <!-- ════════ FLOATING SMARTPHONE COMPANION APP (Clean Left Placement) ════════ -->
  <g filter="url(#mobileShadow)" transform="translate(110, 165)">
    <!-- Smartphone Frame -->
    <rect width="245" height="585" rx="32" fill="#141824" stroke="#2E374E" stroke-width="2.5" />
    <rect x="7" y="7" width="231" height="571" rx="26" fill="#0F131D" />

    <!-- Speaker Notch -->
    <rect x="90" y="16" width="65" height="4" rx="2" fill="#232A3B" />
    <circle cx="165" cy="18" r="3" fill="#1E2433" />

    <!-- Mobile Header -->
    <text x="22" y="48" fill="#38BDF8" font-size="14" class="title-bold">←</text>
    <rect x="65" y="37" width="80" height="17" rx="8.5" fill="rgba(2, 132, 199, 0.15)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="0.8" />
    <text x="105" y="49" text-anchor="middle" fill="#38BDF8" font-size="8.5" class="title-bold" letter-spacing="0.5">PART 3 OF 3</text>
    <circle cx="205" cy="46" r="3.5" fill="#EF4444" />
    <circle cx="218" cy="46" r="7" fill="#3B82F6" />

    <!-- Title & Description -->
    <text x="22" y="80" fill="#F8FAFC" font-size="15.5" class="title-bold">Automatic rent</text>
    <text x="22" y="99" fill="#F8FAFC" font-size="15.5" class="title-bold">payment enabled</text>

    <text x="22" y="122" fill="#94A3B8" font-size="9.5" class="regular">Your Automatic Rent Payment for Unit 5A,</text>
    <text x="22" y="136" fill="#94A3B8" font-size="9.5" class="regular">277 West 11th Street has been set up.</text>

    <!-- Upcoming Automatic Payment Card -->
    <rect x="18" y="155" width="209" height="160" rx="12" fill="#181D2A" stroke="#252D3F" stroke-width="1" />
    <text x="28" y="177" fill="#F8FAFC" font-size="11.5" class="title-bold">Upcoming Payment</text>

    <text x="28" y="200" fill="#64748B" font-size="8.5" class="semi-bold">DUE DATE</text>
    <text x="28" y="216" fill="#F8FAFC" font-size="10.5" class="semi-bold">Sep 4 2022</text>

    <text x="125" y="200" fill="#64748B" font-size="8.5" class="semi-bold">WITHDRAWAL</text>
    <text x="125" y="216" fill="#38BDF8" font-size="10.5" class="semi-bold">Aug 25 2022</text>

    <line x1="28" y1="232" x2="217" y2="232" stroke="#242B3A" stroke-width="1" />

    <text x="28" y="252" fill="#94A3B8" font-size="9.5">Rent Amount</text>
    <text x="217" y="252" text-anchor="end" fill="#F8FAFC" font-size="10.5" class="semi-bold">$1,000.00</text>

    <text x="28" y="272" fill="#94A3B8" font-size="9.5">Convenience Fee</text>
    <text x="217" y="272" text-anchor="end" fill="#94A3B8" font-size="10.5">$2.50</text>

    <text x="28" y="296" fill="#F8FAFC" font-size="10.5" class="title-bold">TOTAL AMOUNT</text>
    <text x="217" y="296" text-anchor="end" fill="#10B981" font-size="12" class="title-bold">$1,002.50</text>

    <!-- Emerald Rent Due Card (matching screenshot) -->
    <rect x="18" y="330" width="209" height="205" rx="14" fill="url(#rentDueGrad)" />
    
    <circle cx="42" cy="358" r="9" fill="rgba(255,255,255,0.2)" />
    <text x="42" y="362" text-anchor="middle" fill="#FFFFFF" font-size="10">⚡</text>

    <text x="58" y="363" fill="#FFFFFF" font-size="14.5" class="title-bold">Rent due</text>

    <text x="28" y="392" fill="rgba(255,255,255,0.92)" font-size="9.5" class="regular">Your next rent payment due Aug 4 2022</text>
    <text x="28" y="406" fill="rgba(255,255,255,0.92)" font-size="9.5" class="regular">is not included in your autopay schedule.</text>

    <text x="122" y="445" text-anchor="middle" fill="#FFFFFF" font-size="22" class="title-bold">$1,000.00</text>

    <!-- Pay now button -->
    <rect x="30" y="470" width="185" height="36" rx="8" fill="#FFFFFF" />
    <text x="122" y="492" text-anchor="middle" fill="#047857" font-size="12" class="title-bold">Pay now</text>
  </g>

</svg>
`;

async function run() {
  const outputPath = path.resolve('public/images/marketplace/real-estate-crm.jpg');
  console.log('Rendering Rental Property SVG to JPEG:', outputPath);

  const buffer = Buffer.from(svg.trim());
  await sharp(buffer)
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);

  console.log('Successfully generated real-estate-crm.jpg at 1376x860!');
}

run().catch(err => {
  console.error('Error generating image:', err);
  process.exit(1);
});
