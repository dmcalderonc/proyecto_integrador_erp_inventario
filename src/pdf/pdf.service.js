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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfService = void 0;
var common_1 = require("@nestjs/common");
var PdfService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PdfService = _classThis = /** @class */ (function () {
        function PdfService_1() {
            this.fonts = {
                Helvetica: {
                    normal: 'Helvetica',
                    bold: 'Helvetica-Bold',
                    italics: 'Helvetica-Oblique',
                    bolditalics: 'Helvetica-BoldOblique',
                },
            };
        }
        PdfService_1.prototype.getPrinter = function () {
            return __awaiter(this, void 0, void 0, function () {
                var pdfMakeModule, PdfPrinter;
                return __generator(this, function (_a) {
                    pdfMakeModule = eval('require("pdfmake")');
                    if (typeof pdfMakeModule === 'function') {
                        PdfPrinter = pdfMakeModule;
                    }
                    else if (pdfMakeModule && typeof pdfMakeModule.default === 'function') {
                        PdfPrinter = pdfMakeModule.default;
                    }
                    else if (pdfMakeModule && typeof pdfMakeModule.Printer === 'function') {
                        PdfPrinter = pdfMakeModule.Printer;
                    }
                    else {
                        PdfPrinter = pdfMakeModule;
                    }
                    return [2 /*return*/, new PdfPrinter(this.fonts)];
                });
            });
        };
        PdfService_1.prototype.generarOrdenCompraPdf = function (orden) {
            return __awaiter(this, void 0, void 0, function () {
                var printer, proveedor, detallesBody, docDefinition;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getPrinter()];
                        case 1:
                            printer = _b.sent();
                            proveedor = orden.proveedor || {};
                            detallesBody = ((_a = orden.detalles) === null || _a === void 0 ? void 0 : _a.map(function (det) { return [
                                det.id.toString(),
                                det.cantidad.toString(),
                                "$".concat(det.precioUnitario),
                                "$".concat((det.cantidad * det.precioUnitario).toFixed(2)),
                            ]; })) || [];
                            docDefinition = {
                                defaultStyle: { font: 'Helvetica' },
                                content: [
                                    { text: 'ORDEN DE COMPRA', style: 'header', alignment: 'center' },
                                    { text: "Lugar y Fecha de Emisi\u00F3n: Quito, Ecuador - ".concat(new Date(orden.fechaEmision).toLocaleDateString()), margin: [0, 10, 0, 10] },
                                    { text: "C\u00F3digo de Orden: ".concat(orden.codigo || 'S/N'), bold: true },
                                    { text: "Estado: ".concat(orden.estado), margin: [0, 0, 0, 15] },
                                    { text: 'Datos del Proveedor', style: 'subheader' },
                                    {
                                        layout: 'lightHorizontalLines',
                                        table: {
                                            widths: ['auto', '*'],
                                            body: [
                                                ['Razón Social:', proveedor.razon_social || 'N/A'],
                                                ['RUC:', proveedor.ruc || 'N/A'],
                                                ['Email:', proveedor.email || 'N/A'],
                                                ['Dirección:', proveedor.direccion || 'N/A'],
                                            ],
                                        },
                                        margin: [0, 0, 0, 15]
                                    },
                                    { text: 'Detalle de Materiales', style: 'subheader' },
                                    {
                                        layout: 'lightHorizontalLines',
                                        table: {
                                            headerRows: 1,
                                            widths: ['*', 'auto', 'auto', 'auto'],
                                            body: __spreadArray([
                                                [{ text: 'Ítem', bold: true }, { text: 'Cantidad', bold: true }, { text: 'Precio U.', bold: true }, { text: 'Total', bold: true }]
                                            ], detallesBody, true)
                                        },
                                        margin: [0, 0, 0, 20]
                                    },
                                    {
                                        columns: [
                                            { width: '*', text: '' },
                                            {
                                                width: 'auto',
                                                table: {
                                                    body: [
                                                        ['Subtotal:', "$".concat(orden.subtotal || 0)],
                                                        ['Impuestos:', "$".concat(orden.impuestos || 0)],
                                                        [{ text: 'TOTAL:', bold: true }, { text: "$".concat(orden.total || 0), bold: true }]
                                                    ]
                                                },
                                                layout: 'noBorders'
                                            }
                                        ]
                                    }
                                ],
                                styles: {
                                    header: { fontSize: 22, bold: true, margin: [0, 0, 0, 10] },
                                    subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
                                }
                            };
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    try {
                                        var pdfDoc = printer.createPdfKitDocument(docDefinition);
                                        var chunks_1 = [];
                                        pdfDoc.on('data', function (chunk) { return chunks_1.push(chunk); });
                                        pdfDoc.on('end', function () { return resolve(Buffer.concat(chunks_1)); });
                                        pdfDoc.on('error', function (error) { return reject(error); });
                                        pdfDoc.end();
                                    }
                                    catch (error) {
                                        reject(error);
                                    }
                                })];
                    }
                });
            });
        };
        PdfService_1.prototype.generarTicketMovimientoPdf = function (movimiento) {
            return __awaiter(this, void 0, void 0, function () {
                var printer, docDefinition;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.getPrinter()];
                        case 1:
                            printer = _c.sent();
                            docDefinition = {
                                defaultStyle: { font: 'Helvetica' },
                                content: [
                                    { text: 'TICKET DE DESPACHO / TRANSFERENCIA', style: 'header', alignment: 'center' },
                                    { text: "Fecha: ".concat(new Date(movimiento.fecha).toLocaleString()), margin: [0, 10, 0, 10] },
                                    { text: "Tipo: ".concat(movimiento.tipo), bold: true },
                                    { text: "Bodega Origen: ".concat(((_a = movimiento.bodegaOrigen) === null || _a === void 0 ? void 0 : _a.nombre) || 'N/A') },
                                    { text: "Bodega Destino / Obra: ".concat(((_b = movimiento.bodegaDestino) === null || _b === void 0 ? void 0 : _b.nombre) || 'N/A'), margin: [0, 0, 0, 20] },
                                    { text: 'Firmas de Responsabilidad', style: 'subheader', margin: [0, 50, 0, 30], alignment: 'center' },
                                    {
                                        columns: [
                                            { text: '_________________________\nEntregué Conforme', alignment: 'center' },
                                            { text: '_________________________\nRecibí Conforme', alignment: 'center' }
                                        ]
                                    }
                                ],
                                styles: {
                                    header: { fontSize: 18, bold: true },
                                    subheader: { fontSize: 14, bold: true },
                                }
                            };
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    try {
                                        var pdfDoc = printer.createPdfKitDocument(docDefinition);
                                        var chunks_2 = [];
                                        pdfDoc.on('data', function (chunk) { return chunks_2.push(chunk); });
                                        pdfDoc.on('end', function () { return resolve(Buffer.concat(chunks_2)); });
                                        pdfDoc.on('error', function (error) { return reject(error); });
                                        pdfDoc.end();
                                    }
                                    catch (error) {
                                        reject(error);
                                    }
                                })];
                    }
                });
            });
        };
        return PdfService_1;
    }());
    __setFunctionName(_classThis, "PdfService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PdfService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PdfService = _classThis;
}();
exports.PdfService = PdfService;
