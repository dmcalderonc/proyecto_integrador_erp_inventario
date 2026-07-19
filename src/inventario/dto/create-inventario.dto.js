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
exports.CreateInventarioDto = void 0;
var class_validator_1 = require("class-validator");
var CreateInventarioDto = function () {
    var _a;
    var _material_id_decorators;
    var _material_id_initializers = [];
    var _material_id_extraInitializers = [];
    var _bodega_id_decorators;
    var _bodega_id_initializers = [];
    var _bodega_id_extraInitializers = [];
    var _cantidad_disponible_decorators;
    var _cantidad_disponible_initializers = [];
    var _cantidad_disponible_extraInitializers = [];
    var _cantidad_reservada_decorators;
    var _cantidad_reservada_initializers = [];
    var _cantidad_reservada_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateInventarioDto() {
                this.material_id = __runInitializers(this, _material_id_initializers, void 0);
                this.bodega_id = (__runInitializers(this, _material_id_extraInitializers), __runInitializers(this, _bodega_id_initializers, void 0));
                this.cantidad_disponible = (__runInitializers(this, _bodega_id_extraInitializers), __runInitializers(this, _cantidad_disponible_initializers, void 0));
                this.cantidad_reservada = (__runInitializers(this, _cantidad_disponible_extraInitializers), __runInitializers(this, _cantidad_reservada_initializers, void 0));
                __runInitializers(this, _cantidad_reservada_extraInitializers);
            }
            return CreateInventarioDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _material_id_decorators = [(0, class_validator_1.IsInt)()];
            _bodega_id_decorators = [(0, class_validator_1.IsInt)()];
            _cantidad_disponible_decorators = [(0, class_validator_1.IsNumber)()];
            _cantidad_reservada_decorators = [(0, class_validator_1.IsNumber)()];
            __esDecorate(null, null, _material_id_decorators, { kind: "field", name: "material_id", static: false, private: false, access: { has: function (obj) { return "material_id" in obj; }, get: function (obj) { return obj.material_id; }, set: function (obj, value) { obj.material_id = value; } }, metadata: _metadata }, _material_id_initializers, _material_id_extraInitializers);
            __esDecorate(null, null, _bodega_id_decorators, { kind: "field", name: "bodega_id", static: false, private: false, access: { has: function (obj) { return "bodega_id" in obj; }, get: function (obj) { return obj.bodega_id; }, set: function (obj, value) { obj.bodega_id = value; } }, metadata: _metadata }, _bodega_id_initializers, _bodega_id_extraInitializers);
            __esDecorate(null, null, _cantidad_disponible_decorators, { kind: "field", name: "cantidad_disponible", static: false, private: false, access: { has: function (obj) { return "cantidad_disponible" in obj; }, get: function (obj) { return obj.cantidad_disponible; }, set: function (obj, value) { obj.cantidad_disponible = value; } }, metadata: _metadata }, _cantidad_disponible_initializers, _cantidad_disponible_extraInitializers);
            __esDecorate(null, null, _cantidad_reservada_decorators, { kind: "field", name: "cantidad_reservada", static: false, private: false, access: { has: function (obj) { return "cantidad_reservada" in obj; }, get: function (obj) { return obj.cantidad_reservada; }, set: function (obj, value) { obj.cantidad_reservada = value; } }, metadata: _metadata }, _cantidad_reservada_initializers, _cantidad_reservada_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateInventarioDto = CreateInventarioDto;
