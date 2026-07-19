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
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var mongoose_1 = require("@nestjs/mongoose");
var users_module_1 = require("./users/users.module");
var auditoria_module_1 = require("./auditoria/auditoria.module");
var auth_module_1 = require("./auth/auth.module");
var proveedores_module_1 = require("./proveedores/proveedores.module");
var inventario_module_1 = require("./inventario/inventario.module");
var categorias_module_1 = require("./categorias/categorias.module");
var materiales_module_1 = require("./materiales/materiales.module");
var proyectos_module_1 = require("./proyectos/proyectos.module");
var bodegas_module_1 = require("./bodegas/bodegas.module");
var movimientos_module_1 = require("./movimientos/movimientos.module");
var requirements_module_1 = require("./requirements/requirements.module");
var compras_module_1 = require("./compras/compras.module");
var ajustes_inventario_module_1 = require("./ajustes-inventario/ajustes-inventario.module");
var pdf_module_1 = require("./pdf/pdf.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var solicitudes_compra_module_1 = require("./solicitudes-compra/solicitudes-compra.module");
var cotizaciones_module_1 = require("./cotizaciones/cotizaciones.module");
var AppModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                }),
                typeorm_1.TypeOrmModule.forRootAsync({
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: function (configService) { return ({
                        type: 'postgres',
                        host: configService.get('DB_HOST'),
                        port: configService.get('DB_PORT', 5432),
                        username: configService.get('DB_USERNAME'),
                        password: configService.get('DB_PASSWORD'),
                        database: configService.get('DB_DATABASE'),
                        autoLoadEntities: true,
                        synchronize: true,
                    }); },
                }),
                mongoose_1.MongooseModule.forRootAsync({
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: function (configService) { return ({
                        uri: configService.get('MONGO_URI'),
                    }); },
                }),
                users_module_1.UsersModule,
                auditoria_module_1.AuditoriaModule,
                auth_module_1.AuthModule,
                proveedores_module_1.ProveedoresModule,
                categorias_module_1.CategoriasModule,
                materiales_module_1.MaterialesModule,
                proyectos_module_1.ProyectosModule,
                bodegas_module_1.BodegasModule,
                proveedores_module_1.ProveedoresModule,
                inventario_module_1.InventarioModule,
                movimientos_module_1.MovimientosModule,
                requirements_module_1.RequirementsModule,
                compras_module_1.ComprasModule,
                ajustes_inventario_module_1.AjustesInventarioModule,
                pdf_module_1.PdfModule,
                dashboard_module_1.DashboardModule,
                solicitudes_compra_module_1.SolicitudesCompraModule,
                cotizaciones_module_1.CotizacionesModule,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppModule = _classThis = /** @class */ (function () {
        function AppModule_1() {
        }
        return AppModule_1;
    }());
    __setFunctionName(_classThis, "AppModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
}();
exports.AppModule = AppModule;
