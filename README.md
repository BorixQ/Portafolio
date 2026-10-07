# Portafolio de Borix Quiroz

Sitio personal para presentar proyectos de backend, ciencia de datos e IoT, junto con experiencia, formación y contacto.

**Sitio:** [portafolio-topaz-mu.vercel.app](https://portafolio-topaz-mu.vercel.app)

## Características

- Contenido en español e inglés.
- Secciones de presentación, proyectos, logros, experiencia, habilidades y contacto.
- Detalle de proyectos mediante ventanas modales.
- Currículum disponible desde el sitio.

## Tecnologías

Next.js, React, TypeScript y Tailwind CSS. Las animaciones utilizan Framer Motion y canvas-confetti; los iconos, Lucide React.

## Desarrollo local

Requiere Node.js y npm compatibles con las dependencias de `package.json`.

```bash
git clone https://github.com/BorixQ/Portafolio.git
cd Portafolio
npm ci
npm run dev
```

Abre http://localhost:3000.

## Comandos

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run build` | Genera la compilación de producción. |
| `npm start` | Sirve la compilación de producción. |

## Personalizar el contenido

| Ruta | Contenido |
| --- | --- |
| `src/data/portfolioData.ts` | Datos personales, proyectos, logros, experiencia y enlaces. |
| `src/context/LanguageContext.tsx` | Contexto del idioma. |
| `src/components/` | Secciones y componentes visuales. |
| `src/app/page.tsx` | Composición de la página principal. |
| `src/app/globals.css` | Estilos globales. |
| `public/cv-borix-quiroz.pdf` | Currículum descargable. |

## Proyectos relacionados

- [Terranode / Queñaris MVP](https://github.com/BorixQ/quenaris_mvp)
- [Queñaris — análisis de datos](https://github.com/BorixQ/QuenarisDA)
- [AuthCares — Wear OS](https://github.com/BorixQ/AuthCaresLogger)
- [AuthCares — ESP32](https://github.com/BorixQ/AuthCares-ESP32)
- [RESERSUR](https://github.com/BorixQ/resersur)
