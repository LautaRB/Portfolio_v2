# 👨‍💻 Lautaro RB | Portfolio v2

![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=for-the-badge&logo=astro)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify)

Este es mi portfolio personal desarrollado con **Astro 5** y **Tailwind CSS**. 
El diseño está basado en un **Bento Grid** responsivo y moderno, enfocado en la performance y la experiencia de usuario.

🔗 **Portfolio:** [Click aca!](https://lautarorb-portfolio.netlify.app/)

## ✨ Características Principales

* **⚡ Performance:** Sitio estático ultrarrápido generado con Astro.
* **🍱 Bento Grid Layout:** Diseño modular y responsivo utilizando CSS Grid y `minmax` para adaptación fluida.
* **🐍 Snake Game Interactivo:** Un componente de juego desarrollado en **Vanilla JS** y TypeScript con lógica de movimiento autónomo e interactividad.
* **🔄 GitHub API Integration:** Fetch automático de mis últimos 4 repositorios destacados, ordenados y con badges dinámicos.
* **🎨 UI/UX:** Animaciones de entrada escalonadas, modo oscuro nativo y diseño minimalista.
* **📱 Mobile First:** Completamente adaptado para dispositivos móviles.

## 🛠️ Stack Tecnológico

* **Framework:** [Astro](https://astro.build/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v4 alpha/vite)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Iconos:** [Astro Icon](https://www.astroicon.dev/) (Lucide & Simple Icons)
* **Deployment:** [Netlify](https://www.netlify.com/)

## 🚀 Instalación y Uso Local

Este proyecto utiliza `pnpm` como gestor de paquetes.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/LautaRB/Portfolio_v2.git
    cd portfolio-v2
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    El sitio estará disponible en `http://localhost:4321`.

## 📂 Estructura del Proyecto

```text
/
├── public/             # Assets estáticos (CV, imágenes, favicon)
├── src/
│   ├── components/     # Componentes reutilizables (BentoItem, Snake, ProjectCard)
│   ├── data/           # Datos estáticos y tipos
│   ├── layouts/        # Layout principal (BaseLayout)
│   ├── pages/          # Rutas (index.astro)
│   └── styles/         # CSS Global y configuraciones
└── package.json
```

## 📜 Licencia
Este proyecto está bajo la licencia MIT.
