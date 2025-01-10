// Web server

import figlet from 'figlet'

const server = Bun.serve({
  port: 8080,
  fetch(req) {
    const body = figlet.textSync("Fuck")
    return new Response("Suck and fuck ");
  },
});

console.log("listening on localpanty http://localhost:${server.port}")