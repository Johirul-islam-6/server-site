"use strict";
/* eslint-disable no-unused-expressions */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandeler = void 0;
const handelValidationError_1 = require("../../errors/handelValidationError");
const config_1 = __importDefault(require("../../config"));
const ApiError_1 = require("../../errors/ApiError");
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../../errors/handleZodError"));
const handleCastError_1 = require("../../errors/handleCastError");
// import { logger } from '../../shared/logger';
const globalErrorHandeler = (error, req, res, next) => {
    //when development or production project
    config_1.default.evn === 'development'
        ? // eslint-disable-next-line no-console
            console.log('Project Run Development Mode ~ ', error)
        : console.log('Project Run Production Mode ~ ', error);
    let statusCode = 500;
    let message = 'somting went wront !';
    let errorMessages = [];
    if ((error === null || error === void 0 ? void 0 : error.name) === 'ValidatorError') {
        const simpliFieldError = (0, handelValidationError_1.handleValidationError)(error);
        statusCode = simpliFieldError.statusCode;
        message = simpliFieldError.message;
        errorMessages = simpliFieldError.errorMessages;
    }
    else if (error instanceof zod_1.ZodError) {
        const simpliFieldError = (0, handleZodError_1.default)(error);
        statusCode = simpliFieldError.statusCode;
        message = simpliFieldError.message;
        errorMessages = simpliFieldError.errorMessages;
    }
    else if ((error === null || error === void 0 ? void 0 : error.name) === 'CastError') {
        const simpliFieldError = (0, handleCastError_1.handleCastError)(error);
        statusCode = simpliFieldError.statusCode;
        message = simpliFieldError.message;
        errorMessages = simpliFieldError.errorMessages;
    }
    else if (error instanceof ApiError_1.ApiError) {
        statusCode = error === null || error === void 0 ? void 0 : error.statusCode;
        message = error === null || error === void 0 ? void 0 : error.message;
        errorMessages = (error === null || error === void 0 ? void 0 : error.message)
            ? [
                {
                    path: '',
                    message: error === null || error === void 0 ? void 0 : error.message,
                },
            ]
            : [];
    }
    else if (error instanceof Error) {
        message = error === null || error === void 0 ? void 0 : error.message;
        errorMessages = error.message
            ? [
                {
                    path: '',
                    message: error.message,
                },
            ]
            : [];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config_1.default.evn !== 'production' ? error === null || error === void 0 ? void 0 : error.stack : undefined,
    });
    next();
};
exports.globalErrorHandeler = globalErrorHandeler;
