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
exports.CreateMovimientoDto = exports.DetalleMovimientoDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var movimiento_inventario_entity_1 = require("../entities/movimiento-inventario.entity");
var DetalleMovimientoDto = function () {
    var _a;
    var _materialId_decorators;
    var _materialId_initializers = [];
    var _materialId_extraInitializers = [];
    var _cantidad_decorators;
    var _cantidad_initializers = [];
    var _cantidad_extraInitializers = [];
    return _a = /** @class */ (function () {
            function DetalleMovimientoDto() {
                this.materialId = __runInitializers(this, _materialId_initializers, void 0);
                this.cantidad = (__runInitializers(this, _materialId_extraInitializers), __runInitializers(this, _cantidad_initializers, void 0));
                __runInitializers(this, _cantidad_extraInitializers);
            }
            return DetalleMovimientoDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _materialId_decorators = [(0, class_validator_1.IsUUID)()];
            _cantidad_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)()];
            __esDecorate(null, null, _materialId_decorators, { kind: "field", name: "materialId", static: false, private: false, access: { has: function (obj) { return "materialId" in obj; }, get: function (obj) { return obj.materialId; }, set: function (obj, value) { obj.materialId = value; } }, metadata: _metadata }, _materialId_initializers, _materialId_extraInitializers);
            __esDecorate(null, null, _cantidad_decorators, { kind: "field", name: "cantidad", static: false, private: false, access: { has: function (obj) { return "cantidad" in obj; }, get: function (obj) { return obj.cantidad; }, set: function (obj, value) { obj.cantidad = value; } }, metadata: _metadata }, _cantidad_initializers, _cantidad_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.DetalleMovimientoDto = DetalleMovimientoDto;
var CreateMovimientoDto = function () {
    var _a;
    var _tipo_decorators;
    var _tipo_initializers = [];
    var _tipo_extraInitializers = [];
    var _observaciones_decorators;
    var _observaciones_initializers = [];
    var _observaciones_extraInitializers = [];
    var _bodegaOrigenId_decorators;
    var _bodegaOrigenId_initializers = [];
    var _bodegaOrigenId_extraInitializers = [];
    var _bodegaDestinoId_decorators;
    var _bodegaDestinoId_initializers = [];
    var _bodegaDestinoId_extraInitializers = [];
    var _detalles_decorators;
    var _detalles_initializers = [];
    var _detalles_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateMovimientoDto() {
                this.tipo = __runInitializers(this, _tipo_initializers, void 0);
                this.observaciones = (__runInitializers(this, _tipo_extraInitializers), __runInitializers(this, _observaciones_initializers, void 0));
                this.bodegaOrigenId = (__runInitializers(this, _observaciones_extraInitializers), __runInitializers(this, _bodegaOrigenId_initializers, void 0));
                this.bodegaDestinoId = (__runInitializers(this, _bodegaOrigenId_extraInitializers), __runInitializers(this, _bodegaDestinoId_initializers, void 0));
                this.detalles = (__runInitializers(this, _bodegaDestinoId_extraInitializers), __runInitializers(this, _detalles_initializers, void 0));
                __runInitializers(this, _detalles_extraInitializers);
            }
            return CreateMovimientoDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _tipo_decorators = [(0, class_validator_1.IsEnum)(movimiento_inventario_entity_1.TipoMovimiento)];
            _observaciones_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _bodegaOrigenId_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)()];
            _bodegaDestinoId_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)()];
            _detalles_decorators = [(0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return DetalleMovimientoDto; })];
            __esDecorate(null, null, _tipo_decorators, { kind: "field", name: "tipo", static: false, private: false, access: { has: function (obj) { return "tipo" in obj; }, get: function (obj) { return obj.tipo; }, set: function (obj, value) { obj.tipo = value; } }, metadata: _metadata }, _tipo_initializers, _tipo_extraInitializers);
            __esDecorate(null, null, _observaciones_decorators, { kind: "field", name: "observaciones", static: false, private: false, access: { has: function (obj) { return "observaciones" in obj; }, get: function (obj) { return obj.observaciones; }, set: function (obj, value) { obj.observaciones = value; } }, metadata: _metadata }, _observaciones_initializers, _observaciones_extraInitializers);
            __esDecorate(null, null, _bodegaOrigenId_decorators, { kind: "field", name: "bodegaOrigenId", static: false, private: false, access: { has: function (obj) { return "bodegaOrigenId" in obj; }, get: function (obj) { return obj.bodegaOrigenId; }, set: function (obj, value) { obj.bodegaOrigenId = value; } }, metadata: _metadata }, _bodegaOrigenId_initializers, _bodegaOrigenId_extraInitializers);
            __esDecorate(null, null, _bodegaDestinoId_decorators, { kind: "field", name: "bodegaDestinoId", static: false, private: false, access: { has: function (obj) { return "bodegaDestinoId" in obj; }, get: function (obj) { return obj.bodegaDestinoId; }, set: function (obj, value) { obj.bodegaDestinoId = value; } }, metadata: _metadata }, _bodegaDestinoId_initializers, _bodegaDestinoId_extraInitializers);
            __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: function (obj) { return "detalles" in obj; }, get: function (obj) { return obj.detalles; }, set: function (obj, value) { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateMovimientoDto = CreateMovimientoDto;
