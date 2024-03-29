/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers')

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      blockGasLimit: 12000000,
    },
    local: {
      url: 'http://localhost:8545',
      accounts: [
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
      ]
    },
    arb: {
      url: 'https://arbitrum.goerli.unirep.io',
      accounts: [
        '0x0f70e777f814334daa4456ac32b9a1fdca75ae07f70c2e6cef92679bad06c88b'
      ]
    }
  },
}
