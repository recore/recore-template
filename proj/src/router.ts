export default {
  baseDir: "./pages",
  routes: [{
    path: "/:status",
    main: "./todo"
  }, {
    path: "/",
    main: "./todo"
  }]
};
