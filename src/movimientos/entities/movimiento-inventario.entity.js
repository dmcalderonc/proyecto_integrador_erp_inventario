"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventario = exports.EstadoMovimiento = exports.TipoMovimiento = void 0;
var typeorm_1 = require("typeorm");
var detalle_movimiento_entity_1 = require("./detalle-movimiento.entity");
var user_entity_1 = require("../../users/user.entity");
var bodegas_entity_1 = require("../../bodegas/bodegas.entity");
var TipoMovimiento;
(function (TipoMovimiento) {
    TipoMovimiento["INGRESO"] = "INGRESO";
    TipoMovimiento["EGRESO"] = "EGRESO";
    TipoMovimiento["TRANSFERENCIA"] = "TRANSFERENCIA";
})(TipoMovimiento || (exports.TipoMovimiento = TipoMovimiento = {}));
var EstadoMovimiento;
(function (EstadoMovimiento) {
    EstadoMovimiento["PROCESADO"] = "PROCESADO";
    EstadoMovimiento["ANULADO"] = "ANULADO";
})(EstadoMovimiento || (exports.EstadoMovimiento = EstadoMovimiento = {}));
var MovimientoInventario = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('movimientos_inventario')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _tipo_decorators;
    var _tipo_initializers = [];
    var _tipo_extraInitializers = [];
    var _fecha_decorators;
    var _fecha_initializers = [];
    var _fecha_extraInitializers = [];
    var _observaciones_decorators;
    var _observaciones_initializers = [];
    var _observaciones_extraInitializers = [];
    var _usuarioId_decorators;
    var _usuarioId_initializers = [];
    var _usuarioId_extraInitializers = [];
    var _usuario_decorators;
    var _usuario_initializers = [];
    var _usuario_extraInitializers = [];
    var _bodegaOrigenId_decorators;
    var _bodegaOrigenId_initializers = [];
    var _bodegaOrigenId_extraInitializers = [];
    var _bodegaOrigen_decorators;
    var _bodegaOrigen_initializers = [];
    var _bodegaOrigen_extraInitializers = [];
    var _bodegaDestinoId_decorators;
    var _bodegaDestinoId_initializers = [];
    var _bodegaDestinoId_extraInitializers = [];
    var _bodegaDestino_decorators;
    var _bodegaDestino_initializers = [];
    var _bodegaDestino_extraInitializers = [];
    var _estado_decorators;
    var _estado_initializers = [];
    var _estado_extraInitializers = [];
    var _detalles_decorators;
    var _detalles_initializers = [];
    var _detalles_extraInitializers = [];
    var MovimientoInventario = _classThis = /** @class */ (function () {
        function MovimientoInventario_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.tipo = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _tipo_initializers, void 0));
            this.fecha = (__runInitializers(this, _tipo_extraInitializers), __runInitializers(this, _fecha_initializers, void 0));
            this.observaciones = (__runInitializers(this, _fecha_extraInitializers), __runInitializers(this, _observaciones_initializers, void 0));
            this.usuarioId = (__runInitializers(this, _observaciones_extraInitializers), __runInitializers(this, _usuarioId_initializers, void 0));
            this.usuario = (__runInitializers(this, _usuarioId_extraInitializers), __runInitializers(this, _usuario_initializers, void 0));
            this.bodegaOrigenId = (__runInitializers(this, _usuario_extraInitializers), __runInitializers(this, _bodegaOrigenId_initializers, void 0));
            this.bodegaOrigen = (__runInitializers(this, _bodegaOrigenId_extraInitializers), __runInitializers(this, _bodegaOrigen_initializers, void 0));
            this.bodegaDestinoId = (__runInitializers(this, _bodegaOrigen_extraInitializers), __runInitializers(this, _bodegaDestinoId_initializers, void 0));
            this.bodegaDestino = (__runInitializers(this, _bodegaDestinoId_extraInitializers), __runInitializers(this, _bodegaDestino_initializers, void 0));
            this.estado = (__runInitializers(this, _bodegaDestino_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
            this.detalles = (__runInitializers(this, _estado_extraInitializers), __runInitializers(this, _detalles_initializers, void 0));
            __runInitializers(this, _detalles_extraInitializers);
        }
        return MovimientoInventario_1;
    }());
    __setFunctionName(_classThis, "MovimientoInventario");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _tipo_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: TipoMovimiento })];
        _fecha_decorators = [(0, typeorm_1.CreateDateColumn)({ name: 'fecha' })];
        _observaciones_decorators = [(0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _usuarioId_decorators = [(0, typeorm_1.Column)({ name: 'usuario_id', type: 'uuid' })];
        _usuario_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }), (0, typeorm_1.JoinColumn)({ name: 'usuario_id' })];
        _bodegaOrigenId_decorators = [(0, typeorm_1.Column)({ name: 'bodega_origen_id', type: 'integer', nullable: true })];
        _bodegaOrigen_decorators = [(0, typeorm_1.ManyToOne)(function () { return bodegas_entity_1.Bodega; }), (0, typeorm_1.JoinColumn)({ name: 'bodega_origen_id' })];
        _bodegaDestinoId_decorators = [(0, typeorm_1.Column)({ name: 'bodega_destino_id', type: 'integer', nullable: true })];
        _bodegaDestino_decorators = [(0, typeorm_1.ManyToOne)(function () { return bodegas_entity_1.Bodega; }), (0, typeorm_1.JoinColumn)({ name: 'bodega_destino_id' })];
        _estado_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: EstadoMovimiento, default: EstadoMovimiento.PROCESADO })];
        _detalles_decorators = [(0, typeorm_1.OneToMany)(function () { return detalle_movimiento_entity_1.DetalleMovimiento; }, function (detalle) { return detalle.movimiento; }, { cascade: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _tipo_decorators, { kind: "field", name: "tipo", static: false, private: false, access: { has: function (obj) { return "tipo" in obj; }, get: function (obj) { return obj.tipo; }, set: function (obj, value) { obj.tipo = value; } }, metadata: _metadata }, _tipo_initializers, _tipo_extraInitializers);
        __esDecorate(null, null, _fecha_decorators, { kind: "field", name: "fecha", static: false, private: false, access: { has: function (obj) { return "fecha" in obj; }, get: function (obj) { return obj.fecha; }, set: function (obj, value) { obj.fecha = value; } }, metadata: _metadata }, _fecha_initializers, _fecha_extraInitializers);
        __esDecorate(null, null, _observaciones_decorators, { kind: "field", name: "observaciones", static: false, private: false, access: { has: function (obj) { return "observaciones" in obj; }, get: function (obj) { return obj.observaciones; }, set: function (obj, value) { obj.observaciones = value; } }, metadata: _metadata }, _observaciones_initializers, _observaciones_extraInitializers);
        __esDecorate(null, null, _usuarioId_decorators, { kind: "field", name: "usuarioId", static: false, private: false, access: { has: function (obj) { return "usuarioId" in obj; }, get: function (obj) { return obj.usuarioId; }, set: function (obj, value) { obj.usuarioId = value; } }, metadata: _metadata }, _usuarioId_initializers, _usuarioId_extraInitializers);
        __esDecorate(null, null, _usuario_decorators, { kind: "field", name: "usuario", static: false, private: false, access: { has: function (obj) { return "usuario" in obj; }, get: function (obj) { return obj.usuario; }, set: function (obj, value) { obj.usuario = value; } }, metadata: _metadata }, _usuario_initializers, _usuario_extraInitializers);
        __esDecorate(null, null, _bodegaOrigenId_decorators, { kind: "field", name: "bodegaOrigenId", static: false, private: false, access: { has: function (obj) { return "bodegaOrigenId" in obj; }, get: function (obj) { return obj.bodegaOrigenId; }, set: function (obj, value) { obj.bodegaOrigenId = value; } }, metadata: _metadata }, _bodegaOrigenId_initializers, _bodegaOrigenId_extraInitializers);
        __esDecorate(null, null, _bodegaOrigen_decorators, { kind: "field", name: "bodegaOrigen", static: false, private: false, access: { has: function (obj) { return "bodegaOrigen" in obj; }, get: function (obj) { return obj.bodegaOrigen; }, set: function (obj, value) { obj.bodegaOrigen = value; } }, metadata: _metadata }, _bodegaOrigen_initializers, _bodegaOrigen_extraInitializers);
        __esDecorate(null, null, _bodegaDestinoId_decorators, { kind: "field", name: "bodegaDestinoId", static: false, private: false, access: { has: function (obj) { return "bodegaDestinoId" in obj; }, get: function (obj) { return obj.bodegaDestinoId; }, set: function (obj, value) { obj.bodegaDestinoId = value; } }, metadata: _metadata }, _bodegaDestinoId_initializers, _bodegaDestinoId_extraInitializers);
        __esDecorate(null, null, _bodegaDestino_decorators, { kind: "field", name: "bodegaDestino", static: false, private: false, access: { has: function (obj) { return "bodegaDestino" in obj; }, get: function (obj) { return obj.bodegaDestino; }, set: function (obj, value) { obj.bodegaDestino = value; } }, metadata: _metadata }, _bodegaDestino_initializers, _bodegaDestino_extraInitializers);
        __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: function (obj) { return "estado" in obj; }, get: function (obj) { return obj.estado; }, set: function (obj, value) { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
        __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: function (obj) { return "detalles" in obj; }, get: function (obj) { return obj.detalles; }, set: function (obj, value) { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MovimientoInventario = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MovimientoInventario = _classThis;
}();
exports.MovimientoInventario = MovimientoInventario;
