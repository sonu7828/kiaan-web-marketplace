import { rmSync, existsSync } from 'fs';
import { resolve } from 'path';

const dirs = ['.next', 'out', 'dist'];
for (const dir of dirs) {
  const fullPath = resolve(process.cwd(), dir);
  if (existsSync(fullPath)) {
    try {
      rmSync(fullPath, { recursive: true, force: true });
      console.log(`🧹 Cleaned ${dir}`);
    } catch (err) {
      console.warn(`⚠️ Warning: Could not clean ${dir}:`, err.message);
    }
  }
}
