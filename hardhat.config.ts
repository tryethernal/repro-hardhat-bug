import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      forking: {
        url: 'https://rpc.ankr.com/eth',
      }
    }
  }
};

export default config;
