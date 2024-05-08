require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-goerli.g.alchemy.com/v2/mfq3lw4s7rALx9EP9fGA2atrmB6i6V-e",
      accounts: [
        "2998b79382a67ed85ab6da1c3764b832eb7cd317fce83e3d1a47e7e3c6cb66c7",
      ],
    },
  },
};
