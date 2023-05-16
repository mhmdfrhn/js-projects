import http from "http";
const requestListener = (request, response) => {
  // response header
  response.setHeader("Content-Type", "application/json");
  response.setHeader("X-Powered-By", "NodeJS");

  // destructuring request member object
  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(JSON.stringify({ message: "ini adalah halaman homepage!" }));
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `halaman tidak ditemukan dengan ${method} method`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: `Hallo ini halaman about dengan ${method} method!`,
        })
      );
    } else if (method === "POST") {
      response.statusCode = 200;
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(
          JSON.stringify({
            message: `halo ${name}, ini adalah halaman about dengan ${method} method`,
          })
        );
      });
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: "Halaman tidak ditemukan!",
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.end("<h1>Halaman tidak ditemukan!</h1>");
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
