const { JsonRpcProvider } = require('ethers');

const rpcServer = 'http://localhost:8545';
const provider = new JsonRpcProvider(rpcServer);

provider.on('error', error => {
    console.log(error)
});

provider.on('block', blockNumber => {
    console.log(blockNumber);
});
