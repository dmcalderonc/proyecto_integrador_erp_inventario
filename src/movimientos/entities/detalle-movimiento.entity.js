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
exports.DetalleMovimiento = void 0;
var typeorm_1 = require("typeorm");
var movimiento_inventario_entity_1 = require("./movimiento-inventario.entity");
var material_entity_1 = require("../../materiales/material.entity");
var DetalleMovimiento = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('detalles_movimiento')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _movimientoId_decorators;
    var _movimientoId_initializers = [];
    var _movimientoId_extraInitializers = [];
    var _movimiento_decorators;
    var _movimiento_initializers = [];
    var _movimiento_extraInitializers = [];
    var _materialId_decorators;
    var _materialId_initializers = [];
    var _materialId_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _cantidad_decorators;
    var _cantidad_initializers = [];
    var _cantidad_extraInitializers = [];
    var DetalleMovimiento = _classThis = /** @class */ (function () {
        function DetalleMovimiento_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.movimientoId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _movimientoId_initializers, void 0));
            this.movimiento = (__runInitializers(this, _movimientoId_extraInitializers), __runInitializers(this, _movimiento_initializers, void 0));
            this.materialId = (__runInitializers(this, _movimiento_extraInitializers), __runInitializers(this, _materialId_initializers, void 0));
            this.material = (__runInitializers(this, _materialId_extraInitializers), __runInitializers(this, _material_initializers, void 0));
            this.cantidad = (__runInitializers(this, _material_extraInitializers), __runInitializers(this, _cantidad_initializers, void 0));
            __runInitializers(this, _cantidad_extraInitializers);
        }
        return DetalleMovimiento_1;
    }());
    __setFunctionName(_classThis, "DetalleMovimiento");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('increment')];
        _movimientoId_decorators = [(0, typeorm_1.Column)({ name: 'movimiento_id', type: 'uuid' })];
        _movimiento_decorators = [(0, typeorm_1.ManyToOne)(function () { return movimiento_inventario_entity_1.MovimientoInventario; }, function (mov) { return mov.detalles; }), (0, typeorm_1.JoinColumn)({ name: 'movimiento_id' })];
        _materialId_decorators = [(0, typeorm_1.Column)({ name: 'material_id', type: 'uuid' })];
        _material_decorators = [(0, typeorm_1.ManyToOne)(function () { return material_entity_1.Material; }), (0, typeorm_1.JoinColumn)({ name: 'material_id' })];
        _cantidad_decorators = [(0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _movimientoId_decorators, { kind: "field", name: "movimientoId", static: false, private: false, access: { has: function (obj) { return "movimientoId" in obj; }, get: function (obj) { return obj.movimientoId; }, set: function (obj, value) { obj.movimientoId = value; } }, metadata: _metadata }, _movimientoId_initializers, _movimientoId_extraInitializers);
        __esDecorate(null, null, _movimiento_decorators, { kind: "field", name: "movimiento", static: false, private: false, access: { has: function (obj) { return "movimiento" in obj; }, get: function (obj) { return obj.movimiento; }, set: function (obj, value) { obj.movimiento = value; } }, metadata: _metadata }, _movimiento_initializers, _movimiento_extraInitializers);
        __esDecorate(null, null, _materialId_decorators, { kind: "field", name: "materialId", static: false, private: false, access: { has: function (obj) { return "materialId" in obj; }, get: function (obj) { return obj.materialId; }, set: function (obj, value) { obj.materialId = value; } }, metadata: _metadata }, _materialId_initializers, _materialId_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _cantidad_decorators, { kind: "field", name: "cantidad", static: false, private: false, access: { has: function (obj) { return "cantidad" in obj; }, get: function (obj) { return obj.cantidad; }, set: function (obj, value) { obj.cantidad = value; } }, metadata: _metadata }, _cantidad_initializers, _cantidad_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DetalleMovimiento = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DetalleMovimiento = _classThis;
}();
exports.DetalleMovimiento = DetalleMovimiento;
