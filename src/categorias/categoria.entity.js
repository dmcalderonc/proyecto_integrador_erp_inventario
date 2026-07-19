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
exports.Categoria = void 0;
var typeorm_1 = require("typeorm");
var material_entity_1 = require("../materiales/material.entity");
var Categoria = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('categorias')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _nombre_extraInitializers = [];
    var _prefijo_decorators;
    var _prefijo_initializers = [];
    var _prefijo_extraInitializers = [];
    var _materiales_decorators;
    var _materiales_initializers = [];
    var _materiales_extraInitializers = [];
    var Categoria = _classThis = /** @class */ (function () {
        function Categoria_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nombre = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nombre_initializers, void 0));
            this.prefijo = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _prefijo_initializers, void 0));
            this.materiales = (__runInitializers(this, _prefijo_extraInitializers), __runInitializers(this, _materiales_initializers, void 0));
            __runInitializers(this, _materiales_extraInitializers);
        }
        return Categoria_1;
    }());
    __setFunctionName(_classThis, "Categoria");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _nombre_decorators = [(0, typeorm_1.Column)({ unique: true })];
        _prefijo_decorators = [(0, typeorm_1.Column)({ length: 10, unique: true })];
        _materiales_decorators = [(0, typeorm_1.OneToMany)(function () { return material_entity_1.Material; }, function (material) { return material.categoria; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
        __esDecorate(null, null, _prefijo_decorators, { kind: "field", name: "prefijo", static: false, private: false, access: { has: function (obj) { return "prefijo" in obj; }, get: function (obj) { return obj.prefijo; }, set: function (obj, value) { obj.prefijo = value; } }, metadata: _metadata }, _prefijo_initializers, _prefijo_extraInitializers);
        __esDecorate(null, null, _materiales_decorators, { kind: "field", name: "materiales", static: false, private: false, access: { has: function (obj) { return "materiales" in obj; }, get: function (obj) { return obj.materiales; }, set: function (obj, value) { obj.materiales = value; } }, metadata: _metadata }, _materiales_initializers, _materiales_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Categoria = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Categoria = _classThis;
}();
exports.Categoria = Categoria;
