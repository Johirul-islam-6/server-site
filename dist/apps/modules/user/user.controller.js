'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreateUserController = void 0;
const catchAsync_1 = require('../../../shared/catchAsync');
const sendResponse_1 = require('../../../shared/sendResponse');
const http_status_1 = __importDefault(require('http-status'));
const user_services_1 = require('./user.services');
const user_model_1 = require('./user.model');
const config_1 = __importDefault(require('../../../config'));
//## catchAsync is a costom Hook error handeling try-catch  | shared/catchAsync file |
// ## sendResponse is a responsiv data costom Hook reated | shared/sendResponse file |]
//01. ==========> created an user functionality =========>
const userCreated = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    // export (user) user.services.ts file
    const result = yield user_services_1.UserServices.createdUser(user);
    (0, sendResponse_1.sendResponse)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      data: result,
      message: 'A User created successfully',
    });
  })
);
//02.========> login a user email, password ==========>
const loginAuth = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const loginData = req.body;
    const result = yield user_services_1.UserServices.loginUser(loginData);
    if (result !== null) {
      const { refreshToken } = result,
        others = __rest(result, ['refreshToken']);
      // Set refresh token in cookies
      const cookiesOption = {
        secure: config_1.default.evn === 'production',
        httpOnly: true,
      };
      res.cookie('refreshToken', refreshToken, cookiesOption);
      (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        data: others,
        message: 'A User successfully Login',
      });
    } else {
      // Handle the case where login is unsuccessful
      (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.UNAUTHORIZED,
        success: false,
        message: 'Login failed. Invalid credentials.',
      });
    }
  })
);
// 03. ======> get all users functionality an business small logic ========>
const getUsers = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find({});
    res.send(result);
  })
);
// exported there CreateUserController | Or imported there user.routes.ts file |
exports.CreateUserController = {
  userCreated,
  getUsers,
  loginAuth,
};
