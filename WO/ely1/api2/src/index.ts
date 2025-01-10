import { Elysia } from "elysia";

// Define Plugin - Plugin Usage 
const plugin = new Elysia()
  .state('plugin-version', 1)
  .get('/form-plugin', () => 'Fuck')
  .get('/greet', () => 'Lick Pussy')

// Application 
const app = new Elysia().get("/", () => "Hello fucker")
  .use(plugin)
  .state({
    id: 1,
    email: 'panty@gmail.com'
  })
  .decorate('getDate', () => new Date())
  .get('/post/:id', ({ params: { id } }) => { return { id: id, title: 'learnPanty', comment: 'Sniffing and licking' } })
  .post('/post', ({ body, set, store }) => {
    console.log(store)
    set.status = 201
    return body
  })
  .get('/track/*', () => { return 'Track Routes' })
  .get('/tracks', ({ store, getDate }) => {
    // return new Response(JSON.stringify({
    //   "tracks": [
    //     "Panty Smelling",
    //     "Panty Licking",
    //     "Panty Sniffing",
    //   ]
    // }), {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    console.log('getDate', getDate())
    console.log('store', store)
    return {
      "tracks": [
        "Panty Smelling",
        "Panty Licking",
        "Panty Sniffing",
        "Ass Worship"
      ]
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
