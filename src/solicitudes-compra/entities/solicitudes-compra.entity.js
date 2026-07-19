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
exports.SolicitudCompra = exports.NivelPrioridad = exports.EstadoSolicitud = void 0;
var typeorm_1 = require("typeorm");
var proyecto_entity_1 = require("../../proyectos/proyecto.entity");
var user_entity_1 = require("../../users/user.entity");
var detalle_solicitud_entity_1 = require("./detalle-solicitud.entity");
var cotizacion_entity_1 = require("../../cotizaciones/entities/cotizacion.entity");
var EstadoSolicitud;
(function (EstadoSolicitud) {
    EstadoSolicitud["PENDIENTE"] = "PENDIENTE";
    EstadoSolicitud["COTIZANDO"] = "COTIZANDO";
    EstadoSolicitud["APROBADA"] = "APROBADA";
    EstadoSolicitud["RECHAZADA"] = "RECHAZADA";
})(EstadoSolicitud || (exports.EstadoSolicitud = EstadoSolicitud = {}));
var NivelPrioridad;
(function (NivelPrioridad) {
    NivelPrioridad["ALTA"] = "ALTA";
    NivelPrioridad["MEDIA"] = "MEDIA";
    NivelPrioridad["BAJA"] = "BAJA";
})(NivelPrioridad || (exports.NivelPrioridad = NivelPrioridad = {}));
var SolicitudCompra = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('solicitudes_compra')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _codigo_decorators;
    var _codigo_initializers = [];
    var _codigo_extraInitializers = [];
    var _proyectoId_decorators;
    var _proyectoId_initializers = [];
    var _proyectoId_extraInitializers = [];
    var _proyecto_decorators;
    var _proyecto_initializers = [];
    var _proyecto_extraInitializers = [];
    var _usuarioSolicitanteId_decorators;
    var _usuarioSolicitanteId_initializers = [];
    var _usuarioSolicitanteId_extraInitializers = [];
    var _usuarioSolicitante_decorators;
    var _usuarioSolicitante_initializers = [];
    var _usuarioSolicitante_extraInitializers = [];
    var _fechaSolicitud_decorators;
    var _fechaSolicitud_initializers = [];
    var _fechaSolicitud_extraInitializers = [];
    var _estado_decorators;
    var _estado_initializers = [];
    var _estado_extraInitializers = [];
    var _nivelPrioridad_decorators;
    var _nivelPrioridad_initializers = [];
    var _nivelPrioridad_extraInitializers = [];
    var _detalles_decorators;
    var _detalles_initializers = [];
    var _detalles_extraInitializers = [];
    var _cotizaciones_decorators;
    var _cotizaciones_initializers = [];
    var _cotizaciones_extraInitializers = [];
    var SolicitudCompra = _classThis = /** @class */ (function () {
        function SolicitudCompra_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.codigo = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _codigo_initializers, void 0));
            this.proyectoId = (__runInitializers(this, _codigo_extraInitializers), __runInitializers(this, _proyectoId_initializers, void 0));
            this.proyecto = (__runInitializers(this, _proyectoId_extraInitializers), __runInitializers(this, _proyecto_initializers, void 0));
            this.usuarioSolicitanteId = (__runInitializers(this, _proyecto_extraInitializers), __runInitializers(this, _usuarioSolicitanteId_initializers, void 0));
            this.usuarioSolicitante = (__runInitializers(this, _usuarioSolicitanteId_extraInitializers), __runInitializers(this, _usuarioSolicitante_initializers, void 0));
            this.fechaSolicitud = (__runInitializers(this, _usuarioSolicitante_extraInitializers), __runInitializers(this, _fechaSolicitud_initializers, void 0));
            this.estado = (__runInitializers(this, _fechaSolicitud_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
            this.nivelPrioridad = (__runInitializers(this, _estado_extraInitializers), __runInitializers(this, _nivelPrioridad_initializers, void 0));
            this.detalles = (__runInitializers(this, _nivelPrioridad_extraInitializers), __runInitializers(this, _detalles_initializers, void 0));
            this.cotizaciones = (__runInitializers(this, _detalles_extraInitializers), __runInitializers(this, _cotizaciones_initializers, void 0));
            __runInitializers(this, _cotizaciones_extraInitializers);
        }
        return SolicitudCompra_1;
    }());
    __setFunctionName(_classThis, "SolicitudCompra");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('increment')];
        _codigo_decorators = [(0, typeorm_1.Column)({ type: 'varchar', unique: true })];
        _proyectoId_decorators = [(0, typeorm_1.Column)({ name: 'proyecto_id', type: 'uuid' })];
        _proyecto_decorators = [(0, typeorm_1.ManyToOne)(function () { return proyecto_entity_1.Proyecto; }), (0, typeorm_1.JoinColumn)({ name: 'proyecto_id' })];
        _usuarioSolicitanteId_decorators = [(0, typeorm_1.Column)({ name: 'usuario_solicitante_id', type: 'uuid' })];
        _usuarioSolicitante_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }), (0, typeorm_1.JoinColumn)({ name: 'usuario_solicitante_id' })];
        _fechaSolicitud_decorators = [(0, typeorm_1.CreateDateColumn)({ name: 'fecha_solicitud' })];
        _estado_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: EstadoSolicitud, default: EstadoSolicitud.PENDIENTE })];
        _nivelPrioridad_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: NivelPrioridad, default: NivelPrioridad.MEDIA })];
        _detalles_decorators = [(0, typeorm_1.OneToMany)(function () { return detalle_solicitud_entity_1.DetalleSolicitud; }, function (detalle) { return detalle.solicitud; }, { cascade: true })];
        _cotizaciones_decorators = [(0, typeorm_1.OneToMany)(function () { return cotizacion_entity_1.Cotizacion; }, function (cotizacion) { return cotizacion.solicitud; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _codigo_decorators, { kind: "field", name: "codigo", static: false, private: false, access: { has: function (obj) { return "codigo" in obj; }, get: function (obj) { return obj.codigo; }, set: function (obj, value) { obj.codigo = value; } }, metadata: _metadata }, _codigo_initializers, _codigo_extraInitializers);
        __esDecorate(null, null, _proyectoId_decorators, { kind: "field", name: "proyectoId", static: false, private: false, access: { has: function (obj) { return "proyectoId" in obj; }, get: function (obj) { return obj.proyectoId; }, set: function (obj, value) { obj.proyectoId = value; } }, metadata: _metadata }, _proyectoId_initializers, _proyectoId_extraInitializers);
        __esDecorate(null, null, _proyecto_decorators, { kind: "field", name: "proyecto", static: false, private: false, access: { has: function (obj) { return "proyecto" in obj; }, get: function (obj) { return obj.proyecto; }, set: function (obj, value) { obj.proyecto = value; } }, metadata: _metadata }, _proyecto_initializers, _proyecto_extraInitializers);
        __esDecorate(null, null, _usuarioSolicitanteId_decorators, { kind: "field", name: "usuarioSolicitanteId", static: false, private: false, access: { has: function (obj) { return "usuarioSolicitanteId" in obj; }, get: function (obj) { return obj.usuarioSolicitanteId; }, set: function (obj, value) { obj.usuarioSolicitanteId = value; } }, metadata: _metadata }, _usuarioSolicitanteId_initializers, _usuarioSolicitanteId_extraInitializers);
        __esDecorate(null, null, _usuarioSolicitante_decorators, { kind: "field", name: "usuarioSolicitante", static: false, private: false, access: { has: function (obj) { return "usuarioSolicitante" in obj; }, get: function (obj) { return obj.usuarioSolicitante; }, set: function (obj, value) { obj.usuarioSolicitante = value; } }, metadata: _metadata }, _usuarioSolicitante_initializers, _usuarioSolicitante_extraInitializers);
        __esDecorate(null, null, _fechaSolicitud_decorators, { kind: "field", name: "fechaSolicitud", static: false, private: false, access: { has: function (obj) { return "fechaSolicitud" in obj; }, get: function (obj) { return obj.fechaSolicitud; }, set: function (obj, value) { obj.fechaSolicitud = value; } }, metadata: _metadata }, _fechaSolicitud_initializers, _fechaSolicitud_extraInitializers);
        __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: function (obj) { return "estado" in obj; }, get: function (obj) { return obj.estado; }, set: function (obj, value) { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
        __esDecorate(null, null, _nivelPrioridad_decorators, { kind: "field", name: "nivelPrioridad", static: false, private: false, access: { has: function (obj) { return "nivelPrioridad" in obj; }, get: function (obj) { return obj.nivelPrioridad; }, set: function (obj, value) { obj.nivelPrioridad = value; } }, metadata: _metadata }, _nivelPrioridad_initializers, _nivelPrioridad_extraInitializers);
        __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: function (obj) { return "detalles" in obj; }, get: function (obj) { return obj.detalles; }, set: function (obj, value) { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
        __esDecorate(null, null, _cotizaciones_decorators, { kind: "field", name: "cotizaciones", static: false, private: false, access: { has: function (obj) { return "cotizaciones" in obj; }, get: function (obj) { return obj.cotizaciones; }, set: function (obj, value) { obj.cotizaciones = value; } }, metadata: _metadata }, _cotizaciones_initializers, _cotizaciones_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SolicitudCompra = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SolicitudCompra = _classThis;
}();
exports.SolicitudCompra = SolicitudCompra;
