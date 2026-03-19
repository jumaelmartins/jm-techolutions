import { NextResponse } from 'next/server';
import { getContent } from '@/lib/content';

export async function GET() {
  const content = getContent();
  return NextResponse.json(content);
}
