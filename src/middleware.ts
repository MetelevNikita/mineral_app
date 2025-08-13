import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'



export function middleware (request: NextRequest) {

    const adminCookie = request.cookies.get('admin')?.value
    const accessToken = request.cookies.get('accessToken')?.value
    const currentURL = request.url
    const currentPath = request.nextUrl.pathname

    const exactPublicPaths = ['/'];
    const partialPublicPaths = ['/auth', '/auth/login', '/auth/register', '/admin'];


    const isPublic = exactPublicPaths.includes(currentPath) || partialPublicPaths.some(path => currentPath.startsWith(path));

    if (isPublic) {
        return NextResponse.next();
    }



    if (currentPath !== '/' && !accessToken) {
        return NextResponse.redirect(new URL('/', request.url))
    }


    if (!accessToken) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (currentPath.startsWith('/main') && !accessToken) {
        return NextResponse.redirect(new URL('/', request.url));
    }


    if (currentPath.startsWith('/admin/dashboard') && !adminCookie) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }


    return NextResponse.next();
}




export const config = {
  matcher: [
    '/((?!_next|favicon.ico|bg|api).*)',
  ],
}






    



