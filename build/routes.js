"use strict";
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
exports.__esModule = true;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var tsoa_1 = require("tsoa");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var sheets_1 = require("./sheets");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var models = {
    "SheetRow": {
        "dataType": "refObject",
        "properties": {},
        "additionalProperties": { "dataType": "any" }
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Any": {
        "dataType": "refObject",
        "properties": {},
        "additionalProperties": { "dataType": "any" }
    }
};
var validationService = new tsoa_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(router) {
    var _this = this;
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    router.get('/:documentId/:sheetId', function (context, next) { return __awaiter(_this, void 0, void 0, function () {
        var args, validatedArgs, controller, promise;
        return __generator(this, function (_a) {
            args = {
                documentId: { "in": "path", "name": "documentId", "required": true, "dataType": "string" },
                sheetId: { "in": "path", "name": "sheetId", "required": true, "dataType": "string" },
                request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                accessToken: { "in": "header", "name": "x-google-access-token", "dataType": "string" },
                offset: { "default": 0, "in": "query", "name": "offset", "dataType": "double" },
                limit: { "default": 100, "in": "query", "name": "limit", "dataType": "double" }
            };
            validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, context);
            }
            catch (error) {
                context.status = error.status;
                context["throw"](error.status, JSON.stringify({ fields: error.fields }));
            }
            controller = new sheets_1.SheetController();
            promise = controller.getRows.apply(controller, validatedArgs);
            return [2 /*return*/, promiseHandler(controller, promise, context, next)];
        });
    }); });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    router.get('/:documentId/:sheetId/info', function (context, next) { return __awaiter(_this, void 0, void 0, function () {
        var args, validatedArgs, controller, promise;
        return __generator(this, function (_a) {
            args = {
                documentId: { "in": "path", "name": "documentId", "required": true, "dataType": "string" },
                sheetId: { "in": "path", "name": "sheetId", "required": true, "dataType": "string" },
                accessToken: { "in": "header", "name": "x-google-access-token", "dataType": "string" }
            };
            validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, context);
            }
            catch (error) {
                context.status = error.status;
                context["throw"](error.status, JSON.stringify({ fields: error.fields }));
            }
            controller = new sheets_1.SheetController();
            promise = controller.getSheetInfo.apply(controller, validatedArgs);
            return [2 /*return*/, promiseHandler(controller, promise, context, next)];
        });
    }); });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    router.get('/:documentId/:sheetId/:rowId', function (context, next) { return __awaiter(_this, void 0, void 0, function () {
        var args, validatedArgs, controller, promise;
        return __generator(this, function (_a) {
            args = {
                documentId: { "in": "path", "name": "documentId", "required": true, "dataType": "string" },
                sheetId: { "in": "path", "name": "sheetId", "required": true, "dataType": "string" },
                rowId: { "in": "path", "name": "rowId", "required": true, "dataType": "double" },
                accessToken: { "in": "header", "name": "x-google-access-token", "dataType": "string" }
            };
            validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, context);
            }
            catch (error) {
                context.status = error.status;
                context["throw"](error.status, JSON.stringify({ fields: error.fields }));
            }
            controller = new sheets_1.SheetController();
            promise = controller.getRow.apply(controller, validatedArgs);
            return [2 /*return*/, promiseHandler(controller, promise, context, next)];
        });
    }); });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    router.put('/:documentId/:sheetId/:rowId', function (context, next) { return __awaiter(_this, void 0, void 0, function () {
        var args, validatedArgs, controller, promise;
        return __generator(this, function (_a) {
            args = {
                documentId: { "in": "path", "name": "documentId", "required": true, "dataType": "string" },
                sheetId: { "in": "path", "name": "sheetId", "required": true, "dataType": "string" },
                rowId: { "in": "path", "name": "rowId", "required": true, "dataType": "double" },
                body: { "in": "body", "name": "body", "required": true, "ref": "SheetRow" },
                accessToken: { "in": "header", "name": "x-google-access-token", "dataType": "string" }
            };
            validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, context);
            }
            catch (error) {
                context.status = error.status;
                context["throw"](error.status, JSON.stringify({ fields: error.fields }));
            }
            controller = new sheets_1.SheetController();
            promise = controller.updateRow.apply(controller, validatedArgs);
            return [2 /*return*/, promiseHandler(controller, promise, context, next)];
        });
    }); });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    router.put('/:documentId/:sheetId/:rowId/bulk', function (context, next) { return __awaiter(_this, void 0, void 0, function () {
        var args, validatedArgs, controller, promise;
        return __generator(this, function (_a) {
            args = {
                documentId: { "in": "path", "name": "documentId", "required": true, "dataType": "string" },
                sheetId: { "in": "path", "name": "sheetId", "required": true, "dataType": "string" },
                rowId: { "in": "path", "name": "rowId", "required": true, "dataType": "double" },
                body: { "in": "body", "name": "body", "required": true, "dataType": "array", "array": { "ref": "SheetRow" } },
                accessToken: { "in": "header", "name": "x-google-access-token", "dataType": "string" }
            };
            validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, context);
            }
            catch (error) {
                context.status = error.status;
                context["throw"](error.status, JSON.stringify({ fields: error.fields }));
            }
            controller = new sheets_1.SheetController();
            promise = controller.updateRowsBulk.apply(controller, validatedArgs);
            return [2 /*return*/, promiseHandler(controller, promise, context, next)];
        });
    }); });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    router.post('/:documentId/:sheetId', function (context, next) { return __awaiter(_this, void 0, void 0, function () {
        var args, validatedArgs, controller, promise;
        return __generator(this, function (_a) {
            args = {
                documentId: { "in": "path", "name": "documentId", "required": true, "dataType": "string" },
                sheetId: { "in": "path", "name": "sheetId", "required": true, "dataType": "string" },
                body: { "in": "body", "name": "body", "required": true, "ref": "SheetRow" },
                accessToken: { "in": "header", "name": "x-google-access-token", "dataType": "string" }
            };
            validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, context);
            }
            catch (error) {
                context.status = error.status;
                context["throw"](error.status, JSON.stringify({ fields: error.fields }));
            }
            controller = new sheets_1.SheetController();
            promise = controller.createRow.apply(controller, validatedArgs);
            return [2 /*return*/, promiseHandler(controller, promise, context, next)];
        });
    }); });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    router.post('/:documentId/:sheetId/bulk', function (context, next) { return __awaiter(_this, void 0, void 0, function () {
        var args, validatedArgs, controller, promise;
        return __generator(this, function (_a) {
            args = {
                documentId: { "in": "path", "name": "documentId", "required": true, "dataType": "string" },
                sheetId: { "in": "path", "name": "sheetId", "required": true, "dataType": "string" },
                body: { "in": "body", "name": "body", "required": true, "dataType": "array", "array": { "ref": "SheetRow" } },
                accessToken: { "in": "header", "name": "x-google-access-token", "dataType": "string" }
            };
            validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, context);
            }
            catch (error) {
                context.status = error.status;
                context["throw"](error.status, JSON.stringify({ fields: error.fields }));
            }
            controller = new sheets_1.SheetController();
            promise = controller.createRowsBulk.apply(controller, validatedArgs);
            return [2 /*return*/, promiseHandler(controller, promise, context, next)];
        });
    }); });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    router.get('/:documentId', function (context, next) { return __awaiter(_this, void 0, void 0, function () {
        var args, validatedArgs, controller, promise;
        return __generator(this, function (_a) {
            args = {
                documentId: { "in": "path", "name": "documentId", "required": true, "dataType": "string" },
                accessToken: { "in": "header", "name": "x-google-access-token", "dataType": "string" }
            };
            validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, context);
            }
            catch (error) {
                context.status = error.status;
                context["throw"](error.status, JSON.stringify({ fields: error.fields }));
            }
            controller = new sheets_1.SheetController();
            promise = controller.getDocumentInfo.apply(controller, validatedArgs);
            return [2 /*return*/, promiseHandler(controller, promise, context, next)];
        });
    }); });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, context, next) {
        return Promise.resolve(promise)
            .then(function (data) {
            if (data || data === false) {
                context.body = data;
                context.status = 200;
            }
            else {
                context.status = 204;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            if (isController(controllerObj)) {
                var headers_1 = controllerObj.getHeaders();
                Object.keys(headers_1).forEach(function (name) {
                    context.set(name, headers_1[name]);
                });
                var statusCode = controllerObj.getStatus();
                if (statusCode) {
                    context.status = statusCode;
                }
            }
            return next();
        })["catch"](function (error) {
            context.status = error.status || 500;
            context["throw"](context.status, error.message, error);
        });
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, context) {
        var errorFields = {};
        var values = Object.keys(args).map(function (key) {
            var name = args[key].name;
            switch (args[key]["in"]) {
                case 'request':
                    return context.request;
                case 'query':
                    return validationService.ValidateParam(args[key], context.request.query[name], name, errorFields, undefined, { "specVersion": 3 });
                case 'path':
                    return validationService.ValidateParam(args[key], context.params[name], name, errorFields, undefined, { "specVersion": 3 });
                case 'header':
                    return validationService.ValidateParam(args[key], context.request.headers[name], name, errorFields, undefined, { "specVersion": 3 });
                case 'body':
                    return validationService.ValidateParam(args[key], context.request.body, name, errorFields, name + '.', { "specVersion": 3 });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], context.request.body[name], name, errorFields, 'body.', { "specVersion": 3 });
            }
        });
        if (Object.keys(errorFields).length > 0) {
            throw new tsoa_1.ValidateError(errorFields, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
