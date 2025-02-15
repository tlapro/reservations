# 📌 Proyecto Front-Back

Breve descripción del proyecto. Explica qué hace y por qué es útil.

## 🚀 Instalación

### Backend

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tlapro/reservations.git
   ```

2. Ingresa al directorio del backend:

   ```bash
   cd reservations/backend
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

### Frontend

1. Ingresa al directorio del frontend:

   ```bash
   cd reservations/frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## ▶️ Ejecución

### Backend (Servidor Node.js con Express y TypeORM)

Para correr el servidor en modo desarrollo:

```bash
npm start
```

El backend estará disponible en `http://localhost:3000/` o en el puerto definido en el archivo `.env`.

### Frontend (Aplicación en React con Vite)

Para iniciar el frontend en modo desarrollo:

```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173/` o el puerto definido en la configuración de Vite.

## ⚙️ Variables de Entorno (Backend)

Crea un archivo `.env` en la carpeta backend y agrega las variables necesarias:

```env
PORT=3000
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
DB_SYNC=true
DB_LOGGING=["error"]
DB_ENTITIES=src/entities/**/*.ts
DB_DROP=false
SENDGRID_API_KEY=tu_api_key
```

## 🛠️ Tecnologías

### Backend:
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework backend
- **TypeORM** - ORM para PostgreSQL
- **PostgreSQL** - Base de datos relacional
- **Cors** - Middleware para gestionar permisos CORS
- **Dotenv** - Manejo de variables de entorno
- **Morgan** - Logger para desarrollo
- **Nodemon** - Recarga automática en desarrollo
- **Bcrypt** - Hashing de contraseñas
- **Cloudinary** - Almacenamiento de imágenes
- **Multer** - Middleware para manejar archivos
- **Date-fns** y **Moment.js** - Manejo de fechas

### Frontend:
- **React** - Biblioteca para interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida
- **Bootstrap** y **Bootstrap Icons** - Estilos y componentes
- **SweetAlert2** - Alertas y notificaciones
- **React Router DOM** - Manejo de rutas en React
- **Axios** - Cliente HTTP

