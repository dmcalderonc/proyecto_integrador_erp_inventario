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
exports.Bodega = void 0;
var typeorm_1 = require("typeorm");
var proyecto_entity_1 = require("../proyectos/proyecto.entity");
var Bodega = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('bodegas')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
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
    var _proyecto_decorators;
    var _proyecto_initializers = [];
    var _proyecto_extraInitializers = [];
    var Bodega = _classThis = /** @class */ (function () {
        function Bodega_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nombre = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nombre_initializers, void 0));
            this.ubicacion = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _ubicacion_initializers, void 0));
            this.isPrincipal = (__runInitializers(this, _ubicacion_extraInitializers), __runInitializers(this, _isPrincipal_initializers, void 0));
            this.proyectoId = (__runInitializers(this, _isPrincipal_extraInitializers), __runInitializers(this, _proyectoId_initializers, void 0));
            this.proyecto = (__runInitializers(this, _proyectoId_extraInitializers), __runInitializers(this, _proyecto_initializers, void 0));
            __runInitializers(this, _proyecto_extraInitializers);
        }
        return Bodega_1;
    }());
    __setFunctionName(_classThis, "Bodega");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer' })];
        _nombre_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 150 })];
        _ubicacion_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 255 })];
        _isPrincipal_decorators = [(0, typeorm_1.Column)({ name: 'is_principal', type: 'boolean', default: false })];
        _proyectoId_decorators = [(0, typeorm_1.Column)({ name: 'proyecto_id', type: 'uuid', nullable: true })];
        _proyecto_decorators = [(0, typeorm_1.OneToOne)(function () { return proyecto_entity_1.Proyecto; }, function (proyecto) { return proyecto.bodega; }, { nullable: true, onDelete: 'SET NULL' }), (0, typeorm_1.JoinColumn)({ name: 'proyecto_id' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
        __esDecorate(null, null, _ubicacion_decorators, { kind: "field", name: "ubicacion", static: false, private: false, access: { has: function (obj) { return "ubicacion" in obj; }, get: function (obj) { return obj.ubicacion; }, set: function (obj, value) { obj.ubicacion = value; } }, metadata: _metadata }, _ubicacion_initializers, _ubicacion_extraInitializers);
        __esDecorate(null, null, _isPrincipal_decorators, { kind: "field", name: "isPrincipal", static: false, private: false, access: { has: function (obj) { return "isPrincipal" in obj; }, get: function (obj) { return obj.isPrincipal; }, set: function (obj, value) { obj.isPrincipal = value; } }, metadata: _metadata }, _isPrincipal_initializers, _isPrincipal_extraInitializers);
        __esDecorate(null, null, _proyectoId_decorators, { kind: "field", name: "proyectoId", static: false, private: false, access: { has: function (obj) { return "proyectoId" in obj; }, get: function (obj) { return obj.proyectoId; }, set: function (obj, value) { obj.proyectoId = value; } }, metadata: _metadata }, _proyectoId_initializers, _proyectoId_extraInitializers);
        __esDecorate(null, null, _proyecto_decorators, { kind: "field", name: "proyecto", static: false, private: false, access: { has: function (obj) { return "proyecto" in obj; }, get: function (obj) { return obj.proyecto; }, set: function (obj, value) { obj.proyecto = value; } }, metadata: _metadata }, _proyecto_initializers, _proyecto_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Bodega = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Bodega = _classThis;
}();
exports.Bodega = Bodega;
