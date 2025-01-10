// Web server

const server = Bun.serve({
  port: 8080,
  fetch(req) {
    return new Response("Lick her ass and pussy");
  },
});

console.log("listening on localpanty http://localhost:${server.port}")