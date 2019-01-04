"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    // Seteamos las rutas
    config() {
        // Obtener todos los juegos
        this.router.get('/', gamesController_1.default.list);
        // Obtener un juego
        this.router.get('/:id', gamesController_1.default.getOne);
        // Agregar un nuevo juego
        this.router.post('/', gamesController_1.default.create);
        // Actualizar un nuevo juego
        this.router.put('/:id', gamesController_1.default.update);
        //  Eliminar un dato
        this.router.delete('/:id', gamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
