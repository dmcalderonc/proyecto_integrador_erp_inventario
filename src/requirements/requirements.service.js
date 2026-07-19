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
exports.RequirementsService = void 0;
var common_1 = require("@nestjs/common");
var requirement_entity_1 = require("./entities/requirement.entity");
var inventario_entity_1 = require("../inventario/inventario.entity");
var movimiento_inventario_entity_1 = require("../movimientos/entities/movimiento-inventario.entity");
var detalle_movimiento_entity_1 = require("../movimientos/entities/detalle-movimiento.entity");
var RequirementsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RequirementsService = _classThis = /** @class */ (function () {
        function RequirementsService_1(reqRepository, dataSource) {
            this.reqRepository = reqRepository;
            this.dataSource = dataSource;
            this.BODEGA_CENTRAL_ID = 1;
        }
        RequirementsService_1.prototype.create = function (createDto, userId) {
            return __awaiter(this, void 0, void 0, function () {
                var requirement, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            requirement = this.reqRepository.create({
                                proyectoId: createDto.proyectoId,
                                usuarioSolicitanteId: userId,
                                estado: requirement_entity_1.RequirementStatus.PENDIENTE,
                                detalles: createDto.detalles.map(function (detalle) { return ({
                                    materialId: detalle.materialId,
                                    cantidadSolicitada: detalle.cantidadSolicitada,
                                }); }),
                            });
                            return [4 /*yield*/, this.reqRepository.save(requirement)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            error_1 = _a.sent();
                            console.log('--- ERROR DETALLADO ---');
                            console.log(error_1);
                            throw new common_1.InternalServerErrorException(error_1.message);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        RequirementsService_1.prototype.updateStatus = function (id, updateDto, userId) {
            return __awaiter(this, void 0, void 0, function () {
                var queryRunner, req, _i, _a, detalle, stock, disponible, movimiento, movimientoGuardado, _b, _c, detalle, stock, detalleMov, result, error_2;
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            queryRunner = this.dataSource.createQueryRunner();
                            return [4 /*yield*/, queryRunner.connect()];
                        case 1:
                            _e.sent();
                            return [4 /*yield*/, queryRunner.startTransaction()];
                        case 2:
                            _e.sent();
                            _e.label = 3;
                        case 3:
                            _e.trys.push([3, 21, 23, 25]);
                            return [4 /*yield*/, queryRunner.manager.findOne(requirement_entity_1.Requirement, {
                                    where: { id: id },
                                    relations: {
                                        detalles: true,
                                        proyecto: { bodega: true },
                                    },
                                })];
                        case 4:
                            req = _e.sent();
                            if (!req)
                                throw new common_1.NotFoundException('Requerimiento no encontrado');
                            if (!(updateDto.estado === requirement_entity_1.RequirementStatus.APROBADO && req.estado === requirement_entity_1.RequirementStatus.PENDIENTE)) return [3 /*break*/, 10];
                            _i = 0, _a = req.detalles;
                            _e.label = 5;
                        case 5:
                            if (!(_i < _a.length)) return [3 /*break*/, 9];
                            detalle = _a[_i];
                            return [4 /*yield*/, queryRunner.manager.findOne(inventario_entity_1.Inventario, {
                                    where: { bodega: { id: this.BODEGA_CENTRAL_ID }, material: { id: detalle.materialId } },
                                })];
                        case 6:
                            stock = _e.sent();
                            disponible = Number((stock === null || stock === void 0 ? void 0 : stock.cantidad_disponible) || 0);
                            if (!stock || disponible < detalle.cantidadSolicitada) {
                                throw new common_1.BadRequestException("Stock insuficiente para el material ID: ".concat(detalle.materialId));
                            }
                            stock.cantidad_disponible = disponible - detalle.cantidadSolicitada;
                            stock.cantidad_reservada = Number(stock.cantidad_reservada || 0) + detalle.cantidadSolicitada;
                            return [4 /*yield*/, queryRunner.manager.save(stock)];
                        case 7:
                            _e.sent();
                            _e.label = 8;
                        case 8:
                            _i++;
                            return [3 /*break*/, 5];
                        case 9: return [3 /*break*/, 18];
                        case 10:
                            if (!(updateDto.estado === requirement_entity_1.RequirementStatus.ATENDIDO && req.estado === requirement_entity_1.RequirementStatus.APROBADO)) return [3 /*break*/, 18];
                            movimiento = queryRunner.manager.create(movimiento_inventario_entity_1.MovimientoInventario, {
                                tipo: movimiento_inventario_entity_1.TipoMovimiento.TRANSFERENCIA,
                                fecha: new Date(),
                                observaciones: "Egreso autom\u00E1tico por Requerimiento REQ-".concat(req.id),
                                usuarioId: userId,
                                bodegaOrigenId: this.BODEGA_CENTRAL_ID,
                                bodegaDestinoId: ((_d = req.proyecto.bodega) === null || _d === void 0 ? void 0 : _d.id) || null,
                                estado: movimiento_inventario_entity_1.EstadoMovimiento.PROCESADO,
                            });
                            return [4 /*yield*/, queryRunner.manager.save(movimiento)];
                        case 11:
                            movimientoGuardado = _e.sent();
                            _b = 0, _c = req.detalles;
                            _e.label = 12;
                        case 12:
                            if (!(_b < _c.length)) return [3 /*break*/, 18];
                            detalle = _c[_b];
                            return [4 /*yield*/, queryRunner.manager.findOne(inventario_entity_1.Inventario, {
                                    where: { bodega: { id: this.BODEGA_CENTRAL_ID }, material: { id: detalle.materialId } },
                                })];
                        case 13:
                            stock = _e.sent();
                            if (!stock) return [3 /*break*/, 15];
                            stock.cantidad_reservada = Number(stock.cantidad_reservada || 0) - detalle.cantidadSolicitada;
                            return [4 /*yield*/, queryRunner.manager.save(stock)];
                        case 14:
                            _e.sent();
                            _e.label = 15;
                        case 15:
                            detalleMov = queryRunner.manager.create(detalle_movimiento_entity_1.DetalleMovimiento, {
                                movimientoId: movimientoGuardado.id,
                                materialId: detalle.materialId,
                                cantidad: detalle.cantidadSolicitada,
                            });
                            return [4 /*yield*/, queryRunner.manager.save(detalleMov)];
                        case 16:
                            _e.sent();
                            _e.label = 17;
                        case 17:
                            _b++;
                            return [3 /*break*/, 12];
                        case 18:
                            req.estado = updateDto.estado;
                            return [4 /*yield*/, queryRunner.manager.save(req)];
                        case 19:
                            result = _e.sent();
                            return [4 /*yield*/, queryRunner.commitTransaction()];
                        case 20:
                            _e.sent();
                            return [2 /*return*/, result];
                        case 21:
                            error_2 = _e.sent();
                            return [4 /*yield*/, queryRunner.rollbackTransaction()];
                        case 22:
                            _e.sent();
                            throw error_2 instanceof common_1.BadRequestException || error_2 instanceof common_1.NotFoundException
                                ? error_2
                                : new common_1.InternalServerErrorException('Error procesando el requerimiento: ' + error_2.message);
                        case 23: return [4 /*yield*/, queryRunner.release()];
                        case 24:
                            _e.sent();
                            return [7 /*endfinally*/];
                        case 25: return [2 /*return*/];
                    }
                });
            });
        };
        RequirementsService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.reqRepository.find({
                                relations: { detalles: true, proyecto: true, usuarioSolicitante: true }
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RequirementsService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.reqRepository.findOne({
                                where: { id: id },
                                relations: { detalles: { material: true }, proyecto: true }
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        RequirementsService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.reqRepository.delete(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return RequirementsService_1;
    }());
    __setFunctionName(_classThis, "RequirementsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RequirementsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RequirementsService = _classThis;
}();
exports.RequirementsService = RequirementsService;
