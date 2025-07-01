# Taller Online de OH Cards

Esta es una landing page para un taller online de OH Cards, herramientas proyectivas para el desarrollo profesional y personal. El proyecto está construido con React, TypeScript, Vite y Tailwind CSS, y utiliza la API de Google Gemini a través de una función serverless segura.

## Características

-   **Diseño responsivo**: Se adapta a todos los dispositivos.
-   **Demo interactiva**: Sección única impulsada por la API de Google Gemini, permitiendo experimentar una mini-sesión OH Cards.
-   **Stack moderno**: Construido con Vite para una experiencia de desarrollo rápida.
-   **Estilizado con Tailwind CSS**: Para un desarrollo de UI ágil y consistente.
-   **Despliegue seguro**: La clave de Gemini nunca se expone al frontend, solo se usa en el backend/serverless.

## Seguridad de la clave API

- **La clave de Gemini NUNCA debe estar en el frontend ni en archivos públicos.**
- Se utiliza una función serverless (`/api/gemini`) para proteger la clave y hacer las llamadas a la API de Gemini desde el backend.
- La variable de entorno debe llamarse `GEMINI_API_KEY` y solo se define en el entorno de Vercel o en tu `.env` local (que debe estar en `.gitignore`).
- Proporciona un archivo `.env.example` para referencia, pero nunca subas tu clave real.

## Getting Started

### Prerequisitos

-   Node.js (v18 o superior)
-   npm, yarn o pnpm
-   Una clave de API de Google Gemini

### Instalación y desarrollo local

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/your-username/oh-cards-workshop.git
    cd oh-cards-workshop
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env` (o `.env.local`) en la raíz del proyecto y agrega tu clave de Gemini:
    ```
    GEMINI_API_KEY=your_gemini_api_key_here
    ```
    > **Nunca subas tu archivo `.env` al repositorio. Usa `.env.example` como referencia.

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abre `http://localhost:5173` para ver la app en el navegador.

## Build para producción

Para crear un build listo para producción:
```bash
npm run build
```
Esto generará la carpeta `dist` con los assets optimizados. Puedes previsualizar el build con `npm run preview`.

## Despliegue en Vercel

Este proyecto está optimizado para Vercel y usa una función serverless para proteger la clave de Gemini.

1.  Sube tu código a un repositorio de GitHub.
2.  Importa el proyecto en Vercel desde tu repositorio.
3.  Vercel detectará automáticamente el proyecto Vite y la función serverless en `/api/gemini`.
4.  Agrega tu clave de Gemini como variable de entorno en Vercel:
    -   **Name**: `GEMINI_API_KEY`
    -   **Value**: `your_gemini_api_key_here`
5.  ¡Haz deploy! Vercel construirá y desplegará tu sitio de forma segura.

## Ejemplo de archivo `.env.example`

```
GEMINI_API_KEY=your_gemini_api_key_here
```

---

**Recuerda:** Nunca expongas tu clave real en archivos públicos ni en el frontend. Usa siempre la función serverless para proteger tus secretos.
