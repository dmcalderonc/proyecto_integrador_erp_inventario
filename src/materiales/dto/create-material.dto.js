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
exports.CreateMaterialDto = void 0;
var class_validator_1 = require("class-validator");
var CreateMaterialDto = function () {
    var _a;
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _nombre_extraInitializers = [];
    var _descripcion_decorators;
    var _descripcion_initializers = [];
    var _descripcion_extraInitializers = [];
    var _unidad_medida_decorators;
    var _unidad_medida_initializers = [];
    var _unidad_medida_extraInitializers = [];
    var _categoria_id_decorators;
    var _categoria_id_initializers = [];
    var _categoria_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateMaterialDto() {
                this.nombre = __runInitializers(this, _nombre_initializers, void 0);
                this.descripcion = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _descripcion_initializers, void 0));
                this.unidad_medida = (__runInitializers(this, _descripcion_extraInitializers), __runInitializers(this, _unidad_medida_initializers, void 0));
                this.categoria_id = (__runInitializers(this, _unidad_medida_extraInitializers), __runInitializers(this, _categoria_id_initializers, void 0));
                __runInitializers(this, _categoria_id_extraInitializers);
            }
            return CreateMaterialDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nombre_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _descripcion_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _unidad_medida_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsEnum)(['U', 'KG', 'M', 'M2'], { message: 'Unidad de medida no válida' })];
            _categoria_id_decorators = [(0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsInt)()];
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _descripcion_decorators, { kind: "field", name: "descripcion", static: false, private: false, access: { has: function (obj) { return "descripcion" in obj; }, get: function (obj) { return obj.descripcion; }, set: function (obj, value) { obj.descripcion = value; } }, metadata: _metadata }, _descripcion_initializers, _descripcion_extraInitializers);
            __esDecorate(null, null, _unidad_medida_decorators, { kind: "field", name: "unidad_medida", static: false, private: false, access: { has: function (obj) { return "unidad_medida" in obj; }, get: function (obj) { return obj.unidad_medida; }, set: function (obj, value) { obj.unidad_medida = value; } }, metadata: _metadata }, _unidad_medida_initializers, _unidad_medida_extraInitializers);
            __esDecorate(null, null, _categoria_id_decorators, { kind: "field", name: "categoria_id", static: false, private: false, access: { has: function (obj) { return "categoria_id" in obj; }, get: function (obj) { return obj.categoria_id; }, set: function (obj, value) { obj.categoria_id = value; } }, metadata: _metadata }, _categoria_id_initializers, _categoria_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateMaterialDto = CreateMaterialDto;
