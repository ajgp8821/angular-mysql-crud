"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        // res.send('Hello');
        res.json({ text: 'API Is /api/games' });
    }
}
exports.indexController = new IndexController();
