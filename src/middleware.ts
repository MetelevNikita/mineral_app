import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'



export function middleware (request: NextRequest) {


    if (request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.includes('.') ||
      request.nextUrl.pathname.startsWith('/api/')) {
        return NextResponse.next()
    }

    const adminToken = request.cookies.get('adminToken')?.value ?? null
    const accessToken = request.cookies.get('accessToken')?.value
    const currentURL = request.url
    const currentPath = request.nextUrl.pathname



    const publicPaths = ['/', '/auth', '/auth/login', '/auth/register', '/admin'];


    const isPublic = publicPaths.includes(currentPath);

    if (isPublic) {
        return NextResponse.next();
    }



// Проверка админских путей
    if (currentPath.startsWith('/admin/dashboard')) {
        if (!adminToken) {
            console.log('Вы не авторизовались как администратор')
            return NextResponse.redirect(new URL('/admin', request.url));
        }
        return NextResponse.next();
    }

    // Проверка пользовательских путей
    if (currentPath.startsWith('/main')) {
        if (!accessToken) {
            console.log('Вы не авторизовались как пользователь')
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }




    if (!accessToken) {
        return NextResponse.redirect(new URL('/', request.url))
    }


    if (currentPath.startsWith('/admin/dashboard') && !adminToken) {
            return NextResponse.redirect(new URL('/admin', request.url))
    }

    if (currentPath.startsWith('/main') && !accessToken) {
        return NextResponse.redirect(new URL('/', request.url));
    }





    return NextResponse.next();
}




export const config = {
  matcher: [
    '/((?!_next|favicon.ico|bg|api).*)',
  ],
}






    



