const Hapi = require("@hapi/hapi");
const routes = require("./routes");

// initial http server
const init = async () => {
  // create http server
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // route config
  server.route(routes);

  // running server
  await server.start();

  console.log(`Server running on ${server.info.uri}`);
};

// call http server
init();
