import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get('access_token');
  const token = tokenCookie ? tokenCookie.value : null;

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  try {
    const response = await fetch(new URL('/api/verify-token', request.url).toString(), {
      method: 'POST',
      headers: {
        Cookie: `access_token=${token}`
      }
    });

    if (response.status !== 200) {
      new Error('Invalid token');
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!auth|api|_next/static|favicon.ico|.*\\.css$|public|assets|.*\\.(?:png|jpg|jpeg|gif|svg)).*)']
};
