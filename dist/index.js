"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Importação da funcionalidades do express no arquivo index*/
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
/** arquivo externo que faz a utilização das funcionalidades do express */
app.get('/', routes_1.default);
app.listen(3333);
