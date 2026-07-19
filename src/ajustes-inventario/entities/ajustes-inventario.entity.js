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
exports.AjusteInventario = void 0;
var typeorm_1 = require("typeorm");
var bodegas_entity_1 = require("../../bodegas/bodegas.entity");
var user_entity_1 = require("../../users/user.entity");
var detalle_ajuste_entity_1 = require("./detalle-ajuste.entity");
var AjusteInventario = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('ajustes_inventario')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _bodegaId_decorators;
    var _bodegaId_initializers = [];
    var _bodegaId_extraInitializers = [];
    var _bodega_decorators;
    var _bodega_initializers = [];
    var _bodega_extraInitializers = [];
    var _usuarioAutorizadorId_decorators;
    var _usuarioAutorizadorId_initializers = [];
    var _usuarioAutorizadorId_extraInitializers = [];
    var _usuarioAutorizador_decorators;
    var _usuarioAutorizador_initializers = [];
    var _usuarioAutorizador_extraInitializers = [];
    var _fechaAjuste_decorators;
    var _fechaAjuste_initializers = [];
    var _fechaAjuste_extraInitializers = [];
    var _motivo_decorators;
    var _motivo_initializers = [];
    var _motivo_extraInitializers = [];
    var _detalles_decorators;
    var _detalles_initializers = [];
    var _detalles_extraInitializers = [];
    var AjusteInventario = _classThis = /** @class */ (function () {
        function AjusteInventario_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.bodegaId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _bodegaId_initializers, void 0));
            this.bodega = (__runInitializers(this, _bodegaId_extraInitializers), __runInitializers(this, _bodega_initializers, void 0));
            this.usuarioAutorizadorId = (__runInitializers(this, _bodega_extraInitializers), __runInitializers(this, _usuarioAutorizadorId_initializers, void 0));
            this.usuarioAutorizador = (__runInitializers(this, _usuarioAutorizadorId_extraInitializers), __runInitializers(this, _usuarioAutorizador_initializers, void 0));
            this.fechaAjuste = (__runInitializers(this, _usuarioAutorizador_extraInitializers), __runInitializers(this, _fechaAjuste_initializers, void 0));
            this.motivo = (__runInitializers(this, _fechaAjuste_extraInitializers), __runInitializers(this, _motivo_initializers, void 0));
            this.detalles = (__runInitializers(this, _motivo_extraInitializers), __runInitializers(this, _detalles_initializers, void 0));
            __runInitializers(this, _detalles_extraInitializers);
        }
        return AjusteInventario_1;
    }());
    __setFunctionName(_classThis, "AjusteInventario");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _bodegaId_decorators = [(0, typeorm_1.Column)({ name: 'bodega_id', type: 'integer' })];
        _bodega_decorators = [(0, typeorm_1.ManyToOne)(function () { return bodegas_entity_1.Bodega; }), (0, typeorm_1.JoinColumn)({ name: 'bodega_id' })];
        _usuarioAutorizadorId_decorators = [(0, typeorm_1.Column)({ name: 'usuario_autorizador_id', type: 'uuid' })];
        _usuarioAutorizador_decorators = [(0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }), (0, typeorm_1.JoinColumn)({ name: 'usuario_autorizador_id' })];
        _fechaAjuste_decorators = [(0, typeorm_1.CreateDateColumn)({ name: 'fecha_ajuste' })];
        _motivo_decorators = [(0, typeorm_1.Column)({ type: 'text' })];
        _detalles_decorators = [(0, typeorm_1.OneToMany)(function () { return detalle_ajuste_entity_1.DetalleAjuste; }, function (detalle) { return detalle.ajuste; }, { cascade: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _bodegaId_decorators, { kind: "field", name: "bodegaId", static: false, private: false, access: { has: function (obj) { return "bodegaId" in obj; }, get: function (obj) { return obj.bodegaId; }, set: function (obj, value) { obj.bodegaId = value; } }, metadata: _metadata }, _bodegaId_initializers, _bodegaId_extraInitializers);
        __esDecorate(null, null, _bodega_decorators, { kind: "field", name: "bodega", static: false, private: false, access: { has: function (obj) { return "bodega" in obj; }, get: function (obj) { return obj.bodega; }, set: function (obj, value) { obj.bodega = value; } }, metadata: _metadata }, _bodega_initializers, _bodega_extraInitializers);
        __esDecorate(null, null, _usuarioAutorizadorId_decorators, { kind: "field", name: "usuarioAutorizadorId", static: false, private: false, access: { has: function (obj) { return "usuarioAutorizadorId" in obj; }, get: function (obj) { return obj.usuarioAutorizadorId; }, set: function (obj, value) { obj.usuarioAutorizadorId = value; } }, metadata: _metadata }, _usuarioAutorizadorId_initializers, _usuarioAutorizadorId_extraInitializers);
        __esDecorate(null, null, _usuarioAutorizador_decorators, { kind: "field", name: "usuarioAutorizador", static: false, private: false, access: { has: function (obj) { return "usuarioAutorizador" in obj; }, get: function (obj) { return obj.usuarioAutorizador; }, set: function (obj, value) { obj.usuarioAutorizador = value; } }, metadata: _metadata }, _usuarioAutorizador_initializers, _usuarioAutorizador_extraInitializers);
        __esDecorate(null, null, _fechaAjuste_decorators, { kind: "field", name: "fechaAjuste", static: false, private: false, access: { has: function (obj) { return "fechaAjuste" in obj; }, get: function (obj) { return obj.fechaAjuste; }, set: function (obj, value) { obj.fechaAjuste = value; } }, metadata: _metadata }, _fechaAjuste_initializers, _fechaAjuste_extraInitializers);
        __esDecorate(null, null, _motivo_decorators, { kind: "field", name: "motivo", static: false, private: false, access: { has: function (obj) { return "motivo" in obj; }, get: function (obj) { return obj.motivo; }, set: function (obj, value) { obj.motivo = value; } }, metadata: _metadata }, _motivo_initializers, _motivo_extraInitializers);
        __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: function (obj) { return "detalles" in obj; }, get: function (obj) { return obj.detalles; }, set: function (obj, value) { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AjusteInventario = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AjusteInventario = _classThis;
}();
exports.AjusteInventario = AjusteInventario;
