'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.errorLogger = exports.logger = void 0;
const winston_1 = require('winston');
const { combine, timestamp, label, printf, prettyPrint } = winston_1.format;
const winston_daily_rotate_file_1 = __importDefault(
  require('winston-daily-rotate-file')
);
const path_1 = __importDefault(require('path'));
//custom format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minuite = date.getMinutes();
  const second = date.getSeconds();
  return `${date.toDateString()} ${hour} : ${minuite} : ${second} [${label}] ${level}: ${message}`;
});
// info massage
exports.logger = (0, winston_1.createLogger)({
  level: 'info',
  format: combine(label({ label: 'UM' }), timestamp(), myFormat, prettyPrint()),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston_1.transports.Console(),
    new winston_daily_rotate_file_1.default({
      filename: path_1.default.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'UM-%DATE%-success.log'
      ),
      level: 'info',
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '1d',
    }),
  ],
});
//error Logger
exports.errorLogger = (0, winston_1.createLogger)({
  level: 'error',
  format: combine(label({ label: 'UM' }), timestamp(), myFormat, prettyPrint()),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston_1.transports.Console(),
    new winston_daily_rotate_file_1.default({
      filename: path_1.default.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'UM-%DATE%-error.log'
      ),
      level: 'error',
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '1d',
    }),
  ],
});
// logs/winston/success/ PHU.log, error.log
