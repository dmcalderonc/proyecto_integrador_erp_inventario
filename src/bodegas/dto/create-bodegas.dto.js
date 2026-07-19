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
exports.CreateBodegaDto = void 0;
var class_validator_1 = require("class-validator");
var CreateBodegaDto = function () {
    var _a;
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _nombre_extraInitializers = [];
    var _ubicacion_decorators;
    var _ubicacion_initializers = [];
    var _ubicacion_extraInitializers = [];
    var _isPrincipal_decorators;
    var _isPrincipal_initializers = [];
    var _isPrincipal_extraInitializers = [];
    var _proyectoId_decorators;
    var _proyectoId_initializers = [];
    var _proyectoId_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateBodegaDto() {
                this.nombre = __runInitializers(this, _nombre_initializers, void 0);
                this.ubicacion = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _ubicacion_initializers, void 0));
                this.isPrincipal = (__runInitializers(this, _ubicacion_extraInitializers), __runInitializers(this, _isPrincipal_initializers, void 0));
                this.proyectoId = (__runInitializers(this, _isPrincipal_extraInitializers), __runInitializers(this, _proyectoId_initializers, void 0));
                __runInitializers(this, _proyectoId_extraInitializers);
            }
            return CreateBodegaDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nombre_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _ubicacion_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _isPrincipal_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            _proyectoId_decorators = [(0, class_validator_1.IsUUID)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _ubicacion_decorators, { kind: "field", name: "ubicacion", static: false, private: false, access: { has: function (obj) { return "ubicacion" in obj; }, get: function (obj) { return obj.ubicacion; }, set: function (obj, value) { obj.ubicacion = value; } }, metadata: _metadata }, _ubicacion_initializers, _ubicacion_extraInitializers);
            __esDecorate(null, null, _isPrincipal_decorators, { kind: "field", name: "isPrincipal", static: false, private: false, access: { has: function (obj) { return "isPrincipal" in obj; }, get: function (obj) { return obj.isPrincipal; }, set: function (obj, value) { obj.isPrincipal = value; } }, metadata: _metadata }, _isPrincipal_initializers, _isPrincipal_extraInitializers);
            __esDecorate(null, null, _proyectoId_decorators, { kind: "field", name: "proyectoId", static: false, private: false, access: { has: function (obj) { return "proyectoId" in obj; }, get: function (obj) { return obj.proyectoId; }, set: function (obj, value) { obj.proyectoId = value; } }, metadata: _metadata }, _proyectoId_initializers, _proyectoId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateBodegaDto = CreateBodegaDto;
