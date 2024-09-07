const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();

// Set up default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// Bind the auth middleware to your server
server.use(auth);

// Use the router
server.use(router);

server.listen(3000, () => {
  // console.log("JSON Server is running");
});
