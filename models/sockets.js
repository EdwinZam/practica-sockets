class Sockets{
    constructor(io){
        this.io = io;
        this.socktesEvents();
    }
    socktesEvents(){
        // On Connection
        this.io.on('connection', (socket) => {
            //escuchar el evento: 'mensaje-to-server'
            socket.on('mensaje-to-server', (data)=>{
                console.log(data);
                this.io.emit('mensaje-from-server', data)
            })
        });
    }
}

module.exports = Sockets;

// io.on('connection', (socket) => {
//     // console.log(socket.id);
//     // socket.emit('mensaje-bienvenida',{
//     //     msg: 'Bienvenido al server',
//     //     fecha: new Date()
//     // });
//     socket.on('mensaje-to-server', (data)=>{
//         console.log(data);
//         io.emit('mensaje-from-server', data)
//     })
//  });
