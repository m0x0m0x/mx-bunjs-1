import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello fucker")
  .get('/post/:id', ({ params: { id } }) => { return { id: id, title: 'learnPanty', comment: 'Sniffing and licking' } })
  .post('/post', (context) => { return context })
  .get('/track/*', () => { return 'Track Routes' })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
