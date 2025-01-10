import { Elysia } from "elysia";

// Define Plugin - Plugin Usage 
export const plugin = new Elysia()
    .state('plugin-version', 1)
    .get('/form-plugin', () => 'Fuck')
    .get('/greet', () => 'Lick Pussy')
    .get('/greet/:name', ({ params: { name } }) => `Lick Pussy ${name}`)
