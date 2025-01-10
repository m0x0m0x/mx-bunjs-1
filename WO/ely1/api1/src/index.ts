import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello fucker")
  .get('/post/:id', ({ params: { id } }) => { return { id: id, title: 'learnPanty', comment: 'Sniffing and licking' } })
  .post('/post', ({ body: { id, title, comment } }) => { return { id: id, title: title, comment: comment } })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
