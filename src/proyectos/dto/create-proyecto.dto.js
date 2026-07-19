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
exports.CreateProyectoDto = void 0;
var class_validator_1 = require("class-validator");
var proyecto_entity_1 = require("../proyecto.entity");
var CreateProyectoDto = function () {
    var _a;
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _nombre_extraInitializers = [];
    var _codigoProyecto_decorators;
    var _codigoProyecto_initializers = [];
    var _codigoProyecto_extraInitializers = [];
    var _fechaInicio_decorators;
    var _fechaInicio_initializers = [];
    var _fechaInicio_extraInitializers = [];
    var _estado_decorators;
    var _estado_initializers = [];
    var _estado_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateProyectoDto() {
                this.nombre = __runInitializers(this, _nombre_initializers, void 0);
                this.codigoProyecto = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _codigoProyecto_initializers, void 0));
                this.fechaInicio = (__runInitializers(this, _codigoProyecto_extraInitializers), __runInitializers(this, _fechaInicio_initializers, void 0));
                this.estado = (__runInitializers(this, _fechaInicio_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
                __runInitializers(this, _estado_extraInitializers);
            }
            return CreateProyectoDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nombre_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _codigoProyecto_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _fechaInicio_decorators = [(0, class_validator_1.IsDateString)(), (0, class_validator_1.IsNotEmpty)()];
            _estado_decorators = [(0, class_validator_1.IsEnum)(proyecto_entity_1.EstadoProyecto), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _codigoProyecto_decorators, { kind: "field", name: "codigoProyecto", static: false, private: false, access: { has: function (obj) { return "codigoProyecto" in obj; }, get: function (obj) { return obj.codigoProyecto; }, set: function (obj, value) { obj.codigoProyecto = value; } }, metadata: _metadata }, _codigoProyecto_initializers, _codigoProyecto_extraInitializers);
            __esDecorate(null, null, _fechaInicio_decorators, { kind: "field", name: "fechaInicio", static: false, private: false, access: { has: function (obj) { return "fechaInicio" in obj; }, get: function (obj) { return obj.fechaInicio; }, set: function (obj, value) { obj.fechaInicio = value; } }, metadata: _metadata }, _fechaInicio_initializers, _fechaInicio_extraInitializers);
            __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: function (obj) { return "estado" in obj; }, get: function (obj) { return obj.estado; }, set: function (obj, value) { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateProyectoDto = CreateProyectoDto;
