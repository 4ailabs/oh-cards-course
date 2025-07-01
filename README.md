# Taller Online de OH Cards

This is a landing page for an online workshop on OH Cards, projective tools for professional and personal development. The project is built with React, TypeScript, Vite, and Tailwind CSS, and uses the Google Gemini API for an interactive demo.

## Features

-   **Responsive Design**: Looks great on all devices.
-   **Interactive Demo**: A unique section powered by the Google Gemini API that allows users to experience a mini-OH-Card session.
-   **Modern Tech Stack**: Built with Vite for a fast development experience.
-   **Styled with Tailwind CSS**: For rapid and consistent UI development.
-   **Ready for Deployment**: Configured for easy deployment on Vercel.

## Getting Started

### Prerequisites

-   Node.js (v18 or newer)
-   npm or yarn or pnpm
-   A Google Gemini API Key

### Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/oh-cards-workshop.git
    cd oh-cards-workshop
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Google Gemini API key:
    ```
    VITE_API_KEY=your_gemini_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` (or the port shown in your terminal) to view it in the browser.

## Build for Production

To create a production-ready build of the application:
```bash
npm run build
```
This will generate a `dist` folder with the optimized static assets. You can preview the production build locally with `npm run preview`.

## Deployment on Vercel

This project is optimized for deployment on Vercel.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel from your GitHub repository.
3.  Vercel will automatically detect that this is a Vite project and configure the build settings correctly (`vite build` command and `dist` output directory).
4.  Add your Gemini API Key as an environment variable in the Vercel project settings:
    -   **Name**: `VITE_API_KEY`
    -   **Value**: `your_gemini_api_key_here`
5.  Deploy! Vercel will build and deploy your site.
