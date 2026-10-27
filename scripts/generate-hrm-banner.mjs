import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1376" height="860" viewBox="0 0 1376 860" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Ambient Glow (HRM Purple/Indigo/Cyan Theme) -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.25" />
      <stop offset="45%" stop-color="#3B82F6" stop-opacity="0.12" />
      <stop offset="85%" stop-color="#0A0C12" stop-opacity="0" />
    </radialGradient>

    <!-- Window Drop Shadow -->
    <filter id="winShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="35" flood-color="#000000" flood-opacity="0.85" />
      <feDropShadow dx="0" dy="0" stdDeviation="25" flood-color="#8B5CF6" flood-opacity="0.16" />
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

    <!-- Brand Logo Gradient -->
    <linearGradient id="brandLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4" />
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
      HRM &amp; Payroll Management Portal <tspan fill="#64748B">•</tspan> Enterprise Human Resource System
    </text>

    <!-- Top Right Status Pill -->
    <rect x="1155" y="66" width="145" height="22" rx="11" fill="rgba(139, 92, 246, 0.12)" stroke="rgba(168, 85, 247, 0.35)" stroke-width="1" />
    <circle cx="1169" cy="77" r="3.5" fill="#A855F7" />
    <text x="1180" y="81" fill="#A855F7" font-size="10" class="font-sans title-bold" letter-spacing="0.5">HRM SUITE</text>
  </g>

  <!-- ─── WINDOW BODY CONTENT ─── -->
  <g class="font-sans">

    <!-- ════════ LEFT SIDEBAR ════════ -->
    <rect x="60" y="100" width="220" height="705" fill="#111523" />
    <line x1="280" y1="100" x2="280" y2="805" stroke="#1E2538" stroke-width="1" />

    <!-- Brand Logo (Teal/Cyan icon from screenshot) -->
    <g transform="translate(80, 118)">
      <rect x="0" y="0" width="36" height="36" rx="10" fill="url(#brandLogoGrad)" />
      <!-- Stylized butterfly / leaf nodes -->
      <circle cx="13" cy="18" r="5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="23" cy="18" r="5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="18" cy="13" r="5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="18" cy="23" r="5" fill="#FFFFFF" opacity="0.9" />
      <text x="46" y="17" fill="#F8FAFC" font-size="14" class="title-bold">HRM &amp; Payroll</text>
      <text x="46" y="31" fill="#94A3B8" font-size="9.5" class="semi-bold">Management System</text>
    </g>

    <!-- Active Menu: Dashboard -->
    <g transform="translate(74, 180)">
      <rect x="0" y="0" width="192" height="38" rx="8" fill="url(#activeMenuGrad)" />
      <!-- Home/Dashboard icon -->
      <path d="M 16 23 L 23 16 L 30 23 L 28 23 L 28 28 L 18 28 L 18 23 Z" fill="#FFFFFF" />
      <text x="38" y="24" fill="#FFFFFF" font-size="13" class="title-bold">Dashboard</text>
    </g>

    <!-- Nav Items -->
    <g transform="translate(74, 235)">
      <!-- Employee Management -->
      <text x="14" y="14" fill="#64748B" font-size="14">👥</text>
      <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Employee Management</text>
      <text x="180" y="14" fill="#64748B" font-size="12">›</text>

      <!-- Attendance -->
      <g transform="translate(0, 36)">
        <text x="14" y="14" fill="#64748B" font-size="14">📅</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Attendance</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Leave Management -->
      <g transform="translate(0, 72)">
        <text x="14" y="14" fill="#64748B" font-size="14">✈️</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Leave Management</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Payroll -->
      <g transform="translate(0, 108)">
        <text x="14" y="14" fill="#64748B" font-size="14">💵</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Payroll</text>
        <text x="180" y="14" fill="#64748B" font-size="12">›</text>
      </g>

      <!-- Reports -->
      <g transform="translate(0, 144)">
        <text x="14" y="14" fill="#64748B" font-size="14">📊</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Reports</text>
      </g>

      <!-- Departments -->
      <g transform="translate(0, 180)">
        <text x="14" y="14" fill="#64748B" font-size="14">🏢</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Departments</text>
      </g>

      <!-- Settings -->
      <g transform="translate(0, 216)">
        <text x="14" y="14" fill="#64748B" font-size="14">⚙️</text>
        <text x="38" y="14" fill="#CBD5E1" font-size="12.5" class="semi-bold">Settings</text>
      </g>
    </g>


    <!-- ════════ MAIN CONTENT AREA ════════ -->

    <!-- Top Navigation Header -->
    <g transform="translate(305, 115)">
      <!-- Search Input box -->
      <rect x="0" y="0" width="360" height="36" rx="8" fill="#151926" stroke="#252D40" stroke-width="1" />
      <text x="14" y="23" fill="#64748B" font-size="12">🔍&#160;&#160;Search employees, departments, etc...</text>

      <!-- Notification Bell with red 3 badge -->
      <g transform="translate(800, 8)">
        <circle cx="10" cy="10" r="14" fill="#1A202F" />
        <text x="10" y="14" text-anchor="middle" fill="#CBD5E1" font-size="12">🔔</text>
        <circle cx="18" cy="4" r="5" fill="#EF4444" />
        <text x="18" y="7" text-anchor="middle" fill="#FFFFFF" font-size="8" class="title-bold">3</text>
      </g>

      <!-- Admin Profile: Priya Sharma -->
      <g transform="translate(850, 2)">
        <circle cx="16" cy="16" r="16" fill="#8B5CF6" />
        <text x="16" y="21" text-anchor="middle" fill="#FFFFFF" font-size="12" class="title-bold">PS</text>
        <text x="40" y="14" fill="#F8FAFC" font-size="12.5" class="title-bold">Priya Sharma</text>
        <text x="40" y="27" fill="#94A3B8" font-size="10.5">Admin</text>
      </g>
    </g>

    <!-- Dashboard Title Row -->
    <g transform="translate(305, 172)">
      <text x="0" y="20" fill="#F8FAFC" font-size="22" class="title-bold">Dashboard</text>
      <text x="0" y="38" fill="#94A3B8" font-size="11.5">Welcome back, Priya! Here's what's happening in your organization today.</text>

      <!-- Date pill on right -->
      <rect x="830" y="2" width="155" height="32" rx="8" fill="#181D2A" stroke="#262D3D" stroke-width="1" />
      <text x="844" y="22" fill="#CBD5E1" font-size="11.5" class="semi-bold">📅&#160;&#160;Wed, 22 Oct 2025</text>
      <text x="965" y="22" fill="#94A3B8" font-size="10">▾</text>
    </g>


    <!-- ─── 4 TOP STAT CARDS ─── -->
    <g transform="translate(305, 230)">

      <!-- Card 1: Total Employees (48) -->
      <rect width="234" height="100" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
      <rect x="16" y="16" width="36" height="36" rx="9" fill="rgba(59, 130, 246, 0.15)" stroke="rgba(59, 130, 246, 0.4)" stroke-width="1" />
      <text x="34" y="39" text-anchor="middle" fill="#38BDF8" font-size="16">👥</text>
      <text x="62" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Total Employees</text>
      <text x="62" y="55" fill="#F8FAFC" font-size="24" class="title-bold">48</text>
      <text x="62" y="80" fill="#10B981" font-size="10.5" class="semi-bold">↑ 5% <tspan fill="#64748B">from last month</tspan></text>

      <!-- Card 2: Present Today (42) -->
      <g transform="translate(250, 0)">
        <rect width="234" height="100" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <rect x="16" y="16" width="36" height="36" rx="9" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1" />
        <text x="34" y="39" text-anchor="middle" fill="#10B981" font-size="16">📅</text>
        <text x="62" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Present Today</text>
        <text x="62" y="55" fill="#10B981" font-size="24" class="title-bold">42</text>
        <text x="62" y="80" fill="#10B981" font-size="10.5" class="semi-bold">↑ 8% <tspan fill="#64748B">from last month</tspan></text>
      </g>

      <!-- Card 3: On Leave Today (4) -->
      <g transform="translate(500, 0)">
        <rect width="234" height="100" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <rect x="16" y="16" width="36" height="36" rx="9" fill="rgba(244, 63, 94, 0.15)" stroke="rgba(244, 63, 94, 0.4)" stroke-width="1" />
        <text x="34" y="39" text-anchor="middle" fill="#F43F5E" font-size="16">☂️</text>
        <text x="62" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">On Leave Today</text>
        <text x="62" y="55" fill="#F43F5E" font-size="24" class="title-bold">4</text>
        <text x="62" y="80" fill="#EF4444" font-size="10.5" class="semi-bold">↓ 20% <tspan fill="#64748B">from last month</tspan></text>
      </g>

      <!-- Card 4: Pending Payroll (2) -->
      <g transform="translate(750, 0)">
        <rect width="235" height="100" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <rect x="16" y="16" width="36" height="36" rx="9" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.4)" stroke-width="1" />
        <text x="34" y="39" text-anchor="middle" fill="#C084FC" font-size="16">💰</text>
        <text x="62" y="28" fill="#94A3B8" font-size="11.5" class="semi-bold">Pending Payroll</text>
        <text x="62" y="55" fill="#C084FC" font-size="24" class="title-bold">2</text>
        <text x="62" y="80" fill="#EF4444" font-size="10.5" class="semi-bold">↓ 50% <tspan fill="#64748B">from last month</tspan></text>
      </g>
    </g>


    <!-- ─── MIDDLE ROW: 2 CHARTS (ATTENDANCE DONUT + DEPARTMENT BAR CHART) ─── -->
    <g transform="translate(305, 345)">

      <!-- Chart 1: Attendance Overview (Donut) -->
      <g transform="translate(0, 0)">
        <rect width="485" height="215" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="20" y="28" fill="#F8FAFC" font-size="15" class="title-bold">Attendance Overview</text>

        <!-- Dropdown on right -->
        <rect x="375" y="12" width="90" height="24" rx="6" fill="#181D2A" stroke="#262D3D" stroke-width="1" />
        <text x="385" y="28" fill="#94A3B8" font-size="10.5">This Month ▾</text>

        <!-- Donut Chart: 87% Present (circumference 2*PI*45 = 283) -->
        <circle cx="105" cy="120" r="46" fill="none" stroke="#10B981" stroke-width="18" stroke-dasharray="246 283" stroke-dashoffset="0" />
        <circle cx="105" cy="120" r="46" fill="none" stroke="#3B82F6" stroke-width="18" stroke-dasharray="24 283" stroke-dashoffset="-246" />
        <circle cx="105" cy="120" r="46" fill="none" stroke="#F59E0B" stroke-width="18" stroke-dasharray="13 283" stroke-dashoffset="-270" />

        <text x="105" y="118" text-anchor="middle" fill="#FFFFFF" font-size="18" class="title-bold">87%</text>
        <text x="105" y="132" text-anchor="middle" fill="#10B981" font-size="9" class="semi-bold">Present</text>

        <!-- Legend Table -->
        <g transform="translate(230, 60)">
          <circle cx="10" cy="14" r="4" fill="#10B981" />
          <text x="24" y="18" fill="#CBD5E1" font-size="12">Present</text>
          <text x="220" y="18" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">42</text>

          <circle cx="10" cy="46" r="4" fill="#3B82F6" />
          <text x="24" y="50" fill="#CBD5E1" font-size="12">Absent</text>
          <text x="220" y="50" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">4</text>

          <circle cx="10" cy="78" r="4" fill="#F59E0B" />
          <text x="24" y="82" fill="#CBD5E1" font-size="12">Late</text>
          <text x="220" y="82" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">2</text>

          <circle cx="10" cy="110" r="4" fill="#64748B" />
          <text x="24" y="114" fill="#CBD5E1" font-size="12">Half Day</text>
          <text x="220" y="114" text-anchor="end" fill="#F8FAFC" font-size="13" class="title-bold">0</text>
        </g>
      </g>

      <!-- Chart 2: Department Wise Employees (Bar Chart) -->
      <g transform="translate(500, 0)">
        <rect width="485" height="215" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="20" y="28" fill="#F8FAFC" font-size="15" class="title-bold">Department Wise Employees</text>
        <text x="465" y="28" text-anchor="end" fill="#38BDF8" font-size="11" class="semi-bold">View All</text>

        <!-- Y-axis grid (0, 5, 10, 15, 20) -->
        <g transform="translate(25, 40)">
          <!-- 20 -->
          <text x="20" y="16" text-anchor="end" fill="#64748B" font-size="9.5">20</text>
          <line x1="26" y1="12" x2="440" y2="12" stroke="#21283B" stroke-dasharray="3 3" stroke-width="0.8" />

          <!-- 15 -->
          <text x="20" y="44" text-anchor="end" fill="#64748B" font-size="9.5">15</text>
          <line x1="26" y1="40" x2="440" y2="40" stroke="#21283B" stroke-dasharray="3 3" stroke-width="0.8" />

          <!-- 10 -->
          <text x="20" y="72" text-anchor="end" fill="#64748B" font-size="9.5">10</text>
          <line x1="26" y1="68" x2="440" y2="68" stroke="#21283B" stroke-dasharray="3 3" stroke-width="0.8" />

          <!-- 5 -->
          <text x="20" y="100" text-anchor="end" fill="#64748B" font-size="9.5">5</text>
          <line x1="26" y1="96" x2="440" y2="96" stroke="#21283B" stroke-dasharray="3 3" stroke-width="0.8" />

          <!-- 0 Baseline -->
          <text x="20" y="128" text-anchor="end" fill="#64748B" font-size="9.5">0</text>
          <line x1="26" y1="124" x2="440" y2="124" stroke="#2D354A" stroke-width="1" />

          <!-- 5 Department Bars with Values -->
          <!-- 1. HR (8) -->
          <rect x="55" y="79" width="36" height="45" rx="3" fill="#3B82F6" />
          <text x="73" y="72" text-anchor="middle" fill="#CBD5E1" font-size="10.5" class="title-bold">8</text>
          <text x="73" y="142" text-anchor="middle" fill="#94A3B8" font-size="10.5" class="semi-bold">HR</text>

          <!-- 2. IT (15) -->
          <rect x="135" y="40" width="36" height="84" rx="3" fill="#06B6D4" />
          <text x="153" y="33" text-anchor="middle" fill="#CBD5E1" font-size="10.5" class="title-bold">15</text>
          <text x="153" y="142" text-anchor="middle" fill="#94A3B8" font-size="10.5" class="semi-bold">IT</text>

          <!-- 3. Marketing (7) -->
          <rect x="215" y="85" width="36" height="39" rx="3" fill="#8B5CF6" />
          <text x="233" y="78" text-anchor="middle" fill="#CBD5E1" font-size="10.5" class="title-bold">7</text>
          <text x="233" y="142" text-anchor="middle" fill="#94A3B8" font-size="10.5" class="semi-bold">Marketing</text>

          <!-- 4. Sales (10) -->
          <rect x="295" y="68" width="36" height="56" rx="3" fill="#F59E0B" />
          <text x="313" y="61" text-anchor="middle" fill="#CBD5E1" font-size="10.5" class="title-bold">10</text>
          <text x="313" y="142" text-anchor="middle" fill="#94A3B8" font-size="10.5" class="semi-bold">Sales</text>

          <!-- 5. Finance (5) -->
          <rect x="375" y="96" width="36" height="28" rx="3" fill="#EC4899" />
          <text x="393" y="89" text-anchor="middle" fill="#CBD5E1" font-size="10.5" class="title-bold">5</text>
          <text x="393" y="142" text-anchor="middle" fill="#94A3B8" font-size="10.5" class="semi-bold">Finance</text>
        </g>
      </g>
    </g>


    <!-- ─── BOTTOM ROW: RECENT EMPLOYEES & QUICK ACTIONS ─── -->
    <g transform="translate(305, 575)">

      <!-- Left Table: Recent Employees -->
      <g transform="translate(0, 0)">
        <rect width="485" height="210" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="20" y="26" fill="#F8FAFC" font-size="14.5" class="title-bold">Recent Employees</text>
        <text x="465" y="26" text-anchor="end" fill="#38BDF8" font-size="10.5" class="semi-bold">View All</text>

        <!-- Table Columns -->
        <text x="20" y="52" fill="#64748B" font-size="10" class="semi-bold">NAME</text>
        <text x="160" y="52" fill="#64748B" font-size="10" class="semi-bold">DEPT</text>
        <text x="250" y="52" fill="#64748B" font-size="10" class="semi-bold">DESIGNATION</text>
        <text x="465" y="52" text-anchor="end" fill="#64748B" font-size="10" class="semi-bold">JOINED</text>
        <line x1="20" y1="58" x2="465" y2="58" stroke="#252D3F" stroke-width="0.8" />

        <!-- Row 1: Rohit Verma -->
        <circle cx="28" cy="76" r="9" fill="#1E2A4A" />
        <text x="28" y="79" text-anchor="middle" fill="#38BDF8" font-size="8.5" class="title-bold">RV</text>
        <text x="44" y="80" fill="#F8FAFC" font-size="11" class="semi-bold">Rohit Verma</text>
        <text x="160" y="80" fill="#CBD5E1" font-size="11">IT</text>
        <text x="250" y="80" fill="#94A3B8" font-size="11">Frontend Developer</text>
        <text x="465" y="80" text-anchor="end" fill="#94A3B8" font-size="10.5">12 Jan 2025</text>

        <!-- Row 2: Sneha Patel -->
        <circle cx="28" cy="104" r="9" fill="#2E1B4A" />
        <text x="28" y="107" text-anchor="middle" fill="#A855F7" font-size="8.5" class="title-bold">SP</text>
        <text x="44" y="108" fill="#F8FAFC" font-size="11" class="semi-bold">Sneha Patel</text>
        <text x="160" y="108" fill="#CBD5E1" font-size="11">Marketing</text>
        <text x="250" y="108" fill="#94A3B8" font-size="11">Marketing Executive</text>
        <text x="465" y="108" text-anchor="end" fill="#94A3B8" font-size="10.5">20 Feb 2025</text>

        <!-- Row 3: Amit Singh -->
        <circle cx="28" cy="132" r="9" fill="#2E241B" />
        <text x="28" y="135" text-anchor="middle" fill="#F59E0B" font-size="8.5" class="title-bold">AS</text>
        <text x="44" y="136" fill="#F8FAFC" font-size="11" class="semi-bold">Amit Singh</text>
        <text x="160" y="136" fill="#CBD5E1" font-size="11">Sales</text>
        <text x="250" y="136" fill="#94A3B8" font-size="11">Sales Manager</text>
        <text x="465" y="136" text-anchor="end" fill="#94A3B8" font-size="10.5">15 Mar 2025</text>

        <!-- Row 4: Neha Gupta -->
        <circle cx="28" cy="160" r="9" fill="#1E2A4A" />
        <text x="28" y="163" text-anchor="middle" fill="#06B6D4" font-size="8.5" class="title-bold">NG</text>
        <text x="44" y="164" fill="#F8FAFC" font-size="11" class="semi-bold">Neha Gupta</text>
        <text x="160" y="164" fill="#CBD5E1" font-size="11">HR</text>
        <text x="250" y="164" fill="#94A3B8" font-size="11">HR Executive</text>
        <text x="465" y="164" text-anchor="end" fill="#94A3B8" font-size="10.5">10 Apr 2025</text>

        <!-- Row 5: Sahil Khan -->
        <circle cx="28" cy="188" r="9" fill="#1E2E20" />
        <text x="28" y="191" text-anchor="middle" fill="#10B981" font-size="8.5" class="title-bold">SK</text>
        <text x="44" y="192" fill="#F8FAFC" font-size="11" class="semi-bold">Sahil Khan</text>
        <text x="160" y="192" fill="#CBD5E1" font-size="11">Finance</text>
        <text x="250" y="192" fill="#94A3B8" font-size="11">Accountant</text>
        <text x="465" y="192" text-anchor="end" fill="#94A3B8" font-size="10.5">05 May 2025</text>
      </g>

      <!-- Right Panel: Quick Actions (6 Tiles + CTA Banner) -->
      <g transform="translate(500, 0)">
        <rect width="485" height="210" rx="12" fill="url(#cardGrad)" stroke="#252D3F" stroke-width="1.2" />
        <text x="20" y="26" fill="#F8FAFC" font-size="14.5" class="title-bold">Quick Actions</text>

        <!-- 6 Action Tiles (2 rows x 3 columns) -->
        <!-- Tile 1: Add Employee -->
        <g transform="translate(20, 38)">
          <rect width="138" height="44" rx="8" fill="#1A202E" stroke="#283248" stroke-width="0.8" />
          <text x="14" y="27" fill="#38BDF8" font-size="14">👤+</text>
          <text x="42" y="27" fill="#F8FAFC" font-size="10.5" class="semi-bold">Add Employee</text>
        </g>

        <!-- Tile 2: Mark Attendance -->
        <g transform="translate(172, 38)">
          <rect width="138" height="44" rx="8" fill="#1A202E" stroke="#283248" stroke-width="0.8" />
          <text x="14" y="27" fill="#10B981" font-size="14">📅</text>
          <text x="40" y="27" fill="#F8FAFC" font-size="10.5" class="semi-bold">Mark Attendance</text>
        </g>

        <!-- Tile 3: Apply Leave -->
        <g transform="translate(324, 38)">
          <rect width="138" height="44" rx="8" fill="#1A202E" stroke="#283248" stroke-width="0.8" />
          <text x="14" y="27" fill="#F59E0B" font-size="14">✈️</text>
          <text x="42" y="27" fill="#F8FAFC" font-size="10.5" class="semi-bold">Apply Leave</text>
        </g>

        <!-- Tile 4: Process Payroll -->
        <g transform="translate(20, 92)">
          <rect width="138" height="44" rx="8" fill="#1A202E" stroke="#283248" stroke-width="0.8" />
          <text x="14" y="27" fill="#A855F7" font-size="14">💵</text>
          <text x="42" y="27" fill="#F8FAFC" font-size="10.5" class="semi-bold">Process Payroll</text>
        </g>

        <!-- Tile 5: Generate Report -->
        <g transform="translate(172, 92)">
          <rect width="138" height="44" rx="8" fill="#1A202E" stroke="#283248" stroke-width="0.8" />
          <text x="14" y="27" fill="#06B6D4" font-size="14">📊</text>
          <text x="40" y="27" fill="#F8FAFC" font-size="10.5" class="semi-bold">Generate Report</text>
        </g>

        <!-- Tile 6: View Payslip -->
        <g transform="translate(324, 92)">
          <rect width="138" height="44" rx="8" fill="#1A202E" stroke="#283248" stroke-width="0.8" />
          <text x="14" y="27" fill="#EC4899" font-size="14">🧾</text>
          <text x="42" y="27" fill="#F8FAFC" font-size="10.5" class="semi-bold">View Payslip</text>
        </g>

        <!-- Bottom Banner: Automate HR & Payroll -->
        <g transform="translate(20, 146)">
          <rect width="445" height="50" rx="8" fill="#131826" stroke="#252E44" stroke-width="1" />
          <text x="16" y="23" fill="#F8FAFC" font-size="11" class="title-bold">Automate HR &amp; Payroll. Save Time. Boost Productivity.</text>
          <text x="16" y="38" fill="#94A3B8" font-size="9.5">Simplify your HR processes with our powerful and easy-to-use system.</text>
          <!-- Learn More Button -->
          <rect x="350" y="10" width="85" height="30" rx="6" fill="#2563EB" />
          <text x="392" y="29" text-anchor="middle" fill="#FFFFFF" font-size="10.5" class="title-bold">Learn More →</text>
        </g>
      </g>
    </g>

  </g>
</svg>
`;

async function run() {
  const outputPath = path.resolve('public/images/marketplace/cloud-hrm.jpg');
  console.log('Rendering HRM & Payroll SVG to JPEG:', outputPath);

  const buffer = Buffer.from(svg.trim());
  await sharp(buffer)
    .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);

  console.log('Successfully generated cloud-hrm.jpg at 1376x860 with crystal clear text & charts!');
}

run().catch(err => {
  console.error('Error generating image:', err);
  process.exit(1);
});
