import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// 


import { withPWA } from 'next-pwa-pack'



// var token


import {verifyToken} from './lib/varifyToken'

// 




function middleware (request: NextRequest) {
    const url = request.nextUrl
    const pathname = url.pathname 


    if (pathname.startsWith('/_next') ||
        pathname.includes('.')) {
        return NextResponse.next()
    }





    const publicWeb = ['/auth/login', '/auth/registration', '/admin']
    const publicApi = ['/api/auth', '/api/registration', '/api/repeat', '/api/reset', '/api/users']
    const publicAdmin = ['/admin']




    if (pathname.startsWith('/api')) {
        console.log('API маршрут:', pathname)
        
        const isPublicApi = publicApi.some(apiPath => pathname.startsWith(apiPath))
        
        if (isPublicApi) {
            console.log('Публичный API маршрут - доступ разрешен')
            return NextResponse.next()
        }
        

        console.log('Защищенный API маршрут. Проверяем TOKEN')
        const accessToken = request.cookies.get('accessToken')?.value


        if (!accessToken) {
            console.log('Нет токена доступа')
            return NextResponse.json(
                { message: 'Доступ запрещен. Не авторизован.' },
                { status: 401 }
            )
        }
        
        const verifyAccessToken = verifyToken(accessToken)
        if (!verifyAccessToken.valid) {
            console.log('Токен не валидный')
            return NextResponse.json(
                { message: 'Доступ запрещен. Неверный токен.' },
                { status: 401 }
            )
        }

        console.log('TOKEN найден. Вход разрешен')
        return NextResponse.next()
    }

    // 

    const isPublicWeb = publicWeb.includes(pathname)

    if (pathname.startsWith('/main')) {
        const isPublicWeb = publicWeb.includes(pathname)



        if (isPublicWeb) {
            console.log('Публичный маршрут - доступ разрешен')
            return NextResponse.next()
        }

        console.log('Защищенный маршрут. Проверяем TOKEN')

        const accessToken = request.cookies.get('accessToken')?.value

        if (!accessToken) {
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }

        const varifyAdminToken = verifyToken(accessToken)

        if (!varifyAdminToken.valid) {
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }


        console.log('TOKEN найден. Вход разрешен')
        return NextResponse.next()
    }

    // 



    if (pathname.startsWith('/admin')) {
        if (pathname === '/admin') {
            return NextResponse.next()
        }


        console.log('Защищенный админский маршрут. Проверяем TOKEN')


        const adminToken = request.cookies.get('adminToken')?.value
        if (!adminToken) {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
        const verifyAdminToken = verifyToken(adminToken)
        if (!verifyAdminToken.valid) {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
        
        console.log('TOKEN найден. Вход разрешен')
        return NextResponse.next()

    }



}



export default withPWA(middleware, {
  revalidationSecret: process.env.REVALIDATION_SECRET!,
  sseEndpoint: "/api/pwa/cache-events",
  webhookPath: "/api/pwa/revalidate",
});




export const config = {
  matcher: [
    '/((?!_next|favicon.ico|bg).*)',
  ],
}






    



