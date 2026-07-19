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
exports.Proyecto = exports.EstadoProyecto = void 0;
var typeorm_1 = require("typeorm");
var bodegas_entity_1 = require("../bodegas/bodegas.entity");
var proyecto_usuario_entity_1 = require("../users/proyecto-usuario.entity");
var EstadoProyecto;
(function (EstadoProyecto) {
    EstadoProyecto["ACTIVO"] = "ACTIVO";
    EstadoProyecto["CERRADO"] = "CERRADO";
})(EstadoProyecto || (exports.EstadoProyecto = EstadoProyecto = {}));
var Proyecto = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('proyectos')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
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
    var _bodega_decorators;
    var _bodega_initializers = [];
    var _bodega_extraInitializers = [];
    var _usuarios_decorators;
    var _usuarios_initializers = [];
    var _usuarios_extraInitializers = [];
    var Proyecto = _classThis = /** @class */ (function () {
        function Proyecto_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nombre = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nombre_initializers, void 0));
            this.codigoProyecto = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _codigoProyecto_initializers, void 0));
            this.fechaInicio = (__runInitializers(this, _codigoProyecto_extraInitializers), __runInitializers(this, _fechaInicio_initializers, void 0));
            this.estado = (__runInitializers(this, _fechaInicio_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
            this.bodega = (__runInitializers(this, _estado_extraInitializers), __runInitializers(this, _bodega_initializers, void 0));
            this.usuarios = (__runInitializers(this, _bodega_extraInitializers), __runInitializers(this, _usuarios_initializers, void 0));
            __runInitializers(this, _usuarios_extraInitializers);
        }
        return Proyecto_1;
    }());
    __setFunctionName(_classThis, "Proyecto");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _nombre_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 200 })];
        _codigoProyecto_decorators = [(0, typeorm_1.Column)({ name: 'codigo_proyecto', type: 'varchar', length: 50, unique: true })];
        _fechaInicio_decorators = [(0, typeorm_1.Column)({ name: 'fecha_inicio', type: 'date' })];
        _estado_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: EstadoProyecto, default: EstadoProyecto.ACTIVO })];
        _bodega_decorators = [(0, typeorm_1.OneToOne)(function () { return bodegas_entity_1.Bodega; }, function (bodega) { return bodega.proyecto; })];
        _usuarios_decorators = [(0, typeorm_1.OneToMany)(function () { return proyecto_usuario_entity_1.ProyectoUsuario; }, function (pu) { return pu.proyecto; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
        __esDecorate(null, null, _codigoProyecto_decorators, { kind: "field", name: "codigoProyecto", static: false, private: false, access: { has: function (obj) { return "codigoProyecto" in obj; }, get: function (obj) { return obj.codigoProyecto; }, set: function (obj, value) { obj.codigoProyecto = value; } }, metadata: _metadata }, _codigoProyecto_initializers, _codigoProyecto_extraInitializers);
        __esDecorate(null, null, _fechaInicio_decorators, { kind: "field", name: "fechaInicio", static: false, private: false, access: { has: function (obj) { return "fechaInicio" in obj; }, get: function (obj) { return obj.fechaInicio; }, set: function (obj, value) { obj.fechaInicio = value; } }, metadata: _metadata }, _fechaInicio_initializers, _fechaInicio_extraInitializers);
        __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: function (obj) { return "estado" in obj; }, get: function (obj) { return obj.estado; }, set: function (obj, value) { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
        __esDecorate(null, null, _bodega_decorators, { kind: "field", name: "bodega", static: false, private: false, access: { has: function (obj) { return "bodega" in obj; }, get: function (obj) { return obj.bodega; }, set: function (obj, value) { obj.bodega = value; } }, metadata: _metadata }, _bodega_initializers, _bodega_extraInitializers);
        __esDecorate(null, null, _usuarios_decorators, { kind: "field", name: "usuarios", static: false, private: false, access: { has: function (obj) { return "usuarios" in obj; }, get: function (obj) { return obj.usuarios; }, set: function (obj, value) { obj.usuarios = value; } }, metadata: _metadata }, _usuarios_initializers, _usuarios_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Proyecto = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Proyecto = _classThis;
}();
exports.Proyecto = Proyecto;
