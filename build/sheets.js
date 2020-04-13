"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var tsoa_1 = require("tsoa");
var koa = require("koa");
var pMap = require("p-map");
var pick = require("lodash.pick");
var utils = require("./utils");
var SheetController = /** @class */ (function (_super) {
    __extends(SheetController, _super);
    function SheetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheetController.prototype.getRows = function (documentId, sheetId, request, accessToken, offset, limit) {
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 100; }
        return __awaiter(this, void 0, void 0, function () {
            var doc, sheet, _a, _, __, query;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, utils.getDocument(documentId, accessToken)];
                    case 1:
                        doc = _b.sent();
                        return [4 /*yield*/, utils.getSheet(doc, sheetId)];
                    case 2:
                        sheet = _b.sent();
                        _a = request.ctx.query, _ = _a.offset, __ = _a.limit, query = __rest(_a, ["offset", "limit"]);
                        console.log('GET', "/" + documentId + "/" + sheetId, {
                            doc: doc.title,
                            sheet: sheet.title,
                            query: query,
                            offset: offset,
                            limit: limit
                        });
                        return [2 /*return*/, utils.getSheetRows(sheet, { offset: offset, limit: limit, query: query })];
                }
            });
        });
    };
    SheetController.prototype.getSheetInfo = function (documentId, sheetId, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, sheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils.getDocument(documentId, accessToken)];
                    case 1:
                        doc = _a.sent();
                        return [4 /*yield*/, utils.getSheet(doc, sheetId)];
                    case 2:
                        sheet = _a.sent();
                        console.log('GET', "/" + documentId + "/" + sheetId + "/info", {
                            doc: doc.title,
                            sheet: sheet.title
                        });
                        return [2 /*return*/, pick(sheet, [
                                'sheetId',
                                'title',
                                'index',
                                'headerValues',
                                'rowCount',
                                'columnCount',
                                'cellStats',
                                'sheetType',
                                'gridProperties',
                                'hidden',
                                'tabColor',
                                'rightToLeft'
                            ])];
                }
            });
        });
    };
    SheetController.prototype.getRow = function (documentId, sheetId, rowId, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, sheet, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils.getDocument(documentId, accessToken)];
                    case 1:
                        doc = _a.sent();
                        return [4 /*yield*/, utils.getSheet(doc, sheetId)];
                    case 2:
                        sheet = _a.sent();
                        console.log('GET', "/" + documentId + "/" + sheetId + "/" + rowId, {
                            doc: doc.title,
                            sheet: sheet.title
                        });
                        return [4 /*yield*/, utils.getSheetRows(sheet, {
                                offset: rowId,
                                limit: 1
                            })];
                    case 3:
                        rows = _a.sent();
                        return [2 /*return*/, rows[0]];
                }
            });
        });
    };
    SheetController.prototype.updateRow = function (documentId, sheetId, rowId, body, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, sheet, gRows, gRow, row, _i, _a, key;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, utils.getDocument(documentId, accessToken)];
                    case 1:
                        doc = _b.sent();
                        return [4 /*yield*/, utils.getSheet(doc, sheetId)];
                    case 2:
                        sheet = _b.sent();
                        console.log('PUT', "/" + documentId + "/" + sheetId + "/" + rowId, {
                            doc: doc.title,
                            sheet: sheet.title,
                            body: body
                        });
                        return [4 /*yield*/, sheet.getRows({
                                offset: rowId,
                                limit: 1
                            })];
                    case 3:
                        gRows = _b.sent();
                        gRow = gRows[0];
                        row = body;
                        for (_i = 0, _a = sheet.headerValues; _i < _a.length; _i++) {
                            key = _a[_i];
                            gRow[key] = row[key];
                        }
                        return [4 /*yield*/, gRow.save()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, utils.encodeSheetRow(sheet, gRow)];
                }
            });
        });
    };
    SheetController.prototype.updateRowsBulk = function (documentId, sheetId, rowId, body, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, sheet, gRows, i, gRow, row, _i, _a, key;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, utils.getDocument(documentId, accessToken)];
                    case 1:
                        doc = _b.sent();
                        return [4 /*yield*/, utils.getSheet(doc, sheetId)];
                    case 2:
                        sheet = _b.sent();
                        console.log('PUT', "/" + documentId + "/" + sheetId + "/" + rowId + "/bulk", {
                            doc: doc.title,
                            sheet: sheet.title,
                            body: body
                        });
                        return [4 /*yield*/, sheet.getRows({
                                offset: rowId,
                                limit: body.length
                            })];
                    case 3:
                        gRows = _b.sent();
                        for (i = 0; i < gRows.length; ++i) {
                            gRow = gRows[i];
                            row = body[i];
                            for (_i = 0, _a = sheet.headerValues; _i < _a.length; _i++) {
                                key = _a[_i];
                                gRow[key] = row[key];
                            }
                        }
                        return [4 /*yield*/, pMap(gRows, function (gRow) { return gRow.save(); }, { concurrency: 4 })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SheetController.prototype.createRow = function (documentId, sheetId, body, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, sheet, gRow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils.getDocument(documentId, accessToken)];
                    case 1:
                        doc = _a.sent();
                        return [4 /*yield*/, utils.getSheet(doc, sheetId)];
                    case 2:
                        sheet = _a.sent();
                        console.log('POST', "/" + documentId + "/" + sheetId, {
                            doc: doc.title,
                            sheet: sheet.title,
                            body: body
                        });
                        return [4 /*yield*/, sheet.addRow(body)];
                    case 3:
                        gRow = _a.sent();
                        return [2 /*return*/, utils.encodeSheetRow(sheet, gRow)];
                }
            });
        });
    };
    SheetController.prototype.createRowsBulk = function (documentId, sheetId, body, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, sheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils.getDocument(documentId, accessToken)];
                    case 1:
                        doc = _a.sent();
                        return [4 /*yield*/, utils.getSheet(doc, sheetId)];
                    case 2:
                        sheet = _a.sent();
                        console.log('POST', "/" + documentId + "/" + sheetId + "/bulk", {
                            doc: doc.title,
                            sheet: sheet.title,
                            body: body
                        });
                        return [4 /*yield*/, sheet.addRows(body)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SheetController.prototype.getDocumentInfo = function (documentId, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils.getDocument(documentId, accessToken)];
                    case 1:
                        doc = _a.sent();
                        console.log('GET', "/" + documentId, { doc: doc.title });
                        return [2 /*return*/, pick(doc, [
                                'spreadsheetId',
                                'title',
                                'locale',
                                'timeZone',
                                'autoRecalc',
                                'defaultFormat',
                                'spreadsheetTheme',
                                'iterativeCalculationSettings',
                                'sheetCount'
                            ])];
                }
            });
        });
    };
    __decorate([
        tsoa_1.Get('{documentId}/{sheetId}'),
        __param(2, tsoa_1.Request()),
        __param(3, tsoa_1.Header('x-google-access-token')),
        __param(4, tsoa_1.Query()),
        __param(5, tsoa_1.Query()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, String, Number, Number]),
        __metadata("design:returntype", Promise)
    ], SheetController.prototype, "getRows");
    __decorate([
        tsoa_1.Get('{documentId}/{sheetId}/info'),
        __param(2, tsoa_1.Header('x-google-access-token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SheetController.prototype, "getSheetInfo");
    __decorate([
        tsoa_1.Get('{documentId}/{sheetId}/{rowId}'),
        __param(3, tsoa_1.Header('x-google-access-token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number, String]),
        __metadata("design:returntype", Promise)
    ], SheetController.prototype, "getRow");
    __decorate([
        tsoa_1.Put('{documentId}/{sheetId}/{rowId}'),
        __param(3, tsoa_1.Body()),
        __param(4, tsoa_1.Header('x-google-access-token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number, Object, String]),
        __metadata("design:returntype", Promise)
    ], SheetController.prototype, "updateRow");
    __decorate([
        tsoa_1.Put('{documentId}/{sheetId}/{rowId}/bulk'),
        __param(3, tsoa_1.Body()),
        __param(4, tsoa_1.Header('x-google-access-token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number, Array, String]),
        __metadata("design:returntype", Promise)
    ], SheetController.prototype, "updateRowsBulk");
    __decorate([
        tsoa_1.Post('{documentId}/{sheetId}'),
        __param(2, tsoa_1.Body()),
        __param(3, tsoa_1.Header('x-google-access-token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, String]),
        __metadata("design:returntype", Promise)
    ], SheetController.prototype, "createRow");
    __decorate([
        tsoa_1.Post('{documentId}/{sheetId}/bulk'),
        __param(2, tsoa_1.Body()),
        __param(3, tsoa_1.Header('x-google-access-token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Array, String]),
        __metadata("design:returntype", Promise)
    ], SheetController.prototype, "createRowsBulk");
    __decorate([
        tsoa_1.Get('{documentId}'),
        __param(1, tsoa_1.Header('x-google-access-token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], SheetController.prototype, "getDocumentInfo");
    SheetController = __decorate([
        tsoa_1.Route()
    ], SheetController);
    return SheetController;
}(tsoa_1.Controller));
exports.SheetController = SheetController;
