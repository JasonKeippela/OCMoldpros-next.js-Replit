import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // /blog?blogcategory=* → /blog (strip query params; next.config.ts redirects run before
  // middleware in Next.js 16, so this path must NOT have a matching redirect in next.config.ts)
  if (pathname === '/blog' && searchParams.has('blogcategory')) {
    return NextResponse.redirect(new URL('/blog', request.url), { status: 301 });
  }

  // /blog-1 → /blog (any query params stripped)
  if (pathname === '/blog-1') {
    return NextResponse.redirect(new URL('/blog', request.url), { status: 301 });
  }

  // /education → /blog (any query params stripped)
  if (pathname === '/education') {
    return NextResponse.redirect(new URL('/blog', request.url), { status: 301 });
  }
}

export const config = {
  matcher: ['/blog', '/blog-1', '/education'],
};
