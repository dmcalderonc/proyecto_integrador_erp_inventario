# Guía del Proyecto — ERP Inventario Backend

---

## 1. Estado Actual del Proyecto

### Stack tecnológico

| Componente    | Tecnología                              |
| ------------- | --------------------------------------- |
| Framework     | NestJS 11                               |
| ORM           | TypeORM                                 |
| BD Relacional | PostgreSQL (`db_erp_inventario`)        |
| BD NoSQL      | MongoDB (`erp_inventario_mongo`)        |
| Autenticación | JWT + Passport                          |
| Documentación | Swagger (`/api/docs`)                   |
| PDF           | pdfmake                                 |
| Validación    | class-validator + ValidationPipe global |

### Estado de compilación y pruebas

- `npm run build` — Compila sin errores
- `npm test` — 34 suites, 160 tests, 0 fallos
- `npm run test:cov` — Con reporte de cobertura
- Swagger disponible en `/api/docs` con autenticación Bearer

### Base de datos

- PostgreSQL: `synchronize: true` (esquema auto-sincronizado)
- MongoDB: colecciones `auditorialog` (auditoría general) y `auditlogs` (compras)

### Frontend

- Origen CORS configurado: `localhost:5173` (Vite), `stockly.uaeftt-ute.site`

---

## 2. Estructura del Proyecto

```
src/
├── main.ts                          # Bootstrap, Swagger, CORS, ValidationPipe
├── app.module.ts                    # Módulo raíz, importa todos los módulos
├── app.controller.ts                # GET / -> "Hello World!"
│
├── auth/                            # Autenticación y autorización
│   ├── auth.module.ts
│   ├── auth.controller.ts           # POST /auth/login
│   ├── auth.service.ts              # Login con JWT
│   ├── jwt.strategy.ts              # Estrategia Passport JWT
│   ├── dto/login.dto.ts
│   ├── decorators/roles.decorator.ts
│   └── guards/
│       ├── jwt-auth.guard.ts        # Valida JWT
│       ├── roles.guard.ts           # Verifica roles
│       └── ProyectoAccessGuard.ts   # Verifica acceso a proyecto
│
├── users/                           # Usuarios del sistema
│   ├── users.module.ts
│   ├── users.controller.ts          # CRUD solo ADMIN
│   ├── users.service.ts
│   ├── user.entity.ts               # User + UserRole enum
│   ├── proyecto-usuario.entity.ts   # Tabla intermedia users ↔ proyectos
│   └── dto/
│
├── proyectos/                       # Proyectos de obra
│   ├── proyectos.module.ts
│   ├── proyectos.controller.ts
│   ├── proyectos.service.ts         # Auto-crea bodega virtual al crear
│   ├── proyecto.entity.ts
│   └── dto/
│
├── materiales/                      # Catálogo de materiales
│   ├── materiales.module.ts
│   ├── materiales.controller.ts
│   ├── materiales.service.ts        # SKU auto-generado
│   ├── material.entity.ts
│   └── dto/
│
├── categorias/                      # Categorías de materiales
│   ├── categorias.module.ts
│   ├── categorias.controller.ts
│   ├── categorias.service.ts
│   ├── categoria.entity.ts
│   └── dto/
│
├── bodegas/                         # Bodegas físicas y virtuales
│   ├── bodegas.module.ts
│   ├── bodegas.controller.ts
│   ├── bodegas.service.ts
│   ├── bodegas.entity.ts
│   ├── stock-bodega.entity.ts       # Stock por bodega
│   └── dto/
│
├── inventario/                      # Consulta de stock
│   ├── inventario.module.ts
│   ├── inventario.controller.ts
│   ├── inventario.service.ts
│   ├── inventario.entity.ts         # Mapea a stock_bodega
│   └── dto/
│
├── movimientos/                     # Movimientos de inventario
│   ├── movimientos.module.ts
│   ├── movimientos.controller.ts
│   ├── movimientos.service.ts       # Motor transaccional con locks pesimistas
│   ├── entities/
│   │   ├── movimiento-inventario.entity.ts
│   │   └── detalle-movimiento.entity.ts
│   └── dto/
│
├── requirements/                    # Requerimientos de materiales
│   ├── requirements.module.ts
│   ├── requirements.controller.ts
│   ├── requirements.service.ts      # Flujo PENDIENTE→APROBADO→ATENDIDO
│   ├── entities/
│   │   ├── requirement.entity.ts
│   │   └── requirement-detail.entity.ts
│   └── dto/
│
├── compras/                         # Órdenes de compra
│   ├── compras.module.ts
│   ├── compras.controller.ts
│   ├── compras.service.ts           # Valida cotización ELEGIDA antes de crear
│   ├── entities/
│   │   ├── orden-compra.entity.ts
│   │   └── detalle-orden-compra.entity.ts
│   ├── schemas/audit-log.schema.ts  # Mongoose
│   └── dto/
│
├── cotizaciones/                    # Cotizaciones de proveedores
│   ├── cotizaciones.module.ts
│   ├── cotizaciones.controller.ts
│   ├── cotizaciones.service.ts      # Placeholder (retorna strings)
│   ├── entities/cotizacion.entity.ts
│   └── dto/
│
├── proveedores/                     # Proveedores
│   ├── proveedores.module.ts
│   ├── proveedores.controller.ts
│   ├── proveedores.service.ts
│   ├── proveedore.entity.ts
│   └── dto/
│
├── solicitudes-compra/              # Solicitudes de compra
│   ├── solicitudes-compra.module.ts
│   ├── solicitudes-compra.controller.ts
│   ├── solicitudes-compra.service.ts
│   ├── entities/
│   │   ├── solicitud-compra.entity.ts
│   │   └── detalle-solicitud.entity.ts
│   └── dto/
│
├── despachos/                       # Despacho/entrega directa a obra
│   ├── despachos.module.ts
│   ├── despachos.controller.ts
│   ├── despachos.service.ts         # Transacción + auditoría MongoDB
│   ├── entities/despacho.entity.ts
│   └── dto/
│
├── dashboard/                       # KPIs y alertas
│   ├── dashboard.module.ts
│   ├── dashboard.controller.ts
│   └── dashboard.service.ts
│
├── ajustes-inventario/              # Ajustes físicos de inventario
│   ├── ajustes-inventario.module.ts
│   ├── ajustes-inventario.controller.ts
│   ├── ajustes-inventario.service.ts
│   ├── entities/
│   │   ├── ajustes-inventario.entity.ts
│   │   └── detalle-ajuste.entity.ts
│   └── dto/
│
├── pdf/                             # Generación de PDFs (módulo global)
│   ├── pdf.module.ts
│   └── pdf.service.ts
│
├── auditoria/                       # Auditoría en MongoDB
│   ├── auditoria.module.ts
│   ├── auditoria.service.ts
│   └── auditoria.schema.ts
│
└── common/                          # Compartido
    ├── dto/response.dto.ts
    └── filters/http-exception.filter.ts
```

---

## 3. Roles y Permisos

### Roles definidos (`UserRole` en `user.entity.ts`)

| Rol           | Descripción                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `ADMIN`       | Acceso total a todos los módulos y operaciones                              |
| `BODEGUERO`   | Encargado de bodega: gestiona inventario físico, movimientos, despachos     |
| `COMPRADOR`   | Encargado de compras: gestiona órdenes de compra, cotizaciones, proveedores |
| `SOLICITANTE` | Usuario de obra: crea requerimientos, consulta materiales y proveedores     |

### Mapa completo de permisos por módulo

| Módulo                 | Endpoint                           | ADMIN | BODEGUERO | COMPRADOR | SOLICITANTE |
| ---------------------- | ---------------------------------- | ----- | --------- | --------- | ----------- |
| **Usuarios**           | POST / GET / PUT / DELETE          | ✅    | ❌        | ❌        | ❌          |
| **Proyectos**          | POST / PATCH / DELETE              | ✅    | ❌        | ❌        | ❌          |
|                        | GET lista / GET :id                | ✅    | ✅        | ✅        | ✅          |
| **Materiales**         | POST / PUT                         | ✅    | ✅        | ❌        | ❌          |
|                        | GET lista / GET :id                | ✅    | ✅        | ✅        | ✅          |
|                        | DELETE                             | ✅    | ❌        | ❌        | ❌          |
| **Categorías**         | POST / PUT / DELETE                | ✅    | ❌        | ❌        | ❌          |
|                        | GET lista / GET :id                | ✅    | ✅        | ❌        | ❌          |
| **Bodegas**            | POST / PATCH / DELETE              | ✅    | ❌        | ❌        | ❌          |
|                        | GET lista / GET :id                | ✅    | ✅        | ❌        | ❌          |
| **Inventario**         | POST / GET / PATCH                 | ✅    | ✅        | ❌        | ❌          |
|                        | DELETE                             | ✅    | ❌        | ❌        | ❌          |
| **Movimientos**        | POST (registrar)                   | ✅    | ✅        | ❌        | ❌          |
|                        | GET :id/ticket                     | ✅    | ✅        | ✅        | ✅          |
| **Requerimientos**     | POST / GET / GET :id               | ✅    | ✅        | ✅        | ✅          |
|                        | PATCH :id/status                   | ✅    | ✅        | ✅        | ❌          |
|                        | DELETE                             | ✅    | ❌        | ❌        | ❌          |
| **Compras**            | POST / GET / GET :id / GET :id/pdf | ✅    | ✅        | ✅        | ❌          |
|                        | PATCH :id                          | ✅    | ❌        | ✅        | ❌          |
|                        | PATCH :id/recibir                  | ✅    | ✅        | ❌        | ❌          |
|                        | DELETE                             | ✅    | ❌        | ❌        | ❌          |
| **Cotizaciones**       | POST / PATCH                       | ✅    | ❌        | ✅        | ❌          |
|                        | GET lista / GET :id                | ✅    | ✅        | ✅        | ✅          |
|                        | DELETE                             | ✅    | ❌        | ❌        | ❌          |
| **Proveedores**        | POST / PATCH                       | ✅    | ❌        | ✅        | ❌          |
|                        | GET lista / GET :id                | ✅    | ✅        | ✅        | ✅          |
|                        | DELETE                             | ✅    | ❌        | ❌        | ❌          |
| **Solicitudes Compra** | GET                                | ✅    | ✅        | ✅        | ✅          |
|                        | PATCH :id                          | ✅    | ✅        | ✅        | ✅          |
| **Dashboard**          | GET kpis / alertas / linea-tiempo  | ✅    | ✅        | ✅        | ✅          |
| **Despachos**          | POST entrega-directa               | ✅    | ✅        | ❌        | ❌          |
| **Ajustes Inventario** | POST                               | ✅    | ✅        | ❌        | ❌          |

### ProyectoAccessGuard (acceso por proyecto)

Además de los roles, existe `ProyectoAccessGuard` que verifica que el usuario esté asignado a un proyecto específico mediante la tabla `proyecto_usuarios`. Aplica en:

- `GET /proyectos/:proyectoId` — si no eres ADMIN, debes estar asignado
- `GET /solicitudes-compra?proyectoId=X` — filtra por proyecto asignado
- `RequirementsController` — a nivel de clase, listo para futuros filtros

El guard salta si:

- El usuario es ADMIN
- No se envía `proyectoId` en la request

---

## 4. Descripción de Cada Módulo

### Auth (Autenticación)

- **Propósito**: Login y emisión de JWT
- **Endpoint**: `POST /auth/login` (público)
- **Flujo**: Recibe email+password → busca usuario → compara bcrypt → devuelve JWT con `{ id, email, rol, bodega_id }`
- **Vigencia del token**: 1 día
- **Guards**: `JwtAuthGuard` (valida token), `RolesGuard` (verifica rol contra `@Roles()`)

### Users (Usuarios)

- **Propósito**: CRUD de usuarios del sistema
- **Solo ADMIN** puede gestionar usuarios
- **Roles**: define el enum `UserRole` (`ADMIN`, `BODEGUERO`, `COMPRADOR`, `SOLICITANTE`)
- **Entidad**: `users` tabla con UUID, nombre, email, password (bcrypt), rol, estado

### Proyectos

- **Propósito**: Gestión de proyectos/obras
- **Al crear**: Transacción que auto-genera código (`PROY-YYYY-NNN`) y crea una bodega virtual asociada ("Bodega Obra: {nombre}")
- **Entidad**: `proyectos` con UUID, nombre, código, fecha, estado (ACTIVO/CERRADO)
- **Relación**: OneToOne con Bodega

### Materiales

- **Propósito**: Catálogo de materiales con SKU auto-generado
- **SKU**: Se compone del prefijo de la categoría + número secuencial de 4 dígitos (ej: `FERR-0005`)
- **Entidad**: `materiales` con nombre, descripción, SKU (único), unidad de medida (U/KG/M/M2)
- **Auditoría**: Cada CREATE/UPDATE/DELETE se registra en MongoDB

### Categorías

- **Propósito**: Clasificación de materiales
- **Entidad**: `categorias` con nombre (único) y prefijo (único, ej: `FERR`)
- **Relación**: OneToMany con Materiales

### Bodegas

- **Propósito**: Bodegas físicas y virtuales (una por proyecto)
- **Entidad**: `bodegas` con nombre, ubicación, `is_principal`, `proyecto_id` (nullable)
- **Stock**: `stock_bodega` almacena `cantidad_disponible` y `cantidad_reservada` por material

### Inventario

- **Propósito**: Consulta y gestión de stock
- **Entidad**: Mapea a `stock_bodega` (material_id, bodega_id, cantidad_disponible, cantidad_reservada)
- **Métodos especiales**: `getStockByBodega()`, `getGlobalStockByMaterial()`

### Movimientos

- **Propósito**: Motor transaccional de movimientos de inventario
- **3 tipos**: `INGRESO`, `EGRESO`, `TRANSFERENCIA`
- **Transaccional**: Usa QueryRunner con locks pesimistas (`pessimistic_write`) para evitar condiciones de carrera
- **Flujo**: Crea movimiento → crea detalles → actualiza stock origen (decrementa) → actualiza stock destino (incrementa) → audita en MongoDB
- **Ticket PDF**: `GET /movimientos/:id/ticket` genera comprobante

### Requirements (Requerimientos)

- **Propósito**: Solicitud de materiales para un proyecto
- **Flujo de estados**: `PENDIENTE → APROBADO → ATENDIDO`
  - **PENDIENTE→APROBADO**: Verifica stock en bodega central (ID=1), descuenta `disponible`, incrementa `reservada`
  - **APROBADO→ATENDIDO**: Crea movimiento TRANSFERENCIA de bodega central a bodega del proyecto, libera `reservada`
- **Filtro por usuario**: SOLICITANTE solo ve sus propios requerimientos

### Compras (Órdenes de Compra)

- **Propósito**: Gestión de órdenes de compra a proveedores
- **Flujo**: Se crea en estado `BORRADOR` → se actualiza → se recibe (`PATCH /recibir`)
- **Validación**: Si viene con `solicitudId`, verifica que exista una cotización en estado `ELEGIDA`
- **Al recibir**: Cambia estado a `RECIBIDA`, audita en MongoDB, crea movimiento INGRESO
- **Código**: Auto-generado (`OC-{timestamp}`)
- **PDF**: Descarga orden de compra en PDF

### Cotizaciones

- **Propósito**: Cotizaciones de proveedores para solicitudes de compra
- **NOTA**: El servicio actualmente es placeholder (retorna strings). Pendiente de implementar con repositorios.
- **Estados de cotización**: `ENVIADA`, `ELEGIDA`, `RECHAZADA`

### Proveedores

- **Propósito**: Catálogo de proveedores
- **Entidad**: `proveedores` con RUC (13 dígitos, único), razón social, email, teléfono, dirección

### Solicitudes de Compra

- **Propósito**: Solicitudes internas de compra
- **Filtro**: Acepta `?estado=` y `?proyectoId=` como query params
- **Edición**: SOLICITANTE solo puede editar sus propias solicitudes

### Despachos (Entrega Directa)

- **Propósito**: Despacho directo de materiales a obra sin pasar por bodega central
- **Transaccional**: En una sola transacción: (A) crea INGRESO a bodega virtual del proyecto, (B) cambia estado del requerimiento a `DESPACHADO`
- **Auditoría forense**: Después del commit SQL, registra en MongoDB (falla silenciosa si Mongo no responde)
- **Validación**: El requerimiento debe estar en estado `APROBADO`

### Dashboard

- **Propósito**: KPIs y visualizaciones
- **Endpoints**: `kpis`, `alertas-stock?umbral=`, `linea-tiempo`
- **Acceso**: Todos los roles pueden consultar

### Ajustes de Inventario

- **Propósito**: Corrección física de inventario (conteo cíclico)
- **Transaccional**: Por cada material, calcula diferencia entre stock del sistema y conteo físico, actualiza stock, registra detalle
- **Auditoría**: Severidad `CRITICAL_WARNING` en MongoDB

### PDF (Global)

- **Propósito**: Generación de documentos PDF
- **Módulo global** (`@Global()`) — disponible sin importar
- **Métodos**: `generarOrdenCompraPdf()`, `generarTicketMovimientoPdf()`

### Auditoría (MongoDB)

- **Propósito**: Registro inmutable de acciones críticas
- **Esquema**: `usuario_id`, `accion`, `modulo`, `detalles` (JSON), timestamps
- **Fail-safe**: Los errores de MongoDB se capturan y loggean, nunca propagan al usuario

---

## 5. Flujo del Backend

### Ciclo de vida de una petición

```
Cliente → HTTP Request
  → [CORS] (main.ts enableCors)
  → [Global ValidationPipe] (whitelist, forbidNonWhitelisted, transform)
  → [Global ExceptionFilter] (AllExceptionsFilter)
  → Router → Guard: JwtAuthGuard (valida JWT)
           → Guard: RolesGuard (verifica @Roles)
           → Guard: ProyectoAccessGuard (verifica acceso a proyecto si aplica)
           → Controller Handler → Service
           → Response (JSON)
```

### Flujo de autenticación

```
1. POST /auth/login { email, password }
2. AuthService: busca usuario por email
3. Compara password con bcrypt (fallback a texto plano)
4. Verifica que usuario esté activo (estado === true)
5. Firma JWT con payload { id, sub, email, rol, bodega_id }
6. Devuelve { accessToken, user: { id, email, rol, nombre } }
7. Cliente usa token en header: Authorization: Bearer <token>
8. JwtStrategy: extrae token, verifica firma, inyecta req.user
```

### Flujo de Requerimiento (completo)

```
SOLICITANTE
  │ POST /requirements { proyectoId, materiales }
  ▼
Estado: PENDIENTE
  │
BODEGUERO/ADMIN
  │ PATCH /requirements/:id/status { estado: APROBADO }
  ▼
  ┌─ Transacción:
  │ 1. Verifica stock suficiente en bodega central (ID=1)
  │ 2. Descuenta cantidad_disponible
  │ 3. Incrementa cantidad_reservada
  │ 4. Cambia estado a APROBADO
  └─ Si stock insuficiente → error 400
  │
Estado: APROBADO
  │
BODEGUERO/ADMIN
  │ PATCH /requirements/:id/status { estado: ATENDIDO }
  ▼
  ┌─ Transacción:
  │ 1. Crea movimiento TRANSFERENCIA (central → bodega obra)
  │ 2. Por cada material: descuenta cantidad_reservada
  │ 3. Crea detalle de movimiento
  │ 4. Cambia estado a ATENDIDO
  └─
  │
Estado: ATENDIDO
```

### Flujo de Órden de Compra

```
COMPRADOR
  │ POST /compras { proveedorId, subtotal, impuestos, total, detalles, solicitudId? }
  ▼
  ┌─ Si solicitudId presente:
  │  Verifica que exista cotización ELEGIDA para esa solicitud
  │  Si no → 403 Forbidden
  └─
  Crea OC con código OC-{timestamp}, estado BORRADOR
  │
BODEGUERO
  │ PATCH /compras/:id/recibir
  ▼
  ┌─ 1. Audita en MongoDB (estadoAnterior → RECIBIDA)
  │ 2. Cambia estado a RECIBIDA
  │ 3. Crea movimiento INGRESO (vía MovimientosService)
  └─
  │
Estado: RECIBIDA
```

### Flujo de Movimiento de Inventario

```
BODEGUERO/ADMIN
  │ POST /movimientos { tipo, bodegaOrigenId?, bodegaDestinoId?, detalles }
  ▼
  ┌─ Transacción con lock pesimista:
  │ 1. Valida según tipo (INGRESO requiere destino, EGRESO requiere origen, etc.)
  │ 2. Crea registro de movimiento
  │ 3. Por cada detalle:
  │    ├─ Si EGRESO/TRANSFERENCIA: lock pesimista en stock origen
  │    │  Verifica stock suficiente → descuenta
  │    └─ Si INGRESO/TRANSFERENCIA: lock pesimista en stock destino
  │       Si no existe registro → lo crea desde cero
  │       Incrementa stock
  │ 4. Commit
  └─
  Audita en MongoDB con trazabilidad de stock antes/después
```

### Flujo de Entrega Directa (Despachos)

```
BODEGUERO/ADMIN
  │ POST /despachos/entrega-directa { requerimientoId, proyectoId, ordenCompraId, detalles }
  ▼
  ┌─ Transacción SQL:
  │ 1. Valida que proyecto tenga bodega virtual
  │ 2. Crea movimiento INGRESO a bodega virtual del proyecto
  │ 3. Valida que requerimiento esté APROBADO
  │ 4. Cambia requerimiento a DESPACHADO
  │ 5. Commit
  └─
  ┌─ Post-commit (fuera de transacción SQL):
  │  Auditoría forense en MongoDB (falla silenciosa)
  └─
```

### Flujo de Ajuste Físico de Inventario

```
BODEGUERO/ADMIN
  │ POST /ajustes-inventario { bodegaId, motivo, detalles: [{ materialId, stockFisico }] }
  ▼
  ┌─ Transacción:
  │ 1. Crea registro de ajuste
  │ 2. Por cada material:
  │    ├─ Busca stock actual del sistema
  │    ├─ Calcula diferencia (stockFisico - stockSistema)
  │    ├─ Actualiza cantidad_disponible al valor físico
  │    └─ Crea detalle de ajuste con stock_sistema, stock_fisico, diferencia
  │ 3. Commit
  └─
  Audita en MongoDB con severidad CRITICAL_WARNING
```

### Base de datos: Relaciones principales

```
users ──┐
         │
         ├──< proyecto_usuarios >── proyectos ── 1:1 ── bodegas
         │
         ├── requerimientos ──< detalle_requerimiento >── materiales
         │
         ├── ordenes_compra ──< detalle_orden_compra >── materiales
         │
         ├── movimientos_inventario ──< detalle_movimiento >── materiales
         │
         ├── cotizaciones ── solicitudes_compra
         │
         └── ajustes_inventario ──< detalle_ajustes >── materiales

stock_bodega ── materiales
stock_bodega ── bodegas
categorias ──< materiales
```

### Notas importantes

- **Transacciones**: Todos los módulos críticos (movimientos, requirements, despachos, ajustes, proyectos, materiales CREATE) usan `QueryRunner` con transacciones explícitas.
- **Auditoría en MongoDB**: Se ejecuta siempre después del commit SQL. Si MongoDB falla, la operación principal no se revierte — solo se loggea el error.
- **Stock**: Usa bloqueos pesimistas (`pessimistic_write`) para evitar condiciones de carrera en movimientos concurrentes.
- **Bodega central**: ID fijo = 1. Usada como bodega de abastecimiento principal para requerimientos.
- **cotizaciones.service.ts**: Es placeholder — retorna strings. Pendiente de implementar.
