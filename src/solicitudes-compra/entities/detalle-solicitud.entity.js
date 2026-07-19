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
exports.DetalleSolicitud = void 0;
var typeorm_1 = require("typeorm");
var solicitud_compra_entity_1 = require("./solicitud-compra.entity");
var material_entity_1 = require("../../materiales/material.entity");
var DetalleSolicitud = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('detalles_solicitud')];
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
    var _materialId_decorators;
    var _materialId_initializers = [];
    var _materialId_extraInitializers = [];
    var _material_decorators;
    var _material_initializers = [];
    var _material_extraInitializers = [];
    var _cantidadRequerida_decorators;
    var _cantidadRequerida_initializers = [];
    var _cantidadRequerida_extraInitializers = [];
    var DetalleSolicitud = _classThis = /** @class */ (function () {
        function DetalleSolicitud_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.solicitudId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _solicitudId_initializers, void 0));
            this.solicitud = (__runInitializers(this, _solicitudId_extraInitializers), __runInitializers(this, _solicitud_initializers, void 0));
            this.materialId = (__runInitializers(this, _solicitud_extraInitializers), __runInitializers(this, _materialId_initializers, void 0));
            this.material = (__runInitializers(this, _materialId_extraInitializers), __runInitializers(this, _material_initializers, void 0));
            this.cantidadRequerida = (__runInitializers(this, _material_extraInitializers), __runInitializers(this, _cantidadRequerida_initializers, void 0));
            __runInitializers(this, _cantidadRequerida_extraInitializers);
        }
        return DetalleSolicitud_1;
    }());
    __setFunctionName(_classThis, "DetalleSolicitud");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('increment')];
        _solicitudId_decorators = [(0, typeorm_1.Column)({ name: 'solicitud_id', type: 'integer' })];
        _solicitud_decorators = [(0, typeorm_1.ManyToOne)(function () { return solicitud_compra_entity_1.SolicitudCompra; }, function (solicitud) { return solicitud.detalles; }, { onDelete: 'CASCADE' }), (0, typeorm_1.JoinColumn)({ name: 'solicitud_id' })];
        _materialId_decorators = [(0, typeorm_1.Column)({ name: 'material_id', type: 'integer' })];
        _material_decorators = [(0, typeorm_1.ManyToOne)(function () { return material_entity_1.Material; }), (0, typeorm_1.JoinColumn)({ name: 'material_id' })];
        _cantidadRequerida_decorators = [(0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _solicitudId_decorators, { kind: "field", name: "solicitudId", static: false, private: false, access: { has: function (obj) { return "solicitudId" in obj; }, get: function (obj) { return obj.solicitudId; }, set: function (obj, value) { obj.solicitudId = value; } }, metadata: _metadata }, _solicitudId_initializers, _solicitudId_extraInitializers);
        __esDecorate(null, null, _solicitud_decorators, { kind: "field", name: "solicitud", static: false, private: false, access: { has: function (obj) { return "solicitud" in obj; }, get: function (obj) { return obj.solicitud; }, set: function (obj, value) { obj.solicitud = value; } }, metadata: _metadata }, _solicitud_initializers, _solicitud_extraInitializers);
        __esDecorate(null, null, _materialId_decorators, { kind: "field", name: "materialId", static: false, private: false, access: { has: function (obj) { return "materialId" in obj; }, get: function (obj) { return obj.materialId; }, set: function (obj, value) { obj.materialId = value; } }, metadata: _metadata }, _materialId_initializers, _materialId_extraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: function (obj) { return "material" in obj; }, get: function (obj) { return obj.material; }, set: function (obj, value) { obj.material = value; } }, metadata: _metadata }, _material_initializers, _material_extraInitializers);
        __esDecorate(null, null, _cantidadRequerida_decorators, { kind: "field", name: "cantidadRequerida", static: false, private: false, access: { has: function (obj) { return "cantidadRequerida" in obj; }, get: function (obj) { return obj.cantidadRequerida; }, set: function (obj, value) { obj.cantidadRequerida = value; } }, metadata: _metadata }, _cantidadRequerida_initializers, _cantidadRequerida_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DetalleSolicitud = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DetalleSolicitud = _classThis;
}();
exports.DetalleSolicitud = DetalleSolicitud;
