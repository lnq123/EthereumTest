// const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('web3');
// const { interface, bytecode } = require('./compile');
// //0x6D3067A2CDc39314190D0626D06Ec8f97FD74241
// const provider = new HDWalletProvider(
//     'huge spawn donor unique silver fringe solid knock alley artist expand satisfy',
//     'https://rinkeby.infura.io/v3/95c99361e22e4a9fbc7c871c5f8e4d3d'

// );

// const web3 = new Web3(provider);

// const deploy = async () => {
//     const accounts = await web3.eth.getAccount();
    
//     console.log('Attempting to deploy from account', accounts[0]);

//     const result = await new web3.eth.Contract(JSON.parse(interface))
//         .deploy({ date: bytecode, arguments: ['Hi there!']})
//         .send({ gas:'1000000', from: accounts[0]});

//     console.log('Contract deployed to', result.options.address);
// };

// deploy();

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode})
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();