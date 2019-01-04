"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// No importa el nombre con que se traiga
const database_1 = __importDefault(require("../database"));
class GamesController {
    // Método para obtener todos los juegos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.send('Games');
            // res.send('Hola Games');
            // const a = pool.query('DESCRIBE games');
            console.log(req.body);
            const games = yield database_1.default.query('SELECT * FROM games');
            // res.json({text: 'Listing games', games});
            res.json(games);
        });
    }
    // Método para obtener un juego
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text: 'This is game ' + req.params.id});
            // Destructuring JavaScript
            const { id } = req.params; // Obtener una parte de un objeto
            const game = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            if (game.length > 0) {
                // return res.json({text: 'This is game ' + req.params.id, 'game': game[0]});
                return res.json(game[0]);
            }
            res.status(404).json({ 'text': "The game doesn't exists" });
        });
    }
    // Método para crear un juego
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Tendrá los valores de los datos que están enviado las aplicaciones clientes
            console.log(req.body);
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ message: 'Game Saved' });
        });
    }
    // Método para actualizar un juego
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text: 'updating a game ' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The game was updated' });
        });
    }
    // Método para eliminar un juego
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text: 'deleting a game ' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ text: 'The game was deleted' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
