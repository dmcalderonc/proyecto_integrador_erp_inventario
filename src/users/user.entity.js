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
exports.User = exports.UserRole = void 0;
var typeorm_1 = require("typeorm");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["SOLICITANTE"] = "SOLICITANTE";
    UserRole["BODEGUERO"] = "BODEGUERO";
    UserRole["COMPRADOR"] = "COMPRADOR";
})(UserRole || (exports.UserRole = UserRole = {}));
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('users')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _nombre_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _rol_decorators;
    var _rol_initializers = [];
    var _rol_extraInitializers = [];
    var _estado_decorators;
    var _estado_initializers = [];
    var _estado_extraInitializers = [];
    var _fechaCreacion_decorators;
    var _fechaCreacion_initializers = [];
    var _fechaCreacion_extraInitializers = [];
    var _fechaActualizacion_decorators;
    var _fechaActualizacion_initializers = [];
    var _fechaActualizacion_extraInitializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nombre = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nombre_initializers, void 0));
            this.email = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.password = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            this.rol = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _rol_initializers, void 0));
            this.estado = (__runInitializers(this, _rol_extraInitializers), __runInitializers(this, _estado_initializers, void 0));
            this.fechaCreacion = (__runInitializers(this, _estado_extraInitializers), __runInitializers(this, _fechaCreacion_initializers, void 0));
            this.fechaActualizacion = (__runInitializers(this, _fechaCreacion_extraInitializers), __runInitializers(this, _fechaActualizacion_initializers, void 0));
            __runInitializers(this, _fechaActualizacion_extraInitializers);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _nombre_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 150 })];
        _email_decorators = [(0, typeorm_1.Column)({ type: 'varchar', unique: true })];
        _password_decorators = [(0, typeorm_1.Column)({ type: 'varchar' })];
        _rol_decorators = [(0, typeorm_1.Column)({ type: 'enum', enum: UserRole, default: UserRole.SOLICITANTE })];
        _estado_decorators = [(0, typeorm_1.Column)({ type: 'boolean', default: true })];
        _fechaCreacion_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _fechaActualizacion_decorators = [(0, typeorm_1.UpdateDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _rol_decorators, { kind: "field", name: "rol", static: false, private: false, access: { has: function (obj) { return "rol" in obj; }, get: function (obj) { return obj.rol; }, set: function (obj, value) { obj.rol = value; } }, metadata: _metadata }, _rol_initializers, _rol_extraInitializers);
        __esDecorate(null, null, _estado_decorators, { kind: "field", name: "estado", static: false, private: false, access: { has: function (obj) { return "estado" in obj; }, get: function (obj) { return obj.estado; }, set: function (obj, value) { obj.estado = value; } }, metadata: _metadata }, _estado_initializers, _estado_extraInitializers);
        __esDecorate(null, null, _fechaCreacion_decorators, { kind: "field", name: "fechaCreacion", static: false, private: false, access: { has: function (obj) { return "fechaCreacion" in obj; }, get: function (obj) { return obj.fechaCreacion; }, set: function (obj, value) { obj.fechaCreacion = value; } }, metadata: _metadata }, _fechaCreacion_initializers, _fechaCreacion_extraInitializers);
        __esDecorate(null, null, _fechaActualizacion_decorators, { kind: "field", name: "fechaActualizacion", static: false, private: false, access: { has: function (obj) { return "fechaActualizacion" in obj; }, get: function (obj) { return obj.fechaActualizacion; }, set: function (obj, value) { obj.fechaActualizacion = value; } }, metadata: _metadata }, _fechaActualizacion_initializers, _fechaActualizacion_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
