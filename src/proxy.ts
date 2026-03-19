import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin/dashboard')) {
    const token = req.cookies.get('admin_token')?.value;
    if (!token || !(await verifyToken(token))) {
      const url = req.nextUrl.clone();
      url.pathname = '/admin';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard/:path*'],
};
