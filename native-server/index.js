import http from "http";

const requestListener = (request, response) => {
  const { method } = request;

  if (method === "GET") {
    response.end("<h1>Hello</h1>");
  }

  if (method === "POST") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      const { name } = JSON.parse(body);
      body = Buffer.concat(body).toString();
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
  }

  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;
  // response.end("<h1>Hello HTTP Server!</H1>");
};

const port = 5000;
const host = "localhost";

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
