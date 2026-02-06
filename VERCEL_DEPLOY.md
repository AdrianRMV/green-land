# Desplegar Green Land Solutions en Vercel

Tu proyecto es Next.js y Vercel lo detecta automáticamente. Puedes desplegar de dos formas:

---

## Opción 1: Conectar repositorio Git (recomendado)

Cada push a la rama principal genera un despliegue nuevo.

### 1. Subir el proyecto a GitHub

Si aún no tienes el repo en GitHub:

```bash
cd "/Users/eljardin/Documents/Adrian/Green land"

# Inicializar Git (si no está ya)
git init

# Añadir todo y primer commit
git add .
git commit -m "Initial commit - Green Land Solutions"

# Crear repo en GitHub (github.com → New repository) y luego:
git remote add origin https://github.com/TU_USUARIO/green-land-solutions.git
git branch -M main
git push -u origin main
```

### 2. Conectar con Vercel

1. Entra en **[vercel.com](https://vercel.com)** e inicia sesión (o crea cuenta con GitHub).
2. Clic en **"Add New..."** → **"Project"**.
3. **Import** el repositorio `green-land-solutions` (o el nombre que le hayas puesto).
4. Vercel detectará **Next.js**. No cambies nada en **Build and Output Settings**:
   - **Build Command:** `next build` (o vacío)
   - **Output Directory:** (vacío)
   - **Install Command:** `npm install` (o vacío)
5. Clic en **Deploy**.
6. En unos minutos tendrás una URL tipo: `https://green-land-solutions-xxx.vercel.app`.

### 3. Despliegues automáticos

- Cada **push a `main`** genera un nuevo despliegue.
- Las **pull requests** obtienen una URL de preview.

---

## Opción 2: Vercel CLI (sin Git)

Despliegue directo desde tu máquina.

### 1. Instalar Vercel CLI

```bash
npm i -g vercel
```

### 2. Desplegar

```bash
cd "/Users/eljardin/Documents/Adrian/Green land"
vercel
```

La primera vez te pedirá:
- Iniciar sesión en Vercel (o crear cuenta).
- Nombre del proyecto (por ejemplo: `green-land-solutions`).
- Carpeta del proyecto: **Enter** (usa la actual).
- ¿Override settings? **N** (no).

Se generará una URL de preview. Para producción:

```bash
vercel --prod
```

---

## Comandos útiles

| Acción              | Comando        |
|---------------------|----------------|
| Build local         | `npm run build` |
| Despliegue preview | `vercel`        |
| Despliegue producción | `vercel --prod` |

---

## Notas

- **Variables de entorno:** Si más adelante usas `.env`, añádelas en **Vercel → Project → Settings → Environment Variables**.
- **Dominio propio:** En **Settings → Domains** puedes añadir tu propio dominio (ej. `greenlandsolutions.com`).
- El **logo** y los archivos en `public/` se sirven automáticamente en la raíz de la URL.
