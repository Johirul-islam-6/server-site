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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = require("../../../errors/ApiError");
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
// ==============> all user business logic applies  this services page ================>
// -----> single user created business logic------>
const createdUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createAuser = yield user_model_1.User.create(user);
    if (!createAuser) {
        throw new Error('Faild to Create A user');
    }
    return createAuser;
});
// -----> Login User business logic ------->
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // check user exist
    const isUserExist = yield user_model_1.User.findOne({ email }, { email: 1, password: 1 }).lean();
    if (!isUserExist) {
        throw new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, 'user does not exist', '');
    }
    // create accessToken Token
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ email: isUserExist.email }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    // create refreshToken Token
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ email: isUserExist.email }, config_1.default.jwt.expires_in, config_1.default.jwt.refresh_expires_in);
    //  ## user password Match to the database Password
    const isPasswordMatch = yield bcrypt_1.default.compare(password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
    if (!isPasswordMatch) {
        throw new ApiError_1.ApiError(http_status_1.default.UNAUTHORIZED, 'Your Password incorrect', '');
    }
    return {
        accessToken,
        refreshToken,
    };
});
// exported there UserServices | Or imported there user.createUserController.ts file |
exports.UserServices = {
    createdUser,
    loginUser,
};
