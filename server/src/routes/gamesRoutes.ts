import { Router } from 'express';

import gamesController from '../controllers/gamesController'

class GamesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    // Seteamos las rutas
    config(): void{
        // Obtener todos los juegos
        this.router.get('/', gamesController.list);
        // Obtener un juego
        this.router.get('/:id', gamesController.getOne);
        // Agregar un nuevo juego
        this.router.post('/', gamesController.create);
        // Actualizar un nuevo juego
        this.router.put('/:id', gamesController.update);
        //  Eliminar un dato
        this.router.delete('/:id', gamesController.delete);
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;