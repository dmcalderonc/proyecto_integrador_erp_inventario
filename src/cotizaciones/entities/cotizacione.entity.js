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
exports.Cotizacion = exports.EstadoCotizacion = void 0;
var typeorm_1 = require("typeorm");
var solicitud_compra_entity_1 = require("../../solicitudes-compra/entities/solicitud-compra.entity");
var proveedore_entity_1 = require("../../proveedores/proveedore.entity");
var EstadoCotizacion;
(function (EstadoCotizacion) {
    EstadoCotizacion["ELEGIDA"] = "ELEGIDA";
    EstadoCotizacion["DESCARTADA"] = "DESCARTADA";
    EstadoCotizacion["EN_EVALUACION"] = "EN_EVALUACION";
})(EstadoCotizacion || (exports.EstadoCotizacion = EstadoCotizacion = {}));
var Cotizacion = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('cotizaciones')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _solicitudId_decorators;
    var _solicitudId_initializers = [];
    var _solicitudId_extraInitializers = [];
    var _solicitud_decorators;
    var _solicitud_initializers = [];
    var _solicitud_extraInitializers = [];
    var _proveedorId_decorators;
    var _proveedorId_initializers = [];
    var _proveedorId_extraInitializers = [];
    var _proveedor_decorators;
    var _proveedor_initializers = [];
    var _proveedor_extraInitializers = [];
    var _precioOfertadoTotal_decorators;
    var _precioOfertadoTotal_initializers = [];
    var _precioOfertadoTotal_extraInitializers = [];
    var _archivoRespaldoUrl_decorators;
    var _archivoRespaldoUrl_initializers = [];
    var _archivoRespaldoUrl_extraInitializers = [];
    var _estado_decorators;
    var _estado_initializers = [];
    var _estado_extraInitializers = [];
    var Cotizacion = _classThis = /** @class */ (function () {
        function Cotizacion_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.solicitudId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _solicitudId_initializers, void 0));
            this.solicitud = (__runInitializers(this, _solicitudId_extraInitializers), __runInitializers(this, _solicitud_initializers, void 0));
            this.proveedorId = (__runInitializers(this, _solicitud_extraInitializers), __runInitializers(this, _proveedorId_initializers, void 0));
            this.proveedor = (__runInitializers(this, _proveedorId_extraInitializers), __runInitializers(this, _proveedor_initializers, void 0));
            this.precioOfertadoTotal = (__runInitializers(this, _proveedor_extraInitializers), __runInitializers(this, _precioOfertadoTotal_initializers, void 0));
            this.archivoRespaldoUrl = (__runInitializers(this, _precioOfertadoTotal_extraInitializers), __runInitializers(this, _archivoRespaldoUrl_initializers, void 0));
            this.estado = (__runInitializers(this, _archivoRespaldoUrl_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
            __runInitializers(this, _estado_extraInitializers);
        }
        return Cotizacion_1;
    }());
    __setFunctionName(_classThis, "Cotizacion");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('increment')];
        _solicitudId_decorators = [(0, typeorm_1.Column)({ name: 'solicitud_id', type: 'integer' })];
        _solicitud_decorators = [(0, typeorm_1.ManyToOne)(function () { return solicitud_compra_entity_1.SolicitudCompra; }, function (solicitud) { return solicitud.cotizaciones; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)({ name: 'solicitud_id' })];
        _proveedorId_decorators = [(0, typeorm_1.Column)({ name: 'proveedor_id', type: 'integer' })];
        _proveedor_decorators = [(0, typeorm_1.ManyToOne)(function () { return proveedore_entity_1.Proveedor; }), (0, typeorm_1.JoinColumn)({ name: 'proveedor_id' })];
        _precioOfertadoTotal_decorators = [(0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 })];
        _archivoRespaldoUrl_decorators = [(0, typeorm_1.Column)({ type: 'varchar', nullable: true })];
        _estado_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: EstadoCotizacion, default: EstadoCotizacion.EN_EVALUACION })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _solicitudId_decorators, { kind: "field", name: "solicitudId", static: false, private: false, access: { has: function (obj) { return "solicitudId" in obj; }, get: function (obj) { return obj.solicitudId; }, set: function (obj, value) { obj.solicitudId = value; } }, metadata: _metadata }, _solicitudId_initializers, _solicitudId_extraInitializers);
        __esDecorate(null, null, _solicitud_decorators, { kind: "field", name: "solicitud", static: false, private: false, access: { has: function (obj) { return "solicitud" in obj; }, get: function (obj) { return obj.solicitud; }, set: function (obj, value) { obj.solicitud = value; } }, metadata: _metadata }, _solicitud_initializers, _solicitud_extraInitializers);
        __esDecorate(null, null, _proveedorId_decorators, { kind: "field", name: "proveedorId", static: false, private: false, access: { has: function (obj) { return "proveedorId" in obj; }, get: function (obj) { return obj.proveedorId; }, set: function (obj, value) { obj.proveedorId = value; } }, metadata: _metadata }, _proveedorId_initializers, _proveedorId_extraInitializers);
        __esDecorate(null, null, _proveedor_decorators, { kind: "field", name: "proveedor", static: false, private: false, access: { has: function (obj) { return "proveedor" in obj; }, get: function (obj) { return obj.proveedor; }, set: function (obj, value) { obj.proveedor = value; } }, metadata: _metadata }, _proveedor_initializers, _proveedor_extraInitializers);
        __esDecorate(null, null, _precioOfertadoTotal_decorators, { kind: "field", name: "precioOfertadoTotal", static: false, private: false, access: { has: function (obj) { return "precioOfertadoTotal" in obj; }, get: function (obj) { return obj.precioOfertadoTotal; }, set: function (obj, value) { obj.precioOfertadoTotal = value; } }, metadata: _metadata }, _precioOfertadoTotal_initializers, _precioOfertadoTotal_extraInitializers);
        __esDecorate(null, null, _archivoRespaldoUrl_decorators, { kind: "field", name: "archivoRespaldoUrl", static: false, private: false, access: { has: function (obj) { return "archivoRespaldoUrl" in obj; }, get: function (obj) { return obj.archivoRespaldoUrl; }, set: function (obj, value) { obj.archivoRespaldoUrl = value; } }, metadata: _metadata }, _archivoRespaldoUrl_initializers, _archivoRespaldoUrl_extraInitializers);
        __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: function (obj) { return "estado" in obj; }, get: function (obj) { return obj.estado; }, set: function (obj, value) { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Cotizacion = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Cotizacion = _classThis;
}();
exports.Cotizacion = Cotizacion;
