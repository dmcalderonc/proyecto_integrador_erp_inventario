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
exports.Inventario = void 0;
var typeorm_1 = require("typeorm");
var material_entity_1 = require("../materiales/material.entity");
var bodegas_entity_1 = require("../bodegas/bodegas.entity");
var Inventario = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('stock_bodega')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _materialId_decorators;
    var _materialId_initializers = [];
    var _materialId_extraInitializers = [];
    var _bodega_id_decorators;
    var _bodega_id_initializers = [];
    var _bodega_id_extraInitializers = [];
    var _cantidad_disponible_decorators;
    var _cantidad_disponible_initializers = [];
    var _cantidad_disponible_extraInitializers = [];
    var _cantidad_reservada_decorators;
    var _cantidad_reservada_initializers = [];
    var _cantidad_reservada_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _bodega_decorators;
    var _bodega_initializers = [];
    var _bodega_extraInitializers = [];
    var Inventario = _classThis = /** @class */ (function () {
        function Inventario_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.materialId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _materialId_initializers, void 0));
            this.bodega_id = (__runInitializers(this, _materialId_extraInitializers), __runInitializers(this, _bodega_id_initializers, void 0));
            this.cantidad_disponible = (__runInitializers(this, _bodega_id_extraInitializers), __runInitializers(this, _cantidad_disponible_initializers, void 0));
            this.cantidad_reservada = (__runInitializers(this, _cantidad_disponible_extraInitializers), __runInitializers(this, _cantidad_reservada_initializers, void 0));
            this.material = (__runInitializers(this, _cantidad_reservada_extraInitializers), __runInitializers(this, _material_initializers, void 0));
            this.bodega = (__runInitializers(this, _material_extraInitializers), __runInitializers(this, _bodega_initializers, void 0));
            __runInitializers(this, _bodega_extraInitializers);
        }
        return Inventario_1;
    }());
    __setFunctionName(_classThis, "Inventario");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _materialId_decorators = [(0, typeorm_1.Column)({ name: 'material_id', type: 'integer' })];
        _bodega_id_decorators = [(0, typeorm_1.Column)()];
        _cantidad_disponible_decorators = [(0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _cantidad_reservada_decorators = [(0, typeorm_1.Column)({ type: 'int', default: 0 })];
        _material_decorators = [(0, typeorm_1.ManyToOne)(function () { return material_entity_1.Material; }, function (material) { return material.id; }), (0, typeorm_1.JoinColumn)({ name: 'material_id' })];
        _bodega_decorators = [(0, typeorm_1.ManyToOne)(function () { return bodegas_entity_1.Bodega; }, function (bodega) { return bodega.id; }), (0, typeorm_1.JoinColumn)({ name: 'bodega_id' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _materialId_decorators, { kind: "field", name: "materialId", static: false, private: false, access: { has: function (obj) { return "materialId" in obj; }, get: function (obj) { return obj.materialId; }, set: function (obj, value) { obj.materialId = value; } }, metadata: _metadata }, _materialId_initializers, _materialId_extraInitializers);
        __esDecorate(null, null, _bodega_id_decorators, { kind: "field", name: "bodega_id", static: false, private: false, access: { has: function (obj) { return "bodega_id" in obj; }, get: function (obj) { return obj.bodega_id; }, set: function (obj, value) { obj.bodega_id = value; } }, metadata: _metadata }, _bodega_id_initializers, _bodega_id_extraInitializers);
        __esDecorate(null, null, _cantidad_disponible_decorators, { kind: "field", name: "cantidad_disponible", static: false, private: false, access: { has: function (obj) { return "cantidad_disponible" in obj; }, get: function (obj) { return obj.cantidad_disponible; }, set: function (obj, value) { obj.cantidad_disponible = value; } }, metadata: _metadata }, _cantidad_disponible_initializers, _cantidad_disponible_extraInitializers);
        __esDecorate(null, null, _cantidad_reservada_decorators, { kind: "field", name: "cantidad_reservada", static: false, private: false, access: { has: function (obj) { return "cantidad_reservada" in obj; }, get: function (obj) { return obj.cantidad_reservada; }, set: function (obj, value) { obj.cantidad_reservada = value; } }, metadata: _metadata }, _cantidad_reservada_initializers, _cantidad_reservada_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _bodega_decorators, { kind: "field", name: "bodega", static: false, private: false, access: { has: function (obj) { return "bodega" in obj; }, get: function (obj) { return obj.bodega; }, set: function (obj, value) { obj.bodega = value; } }, metadata: _metadata }, _bodega_initializers, _bodega_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Inventario = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Inventario = _classThis;
}();
exports.Inventario = Inventario;
