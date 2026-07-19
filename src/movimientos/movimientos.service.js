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
exports.MovimientosService = void 0;
var common_1 = require("@nestjs/common");
var movimiento_inventario_entity_1 = require("./entities/movimiento-inventario.entity");
var detalle_movimiento_entity_1 = require("./entities/detalle-movimiento.entity");
var inventario_entity_1 = require("../inventario/inventario.entity");
var requirement_entity_1 = require("../../../../../../../../src/requirements/entities/requirement.entity");
var MovimientosService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MovimientosService = _classThis = /** @class */ (function () {
        function MovimientosService_1(dataSource, auditoriaService, reqRepository) {
            this.dataSource = dataSource;
            this.auditoriaService = auditoriaService;
            this.reqRepository = reqRepository;
        }
        MovimientosService_1.prototype.registrarMovimiento = function (dto, usuarioId) {
            return __awaiter(this, void 0, void 0, function () {
                var queryRunner, movimiento, savedMovimiento, auditoriaSnapshot, detalles, _i, detalles_1, detalleDto, cantidad, materialId, detalle, stockOrigen, stockDestino, stockAntes, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            queryRunner = this.dataSource.createQueryRunner();
                            return [4 /*yield*/, queryRunner.connect()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, queryRunner.startTransaction('READ COMMITTED')];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 18, 20, 22]);
                            if (dto.tipo === movimiento_inventario_entity_1.TipoMovimiento.INGRESO && !dto.bodegaDestinoId) {
                                throw new common_1.BadRequestException('El INGRESO requiere una bodega de destino obligatoria.');
                            }
                            if (dto.tipo === movimiento_inventario_entity_1.TipoMovimiento.EGRESO && !dto.bodegaOrigenId) {
                                throw new common_1.BadRequestException('El EGRESO requiere una bodega de origen obligatoria.');
                            }
                            if (dto.tipo === movimiento_inventario_entity_1.TipoMovimiento.TRANSFERENCIA && (!dto.bodegaOrigenId || !dto.bodegaDestinoId)) {
                                throw new common_1.BadRequestException('La TRANSFERENCIA requiere bodega de origen y destino.');
                            }
                            movimiento = queryRunner.manager.create(movimiento_inventario_entity_1.MovimientoInventario, {
                                tipo: dto.tipo,
                                observaciones: dto.observaciones,
                                usuarioId: usuarioId,
                                estado: movimiento_inventario_entity_1.EstadoMovimiento.PROCESADO,
                            });
                            return [4 /*yield*/, queryRunner.manager.save(movimiento)];
                        case 4:
                            savedMovimiento = _a.sent();
                            auditoriaSnapshot = [];
                            detalles = dto.detalles || [];
                            _i = 0, detalles_1 = detalles;
                            _a.label = 5;
                        case 5:
                            if (!(_i < detalles_1.length)) return [3 /*break*/, 16];
                            detalleDto = detalles_1[_i];
                            cantidad = detalleDto.cantidad;
                            materialId = detalleDto.materialId;
                            detalle = queryRunner.manager.create(detalle_movimiento_entity_1.DetalleMovimiento, {
                                movimientoId: savedMovimiento.id,
                                materialId: materialId,
                                cantidad: cantidad,
                            });
                            return [4 /*yield*/, queryRunner.manager.save(detalle)];
                        case 6:
                            _a.sent();
                            stockOrigen = null;
                            stockDestino = null;
                            if (!(dto.tipo === movimiento_inventario_entity_1.TipoMovimiento.EGRESO || dto.tipo === movimiento_inventario_entity_1.TipoMovimiento.TRANSFERENCIA)) return [3 /*break*/, 8];
                            return [4 /*yield*/, queryRunner.manager.findOne(inventario_entity_1.Inventario, {
                                    where: { bodega: { id: dto.bodegaOrigenId }, material: { id: Number(materialId) } },
                                    lock: { mode: 'pessimistic_write' },
                                })];
                        case 7:
                            stockOrigen = _a.sent();
                            if (!stockOrigen || Number(stockOrigen.cantidad_disponible) < cantidad) {
                                throw new common_1.BadRequestException("Stock insuficiente (Material ID: ".concat(materialId, ") en la bodega de origen."));
                            }
                            _a.label = 8;
                        case 8:
                            if (!(dto.tipo === movimiento_inventario_entity_1.TipoMovimiento.INGRESO || dto.tipo === movimiento_inventario_entity_1.TipoMovimiento.TRANSFERENCIA)) return [3 /*break*/, 10];
                            return [4 /*yield*/, queryRunner.manager.findOne(inventario_entity_1.Inventario, {
                                    where: { bodega: { id: dto.bodegaDestinoId }, material: { id: Number(materialId) } },
                                    lock: { mode: 'pessimistic_write' },
                                })];
                        case 9:
                            stockDestino = _a.sent();
                            if (!stockDestino) {
                                stockDestino = queryRunner.manager.create(inventario_entity_1.Inventario, {
                                    bodega_id: dto.bodegaDestinoId,
                                    material_id: Number(materialId),
                                    cantidad_disponible: 0,
                                    cantidad_reservada: 0,
                                });
                            }
                            _a.label = 10;
                        case 10:
                            stockAntes = {
                                origen: stockOrigen ? Number(stockOrigen.cantidad_disponible) : null,
                                destino: stockDestino ? Number(stockDestino.cantidad_disponible) : null,
                            };
                            if (!stockOrigen) return [3 /*break*/, 12];
                            stockOrigen.cantidad_disponible = Number(stockOrigen.cantidad_disponible) - cantidad;
                            return [4 /*yield*/, queryRunner.manager.save(inventario_entity_1.Inventario, stockOrigen)];
                        case 11:
                            _a.sent();
                            _a.label = 12;
                        case 12:
                            if (!stockDestino) return [3 /*break*/, 14];
                            stockDestino.cantidad_disponible = Number(stockDestino.cantidad_disponible) + cantidad;
                            return [4 /*yield*/, queryRunner.manager.save(inventario_entity_1.Inventario, stockDestino)];
                        case 13:
                            _a.sent();
                            _a.label = 14;
                        case 14:
                            auditoriaSnapshot.push({
                                materialId: materialId,
                                cantidadMovida: cantidad,
                                stockAntes: stockAntes,
                                stockDespues: {
                                    origen: stockOrigen ? Number(stockOrigen.cantidad_disponible) : null,
                                    destino: stockDestino ? Number(stockDestino.cantidad_disponible) : null,
                                }
                            });
                            _a.label = 15;
                        case 15:
                            _i++;
                            return [3 /*break*/, 5];
                        case 16: return [4 /*yield*/, queryRunner.commitTransaction()];
                        case 17:
                            _a.sent();
                            this.auditoriaService.registrarAccion(usuarioId, "MOVIMIENTO_INVENTARIO_".concat(dto.tipo), 'Movimientos', {
                                movimientoId: savedMovimiento.id,
                                tipo: dto.tipo,
                                bodegas: { origen: dto.bodegaOrigenId, destino: dto.bodegaDestinoId },
                                observaciones: dto.observaciones,
                                trazabilidad_stock: auditoriaSnapshot
                            });
                            return [2 /*return*/, savedMovimiento];
                        case 18:
                            error_1 = _a.sent();
                            return [4 /*yield*/, queryRunner.rollbackTransaction()];
                        case 19:
                            _a.sent();
                            if (error_1 instanceof common_1.BadRequestException)
                                throw error_1;
                            throw new common_1.InternalServerErrorException("Fallo cr\u00EDtico en el motor transaccional: ".concat(error_1.message));
                        case 20: return [4 /*yield*/, queryRunner.release()];
                        case 21:
                            _a.sent();
                            return [7 /*endfinally*/];
                        case 22: return [2 /*return*/];
                    }
                });
            });
        };
        MovimientosService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.reqRepository.find({
                                relations: { detalles: true, proyecto: true, usuarioSolicitante: true },
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        MovimientosService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var req;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.reqRepository.findOne({
                                where: { id: id },
                                relations: { detalles: { material: true }, proyecto: true, usuarioSolicitante: true },
                            })];
                        case 1:
                            req = _a.sent();
                            if (!req) {
                                throw new common_1.NotFoundException("Requerimiento #".concat(id, " no encontrado"));
                            }
                            return [2 /*return*/, req];
                    }
                });
            });
        };
        MovimientosService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var req;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            req = _a.sent();
                            if (req.estado !== requirement_entity_1.RequirementStatus.PENDIENTE) {
                                throw new common_1.BadRequestException('Solo se pueden eliminar requerimientos pendientes');
                            }
                            return [4 /*yield*/, this.reqRepository.remove(req)];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return MovimientosService_1;
    }());
    __setFunctionName(_classThis, "MovimientosService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MovimientosService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MovimientosService = _classThis;
}();
exports.MovimientosService = MovimientosService;
