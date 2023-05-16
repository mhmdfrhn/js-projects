export const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage!";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "halaman tidak dapat ditemukan dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page!";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "halaman tidak dapat ditemukan dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "name" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}`;
      }

      return `Hello ${name}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "halaman tidak dapat ditemukan";
    },
  },
];
