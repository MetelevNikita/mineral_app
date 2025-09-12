      
import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
      name: 'Geokviz 2.0',
      short_name: 'Geokviz 2.0',
      description: 'Новый взягляд на геологию',
      start_url: '/',
      display: 'standalone',
      display_override: ["window-controls-overlay"],
      background_color: '#ffffff',
      theme_color: '#000000',
      orientation: 'portrait',
      prefer_related_applications: true,
      icons: [
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable"
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable"
            }
      ]
  }
}