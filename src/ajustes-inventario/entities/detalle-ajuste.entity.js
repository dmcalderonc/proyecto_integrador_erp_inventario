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
exports.DetalleAjuste = void 0;
var typeorm_1 = require("typeorm");
var ajustes_inventario_entity_1 = require("./ajustes-inventario.entity");
var material_entity_1 = require("../../materiales/material.entity");
var DetalleAjuste = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('detalle_ajustes')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _ajusteId_decorators;
    var _ajusteId_initializers = [];
    var _ajusteId_extraInitializers = [];
    var _ajuste_decorators;
    var _ajuste_initializers = [];
    var _ajuste_extraInitializers = [];
    var _materialId_decorators;
    var _materialId_initializers = [];
    var _materialId_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _stockSistema_decorators;
    var _stockSistema_initializers = [];
    var _stockSistema_extraInitializers = [];
    var _stockFisico_decorators;
    var _stockFisico_initializers = [];
    var _stockFisico_extraInitializers = [];
    var _diferencia_decorators;
    var _diferencia_initializers = [];
    var _diferencia_extraInitializers = [];
    var DetalleAjuste = _classThis = /** @class */ (function () {
        function DetalleAjuste_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.ajusteId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _ajusteId_initializers, void 0));
            this.ajuste = (__runInitializers(this, _ajusteId_extraInitializers), __runInitializers(this, _ajuste_initializers, void 0));
            this.materialId = (__runInitializers(this, _ajuste_extraInitializers), __runInitializers(this, _materialId_initializers, void 0));
            this.material = (__runInitializers(this, _materialId_extraInitializers), __runInitializers(this, _material_initializers, void 0));
            this.stockSistema = (__runInitializers(this, _material_extraInitializers), __runInitializers(this, _stockSistema_initializers, void 0));
            this.stockFisico = (__runInitializers(this, _stockSistema_extraInitializers), __runInitializers(this, _stockFisico_initializers, void 0));
            this.diferencia = (__runInitializers(this, _stockFisico_extraInitializers), __runInitializers(this, _diferencia_initializers, void 0));
            __runInitializers(this, _diferencia_extraInitializers);
        }
        return DetalleAjuste_1;
    }());
    __setFunctionName(_classThis, "DetalleAjuste");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _ajusteId_decorators = [(0, typeorm_1.Column)({ name: 'ajuste_id', type: 'uuid' })];
        _ajuste_decorators = [(0, typeorm_1.ManyToOne)(function () { return ajustes_inventario_entity_1.AjusteInventario; }, function (ajuste) { return ajuste.detalles; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)({ name: 'ajuste_id' })];
        _materialId_decorators = [(0, typeorm_1.Column)({ name: 'material_id', type: 'integer' })];
        _material_decorators = [(0, typeorm_1.ManyToOne)(function () { return material_entity_1.Material; }), (0, typeorm_1.JoinColumn)({ name: 'material_id' })];
        _stockSistema_decorators = [(0, typeorm_1.Column)({ name: 'stock_sistema', type: 'int' })];
        _stockFisico_decorators = [(0, typeorm_1.Column)({ name: 'stock_fisico', type: 'int' })];
        _diferencia_decorators = [(0, typeorm_1.Column)({ type: 'int' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _ajusteId_decorators, { kind: "field", name: "ajusteId", static: false, private: false, access: { has: function (obj) { return "ajusteId" in obj; }, get: function (obj) { return obj.ajusteId; }, set: function (obj, value) { obj.ajusteId = value; } }, metadata: _metadata }, _ajusteId_initializers, _ajusteId_extraInitializers);
        __esDecorate(null, null, _ajuste_decorators, { kind: "field", name: "ajuste", static: false, private: false, access: { has: function (obj) { return "ajuste" in obj; }, get: function (obj) { return obj.ajuste; }, set: function (obj, value) { obj.ajuste = value; } }, metadata: _metadata }, _ajuste_initializers, _ajuste_extraInitializers);
        __esDecorate(null, null, _materialId_decorators, { kind: "field", name: "materialId", static: false, private: false, access: { has: function (obj) { return "materialId" in obj; }, get: function (obj) { return obj.materialId; }, set: function (obj, value) { obj.materialId = value; } }, metadata: _metadata }, _materialId_initializers, _materialId_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _stockSistema_decorators, { kind: "field", name: "stockSistema", static: false, private: false, access: { has: function (obj) { return "stockSistema" in obj; }, get: function (obj) { return obj.stockSistema; }, set: function (obj, value) { obj.stockSistema = value; } }, metadata: _metadata }, _stockSistema_initializers, _stockSistema_extraInitializers);
        __esDecorate(null, null, _stockFisico_decorators, { kind: "field", name: "stockFisico", static: false, private: false, access: { has: function (obj) { return "stockFisico" in obj; }, get: function (obj) { return obj.stockFisico; }, set: function (obj, value) { obj.stockFisico = value; } }, metadata: _metadata }, _stockFisico_initializers, _stockFisico_extraInitializers);
        __esDecorate(null, null, _diferencia_decorators, { kind: "field", name: "diferencia", static: false, private: false, access: { has: function (obj) { return "diferencia" in obj; }, get: function (obj) { return obj.diferencia; }, set: function (obj, value) { obj.diferencia = value; } }, metadata: _metadata }, _diferencia_initializers, _diferencia_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DetalleAjuste = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DetalleAjuste = _classThis;
}();
exports.DetalleAjuste = DetalleAjuste;
