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
exports.RequirementDetail = exports.ItemStatus = void 0;
var typeorm_1 = require("typeorm");
var requirement_entity_1 = require("./requirement.entity");
var material_entity_1 = require("../../materiales/material.entity");
var ItemStatus;
(function (ItemStatus) {
    ItemStatus["PENDIENTE"] = "PENDIENTE";
    ItemStatus["DESPACHADO"] = "DESPACHADO";
})(ItemStatus || (exports.ItemStatus = ItemStatus = {}));
var RequirementDetail = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('detalles_requerimiento')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _requerimientoId_decorators;
    var _requerimientoId_initializers = [];
    var _requerimientoId_extraInitializers = [];
    var _requirement_decorators;
    var _requirement_initializers = [];
    var _requirement_extraInitializers = [];
    var _materialId_decorators;
    var _materialId_initializers = [];
    var _materialId_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _cantidadSolicitada_decorators;
    var _cantidadSolicitada_initializers = [];
    var _cantidadSolicitada_extraInitializers = [];
    var _cantidadDespachada_decorators;
    var _cantidadDespachada_initializers = [];
    var _cantidadDespachada_extraInitializers = [];
    var _estadoItem_decorators;
    var _estadoItem_initializers = [];
    var _estadoItem_extraInitializers = [];
    var RequirementDetail = _classThis = /** @class */ (function () {
        function RequirementDetail_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.requerimientoId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _requerimientoId_initializers, void 0));
            this.requirement = (__runInitializers(this, _requerimientoId_extraInitializers), __runInitializers(this, _requirement_initializers, void 0));
            this.materialId = (__runInitializers(this, _requirement_extraInitializers), __runInitializers(this, _materialId_initializers, void 0));
            this.material = (__runInitializers(this, _materialId_extraInitializers), __runInitializers(this, _material_initializers, void 0));
            this.cantidadSolicitada = (__runInitializers(this, _material_extraInitializers), __runInitializers(this, _cantidadSolicitada_initializers, void 0));
            this.cantidadDespachada = (__runInitializers(this, _cantidadSolicitada_extraInitializers), __runInitializers(this, _cantidadDespachada_initializers, void 0));
            this.estadoItem = (__runInitializers(this, _cantidadDespachada_extraInitializers), __runInitializers(this, _estadoItem_initializers, void 0));
            __runInitializers(this, _estadoItem_extraInitializers);
        }
        return RequirementDetail_1;
    }());
    __setFunctionName(_classThis, "RequirementDetail");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('increment')];
        _requerimientoId_decorators = [(0, typeorm_1.Column)({ name: 'requerimiento_id', type: 'integer' })];
        _requirement_decorators = [(0, typeorm_1.ManyToOne)(function () { return requirement_entity_1.Requirement; }, function (req) { return req.detalles; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)({ name: 'requerimiento_id' })];
        _materialId_decorators = [(0, typeorm_1.Column)({ name: 'material_id', type: 'integer' })];
        _material_decorators = [(0, typeorm_1.ManyToOne)(function () { return material_entity_1.Material; }), (0, typeorm_1.JoinColumn)({ name: 'material_id' })];
        _cantidadSolicitada_decorators = [(0, typeorm_1.Column)({ name: 'cantidad_solicitada', type: 'decimal', precision: 10, scale: 2 })];
        _cantidadDespachada_decorators = [(0, typeorm_1.Column)({ name: 'cantidad_despachada', type: 'decimal', precision: 10, scale: 2, default: 0 })];
        _estadoItem_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: ItemStatus, default: ItemStatus.PENDIENTE })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _requerimientoId_decorators, { kind: "field", name: "requerimientoId", static: false, private: false, access: { has: function (obj) { return "requerimientoId" in obj; }, get: function (obj) { return obj.requerimientoId; }, set: function (obj, value) { obj.requerimientoId = value; } }, metadata: _metadata }, _requerimientoId_initializers, _requerimientoId_extraInitializers);
        __esDecorate(null, null, _requirement_decorators, { kind: "field", name: "requirement", static: false, private: false, access: { has: function (obj) { return "requirement" in obj; }, get: function (obj) { return obj.requirement; }, set: function (obj, value) { obj.requirement = value; } }, metadata: _metadata }, _requirement_initializers, _requirement_extraInitializers);
        __esDecorate(null, null, _materialId_decorators, { kind: "field", name: "materialId", static: false, private: false, access: { has: function (obj) { return "materialId" in obj; }, get: function (obj) { return obj.materialId; }, set: function (obj, value) { obj.materialId = value; } }, metadata: _metadata }, _materialId_initializers, _materialId_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _cantidadSolicitada_decorators, { kind: "field", name: "cantidadSolicitada", static: false, private: false, access: { has: function (obj) { return "cantidadSolicitada" in obj; }, get: function (obj) { return obj.cantidadSolicitada; }, set: function (obj, value) { obj.cantidadSolicitada = value; } }, metadata: _metadata }, _cantidadSolicitada_initializers, _cantidadSolicitada_extraInitializers);
        __esDecorate(null, null, _cantidadDespachada_decorators, { kind: "field", name: "cantidadDespachada", static: false, private: false, access: { has: function (obj) { return "cantidadDespachada" in obj; }, get: function (obj) { return obj.cantidadDespachada; }, set: function (obj, value) { obj.cantidadDespachada = value; } }, metadata: _metadata }, _cantidadDespachada_initializers, _cantidadDespachada_extraInitializers);
        __esDecorate(null, null, _estadoItem_decorators, { kind: "field", name: "estadoItem", static: false, private: false, access: { has: function (obj) { return "estadoItem" in obj; }, get: function (obj) { return obj.estadoItem; }, set: function (obj, value) { obj.estadoItem = value; } }, metadata: _metadata }, _estadoItem_initializers, _estadoItem_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RequirementDetail = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RequirementDetail = _classThis;
}();
exports.RequirementDetail = RequirementDetail;
