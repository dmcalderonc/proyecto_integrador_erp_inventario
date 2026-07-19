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
exports.DashboardService = void 0;
// src/dashboard/dashboard.service.ts
var common_1 = require("@nestjs/common");
var proyecto_entity_1 = require("../proyectos/proyecto.entity");
var DashboardService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DashboardService = _classThis = /** @class */ (function () {
        function DashboardService_1(proyectoRepo, requirementRepo, inventarioRepo, auditoriaService) {
            this.proyectoRepo = proyectoRepo;
            this.requirementRepo = requirementRepo;
            this.inventarioRepo = inventarioRepo;
            this.auditoriaService = auditoriaService;
        }
        DashboardService_1.prototype.obtenerKpis = function () {
            return __awaiter(this, void 0, void 0, function () {
                var proyectosActivos, requerimientosPendientesRaw, requerimientosPendientes, stockQuery, totalStock, totalInventario, error_1;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 4, , 5]);
                            return [4 /*yield*/, this.proyectoRepo
                                    .createQueryBuilder('proyecto')
                                    .where('proyecto.estado = :estado', { estado: proyecto_entity_1.EstadoProyecto.ACTIVO })
                                    .getCount()];
                        case 1:
                            proyectosActivos = _c.sent();
                            return [4 /*yield*/, this.requirementRepo.query("\n        SELECT COUNT(*) as count \n        FROM requerimientos \n        WHERE estado = 'PENDIENTE'\n      ")];
                        case 2:
                            requerimientosPendientesRaw = _c.sent();
                            requerimientosPendientes = parseInt(((_a = requerimientosPendientesRaw[0]) === null || _a === void 0 ? void 0 : _a.count) || '0', 10);
                            return [4 /*yield*/, this.inventarioRepo.query("\n        SELECT SUM(cantidad_disponible) AS \"totalStock\"\n        FROM stock_bodega\n      ")];
                        case 3:
                            stockQuery = _c.sent();
                            totalStock = parseFloat(((_b = stockQuery[0]) === null || _b === void 0 ? void 0 : _b.totalStock) || '0');
                            totalInventario = totalStock * 10.00;
                            return [2 /*return*/, {
                                    proyectosActivos: proyectosActivos,
                                    requerimientosPendientes: requerimientosPendientes,
                                    valorizacionTotalInventario: Number(totalInventario.toFixed(2)),
                                }];
                        case 4:
                            error_1 = _c.sent();
                            throw new common_1.InternalServerErrorException('Error al calcular KPIs del dashboard: ' + error_1.message);
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        DashboardService_1.prototype.obtenerAlertasStock = function (umbral) {
            return __awaiter(this, void 0, void 0, function () {
                var error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.inventarioRepo
                                    .createQueryBuilder('inv')
                                    .innerJoinAndSelect('inv.material', 'material')
                                    .leftJoinAndSelect('inv.bodega', 'bodega')
                                    .where('inv.cantidad_disponible < :umbral', { umbral: umbral })
                                    .getMany()];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            error_2 = _a.sent();
                            throw new common_1.InternalServerErrorException('Error al consultar alertas de stock: ' + error_2.message);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        DashboardService_1.prototype.obtenerLineaTiempo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.auditoriaService.obtenerLogsRecientes()];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            error_3 = _a.sent();
                            throw new common_1.InternalServerErrorException('Error al cargar la línea de tiempo: ' + error_3.message);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return DashboardService_1;
    }());
    __setFunctionName(_classThis, "DashboardService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DashboardService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DashboardService = _classThis;
}();
exports.DashboardService = DashboardService;
