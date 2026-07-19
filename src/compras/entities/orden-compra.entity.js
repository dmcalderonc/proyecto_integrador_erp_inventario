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
exports.OrdenCompra = void 0;
var typeorm_1 = require("typeorm");
var detalle_orden_compra_entity_1 = require("./detalle-orden-compra.entity");
var OrdenCompra = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('ordenes_compra')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _codigo_decorators;
    var _codigo_initializers = [];
    var _codigo_extraInitializers = [];
    var _fechaEmision_decorators;
    var _fechaEmision_initializers = [];
    var _fechaEmision_extraInitializers = [];
    var _estado_decorators;
    var _estado_initializers = [];
    var _estado_extraInitializers = [];
    var _subtotal_decorators;
    var _subtotal_initializers = [];
    var _subtotal_extraInitializers = [];
    var _impuestos_decorators;
    var _impuestos_initializers = [];
    var _impuestos_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var _detalles_decorators;
    var _detalles_initializers = [];
    var _detalles_extraInitializers = [];
    var OrdenCompra = _classThis = /** @class */ (function () {
        function OrdenCompra_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.codigo = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _codigo_initializers, void 0));
            this.fechaEmision = (__runInitializers(this, _codigo_extraInitializers), __runInitializers(this, _fechaEmision_initializers, void 0));
            this.estado = (__runInitializers(this, _fechaEmision_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
            this.subtotal = (__runInitializers(this, _estado_extraInitializers), __runInitializers(this, _subtotal_initializers, void 0));
            this.impuestos = (__runInitializers(this, _subtotal_extraInitializers), __runInitializers(this, _impuestos_initializers, void 0));
            this.total = (__runInitializers(this, _impuestos_extraInitializers), __runInitializers(this, _total_initializers, void 0));
            this.detalles = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _detalles_initializers, void 0));
            __runInitializers(this, _detalles_extraInitializers);
        }
        return OrdenCompra_1;
    }());
    __setFunctionName(_classThis, "OrdenCompra");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _codigo_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 20 })];
        _fechaEmision_decorators = [(0, typeorm_1.Column)({ type: 'date' })];
        _estado_decorators = [(0, typeorm_1.Column)({
                type: 'enum',
                enum: ['BORRADOR', 'EMITIDA', 'RECIBIDA', 'CANCELADA', 'PENDIENTE'],
                default: 'BORRADOR'
            })];
        _subtotal_decorators = [(0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 })];
        _impuestos_decorators = [(0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 })];
        _total_decorators = [(0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 })];
        _detalles_decorators = [(0, typeorm_1.OneToMany)(function () { return detalle_orden_compra_entity_1.DetalleOrdenCompra; }, function (detalle) { return detalle.ordenCompra; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _codigo_decorators, { kind: "field", name: "codigo", static: false, private: false, access: { has: function (obj) { return "codigo" in obj; }, get: function (obj) { return obj.codigo; }, set: function (obj, value) { obj.codigo = value; } }, metadata: _metadata }, _codigo_initializers, _codigo_extraInitializers);
        __esDecorate(null, null, _fechaEmision_decorators, { kind: "field", name: "fechaEmision", static: false, private: false, access: { has: function (obj) { return "fechaEmision" in obj; }, get: function (obj) { return obj.fechaEmision; }, set: function (obj, value) { obj.fechaEmision = value; } }, metadata: _metadata }, _fechaEmision_initializers, _fechaEmision_extraInitializers);
        __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: function (obj) { return "estado" in obj; }, get: function (obj) { return obj.estado; }, set: function (obj, value) { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
        __esDecorate(null, null, _subtotal_decorators, { kind: "field", name: "subtotal", static: false, private: false, access: { has: function (obj) { return "subtotal" in obj; }, get: function (obj) { return obj.subtotal; }, set: function (obj, value) { obj.subtotal = value; } }, metadata: _metadata }, _subtotal_initializers, _subtotal_extraInitializers);
        __esDecorate(null, null, _impuestos_decorators, { kind: "field", name: "impuestos", static: false, private: false, access: { has: function (obj) { return "impuestos" in obj; }, get: function (obj) { return obj.impuestos; }, set: function (obj, value) { obj.impuestos = value; } }, metadata: _metadata }, _impuestos_initializers, _impuestos_extraInitializers);
        __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
        __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: function (obj) { return "detalles" in obj; }, get: function (obj) { return obj.detalles; }, set: function (obj, value) { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        OrdenCompra = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return OrdenCompra = _classThis;
}();
exports.OrdenCompra = OrdenCompra;
