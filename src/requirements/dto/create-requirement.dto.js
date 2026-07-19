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
exports.CreateRequirementDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var RequirementDetailDto = function () {
    var _a;
    var _materialId_decorators;
    var _materialId_initializers = [];
    var _materialId_extraInitializers = [];
    var _cantidadSolicitada_decorators;
    var _cantidadSolicitada_initializers = [];
    var _cantidadSolicitada_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RequirementDetailDto() {
                this.materialId = __runInitializers(this, _materialId_initializers, void 0);
                this.cantidadSolicitada = (__runInitializers(this, _materialId_extraInitializers), __runInitializers(this, _cantidadSolicitada_initializers, void 0));
                __runInitializers(this, _cantidadSolicitada_extraInitializers);
            }
            return RequirementDetailDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _materialId_decorators = [(0, class_validator_1.IsNumber)()];
            _cantidadSolicitada_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(0.1)];
            __esDecorate(null, null, _materialId_decorators, { kind: "field", name: "materialId", static: false, private: false, access: { has: function (obj) { return "materialId" in obj; }, get: function (obj) { return obj.materialId; }, set: function (obj, value) { obj.materialId = value; } }, metadata: _metadata }, _materialId_initializers, _materialId_extraInitializers);
            __esDecorate(null, null, _cantidadSolicitada_decorators, { kind: "field", name: "cantidadSolicitada", static: false, private: false, access: { has: function (obj) { return "cantidadSolicitada" in obj; }, get: function (obj) { return obj.cantidadSolicitada; }, set: function (obj, value) { obj.cantidadSolicitada = value; } }, metadata: _metadata }, _cantidadSolicitada_initializers, _cantidadSolicitada_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var CreateRequirementDto = function () {
    var _a;
    var _proyectoId_decorators;
    var _proyectoId_initializers = [];
    var _proyectoId_extraInitializers = [];
    var _detalles_decorators;
    var _detalles_initializers = [];
    var _detalles_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateRequirementDto() {
                this.proyectoId = __runInitializers(this, _proyectoId_initializers, void 0);
                this.detalles = (__runInitializers(this, _proyectoId_extraInitializers), __runInitializers(this, _detalles_initializers, void 0));
                __runInitializers(this, _detalles_extraInitializers);
            }
            return CreateRequirementDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _proyectoId_decorators = [(0, class_validator_1.IsUUID)()];
            _detalles_decorators = [(0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return RequirementDetailDto; })];
            __esDecorate(null, null, _proyectoId_decorators, { kind: "field", name: "proyectoId", static: false, private: false, access: { has: function (obj) { return "proyectoId" in obj; }, get: function (obj) { return obj.proyectoId; }, set: function (obj, value) { obj.proyectoId = value; } }, metadata: _metadata }, _proyectoId_initializers, _proyectoId_extraInitializers);
            __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: function (obj) { return "detalles" in obj; }, get: function (obj) { return obj.detalles; }, set: function (obj, value) { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateRequirementDto = CreateRequirementDto;
