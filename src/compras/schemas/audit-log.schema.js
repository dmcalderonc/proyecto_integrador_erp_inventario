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
exports.AuditLogSchema = exports.AuditLog = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var AuditLog = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _ordenCompraId_decorators;
    var _ordenCompraId_initializers = [];
    var _ordenCompraId_extraInitializers = [];
    var _estadoAnterior_decorators;
    var _estadoAnterior_initializers = [];
    var _estadoAnterior_extraInitializers = [];
    var _estadoNuevo_decorators;
    var _estadoNuevo_initializers = [];
    var _estadoNuevo_extraInitializers = [];
    var _usuarioId_decorators;
    var _usuarioId_initializers = [];
    var _usuarioId_extraInitializers = [];
    var AuditLog = _classThis = /** @class */ (function (_super) {
        __extends(AuditLog_1, _super);
        function AuditLog_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ordenCompraId = __runInitializers(_this, _ordenCompraId_initializers, void 0);
            _this.estadoAnterior = (__runInitializers(_this, _ordenCompraId_extraInitializers), __runInitializers(_this, _estadoAnterior_initializers, void 0));
            _this.estadoNuevo = (__runInitializers(_this, _estadoAnterior_extraInitializers), __runInitializers(_this, _estadoNuevo_initializers, void 0));
            _this.usuarioId = (__runInitializers(_this, _estadoNuevo_extraInitializers), __runInitializers(_this, _usuarioId_initializers, void 0));
            __runInitializers(_this, _usuarioId_extraInitializers);
            return _this;
        }
        return AuditLog_1;
    }(_classSuper));
    __setFunctionName(_classThis, "AuditLog");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _ordenCompraId_decorators = [(0, mongoose_1.Prop)()];
        _estadoAnterior_decorators = [(0, mongoose_1.Prop)()];
        _estadoNuevo_decorators = [(0, mongoose_1.Prop)()];
        _usuarioId_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _ordenCompraId_decorators, { kind: "field", name: "ordenCompraId", static: false, private: false, access: { has: function (obj) { return "ordenCompraId" in obj; }, get: function (obj) { return obj.ordenCompraId; }, set: function (obj, value) { obj.ordenCompraId = value; } }, metadata: _metadata }, _ordenCompraId_initializers, _ordenCompraId_extraInitializers);
        __esDecorate(null, null, _estadoAnterior_decorators, { kind: "field", name: "estadoAnterior", static: false, private: false, access: { has: function (obj) { return "estadoAnterior" in obj; }, get: function (obj) { return obj.estadoAnterior; }, set: function (obj, value) { obj.estadoAnterior = value; } }, metadata: _metadata }, _estadoAnterior_initializers, _estadoAnterior_extraInitializers);
        __esDecorate(null, null, _estadoNuevo_decorators, { kind: "field", name: "estadoNuevo", static: false, private: false, access: { has: function (obj) { return "estadoNuevo" in obj; }, get: function (obj) { return obj.estadoNuevo; }, set: function (obj, value) { obj.estadoNuevo = value; } }, metadata: _metadata }, _estadoNuevo_initializers, _estadoNuevo_extraInitializers);
        __esDecorate(null, null, _usuarioId_decorators, { kind: "field", name: "usuarioId", static: false, private: false, access: { has: function (obj) { return "usuarioId" in obj; }, get: function (obj) { return obj.usuarioId; }, set: function (obj, value) { obj.usuarioId = value; } }, metadata: _metadata }, _usuarioId_initializers, _usuarioId_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuditLog = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuditLog = _classThis;
}();
exports.AuditLog = AuditLog;
exports.AuditLogSchema = mongoose_1.SchemaFactory.createForClass(AuditLog);
