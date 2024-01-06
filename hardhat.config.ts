import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.8.19",
      },
      {
        version: "0.8.20",
      },
    ],
  },
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    polygon: {
      url: "https://rpc.ankr.com/polygon",
    },
    phalcon: {
      url: "https://rpc.phalcon.xyz/rpc_5a49f3fff2c24ee1a39f7f263bf75d62",
      chainId: 137
    }
  },
};

export default config;
