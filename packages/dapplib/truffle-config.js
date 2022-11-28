require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remind concert grace cash fringe stool'; 
let testAccounts = [
"0xf59b79e8e3eebe2023c23cccf8ccd3d82c68d554dbe83336ce25d8438375a328",
"0xf33980e770809e6bcb5d53d62df0aeea65f462f58ff2a4a9e721924607064141",
"0x00b6d175583776e419d5ae6d67d6f6fa22d7b55fe8990b729005fcd78e3774eb",
"0xa733f9ce34dc8b53ff52db333a7921b8d62be900c100761ddce94315289b1e7a",
"0xd223ff32e3c8414ab2adc7a67ac4d0dbfacffe203a82a37afb1e41aec1767f14",
"0x65fb4ae4c1c18af3083549ebd0b2abd6470dc0d899f4a12f142234d9c7f2dbc3",
"0x87a10527276dccb25238640d99f96a049c1178d310251cc3e27d7b96a03cb8e5",
"0x0871b0d847d0a4f205f9df85229885eab0b9aa5b2c74bc86a0f6b5acc1267306",
"0x99859ad18cfa64779f74f5729befac084d9c177c1a8d44025563ca425cbd567f",
"0xb012b6f1152e3783bb098ca5ac556f540b842c5db392dd69e0b8a3e208cc8acb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

