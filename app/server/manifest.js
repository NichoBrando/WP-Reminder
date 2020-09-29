module.exports = {
  server: {
    port: 3000,
    routes: {
      cors: true,
    },
  },
  register: {
    plugins: [
      {
        plugin: "../lib", // Main plugin
        options: {},
      },
    ],
  },
};
