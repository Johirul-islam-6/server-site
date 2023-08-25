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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CreateEventController = void 0;
const catchAsync_1 = require('../../../shared/catchAsync');
const event_services_1 = require('./event.services');
const sendResponse_1 = require('../../../shared/sendResponse');
const http_status_1 = __importDefault(require('http-status'));
const quaryPick_1 = require('../../../shared/quaryPick');
const event_model_1 = require('./event.model');
//## catchAsync is a costom Hook created | shared/catchAsync file |
// ## sendResponse is a costom Hook reated | shared/sendResponse file |
//01. created an Event functionality
const createEvent = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const eventdata = req.body;
    // export (eventdata) to  event.services.ts file
    const result = yield event_services_1.eventServices.createServices(
      eventdata
    );
    (0, sendResponse_1.sendResponse)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      data: result,
      message: 'user create a event successfully',
    });
  })
);
//02. get all event  querys function
const getAllEventQuerys = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    // this is filters property
    const filtering = (0, quaryPick_1.queryPick)(req.query, [
      'searchTerm',
      'title',
      'location',
      'start_date',
      'end_date',
      'email',
      'cetagory',
    ]);
    // pagination option property field
    const pagintionField = ['page', 'limit', 'sortBy', 'sortOrder'];
    // querypick is costom funtcion
    const paginationOption = (0, quaryPick_1.queryPick)(
      req.query,
      pagintionField
    );
    const result = yield event_services_1.eventServices.eventQuerysServices(
      filtering,
      paginationOption
    );
    console.log('inside data', result);
    (0, sendResponse_1.sendResponse)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'get all event successfully',
      meta: result === null || result === void 0 ? void 0 : result.meta,
      data: result === null || result === void 0 ? void 0 : result.data,
    });
  })
);
//03. singel details  Event functionality
const singelDetailsEvent = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const singelEvent = req.params.id;
    const result = yield event_services_1.eventServices.detailsServices(
      singelEvent
    );
    (0, sendResponse_1.sendResponse)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      data: result,
      message: 'display details event successfully',
    });
  })
);
//04.  Edite  Event functionality
const EditeEvent = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateEventData = req.body;
    const result = yield event_services_1.eventServices.editeServices(
      id,
      updateEventData
    );
    (0, sendResponse_1.sendResponse)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      data: result,
      message: 'Edited event successfully',
    });
  })
);
//04.  Delete a Event functionality
const DeleteEvent = (0, catchAsync_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    const result = yield event_model_1.EventModel.deleteOne(id);
    (0, sendResponse_1.sendResponse)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      data: result,
      message: 'Delete event successfully',
    });
  })
);
// exported there CreateEventController |  imported there event.createUserController.ts file |
exports.CreateEventController = {
  createEvent,
  getAllEventQuerys,
  singelDetailsEvent,
  EditeEvent,
  DeleteEvent,
};
