"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.AuditoriaLogSchema = exports.AuditoriaLog = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var AuditoriaLog = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _usuario_id_decorators;
    var _usuario_id_initializers = [];
    var _usuario_id_extraInitializers = [];
    var _accion_decorators;
    var _accion_initializers = [];
    var _accion_extraInitializers = [];
    var _modulo_decorators;
    var _modulo_initializers = [];
    var _modulo_extraInitializers = [];
    var _detalles_decorators;
    var _detalles_initializers = [];
    var _detalles_extraInitializers = [];
    var AuditoriaLog = _classThis = /** @class */ (function (_super) {
        __extends(AuditoriaLog_1, _super);
        function AuditoriaLog_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.usuario_id = __runInitializers(_this, _usuario_id_initializers, void 0);
            _this.accion = (__runInitializers(_this, _usuario_id_extraInitializers), __runInitializers(_this, _accion_initializers, void 0));
            _this.modulo = (__runInitializers(_this, _accion_extraInitializers), __runInitializers(_this, _modulo_initializers, void 0));
            _this.detalles = (__runInitializers(_this, _modulo_extraInitializers), __runInitializers(_this, _detalles_initializers, void 0));
            __runInitializers(_this, _detalles_extraInitializers);
            return _this;
        }
        return AuditoriaLog_1;
    }(_classSuper));
    __setFunctionName(_classThis, "AuditoriaLog");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _usuario_id_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _accion_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _modulo_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _detalles_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        __esDecorate(null, null, _usuario_id_decorators, { kind: "field", name: "usuario_id", static: false, private: false, access: { has: function (obj) { return "usuario_id" in obj; }, get: function (obj) { return obj.usuario_id; }, set: function (obj, value) { obj.usuario_id = value; } }, metadata: _metadata }, _usuario_id_initializers, _usuario_id_extraInitializers);
        __esDecorate(null, null, _accion_decorators, { kind: "field", name: "accion", static: false, private: false, access: { has: function (obj) { return "accion" in obj; }, get: function (obj) { return obj.accion; }, set: function (obj, value) { obj.accion = value; } }, metadata: _metadata }, _accion_initializers, _accion_extraInitializers);
        __esDecorate(null, null, _modulo_decorators, { kind: "field", name: "modulo", static: false, private: false, access: { has: function (obj) { return "modulo" in obj; }, get: function (obj) { return obj.modulo; }, set: function (obj, value) { obj.modulo = value; } }, metadata: _metadata }, _modulo_initializers, _modulo_extraInitializers);
        __esDecorate(null, null, _detalles_decorators, { kind: "field", name: "detalles", static: false, private: false, access: { has: function (obj) { return "detalles" in obj; }, get: function (obj) { return obj.detalles; }, set: function (obj, value) { obj.detalles = value; } }, metadata: _metadata }, _detalles_initializers, _detalles_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuditoriaLog = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuditoriaLog = _classThis;
}();
exports.AuditoriaLog = AuditoriaLog;
exports.AuditoriaLogSchema = mongoose_1.SchemaFactory.createForClass(AuditoriaLog);
