'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = require('../../middlewares/validateRequest');
const user_validation_1 = require('./user.validation');
const user_controller_1 = require('./user.controller');
const router = express_1.default.Router();
// https://gdg.community.dev/gdg-dhaka/
// ## this all user route
//  created a user
// get all user
//01. create a user
router.post(
  '/create-user',
  (0, validateRequest_1.validateRequest)(
    user_validation_1.UserValidation.createUserZodSchema
  ),
  user_controller_1.CreateUserController.userCreated
);
// 02. login a user email , password
router.post(
  '/login',
  (0, validateRequest_1.validateRequest)(
    user_validation_1.UserValidation.loginUserZodSchema
  ),
  user_controller_1.CreateUserController.loginAuth
);
router.get('/', user_controller_1.CreateUserController.getUsers);
exports.UserRoutes = router;
