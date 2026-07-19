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
exports.DetalleOrdenCompra = void 0;
var typeorm_1 = require("typeorm");
var orden_compra_entity_1 = require("./orden-compra.entity");
var DetalleOrdenCompra = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('detalle_orden_compra')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _cantidad_decorators;
    var _cantidad_initializers = [];
    var _cantidad_extraInitializers = [];
    var _precioUnitario_decorators;
    var _precioUnitario_initializers = [];
    var _precioUnitario_extraInitializers = [];
    var _ordenCompra_decorators;
    var _ordenCompra_initializers = [];
    var _ordenCompra_extraInitializers = [];
    var DetalleOrdenCompra = _classThis = /** @class */ (function () {
        function DetalleOrdenCompra_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.cantidad = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _cantidad_initializers, void 0));
            this.precioUnitario = (__runInitializers(this, _cantidad_extraInitializers), __runInitializers(this, _precioUnitario_initializers, void 0));
            this.ordenCompra = (__runInitializers(this, _precioUnitario_extraInitializers), __runInitializers(this, _ordenCompra_initializers, void 0));
            __runInitializers(this, _ordenCompra_extraInitializers);
        }
        return DetalleOrdenCompra_1;
    }());
    __setFunctionName(_classThis, "DetalleOrdenCompra");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _cantidad_decorators = [(0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 })];
        _precioUnitario_decorators = [(0, typeorm_1.Column)('decimal', { precision: 12, scale: 2 })];
        _ordenCompra_decorators = [(0, typeorm_1.ManyToOne)(function () { return orden_compra_entity_1.OrdenCompra; }, function (orden) { return orden.detalles; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _cantidad_decorators, { kind: "field", name: "cantidad", static: false, private: false, access: { has: function (obj) { return "cantidad" in obj; }, get: function (obj) { return obj.cantidad; }, set: function (obj, value) { obj.cantidad = value; } }, metadata: _metadata }, _cantidad_initializers, _cantidad_extraInitializers);
        __esDecorate(null, null, _precioUnitario_decorators, { kind: "field", name: "precioUnitario", static: false, private: false, access: { has: function (obj) { return "precioUnitario" in obj; }, get: function (obj) { return obj.precioUnitario; }, set: function (obj, value) { obj.precioUnitario = value; } }, metadata: _metadata }, _precioUnitario_initializers, _precioUnitario_extraInitializers);
        __esDecorate(null, null, _ordenCompra_decorators, { kind: "field", name: "ordenCompra", static: false, private: false, access: { has: function (obj) { return "ordenCompra" in obj; }, get: function (obj) { return obj.ordenCompra; }, set: function (obj, value) { obj.ordenCompra = value; } }, metadata: _metadata }, _ordenCompra_initializers, _ordenCompra_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DetalleOrdenCompra = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DetalleOrdenCompra = _classThis;
}();
exports.DetalleOrdenCompra = DetalleOrdenCompra;
