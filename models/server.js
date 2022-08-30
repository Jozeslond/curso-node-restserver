const express = require("express");
var cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/user';

    // middleware
    this.middleware();

    // application routes
    this.routes();
  }

  middleware() {
    this.app.use(express.static("public"));
    this.app.use(cors());
    //read and write
    this.app.use(express.json())
  }

  routes() {
    this.app.use(this.usersPath , require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
