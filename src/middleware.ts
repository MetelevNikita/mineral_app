import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { withPWA } from 'next-pwa-pack'
import { verifyToken } from './lib/varifyToken'

function middleware(request: NextRequest) {
    const url = request.nextUrl
    const pathname = url.pathname 

    // Пропускаем статические файлы
    if (pathname.startsWith('/_next') ||
        pathname.includes('.')) {
        return NextResponse.next()
    }

    // ===== СПЕЦИАЛЬНО ДЛЯ PWA =====
    // Пропускаем SSE соединение и webhook без проверки токена
    // Это критически важно для работы PWA
    if (pathname === '/api/pwa/cache-events' || 
        pathname === '/api/pwa/revalidate') {
        console.log('✅ PWA endpoint - пропускаем без проверки:', pathname)
        return NextResponse.next()
    }

    const publicWeb = ['/auth/login', '/auth/registration', '/admin']
    const publicApi = ['/api/auth', '/api/registration', '/api/repeat', '/api/reset', '/api/users']
    const publicAdmin = ['/admin']

    // Обработка API маршрутов
    if (pathname.startsWith('/api')) {
        console.log('📡 API маршрут:', pathname)
        
        const isPublicApi = publicApi.some(apiPath => pathname.startsWith(apiPath))
        
        if (isPublicApi) {
            console.log('🔓 Публичный API маршрут - доступ разрешен')
            return NextResponse.next()
        }
        
        // Защищенные API маршруты
        console.log('🔒 Защищенный API маршрут. Проверяем TOKEN')
        const accessToken = request.cookies.get('accessToken')?.value

        if (!accessToken) {
            console.log('❌ Нет токена доступа')
            return NextResponse.json(
                { message: 'Доступ запрещен. Не авторизован.' },
                { status: 401 }
            )
        }
        
        const verifyAccessToken = verifyToken(accessToken)
        if (!verifyAccessToken.valid) {
            console.log('❌ Токен не валидный')
            return NextResponse.json(
                { message: 'Доступ запрещен. Неверный токен.' },
                { status: 401 }
            )
        }

        console.log('✅ TOKEN найден. Вход разрешен')
        return NextResponse.next()
    }

    // Обработка main маршрутов
    if (pathname.startsWith('/main')) {
        const isPublicWeb = publicWeb.includes(pathname)

        if (isPublicWeb) {
            console.log('🔓 Публичный маршрут - доступ разрешен')
            return NextResponse.next()
        }

        console.log('🔒 Защищенный маршрут /main. Проверяем TOKEN')

        const accessToken = request.cookies.get('accessToken')?.value

        if (!accessToken) {
            console.log('❌ Нет токена, редирект на логин')
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }

        const verifyAccessToken = verifyToken(accessToken)

        if (!verifyAccessToken.valid) {
            console.log('❌ Токен не валидный, редирект на логин')
            return NextResponse.redirect(new URL('/auth/login', request.url))
        }

        console.log('✅ TOKEN найден. Вход разрешен')
        return NextResponse.next()
    }

    // Обработка admin маршрутов
    if (pathname.startsWith('/admin')) {
        // Страница входа в админку - публичная
        if (pathname === '/admin') {
            console.log('🔓 Страница входа в админку - публичная')
            return NextResponse.next()
        }

        console.log('🔒 Защищенный админский маршрут. Проверяем TOKEN')

        const adminToken = request.cookies.get('adminToken')?.value
        if (!adminToken) {
            console.log('❌ Нет admin токена, редирект на вход')
            return NextResponse.redirect(new URL('/admin', request.url))
        }
        
        const verifyAdminToken = verifyToken(adminToken)
        if (!verifyAdminToken.valid) {
            console.log('❌ Admin токен не валидный, редирект на вход')
            return NextResponse.redirect(new URL('/admin', request.url))
        }
        
        console.log('✅ Admin TOKEN найден. Вход разрешен')
        return NextResponse.next()
    }

    // По умолчанию пропускаем все остальные запросы
    console.log('ℹ️ Маршрут по умолчанию, пропускаем:', pathname)
    return NextResponse.next()
}

// Оборачиваем middleware в PWA функционал
export default withPWA(middleware, {
  revalidationSecret: process.env.REVALIDATION_SECRET!,
  sseEndpoint: "/api/pwa/cache-events",
  webhookPath: "/api/pwa/revalidate",
})

// Конфигурация matcher
export const config = {
  matcher: [
    '/((?!_next|favicon.ico|bg).*)',
  ],
}