module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache GUI
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "^0.5.0", // Change this to your solidity version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
