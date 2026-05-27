import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (searchParams.size === 0) return;

  if (pathname === '/blog-1' || pathname === '/education') {
    return NextResponse.redirect(new URL('/blog', request.url), { status: 301 });
  }
}

export const config = {
  matcher: ['/blog-1', '/education'],
};
