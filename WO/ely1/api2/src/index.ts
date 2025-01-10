import { Elysia } from "elysia";
import { plugin } from "./plugin";


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
    console.log(store['plugin-version'])
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
