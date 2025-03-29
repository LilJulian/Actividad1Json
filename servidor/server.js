const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(
  jsonServer.rewriter({
    "/futbolistas": "/players",
    "/equipos": "/teams",
    "/ligas": "/leagues",
    "/estadios": "/stadiums",
    "/futbolistas/:id": "/players/:id",
    "/equipos/:id": "/teams/:id",
    "/ligas/:id": "/leagues/:id",
    "/estadios/:id": "/stadiums/:id"
  })
);
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})