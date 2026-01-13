# DioVista Apartments - Tu Escapada en Alcalá

![Vista previa del proyecto](https://github.com/Matusbh/studio/blob/main/public/images/vistaa-1.png) 
![Vista previa del proyecto](https://github.com/Matusbh/studio/blob/main/public/images/vista-2.png) 

Este repositorio contiene el código fuente del sitio web oficial de los apartamentos DioVista, un exclusivo ático dúplex situado en Alcalá, Tenerife. El sitio web está diseñado para ser una vitrina elegante y funcional que muestra las características del apartamento, su ubicación y permite a los usuarios solicitar una reserva.

El proyecto ha sido desarrollado en colaboración con una **IA asistente de codificación**, que ha ayudado en la generación de componentes, la implementación de lógica, la depuración de código y la reestructuración de funcionalidades.

## ✨ Características Principales

- **Multi-idioma:** Soporte completo para Español, Inglés, Polaco y Checo mediante archivos de traducción JSON.
- **Diseño Moderno y Adaptable:** Interfaz elegante y totalmente responsive, construida con componentes de alta calidad.
- **Galería de Imágenes Interactiva:** Un visor de imágenes a pantalla completa para explorar el interior del apartamento.
- **Formulario de Reserva:** Un formulario funcional que permite a los usuarios enviar solicitudes de reserva. La lógica del backend (envío de correo) es gestionada por un flow de Genkit.
- **Componentes Dinámicos:** Secciones como servicios, características, puntos de interés cercanos y restaurantes para proporcionar información completa a los potenciales huéspedes.

## 🚀 Tecnologías Utilizadas

Este proyecto aprovecha un stack de tecnologías moderno y eficiente, centrado en React y su ecosistema.

- **Framework:** [Next.js](https://nextjs.org/) (usando el App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **UI y Componentes:** [React](https://reactjs.org/), [ShadCN UI](https://ui.shadcn.com/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Funcionalidad AI:** [Genkit](https://firebase.google.com/docs/genkit) para la lógica del backend (ej. procesamiento del formulario de contacto).
- **Galería de Imágenes:** [yet-another-react-lightbox](https://yet-another-react-lightbox.com/)
- **Gestión de Formularios:** [React Hook Form](https://react-hook-form.com/) y [Zod](https://zod.dev/) para validación.

## 📂 Estructura de Carpetas

La estructura del proyecto sigue las convenciones de Next.js App Router, manteniendo una organización clara y escalable.

```
/
├── public/
│   └── images/         # Imágenes estáticas del proyecto.
├── src/
│   ├── app/
│   │   ├── [lang]/     # Rutas dinámicas para la internacionalización (i18n).
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx      # Página principal para cada idioma.
│   │   ├── globals.css   # Estilos globales y variables de tema de Tailwind/ShadCN.
│   │   ├── layout.tsx    # Layout raíz de la aplicación.
│   │   └── lib/
│   │       ├── constants.ts
│   │       ├── dictionaries.ts
│   │       └── placeholder-images.json # Datos centralizados de las imágenes.
│   ├── components/
│   │   ├── landing/      # Componentes específicos de la página principal (Hero, Gallery, etc.).
│   │   └── ui/           # Componentes reutilizables de ShadCN (Button, Card, etc.).
│   ├── hooks/            # Hooks de React personalizados.
│   ├── locales/          # Archivos JSON para las traducciones (es.json, en.json, etc.).
│   ├── ai/
│   │   ├── flows/        # Lógica de backend con Genkit.
│   │   ├── dev.ts
│   │   └── genkit.ts
├── tailwind.config.ts  # Configuración de Tailwind CSS.
└── next.config.ts      # Configuración de Next.js.
```

## ⚙️ Cómo Empezar

Para ejecutar este proyecto de forma local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver el resultado.
