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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialesService = void 0;
var common_1 = require("@nestjs/common");
var material_entity_1 = require("./material.entity");
var categoria_entity_1 = require("../categorias/categoria.entity");
var MaterialesService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MaterialesService = _classThis = /** @class */ (function () {
        function MaterialesService_1(materialRepository, dataSource, auditoriaService) {
            this.materialRepository = materialRepository;
            this.dataSource = dataSource;
            this.auditoriaService = auditoriaService;
        }
        MaterialesService_1.prototype.create = function (createMaterialDto, usuarioId) {
            return __awaiter(this, void 0, void 0, function () {
                var queryRunner, categoria, ultimoMaterial, consecutivo, partesSku, ultimoNumero, numeroFormateado, nuevoSku, nuevoMaterial, materialGuardado, auditError_1, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            queryRunner = this.dataSource.createQueryRunner();
                            return [4 /*yield*/, queryRunner.connect()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, queryRunner.startTransaction()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 12, 14, 16]);
                            return [4 /*yield*/, queryRunner.manager.findOne(categoria_entity_1.Categoria, {
                                    where: { id: createMaterialDto.categoria_id },
                                    lock: { mode: 'pessimistic_write' },
                                })];
                        case 4:
                            categoria = _a.sent();
                            if (!categoria) {
                                throw new common_1.NotFoundException("La categor\u00EDa con ID ".concat(createMaterialDto.categoria_id, " no existe."));
                            }
                            return [4 /*yield*/, queryRunner.manager.findOne(material_entity_1.Material, {
                                    where: { categoria: { id: categoria.id } },
                                    order: { id: 'DESC' },
                                })];
                        case 5:
                            ultimoMaterial = _a.sent();
                            consecutivo = 1;
                            if (ultimoMaterial && ultimoMaterial.sku) {
                                partesSku = ultimoMaterial.sku.split('-');
                                if (partesSku.length === 2) {
                                    ultimoNumero = parseInt(partesSku[1], 10);
                                    if (!isNaN(ultimoNumero)) {
                                        consecutivo = ultimoNumero + 1;
                                    }
                                }
                            }
                            numeroFormateado = String(consecutivo).padStart(4, '0');
                            nuevoSku = "".concat(categoria.prefijo.toUpperCase(), "-").concat(numeroFormateado);
                            nuevoMaterial = queryRunner.manager.create(material_entity_1.Material, {
                                nombre: createMaterialDto.nombre,
                                descripcion: createMaterialDto.descripcion,
                                sku: nuevoSku,
                                unidad_medida: createMaterialDto.unidad_medida,
                                categoria: categoria,
                            });
                            return [4 /*yield*/, queryRunner.manager.save(nuevoMaterial)];
                        case 6:
                            materialGuardado = _a.sent();
                            return [4 /*yield*/, queryRunner.commitTransaction()];
                        case 7:
                            _a.sent();
                            _a.label = 8;
                        case 8:
                            _a.trys.push([8, 10, , 11]);
                            return [4 /*yield*/, this.auditoriaService.registrarAccion(usuarioId.toString(), 'CREAR_MATERIAL', 'Materiales', {
                                    mensaje: 'Material autogenerado con éxito',
                                    skuGenerado: materialGuardado.sku,
                                    nombreMaterial: materialGuardado.nombre,
                                    categoria: categoria.nombre
                                })];
                        case 9:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 10:
                            auditError_1 = _a.sent();
                            console.error('Error al registrar en el módulo de auditoría (MongoDB):', auditError_1);
                            return [3 /*break*/, 11];
                        case 11: return [2 /*return*/, materialGuardado];
                        case 12:
                            error_1 = _a.sent();
                            return [4 /*yield*/, queryRunner.rollbackTransaction()];
                        case 13:
                            _a.sent();
                            throw error_1;
                        case 14: return [4 /*yield*/, queryRunner.release()];
                        case 15:
                            _a.sent();
                            return [7 /*endfinally*/];
                        case 16: return [2 /*return*/];
                    }
                });
            });
        };
        MaterialesService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.materialRepository.find({
                                relations: {
                                    categoria: true,
                                },
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        MaterialesService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var material;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.materialRepository.findOne({
                                where: { id: id },
                                relations: {
                                    categoria: true,
                                },
                            })];
                        case 1:
                            material = _a.sent();
                            if (!material) {
                                throw new common_1.NotFoundException("El material con ID ".concat(id, " no existe."));
                            }
                            return [2 /*return*/, material];
                    }
                });
            });
        };
        MaterialesService_1.prototype.update = function (id, updateMaterialDto, usuarioId) {
            return __awaiter(this, void 0, void 0, function () {
                var material, materialActualizado, guardado, auditError_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            material = _a.sent();
                            if ('sku' in updateMaterialDto) {
                                throw new common_1.BadRequestException('El SKU es generado automáticamente por el sistema y no puede ser alterado.');
                            }
                            materialActualizado = this.materialRepository.merge(material, updateMaterialDto);
                            return [4 /*yield*/, this.materialRepository.save(materialActualizado)];
                        case 2:
                            guardado = _a.sent();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, this.auditoriaService.registrarAccion(usuarioId.toString(), 'ACTUALIZAR_MATERIAL', 'Materiales', { materialId: id, sku: guardado.sku, cambios: updateMaterialDto })];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            auditError_2 = _a.sent();
                            console.error('Error al auditar actualización:', auditError_2);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/, guardado];
                    }
                });
            });
        };
        MaterialesService_1.prototype.remove = function (id, usuarioId) {
            return __awaiter(this, void 0, void 0, function () {
                var material, skuEliminado, auditError_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            material = _a.sent();
                            skuEliminado = material.sku;
                            return [4 /*yield*/, this.materialRepository.remove(material)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, this.auditoriaService.registrarAccion(usuarioId.toString(), 'ELIMINAR_MATERIAL', 'Materiales', { materialId: id, sku: skuEliminado, nombre: material.nombre })];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            auditError_3 = _a.sent();
                            console.error('Error al auditar eliminación:', auditError_3);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/, { message: "El material con SKU ".concat(skuEliminado, " ha sido eliminado.") }];
                    }
                });
            });
        };
        return MaterialesService_1;
    }());
    __setFunctionName(_classThis, "MaterialesService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MaterialesService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MaterialesService = _classThis;
}();
exports.MaterialesService = MaterialesService;
