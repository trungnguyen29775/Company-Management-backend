const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const db = require('./model');
const httpServer = createServer(app);
const port = 5000;

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
    },
});

io.on('connection', (socket) => {
    console.log('User connected: ', socket.id);
    socket.on('online', ({ usernameOnline }) => {
        socket.join(usernameOnline);
    });
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db.sequelize.sync({ alter: true });

require('./controller/users.controller')(app);
require('./controller/project.controller')(app);

httpServer.listen(port, () => {
    console.log('Listen on port ', port);
});
