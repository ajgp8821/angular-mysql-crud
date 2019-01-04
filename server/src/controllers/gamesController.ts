import { Request, Response } from 'express';

// No importa el nombre con que se traiga
import pool from '../database'

class GamesController {

    // Método para obtener todos los juegos
    public async list (req: Request, res: Response): Promise<void> {
        // res.send('Games');
        // res.send('Hola Games');
        // const a = pool.query('DESCRIBE games');
        console.log(req.body);
        const games = await pool.query('SELECT * FROM games');
        // res.json({text: 'Listing games', games});
        res.json(games);
    }

    // Método para obtener un juego
    public async getOne (req: Request, res: Response): Promise<any> {
        // res.json({text: 'This is game ' + req.params.id});
        // Destructuring JavaScript
        const { id } = req.params; // Obtener una parte de un objeto
        const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if (game.length > 0){
            // return res.json({text: 'This is game ' + req.params.id, 'game': game[0]});
            return res.json(game[0]);
        }
        res.status(404).json({'text': "The game doesn't exists"});
    }

    // Método para crear un juego
    public async create (req: Request, res: Response): Promise<void> {
        // Tendrá los valores de los datos que están enviado las aplicaciones clientes
        console.log(req.body);
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Game Saved'});
    }

    // Método para actualizar un juego
    public async update (req: Request, res: Response): Promise<void>{
        // res.json({text: 'updating a game ' + req.params.id});
        const { id } = req.params;
        await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The game was updated'});
    }

    // Método para eliminar un juego
    public async delete (req: Request, res: Response): Promise<void> {
        // res.json({text: 'deleting a game ' + req.params.id});
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res .json({text: 'The game was deleted'})
    }

}

const gamesController = new GamesController();
export default gamesController;