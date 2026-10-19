import { existsSync, cpSync, rmSync, copyFileSync } from 'fs';
import { resolve } from 'path';

const root = process.cwd();
const outDir = resolve(root, 'out');
const distDir = resolve(root, 'dist');
const publicHtaccess = resolve(root, 'public', '.htaccess');
const distHtaccess = resolve(distDir, '.htaccess');

if (!existsSync(outDir)) {
  console.error('❌ Error: "out" directory not found. Export may have failed.');
  process.exit(1);
}

// Remove old dist if exists
if (existsSync(distDir)) {
  try {
    rmSync(distDir, { recursive: true, force: true });
  } catch (err) {
    console.warn('⚠️ Warning: Could not remove old dist:', err.message);
  }
}

// Copy out to dist
console.log('📦 Creating clean "dist" folder from build export...');
cpSync(outDir, distDir, { recursive: true });

// Ensure .htaccess is copied to dist
if (existsSync(publicHtaccess) && !existsSync(distHtaccess)) {
  copyFileSync(publicHtaccess, distHtaccess);
  console.log('✅ .htaccess copied to dist');
}

// Clean temporary out directory
try {
  rmSync(outDir, { recursive: true, force: true });
} catch (err) {
  // Safe to ignore if locked
}

console.log('✨ Production build successful!');
console.log('🚀 Your production files are ready in the "dist" folder for live deployment.');
