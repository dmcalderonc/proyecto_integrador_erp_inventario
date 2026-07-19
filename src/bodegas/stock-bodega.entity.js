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
exports.StockBodega = void 0;
var typeorm_1 = require("typeorm");
var bodegas_entity_1 = require("./bodegas.entity");
var material_entity_1 = require("../materiales/material.entity");
var StockBodega = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('stock_bodega')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _bodega_decorators;
    var _bodega_initializers = [];
    var _bodega_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _cantidadDisponible_decorators;
    var _cantidadDisponible_initializers = [];
    var _cantidadDisponible_extraInitializers = [];
    var _cantidadReservada_decorators;
    var _cantidadReservada_initializers = [];
    var _cantidadReservada_extraInitializers = [];
    var StockBodega = _classThis = /** @class */ (function () {
        function StockBodega_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.bodega = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _bodega_initializers, void 0));
            this.material = (__runInitializers(this, _bodega_extraInitializers), __runInitializers(this, _material_initializers, void 0));
            this.cantidadDisponible = (__runInitializers(this, _material_extraInitializers), __runInitializers(this, _cantidadDisponible_initializers, void 0));
            this.cantidadReservada = (__runInitializers(this, _cantidadDisponible_extraInitializers), __runInitializers(this, _cantidadReservada_initializers, void 0));
            __runInitializers(this, _cantidadReservada_extraInitializers);
        }
        return StockBodega_1;
    }());
    __setFunctionName(_classThis, "StockBodega");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _bodega_decorators = [(0, typeorm_1.ManyToOne)(function () { return bodegas_entity_1.Bodega; })];
        _material_decorators = [(0, typeorm_1.ManyToOne)(function () { return material_entity_1.Material; })];
        _cantidadDisponible_decorators = [(0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 })];
        _cantidadReservada_decorators = [(0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _bodega_decorators, { kind: "field", name: "bodega", static: false, private: false, access: { has: function (obj) { return "bodega" in obj; }, get: function (obj) { return obj.bodega; }, set: function (obj, value) { obj.bodega = value; } }, metadata: _metadata }, _bodega_initializers, _bodega_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _cantidadDisponible_decorators, { kind: "field", name: "cantidadDisponible", static: false, private: false, access: { has: function (obj) { return "cantidadDisponible" in obj; }, get: function (obj) { return obj.cantidadDisponible; }, set: function (obj, value) { obj.cantidadDisponible = value; } }, metadata: _metadata }, _cantidadDisponible_initializers, _cantidadDisponible_extraInitializers);
        __esDecorate(null, null, _cantidadReservada_decorators, { kind: "field", name: "cantidadReservada", static: false, private: false, access: { has: function (obj) { return "cantidadReservada" in obj; }, get: function (obj) { return obj.cantidadReservada; }, set: function (obj, value) { obj.cantidadReservada = value; } }, metadata: _metadata }, _cantidadReservada_initializers, _cantidadReservada_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StockBodega = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StockBodega = _classThis;
}();
exports.StockBodega = StockBodega;
