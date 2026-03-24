# 🍸 Cocktail AI - Recipe Explorer & Generator

**Cocktail AI** es una aplicación de alto rendimiento que combina la base de datos de **TheCocktailDB** con la potencia de la **Inteligencia Artificial**. Permite a los usuarios buscar recetas clásicas, gestionar sus favoritos y generar nuevas combinaciones creativas mediante streaming de IA en tiempo real.

---

## 🚀 Características Principales

* 🔍 **Búsqueda Avanzada:** Filtrado por ingredientes y categorías mediante la API de TheCocktailDB.
* 🤖 **Generador de IA:** Creación de recetas únicas con modelos gratuitos o de pago vía OpenRouter.
* ⚡ **Streaming de Texto:** Visualización de respuestas de la IA en tiempo real (efecto máquina de escribir).
* ⭐ **Favoritos:** Gestión de recetas preferidas con persistencia automática en `localStorage`.
* 🛡️ **Validación Estricta:** Uso de **Zod** para garantizar la integridad de los datos de la API.
* 📱 **Diseño Moderno:** Interfaz 100% responsive construida con **Tailwind CSS 4** y **Headless UI**.

---

## 🛠️ Stack Tecnológico

| Herramienta | Propósito |
| :--- | :--- |
| **React 19** | Biblioteca principal para la interfaz de usuario. |
| **TypeScript** | Tipado estricto para un desarrollo robusto y sin errores. |
| **Zustand** | Gestión de estado global mediante Slices escalables. |
| **Axios** | Cliente HTTP para el consumo de APIs REST. |
| **Zod** | Validación de esquemas y tipado seguro de respuestas. |
| **AI SDK (Vercel)** | Integración de modelos de lenguaje (LLM) y streaming. |
| **Tailwind 4** | Framework de utilidades CSS de última generación. |

---

## 📦 Instalación y Configuración

### Requisitos Previos
* Node.js (v18 o superior)
* NPM instalado

### Pasos para el arranque local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Josegarlu85/Bebidas-React-Typescript.git
   cd Bebidas-React-Typescript
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno:**

   Crea un archivo `.env` en la raíz del proyecto  
   (puedes usar `.env.example` como referencia):

   ```plaintext
   VITE_OPENROUTER_KEY=tu_clave_de_openrouter_aqui
   ```

   **Nota:** No dejes espacios después del signo `=`.

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

---

### 🔑 Recordatorio importante

Para obtener tu **API Key de OpenRouter**, visita su panel de usuario y genera una clave nueva.  
Sin esta clave, las funciones de IA no podrán funcionar correctamente. CUIDADO puedes añadir
modelos de IA de pago que supondrian un coste.

## 🧪 Control de Calidad y Mantenimiento

Para asegurar que el proyecto se mantiene robusto y libre de errores, se utilizan los siguientes scripts:

* **`npm run dev`**: Inicia el servidor de desarrollo local.
* **`npm run typecheck`**: Ejecuta el compilador de TypeScript en modo validación (`tsc --noEmit`) para detectar errores de tipado sin generar archivos.
* **`npm run lint`**: Analiza el código con **ESLint** para asegurar que se cumplen las reglas de estilo y buenas prácticas.
* **`npm run test`**: Ejecuta la suite de pruebas unitarias con **Vitest** en modo interactivo.
* **`npm run test:run`**: Ejecuta todos los tests una sola vez (ideal para entornos de Integración Continua).
* **`npm run build`**: Realiza la comprobación de tipos y genera la versión optimizada para producción en la carpeta `/dist`.

