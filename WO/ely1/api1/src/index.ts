import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello fucker")
  .get('/post/:id', ({ params: { id } }) => { return { id: id, title: 'learnPanty', comment: 'Sniffing and licking' } })
  .post('/post', ({ body, set }) => {
    set.status = 201
    return body
  })
  .get('/track/*', () => { return 'Track Routes' })
  .get('/tracks', () => {
    return new Response(JSON.stringify(
      "tracks": [
      "Panty Smelling",
      "Panty Licking",
      "Panty Sniffing",
    ]
    ))
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
