import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from "vite-plugin-sitemap";


export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.pianeta-dudu.it', // Il dominio del tuo sito
      routes: [
        { url: '/', changefreq: 'yearly', priority: 1.0 },          // Homepage, massima importanza
        { url: '/chi-siamo', changefreq: 'yearly', priority: 0.4 },  // Pagina informativa
        { url: '/pianeta-dudu', changefreq: 'yearly', priority: 0.4 }, // Sezione importante del sito
        { url: '/infanzia', changefreq: 'yearly', priority: 0.9 },    // Pagine di categorie principali
        { url: '/ludoteca', changefreq: 'yearly', priority: 0.9 },    // Pagine di contenuti specifici
        { url: '/contatti', changefreq: 'never', priority: 0.1 },     // Pagina di contatti
        // { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 }, // Pagine legali
      ]
    })
  ],
  server: {
    host: '0.0.0.0', // Permette di accedere da qualsiasi dispositivo nella rete
    port: 5174, // Scegli una porta (puoi cambiarla se necessario)
  },
})

