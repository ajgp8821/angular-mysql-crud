"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
// Clase que iniciará el Servidor
class Server {
    constructor() {
        this.app = express_1.default(); // Inicializa express y retorna un objeto
        this.config();
        this.routes();
    }
    config() {
        // Configuramos el puerto
        this.app.set('port', process.env.PORT || 3300); // Si existe un puerto lo usa, en caso contrario usa el 3000
        // Vemos las peticiones del navegador, la ruta, respuesta del serv y tiempo
        this.app.use(morgan_1.default('dev'));
        // Pide datos al servidor
        this.app.use(cors_1.default());
        // Permite aceptar formatos json de aplicaciones cliente
        this.app.use(express_1.default.json());
        // Para enviar desde un formulario HTML
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // Agregamos las rutas
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    // Inicia el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
