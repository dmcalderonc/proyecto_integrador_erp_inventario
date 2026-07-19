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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompraDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var DetalleDto = function () {
    var _a;
    var _materialId_decorators;
    var _materialId_initializers = [];
    var _materialId_extraInitializers = [];
    var _cantidad_decorators;
    var _cantidad_initializers = [];
    var _cantidad_extraInitializers = [];
    var _precioUnitario_decorators;
    var _precioUnitario_initializers = [];
    var _precioUnitario_extraInitializers = [];
    return _a = /** @class */ (function () {
            function DetalleDto() {
                this.materialId = __runInitializers(this, _materialId_initializers, void 0);
                this.cantidad = (__runInitializers(this, _materialId_extraInitializers), __runInitializers(this, _cantidad_initializers, void 0));
                this.precioUnitario = (__runInitializers(this, _cantidad_extraInitializers), __runInitializers(this, _precioUnitario_initializers, void 0));
                __runInitializers(this, _precioUnitario_extraInitializers);
            }
            return DetalleDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _materialId_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)()];
            _cantidad_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)()];
            _precioUnitario_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)()];
            __esDecorate(null, null, _materialId_decorators, { kind: "field", name: "materialId", static: false, private: false, access: { has: function (obj) { return "materialId" in obj; }, get: function (obj) { return obj.materialId; }, set: function (obj, value) { obj.materialId = value; } }, metadata: _metadata }, _materialId_initializers, _materialId_extraInitializers);
            __esDecorate(null, null, _cantidad_decorators, { kind: "field", name: "cantidad", static: false, private: false, access: { has: function (obj) { return "cantidad" in obj; }, get: function (obj) { return obj.cantidad; }, set: function (obj, value) { obj.cantidad = value; } }, metadata: _metadata }, _cantidad_initializers, _cantidad_extraInitializers);
            __esDecorate(null, null, _precioUnitario_decorators, { kind: "field", name: "precioUnitario", static: false, private: false, access: { has: function (obj) { return "precioUnitario" in obj; }, get: function (obj) { return obj.precioUnitario; }, set: function (obj, value) { obj.precioUnitario = value; } }, metadata: _metadata }, _precioUnitario_initializers, _precioUnitario_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var CreateCompraDto = function () {
    var _a;
    var _proveedorId_decorators;
    var _proveedorId_initializers = [];
    var _proveedorId_extraInitializers = [];
    var _fechaEmision_decorators;
    var _fechaEmision_initializers = [];
    var _fechaEmision_extraInitializers = [];
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
    return _a = /** @class */ (function () {
            function CreateCompraDto() {
                this.proveedorId = __runInitializers(this, _proveedorId_initializers, void 0);
                this.fechaEmision = (__runInitializers(this, _proveedorId_extraInitializers), __runInitializers(this, _fechaEmision_initializers, void 0));
                this.subtotal = (__runInitializers(this, _fechaEmision_extraInitializers), __runInitializers(this, _subtotal_initializers, void 0));
                this.impuestos = (__runInitializers(this, _subtotal_extraInitializers), __runInitializers(this, _impuestos_initializers, void 0));
                this.total = (__runInitializers(this, _impuestos_extraInitializers), __runInitializers(this, _total_initializers, void 0));
                this.detalles = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _detalles_initializers, void 0));
                __runInitializers(this, _detalles_extraInitializers);
            }
            return CreateCompraDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _proveedorId_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsNumber)()];
            _fechaEmision_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            _subtotal_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _impuestos_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _total_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _detalles_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return DetalleDto; })];
            __esDecorate(null, null, _proveedorId_decorators, { kind: "field", name: "proveedorId", static: false, private: false, access: { has: function (obj) { return "proveedorId" in obj; }, get: function (obj) { return obj.proveedorId; }, set: function (obj, value) { obj.proveedorId = value; } }, metadata: _metadata }, _proveedorId_initializers, _proveedorId_extraInitializers);
            __esDecorate(null, null, _fechaEmision_decorators, { kind: "field", name: "fechaEmision", static: false, private: false, access: { has: function (obj) { return "fechaEmision" in obj; }, get: function (obj) { return obj.fechaEmision; }, set: function (obj, value) { obj.fechaEmision = value; } }, metadata: _metadata }, _fechaEmision_initializers, _fechaEmision_extraInitializers);
            __esDecorate(null, null, _subtotal_decorators, { kind: "field", name: "subtotal", static: false, private: false, access: { has: function (obj) { return "subtotal" in obj; }, get: function (obj) { return obj.subtotal; }, set: function (obj, value) { obj.subtotal = value; } }, metadata: _metadata }, _subtotal_initializers, _subtotal_extraInitializers);
            __esDecorate(null, null, _impuestos_decorators, { kind: "field", name: "impuestos", static: false, private: false, access: { has: function (obj) { return "impuestos" in obj; }, get: function (obj) { return obj.impuestos; }, set: function (obj, value) { obj.impuestos = value; } }, metadata: _metadata }, _impuestos_initializers, _impuestos_extraInitializers);
            __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
            __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: function (obj) { return "detalles" in obj; }, get: function (obj) { return obj.detalles; }, set: function (obj, value) { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateCompraDto = CreateCompraDto;
