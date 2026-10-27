import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1376" height="860" viewBox="0 0 1376 860" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Ambient Glow (Healthcare Emerald/Teal Theme) -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.25" />
      <stop offset="45%" stop-color="#06B6D4" stop-opacity="0.12" />
      <stop offset="85%" stop-color="#0A0C12" stop-opacity="0" />
    </radialGradient>

    <!-- Window Drop Shadow -->
    <filter id="winShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="35" flood-color="#000000" flood-opacity="0.85" />
      <feDropShadow dx="0" dy="0" stdDeviation="25" flood-color="#10B981" flood-opacity="0.16" />
    </filter>

    <!-- Card Background Gradient -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#181D2A" />
      <stop offset="100%" stop-color="#131722" />
    </linearGradient>

    <!-- New Appointment Button Gradient -->
    <linearGradient id="btnBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>

    <!-- Add Patient Button Gradient -->
    <linearGradient id="btnGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>

    <!-- Generate Bill Button Gradient -->
    <linearGradient id="btnPurple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1" />
      <stop offset="100%" stop-color="#4F46E5" />
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
      Hospital &amp; Clinic ERP Portal <tspan fill="#64748B">•</tspan> Outpatient &amp; Inpatient Management
    </text>

    <!-- Top Right Status Pill -->
    <rect x="1155" y="66" width="145" height="22" rx="11" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.35)" stroke-width="1" />
    <circle cx="1169" cy="77" r="3.5" fill="#10B981" />
    <text x="1180" y="81" fill="#10B981" font-size="10" class="font-sans title-bold" letter-spacing="0.5">HEALTHCARE SUITE</text>
  </g>

  <!-- ─── WINDOW BODY CONTENT ─── -->
  <g class="font-sans">

    <!-- ════════ LEFT SIDEBAR ════════ -->
    <rect x="60" y="100" width="220" height="705" fill="#121622" />
    <line x1="280" y1="100" x2="280" y2="805" stroke="#1F2536" stroke-width="1" />

    <!-- Clinic Logo & Brand -->
    <g transform="translate(85, 125)">
      <rect x="0" y="0" width="38" height="38" rx="10" fill="url(#btnBlue)" />
      <!-- Medical Cross inside logo -->
      <path d="M 19 9 L 19 29 M 9 19 L 29 19" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
      <text x="48" y="18" fill="#F8FAFC" font-size="15" class="title-bold">ClinicCare</text>
      <text x="48" y="32" fill="#94A3B8" font-size="10" class="semi-bold">Clinic Management</text>
    </g>

    <!-- Navigation Menu Items -->
    <!-- Item 1: Active Dashboard pill -->
    <g transform="translate(76, 190)">
      <rect x="0" y="0" width="188" height="40" rx="10" fill="url(#btnBlue)" />
      <!-- Grid icon -->
      <g transform="translate(16, 12)">
        <rect x="0" y="0" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="9" y="0" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="0" y="9" width="6" height="6" rx="1.5" fill="#FFFFFF" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="#FFFFFF" />
      </g>
      <text x="44" y="25" fill="#FFFFFF" font-size="13" class="title-bold">Dashboard</text>
    </g>

    <!-- Item 2: Appointments -->
    <g transform="translate(76, 245)">
      <!-- Calendar icon -->
      <rect x="16" y="4" width="16" height="15" rx="3" fill="none" stroke="#94A3B8" stroke-width="1.6" />
      <line x1="16" y1="9" x2="32" y2="9" stroke="#94A3B8" stroke-width="1.6" />
      <text x="44" y="17" fill="#CBD5E1" font-size="13" class="semi-bold">Appointments</text>
      <circle cx="170" cy="13" r="8" fill="#2563EB" />
      <text x="170" y="17" text-anchor="middle" fill="#FFFFFF" font-size="9.5" class="title-bold">24</text>
    </g>

    <!-- Item 3: Queue -->
    <g transform="translate(76, 295)">
      <!-- Queue icon -->
      <rect x="16" y="4" width="16" height="15" rx="3" fill="none" stroke="#94A3B8" stroke-width="1.6" />
      <line x1="20" y1="11" x2="28" y2="11" stroke="#94A3B8" stroke-width="1.6" />
      <text x="44" y="17" fill="#CBD5E1" font-size="13" class="semi-bold">Queue / Waiting</text>
      <circle cx="170" cy="13" r="8" fill="#EF4444" />
      <text x="170" y="17" text-anchor="middle" fill="#FFFFFF" font-size="9.5" class="title-bold">8</text>
    </g>

    <!-- Item 4: OPD -->
    <g transform="translate(76, 345)">
      <circle cx="24" cy="12" r="7" fill="none" stroke="#94A3B8" stroke-width="1.6" />
      <text x="24" y="15" text-anchor="middle" fill="#94A3B8" font-size="8" class="title-bold">+</text>
      <text x="44" y="17" fill="#CBD5E1" font-size="13" class="semi-bold">OPD Patients</text>
    </g>

    <!-- Item 5: Billing & Invoices -->
    <g transform="translate(76, 395)">
      <circle cx="24" cy="12" r="7" fill="none" stroke="#94A3B8" stroke-width="1.6" />
      <text x="24" y="16" text-anchor="middle" fill="#94A3B8" font-size="9" class="title-bold">₹</text>
      <text x="44" y="17" fill="#CBD5E1" font-size="13" class="semi-bold">Billing &amp; Finance</text>
    </g>

    <!-- Item 6: Pharmacy / Inventory -->
    <g transform="translate(76, 445)">
      <rect x="16" y="5" width="16" height="14" rx="2" fill="none" stroke="#94A3B8" stroke-width="1.6" />
      <line x1="24" y1="5" x2="24" y2="19" stroke="#94A3B8" stroke-width="1.6" />
      <text x="44" y="17" fill="#CBD5E1" font-size="13" class="semi-bold">Pharmacy Store</text>
    </g>

    <!-- Item 7: Settings -->
    <g transform="translate(76, 755)">
      <circle cx="24" cy="12" r="5" fill="none" stroke="#94A3B8" stroke-width="1.8" />
      <line x1="24" y1="4" x2="24" y2="20" stroke="#94A3B8" stroke-width="1.8" />
      <line x1="16" y1="12" x2="32" y2="12" stroke="#94A3B8" stroke-width="1.8" />
      <text x="44" y="17" fill="#94A3B8" font-size="12.5" class="semi-bold">Clinic Settings</text>
    </g>


    <!-- ════════ MAIN CLINIC DASHBOARD AREA ════════ -->
    <g transform="translate(315, 120)">

      <!-- Top Welcome Banner (Dr. Sharma) -->
      <text x="0" y="18" fill="#94A3B8" font-size="13" class="semi-bold" letter-spacing="0.5">Welcome</text>
      <text x="0" y="52" fill="#F8FAFC" font-size="28" class="title-bold">Good Morning, Dr. Sharma</text>

      <g transform="translate(680, 24)">
        <rect x="0" y="0" width="285" height="36" rx="8" fill="#181D2A" stroke="#262D3D" stroke-width="1" />
        <circle cx="16" cy="18" r="4" fill="#10B981" />
        <text x="28" y="22" fill="#10B981" font-size="11.5" class="title-bold">OPD Active</text>
        <text x="105" y="22" fill="#94A3B8" font-size="11.5">|</text>
        <text x="120" y="22" fill="#F8FAFC" font-size="11.5">Shift: 09:00 AM - 05:00 PM</text>
      </g>

      <!-- ─── 4 TOP STAT CARDS (Clean, Razor-Sharp Metrics) ─── -->

      <!-- Stat Card 1: Today's Appointments (24) -->
      <g transform="translate(0, 85)">
        <rect width="225" height="120" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
        <text x="24" y="56" fill="#38BDF8" font-size="36" class="title-bold">24</text>
        <text x="24" y="90" fill="#94A3B8" font-size="13" class="semi-bold">Today's Appointments</text>
        <rect x="175" y="24" width="28" height="28" rx="8" fill="rgba(2, 132, 199, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1" />
        <text x="189" y="42" text-anchor="middle" fill="#38BDF8" font-size="14">📅</text>
      </g>

      <!-- Stat Card 2: Patients Waiting (8) -->
      <g transform="translate(247, 85)">
        <rect width="225" height="120" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
        <text x="24" y="56" fill="#EF4444" font-size="36" class="title-bold">8</text>
        <text x="24" y="90" fill="#94A3B8" font-size="13" class="semi-bold">Patients Waiting</text>
        <rect x="175" y="24" width="28" height="28" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.4)" stroke-width="1" />
        <text x="189" y="42" text-anchor="middle" fill="#EF4444" font-size="14">⏳</text>
      </g>

      <!-- Stat Card 3: Revenue Today (₹15,200) -->
      <g transform="translate(494, 85)">
        <rect width="225" height="120" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
        <text x="24" y="56" fill="#10B981" font-size="32" class="title-bold">₹15,200</text>
        <text x="24" y="90" fill="#94A3B8" font-size="13" class="semi-bold">Revenue Today</text>
        <rect x="175" y="24" width="28" height="28" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1" />
        <text x="189" y="42" text-anchor="middle" fill="#10B981" font-size="14">💰</text>
      </g>

      <!-- Stat Card 4: Pending Bills (3) -->
      <g transform="translate(741, 85)">
        <rect width="225" height="120" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
        <text x="24" y="56" fill="#F59E0B" font-size="36" class="title-bold">3</text>
        <text x="24" y="90" fill="#94A3B8" font-size="13" class="semi-bold">Pending Bills</text>
        <rect x="175" y="24" width="28" height="28" rx="8" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1" />
        <text x="189" y="42" text-anchor="middle" fill="#F59E0B" font-size="14">🧾</text>
      </g>


      <!-- ─── BOTTOM ROW: RECENT APPOINTMENTS & QUICK ACTIONS ─── -->

      <!-- Card 5 (Left): Recent Appointments Table (Clear, readable real names!) -->
      <g transform="translate(0, 230)">
        <rect width="560" height="430" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />
        
        <!-- Table Header -->
        <text x="24" y="36" fill="#F8FAFC" font-size="17" class="title-bold">Recent Appointments</text>
        <text x="536" y="36" text-anchor="end" fill="#38BDF8" font-size="12" class="semi-bold">View All ↗</text>

        <!-- Column subheadings -->
        <text x="24" y="70" fill="#64748B" font-size="11" class="semi-bold">PATIENT NAME &amp; DOCTOR</text>
        <text x="360" y="70" fill="#64748B" font-size="11" class="semi-bold">STATUS</text>
        <text x="536" y="70" text-anchor="end" fill="#64748B" font-size="11" class="semi-bold">TIME</text>
        <line x1="24" y1="80" x2="536" y2="80" stroke="#252C3C" stroke-width="1" />

        <!-- Row 1: Rahul Sharma -->
        <g transform="translate(24, 98)">
          <circle cx="16" cy="16" r="16" fill="#1E2433" />
          <text x="16" y="20" text-anchor="middle" fill="#38BDF8" font-size="11" class="title-bold">RS</text>
          <text x="44" y="15" fill="#F8FAFC" font-size="13.5" class="title-bold">Rahul Sharma</text>
          <text x="44" y="29" fill="#94A3B8" font-size="11">General Physician Checkup</text>
          
          <rect x="336" y="5" width="82" height="22" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="0.8" />
          <text x="377" y="20" text-anchor="middle" fill="#10B981" font-size="10.5" class="title-bold">Completed</text>

          <text x="512" y="22" text-anchor="end" fill="#F8FAFC" font-size="12.5" class="semi-bold">10:30 AM</text>
        </g>
        <line x1="24" y1="148" x2="536" y2="148" stroke="#1F2536" stroke-width="1" />

        <!-- Row 2: Priya Patel -->
        <g transform="translate(24, 162)">
          <circle cx="16" cy="16" r="16" fill="#1E2433" />
          <text x="16" y="20" text-anchor="middle" fill="#10B981" font-size="11" class="title-bold">PP</text>
          <text x="44" y="15" fill="#F8FAFC" font-size="13.5" class="title-bold">Priya Patel</text>
          <text x="44" y="29" fill="#94A3B8" font-size="11">Dental Consultation</text>
          
          <rect x="336" y="5" width="82" height="22" rx="6" fill="rgba(2, 132, 199, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="0.8" />
          <text x="377" y="20" text-anchor="middle" fill="#38BDF8" font-size="10.5" class="title-bold">In-Progress</text>

          <text x="512" y="22" text-anchor="end" fill="#F8FAFC" font-size="12.5" class="semi-bold">11:15 AM</text>
        </g>
        <line x1="24" y1="212" x2="536" y2="212" stroke="#1F2536" stroke-width="1" />

        <!-- Row 3: Amitabh Verma -->
        <g transform="translate(24, 226)">
          <circle cx="16" cy="16" r="16" fill="#1E2433" />
          <text x="16" y="20" text-anchor="middle" fill="#F59E0B" font-size="11" class="title-bold">AV</text>
          <text x="44" y="15" fill="#F8FAFC" font-size="13.5" class="title-bold">Amitabh Verma</text>
          <text x="44" y="29" fill="#94A3B8" font-size="11">Cardiology Review</text>
          
          <rect x="336" y="5" width="82" height="22" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="0.8" />
          <text x="377" y="20" text-anchor="middle" fill="#F59E0B" font-size="10.5" class="title-bold">Waiting</text>

          <text x="512" y="22" text-anchor="end" fill="#F8FAFC" font-size="12.5" class="semi-bold">12:00 PM</text>
        </g>
        <line x1="24" y1="276" x2="536" y2="276" stroke="#1F2536" stroke-width="1" />

        <!-- Row 4: Sunita Rao -->
        <g transform="translate(24, 290)">
          <circle cx="16" cy="16" r="16" fill="#1E2433" />
          <text x="16" y="20" text-anchor="middle" fill="#A855F7" font-size="11" class="title-bold">SR</text>
          <text x="44" y="15" fill="#F8FAFC" font-size="13.5" class="title-bold">Sunita Rao</text>
          <text x="44" y="29" fill="#94A3B8" font-size="11">Pediatric Follow-up</text>
          
          <rect x="336" y="5" width="82" height="22" rx="6" fill="#181D2A" stroke="#2D354A" stroke-width="0.8" />
          <text x="377" y="20" text-anchor="middle" fill="#94A3B8" font-size="10.5" class="semi-bold">Scheduled</text>

          <text x="512" y="22" text-anchor="end" fill="#F8FAFC" font-size="12.5" class="semi-bold">12:45 PM</text>
        </g>
        <line x1="24" y1="340" x2="536" y2="340" stroke="#1F2536" stroke-width="1" />

        <!-- Row 5: Vikram Malhotra -->
        <g transform="translate(24, 354)">
          <circle cx="16" cy="16" r="16" fill="#1E2433" />
          <text x="16" y="20" text-anchor="middle" fill="#06B6D4" font-size="11" class="title-bold">VM</text>
          <text x="44" y="15" fill="#F8FAFC" font-size="13.5" class="title-bold">Vikram Malhotra</text>
          <text x="44" y="29" fill="#94A3B8" font-size="11">Orthopedic Consultation</text>
          
          <rect x="336" y="5" width="82" height="22" rx="6" fill="#181D2A" stroke="#2D354A" stroke-width="0.8" />
          <text x="377" y="20" text-anchor="middle" fill="#94A3B8" font-size="10.5" class="semi-bold">Scheduled</text>

          <text x="512" y="22" text-anchor="end" fill="#F8FAFC" font-size="12.5" class="semi-bold">02:15 PM</text>
        </g>
      </g>

      <!-- Card 6 (Right): Quick Actions & OPD Room Live Queue -->
      <g transform="translate(585, 230)">
        <rect width="380" height="430" rx="14" fill="url(#cardGrad)" stroke="#262D3D" stroke-width="1.2" />

        <text x="24" y="36" fill="#F8FAFC" font-size="17" class="title-bold">Quick Actions</text>

        <!-- Action Button 1: New Appointment -->
        <g transform="translate(24, 55)">
          <rect width="332" height="46" rx="10" fill="url(#btnBlue)" />
          <text x="20" y="28" fill="#FFFFFF" font-size="16">📅</text>
          <text x="50" y="28" fill="#FFFFFF" font-size="13.5" class="title-bold">+ New Appointment</text>
        </g>

        <!-- Action Button 2: Add Patient -->
        <g transform="translate(24, 115)">
          <rect width="332" height="46" rx="10" fill="url(#btnGreen)" />
          <text x="20" y="28" fill="#FFFFFF" font-size="16">👤</text>
          <text x="50" y="28" fill="#FFFFFF" font-size="13.5" class="title-bold">+ Add Patient Entry</text>
        </g>

        <!-- Action Button 3: Generate Bill -->
        <g transform="translate(24, 175)">
          <rect width="332" height="46" rx="10" fill="url(#btnPurple)" />
          <text x="20" y="28" fill="#FFFFFF" font-size="16">🧾</text>
          <text x="50" y="28" fill="#FFFFFF" font-size="13.5" class="title-bold">₹ Generate Bill &amp; Invoice</text>
        </g>

        <!-- Sub-panel: OPD Live Counter Queue -->
        <g transform="translate(24, 245)">
          <rect width="332" height="160" rx="10" fill="#141822" stroke="#252D3F" stroke-width="1" />
          <text x="16" y="25" fill="#818CF8" font-size="11" class="title-bold" letter-spacing="0.5">LIVE OPD QUEUE STATUS</text>

          <text x="16" y="55" fill="#F8FAFC" font-size="12" class="semi-bold">Room 101 • Dr. Sharma</text>
          <rect x="250" y="42" width="66" height="18" rx="5" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="0.8" />
          <text x="283" y="55" text-anchor="middle" fill="#10B981" font-size="10" class="title-bold">4 Waiting</text>

          <text x="16" y="85" fill="#F8FAFC" font-size="12" class="semi-bold">Room 102 • Dr. Mehra</text>
          <rect x="250" y="72" width="66" height="18" rx="5" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="0.8" />
          <text x="283" y="85" text-anchor="middle" fill="#F59E0B" font-size="10" class="title-bold">2 Waiting</text>

          <text x="16" y="115" fill="#F8FAFC" font-size="12" class="semi-bold">Room 104 • Pediatric OPD</text>
          <rect x="250" y="102" width="66" height="18" rx="5" fill="rgba(2, 132, 199, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="0.8" />
          <text x="283" y="115" text-anchor="middle" fill="#38BDF8" font-size="10" class="title-bold">3 Waiting</text>

          <text x="16" y="145" fill="#94A3B8" font-size="11">Pharmacy Counter:</text>
          <text x="316" y="145" text-anchor="end" fill="#10B981" font-size="11" class="semi-bold">5 Orders Dispensed</text>
        </g>
      </g>

    </g>

  </g>
</svg>
`;

async function run() {
  const outputPath = path.resolve('public/images/marketplace/hospital-erp.jpg');
  console.log('Rendering Hospital ERP SVG to JPEG:', outputPath);

  const buffer = Buffer.from(svg.trim());
  await sharp(buffer)
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);

  console.log('Successfully generated hospital-erp.jpg at 1376x860 with crystal clear text!');
}

run().catch(err => {
  console.error('Error generating image:', err);
  process.exit(1);
});
