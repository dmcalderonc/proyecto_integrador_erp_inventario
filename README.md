**StocKly — Backend API**  
Sistema ERP de Inventario — Backend construido como Proyecto Integrador de la Universidad.  
**Integrantes**  
- **Calderón Diego**  
- **Mosquera Karla**  
- **Rivera Lizandro**  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OMQ2AABAAsSPBCj7fFRYQwYwEZiywEZJWQZeZ2ao9AAD+4lyruzq+ngAA8Nr1AMTJBeJDClAyAAAAAElFTkSuQmCC)  
**Descripción Funcional**  
El backend de StocKly es una API RESTful que expone todos los servicios del sistema ERP de inventario. Centraliza la información operativa en **PostgreSQL** (datos relacionales) y utiliza  **MongoDB** para el registro de auditoría, garantizando un historial inalterable de los movimientos realizados en las bodegas.  
El sistema cuenta con cuatro roles de usuario:  
- **ADMIN**: Gestión completa de usuarios, bodegas, proyectos y configuración del sistema.  
- **SOLICITANTE**: Creación de requerimientos y solicitudes de compra.  
- **BODEGUERO**: Gestión de movimientos, ajustes y despachos de inventario.  
- **COMPRADOR**: Gestión de cotizaciones, órdenes de compra y seguimiento de proveedores.  
La API expone 19 módulos funcionales con CRUD completo, generación de PDFs, dashboard con KPIs, catálogo público de materiales y autenticación JWT con soporte para Google OAuth.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OQQ2AQBAAsSE5CbzRujLwhwQMYIEfIWkVdJuZozoDAOAvrlWtav96AgDAa/cDEXQEKquakOYAAAAASUVORK5CYII=)  
**Instalación**  
**1. Clonar el repositorio**  
git clone https://github.com/dmcalderonc/proyecto_integrador_erp_inventario.git  
 cd proyecto_integrador_erp_inventario  
   
**2. Instalar dependencias**  
npm install  
   
**3. Configurar variables de entorno**  
Crea un archivo .env en la raíz del proyecto:  
PORT=3000  
 DB_HOST=localhost  
 DB_PORT=5432  
 DB_USERNAME=armin_erp_inventario  
 DB_PASSWORD=tu_password  
 DB_DATABASE=db_erp_inventario  
 MONGO_URI=mongodb://localhost:27017/erp_inventario_mongo  
 JWT_SECRET=tu_secreto_aqui  
 GOOGLE_CLIENT_ID=tu_google_client_id  
 GOOGLE_CLIENT_SECRET=tu_google_client_secret  
 GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback  
 FRONTEND_URL=http://localhost:5173  
   
**4. Ejecutar el proyecto**  
# Desarrollo (con hot-reload)  
 npm run start:dev  
   
 # Producción  
 npm run build  
 npm run start:prod  
   
El backend estará disponible en http://localhost:3000.  
**5. Documentación Swagger**  
Una vez ejecutado, accede a la documentación interactiva en:  
http://localhost:3000/api/docs  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM0lEQVR4nO3OQQmAUBBAwSeILbyYdDP8jAaxgjcRZhLMNjNntQIA4C/uvTqq6+sJAADvPS2NA0FrXqf/AAAAAElFTkSuQmCC)  
**Tecnologías Utilizadas**  
| | | |  
|-|-|-|  
| **Tecnología** | **Versión** | **Propósito** |   
| **NestJS** | 11.x | Framework backend (Node.js) |   
| **TypeScript** | 5.x | Tipado estático |   
| **TypeORM** | 1.x | ORM para PostgreSQL |   
| **PostgreSQL** | 16.x | Base de datos relacional |   
| **MongoDB** | — | Base de datos NoSQL (auditoría) |   
| **Mongoose** | 9.x | ODM para MongoDB |   
| **Passport.js** | 0.7.x | Autenticación (JWT + Google OAuth) |   
| **JWT** | — | Tokens de autenticación |   
| **bcrypt** | 6.x | Hashing de contraseñas |   
| **class-validator** | 0.15.x | Validación de DTOs |   
| **class-transformer** | 0.5.x | Transformación de objetos |   
| **Swagger** | 11.x | Documentación de la API |   
| **pdfmake** | 0.3.x | Generación de PDFs (órdenes de compra) |   
| **EventEmitter** | 3.x | Comunicación entre módulos (eventos) |   
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsSfYxZo/kC1sYQLPJrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA4qzBdC53Vr8AAAAAElFTkSuQmCC)  
**Estructura del Proyecto**  
src/  
 ├── ajustes-inventario/      # Ajustes de inventario  
 ├── auditoria/               # Auditoría (MongoDB) — logs inalterables  
 ├── auth/                    # Autenticación (JWT + Google OAuth)  
 │   ├── guards/              # JwtAuthGuard, GoogleAuthGuard, RolesGuard  
 │   ├── decorators/          # @Roles() decorator  
 │   └── dto/                 # LoginDto, RegisterDto  
 ├── bodegas/                 # Gestión de bodegas  
 ├── categorias/              # Gestión de categorías de materiales  
 ├── common/                  # Filtros globales, helpers compartidos  
 ├── compras/                 # Órdenes de compra  
 ├── cotizaciones/            # Cotizaciones de proveedores  
 ├── dashboard/               # Dashboard — KPIs, alertas, línea de tiempo  
 ├── despachos/               # Despachos de inventario  
 ├── inventario/              # Inventario consolidado por bodega  
 ├── materiales/              # Catálogo de materiales  
 ├── movimientos/             # Movimientos de inventario (entradas/salidas)  
 ├── pdf/                     # Generación de PDFs (pdfmake)  
 ├── proveedores/             # Gestión de proveedores  
 ├── proyectos/               # Gestión de proyectos  
 ├── public/                  # Endpoints públicos (catálogo sin auth)  
 ├── requirements/            # Requerimientos de inventario  
 ├── solicitudes-compra/      # Solicitudes de compra  
 ├── traspasos/               # Traspasos entre bodegas  
 ├── unidades-medida/         # Unidades de medida  
 ├── users/                   # Gestión de usuarios  
 ├── app.module.ts            # Módulo raíz  
 └── main.ts                  # Bootstrap — CORS, Swagger, ValidationPipe  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OMQ2AABAAsSNhQAQ60PcrIhnxgQU2QtIq6DIze3UGAMBf3Gu1VcfXEwAAXrseS14EKxPCORkAAAAASUVORK5CYII=)  
**Variables de Entorno**  
| | |  
|-|-|  
| **Variable** | **Descripción** |   
| PORT | Puerto del servidor |   
| DB_HOST | Host de PostgreSQL |   
| DB_PORT | Puerto de PostgreSQL |   
| DB_USERNAME | Usuario de PostgreSQL |   
| DB_PASSWORD | Contraseña de PostgreSQL |   
| DB_DATABASE | Nombre de la base de datos |   
| MONGO_URI | URI de conexión a MongoDB |   
| JWT_SECRET | Secreto para firmar JWT |   
| GOOGLE_CLIENT_ID | Client ID de Google OAuth |   
| GOOGLE_CLIENT_SECRET | Client Secret de Google OAuth |   
| GOOGLE_CALLBACK_URL | URL de callback de Google |   
| FRONTEND_URL | URL del frontend (para redirects) |   
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMUlEQVR4nO3WAQkAIBAEsBPMYs4PZhMDWMAA5njYUmxU1UqyAwBAF2cmeZE4AIBO7gentgXapSWpbgAAAABJRU5ErkJggg==)  
**Autenticación**  
**JWT**  
El sistema utiliza **JWT (JSON Web Tokens)** para proteger las rutas. Para acceder:  
1. Envía POST /auth/login con { email, password }.  
2. Recibe un access_token.  
3. Usa el token en las cabeceras de tus peticiones:  
Authorization: Bearer <access_token>  
   
**Google OAuth**  
El sistema soporta autenticación con Google:  
1. GET /auth/google — Redirige al usuario al consent screen de Google.  
2. GET /auth/google/callback — Callback de Google. Crea o vincula el usuario automáticamente.  
3. DELETE /auth/google — Desvincula la cuenta de Google del usuario (requiere JWT).  
**Registro**  
POST /auth/register  
 {  
   "nombre": "Juan Pérez",  
   "email": "juan@mail.com",  
   "password": "123456"  
 }  
   
El registro crea un usuario con rol **SOLICITANTE** por defecto.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OMQ2AABAAsSNhZscVjnidKEAGFtgISaugy8zs1RkAAH9xr9VWHV9PAAB47XoAor8EPg1yCpUAAAAASUVORK5CYII=)  
**Sistema de Roles y Permisos**  
El sistema define 4 roles mediante el enum UserRole:  
| | |  
|-|-|  
| **Rol** | **Acceso** |   
| ADMIN | Acceso completo a todos los módulos |   
| BODEGUERO | Gestión de inventario, bodegas, materiales, despachos, movimientos y consulta de compras/proveedores |   
| COMPRADOR | Gestión de compras, cotizaciones, proveedores y consulta de requirements/solicitudes |   
| SOLICITANTE | Creación y consulta de requirements, solicitudes de compra, materiales y proveedores |   
   
Cada controlador usa @UseGuards(JwtAuthGuard, RolesGuard) a nivel de clase y @Roles() por método.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OMQ2AABAAsSPBCj7fFwtCmJHAjAU2QtIq6DIzW7UHAMBfnGt1V8fHEQAA3rsexOkF3va0dq8AAAAASUVORK5CYII=)  
**Módulos de la API**  
| | | |  
|-|-|-|  
| **Módulo** | **Prefijo** | **Descripción** |   
| AuthModule | /auth | Login, registro, Google OAuth |   
| UsersModule | /users | CRUD de usuarios |   
| BodegasModule | /bodegas | CRUD de bodegas |   
| CategoriasModule | /categorias | CRUD de categorías |   
| UnidadesMedidaModule | /unidades-medida | CRUD de unidades de medida |   
| MaterialesModule | /materiales | CRUD de materiales |   
| ProyectosModule | /proyectos | CRUD de proyectos |   
| ProveedoresModule | /proveedores | CRUD de proveedores |   
| InventarioModule | /inventario | Inventario por bodega |   
| MovimientosModule | /movimientos | Entradas y salidas de inventario |   
| AjustesInventarioModule | /ajustes-inventario | Ajustes de stock |   
| RequirementsModule | /requirements | Requerimientos de inventario |   
| SolicitudesCompraModule | /solicitudes-compra | Solicitudes de compra |   
| CotizacionesModule | /cotizaciones | Cotizaciones de proveedores |   
| ComprasModule | /compras | Órdenes de compra + PDF |   
| DespachosModule | /despachos | Despachos de inventario |   
| TraspasosModule | /traspasos | Traspasos entre bodegas |   
| DashboardModule | /dashboard | KPIs, alertas de stock, línea de tiempo |   
| PdfModule | /pdf | Generación de PDFs |   
| AuditoriaModule | /auditoria | Logs de auditoría (MongoDB) |   
| PublicModule | /public | Catálogo público (sin auth) |   
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OMQ2AABAAsSNhwgJOUPcjIpnRgQU2QtIq6DIze3UGAMBf3Gu1VcfXEwAAXrseaJEEL8XMiYMAAAAASUVORK5CYII=)  
**Pruebas**  
El proyecto cuenta con **34 archivos de prueba** que cubren controllers y services de los principales módulos.  
npm test          # Ejecutar todas las pruebas  
 npm run test:cov  # Pruebas con reporte de cobertura  
 npm run test:debug # Ejecución con inspector (debug)  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsSfYxZo/jVEMYQLPJrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA4rLBc059ysnAAAAAElFTkSuQmCC)  
**Despliegue**  
**Procedimiento de Despliegue**  
El proyecto utiliza **GitHub Actions** para CI/CD. El despliegue es automático:  
1. Se hace push a la rama main.  
2. GitHub Actions ejecuta el workflow deploy.yml.  
3. Se copia el código al VPS mediante SCP.  
4. Se instalan dependencias (npm install).  
5. Se construye el proyecto (npm run build).  
6. Se reinicia el proceso con **PM2** (pm2 start dist/main.js).  
**Variables de Entorno Requeridas (GitHub Secrets)**  
| | |  
|-|-|  
| **Secret** | **Descripción** |   
| VPS_HOST | Dirección IP o dominio del servidor VPS |   
| VPS_KEY | Clave SSH privada para conexión |   
| ENV_FILE | Contenido completo del archivo .env |   
   
**Configuración del Servidor**  
- **Servidor**: VPS con Ubuntu  
- **Proceso**: PM2 (nombre vps)  
- **Base de datos**: PostgreSQL 16 + MongoDB  
- **Dominio backend**: link_dominio  
- **Dominio frontend**: link_fronent  
- **SSL**: Habilitado vía certificados Let's Encrypt  
- **Swagger docs**: link_dominio/api/docs  
**Scripts Disponibles**  
npm run start:dev    # Desarrollo con hot-reload  
 npm run build        # Construcción para producción  
 npm run start:prod   # Ejecutar en producción  
 npm run lint         # Análisis de código con ESLint  
 npm run format       # Formateo con Prettier  
 npm test             # Ejecutar pruebas  
 npm run test:cov     # Pruebas con cobertura  
   
