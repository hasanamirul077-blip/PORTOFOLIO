import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const checkDirs = [
    'C:/Users/VIVOBOOK/.gemini/antigravity-ide/brain/tempmediaStorage',
    'C:/Users/VIVOBOOK/.gemini/antigravity-ide/brain/cace0830-ef1f-4185-9d20-ba22d06756f7/tempmediaStorage',
    'C:/Users/VIVOBOOK/.gemini/antigravity-ide/tempmediaStorage'
  ];
  
  const results = {};
  
  for (const dir of checkDirs) {
    try {
      const files = fs.readdirSync(dir);
      results[dir] = files;
    } catch (e) {
      results[dir] = e.toString();
    }
  }
  
  return NextResponse.json(results);
}
