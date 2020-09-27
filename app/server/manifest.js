module.exports = {
  server: {
    port: 3000,
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
