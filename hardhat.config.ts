import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// const GOERLI_URL = process.env.GOERLI_URL as string;
const SEPOLIA_URL = process.env.SEPOLIA_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
