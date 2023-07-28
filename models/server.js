//Servidor de Express
const express = require('express');
// Servidor de Sockets
const http = require('http')
// Configuracion del Scoket Server
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Http Server
        this.server = http.createServer(this.app);
        // Consifiguracion se sockets
        this.io = socketio(this.server, {/* Configuraciones*/});
    }
    middlewares(){    
    // Desplegar el directorio publico
    this.app.use(express.static( path.resolve(__dirname,'../public')))
    }
    cofigurarSockets() {
        new Sockets(this.io);
    }
    execute() {
        //inicializar middlewares
        this.middlewares();
        //inicializar sockets
        this.cofigurarSockets();
        //inicializar Server
        this.server.listen(this.port, ()=> {console.log('Server corriendo en el pueto 8080')});
    }
}
module.exports = Server;
