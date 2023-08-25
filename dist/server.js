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
// /* eslint-disable no-console */
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const app_1 = __importDefault(require("./app"));
// import { logger } from './shared/logger';
// synchronous error handel
process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
});
let server;
// database connected
function DataBase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.databaser_url);
            console.log('📚 Database connected | All Ok');
            server = app_1.default.listen(config_1.default.port, () => {
                console.log(`Run Time listening on port ${config_1.default.port}`);
            });
        }
        catch (error) {
            console.log(`Database Connected fail ::`, error);
        }
        // When
        process.on('unhandledRejection', error => {
            console.log(error);
            if (server) {
                server.close(() => {
                    console.log(error);
                });
            }
            else {
                process.exit(1);
            }
        });
    });
}
DataBase();
// when server stops suddenly off notification call
process.on('SIGTERM', () => {
    console.log('SIGTERM is Resive');
    if (server) {
        server.close();
    }
});
