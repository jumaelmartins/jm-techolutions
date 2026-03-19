import { NextRequest, NextResponse } from 'next/server';
import { getSection, updateSection, ContentData } from '@/lib/content';
import { verifyToken } from '@/lib/auth';

const ALLOWED_SECTIONS: (keyof ContentData)[] = [
  'hero', 'stats', 'services', 'projects', 'testimonials', 'contact',
];

type Params = { params: Promise<{ section: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const { section } = await params;

  if (!ALLOWED_SECTIONS.includes(section as keyof ContentData)) {
    return NextResponse.json({ error: 'Seção inválida' }, { status: 400 });
  }

  const data = getSection(section as keyof ContentData);
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { section } = await params;

  // Auth check
  const token = req.cookies.get('admin_token')?.value;
  if (!token || !(await verifyToken(token))) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  if (!ALLOWED_SECTIONS.includes(section as keyof ContentData)) {
    return NextResponse.json({ error: 'Seção inválida' }, { status: 400 });
  }

  const body = await req.json();
  updateSection(section as keyof ContentData, body);

  return NextResponse.json({ success: true });
}
