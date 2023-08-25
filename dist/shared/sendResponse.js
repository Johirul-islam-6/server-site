"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
// constom sendREsponse
const sendResponse = (res, data) => {
    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        meta: data.meta || null || undefined,
        data: data.data || null || undefined,
        message: data.message || null,
    };
    res.status(data.statusCode).json(responseData);
};
exports.sendResponse = sendResponse;
