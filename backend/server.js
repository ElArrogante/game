import e from "express";
import http from 'http'
import { Server } from "socket.io";

const app = e();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ``,//frontend url
    }
})

io.on('connection', (socket) => {
    console.log('user connected', socket.id);

    /*
    socket.on('custom_msg', (data) => {

        //send to all
        .io.emit('msg')
    })

    socket.on('disconnect', () => {})
    
    
    
    */
    
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log('server running on port', PORT);
    
})
