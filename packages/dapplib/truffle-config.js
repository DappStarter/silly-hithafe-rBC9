require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture story cruise spider around grid civil army gather'; 
let testAccounts = [
"0x4874fee0af688ef7e7e54932df1db92f70aba76528e32b50569fe80cf365bcaa",
"0xe686b45adb22d205d33138b7e3378c4552e949f533d55c4876367a142c5380de",
"0xef0e7488e1cc1481f6977af2369d334dfd158157c20e77331a7b6dd5b8fd1b35",
"0xfbe2d04c549cf3cfca0be47267d7f64da11c59363537460d2a17da01bd3199fe",
"0xe54a65ae4d8123ab7c97a94e9fa05dccca0a97a1521cabb3fc48c49c0c06081e",
"0x3b321b931f1aae6166da0050ba7c2a9bcd492eaad66afa30ad1a4ab33fd40d4e",
"0xc337b51781979aeb4fb382db1de81e638fc9b6f9ca24c83b16007e6b5b223a4d",
"0x9c2a45a37224a01ce1b98c1408e6dd8adefab2a13411d351eae15f718004c4c5",
"0xae44111b5739cfdf296138bf0bd53ac7584b34771dd11d615100a8c2e530a19f",
"0x3cb5dde8150f5f75a55538f8a192608c74a61e649723166333fbf682666d40d3"
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

