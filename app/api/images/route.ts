import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
  const dir = 'C:/Users/VIVOBOOK/.gemini/antigravity-ide/brain/tempmediaStorage';
  try {
    const files = fs.readdirSync(dir);
    return NextResponse.json(files);
  } catch (e) {
    return NextResponse.json({ error: e.toString() }, { status: 500 });
  }
}
