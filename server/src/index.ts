import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

// Clase que iniciará el Servidor
class Server{

    public app: Application;

    constructor(){
        this.app = express(); // Inicializa express y retorna un objeto
        this.config();
        this.routes();
    }

    config(): void{
        // Configuramos el puerto
        this.app.set('port', process.env.PORT || 3300); // Si existe un puerto lo usa, en caso contrario usa el 3000
        // Vemos las peticiones del navegador, la ruta, respuesta del serv y tiempo
        this.app.use(morgan('dev'));
        // Pide datos al servidor
        this.app.use(cors());
        // Permite aceptar formatos json de aplicaciones cliente
        this.app.use(express.json());
        // Para enviar desde un formulario HTML
        this.app.use(express.urlencoded({extended: false}));
    }

    // Agregamos las rutas
    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    // Inicia el servidor
    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();