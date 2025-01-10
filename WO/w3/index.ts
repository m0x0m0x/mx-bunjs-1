// Web server

import figlet from 'figlet'

const server = Bun.serve({
  port: 8080,
  fetch(req) {
    const url = new URL(req.url);

    // Adding a route
    if (url.pathname === "/") {
      const body = figlet.textSync("SmellPanty")
      return new Response(body);
    }

    // about page route
    if (url.pathname === "/about") {
      const body = "<h1>Lickasses</h1>"
      return new Response(body, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    }

    // Contact form render 
    if (url.pathname === "/contact") {
      return new Response(contactUsPage, {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    }

    //handle error 
    if (url.pathname === "/error") {
      throw new Error("Fucked");
    }

    return new Response("Not Found", { status: 404 });
  },

  error(error) {
    return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  },

});

console.log("listening on localpanty http://localhost:${server.port}")

// This is the page 

const contactUsPage = `<!DOCTYPE html>
<html>
  <head>
    <title>Contact Us</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
>
  </head>
  <body>
  <div class="container">
    <h1>Contact Us</h1>
    <form method="post" action="/contact">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <br>
      <input type="submit" value="Submit">
    </form>
    </div>
  </body>
</html>`