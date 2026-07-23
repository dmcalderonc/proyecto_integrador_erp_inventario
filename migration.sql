-- ============================================================
-- Migración: Agregar soporte de traspasos, bodegas y mejoras
-- Fecha: 2026-07-22
-- ============================================================

-- 1. Agregar bodega_id a la tabla requerimientos
ALTER TABLE requerimientos
  ADD COLUMN IF NOT EXISTS bodega_id INTEGER NOT NULL DEFAULT 1;

-- 2. Agregar bodega_asignada_id a la tabla users
ALTER TABLE users
  ADD COLUMN IF NOT EXISTS bodega_asignada_id INTEGER NULL;

-- 3. Crear tabla traspasos
CREATE TABLE IF NOT EXISTS traspasos (
  id SERIAL PRIMARY KEY,
  codigo VARCHAR(20) UNIQUE NOT NULL,
  bodega_origen_id INTEGER NOT NULL REFERENCES bodegas(id),
  bodega_destino_id INTEGER NOT NULL REFERENCES bodegas(id),
  usuario_origen_id UUID NOT NULL REFERENCES users(id),
  usuario_destino_id UUID NULL REFERENCES users(id),
  estado VARCHAR(20) NOT NULL DEFAULT 'PENDIENTE',
  fecha_creacion TIMESTAMP NOT NULL DEFAULT NOW(),
  fecha_envio TIMESTAMP NULL,
  fecha_recepcion TIMESTAMP NULL,
  observaciones TEXT NULL,
  requerimiento_detalle_id INTEGER NULL
);

-- 4. Crear tabla detalles_traspaso
CREATE TABLE IF NOT EXISTS detalles_traspaso (
  id SERIAL PRIMARY KEY,
  traspaso_id INTEGER NOT NULL REFERENCES traspasos(id) ON DELETE CASCADE,
  material_id INTEGER NOT NULL REFERENCES materiales(id),
  cantidad INTEGER NOT NULL,
  cantidad_recibida INTEGER NOT NULL DEFAULT 0
);

-- 5. Crear tabla detalles_compra_item (si no existe)
CREATE TABLE IF NOT EXISTS detalles_compra_item (
  id SERIAL PRIMARY KEY,
  orden_compra_id INTEGER REFERENCES ordenes_compra(id),
  material_id INTEGER NOT NULL REFERENCES materiales(id),
  cantidad INTEGER NOT NULL,
  requerimiento_detalle_id INTEGER NULL,
  tiempo_entrega_dias INTEGER NULL,
  marca VARCHAR(100) NULL,
  observaciones TEXT NULL,
  archivo_adjunto_url VARCHAR NULL
);

-- 6. Agregar bodega_destino_id a ordenes_compra
ALTER TABLE ordenes_compra
  ADD COLUMN IF NOT EXISTS bodega_destino_id INTEGER NULL REFERENCES bodegas(id);

-- ============================================================
-- Fin de migración
-- ============================================================
