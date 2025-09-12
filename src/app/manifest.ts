      
import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
      name: 'Geokviz',
      short_name: 'Geokviz !!!!!!!!!!!!!',
      description: 'Новый взягляд на геологию',
      start_url: '/',
      display: 'standalone',
      display_override: ["window-controls-overlay"],
      background_color: '#ffffff',
      theme_color: '#000000',
      orientation: 'portrait',
      prefer_related_applications: true,
      icons: [
        { src: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
        { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ]
  }
}