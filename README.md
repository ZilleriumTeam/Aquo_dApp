# 🔥 Auqo

<h4 align="center">
  <a href="https://www.aquoassets.com">Website</a>
  <a href="https://www.youtube.com/@Aquo-tt5bx">YouTube</a>
</h4>

🧪 Aquo is an innovative decentralized finance (DeFi) protocol that enables market liquidity for illiquid Real World Assets (RWAs). Our Ethereum Sidechain is dedicated to tokenization, aggregation and composition of Real World Assets (RWAs) through smart contracts and DAO governance. Aquo token holders can issue tokens for their RWAs on the native chain, swap/bridge RWA tokens from ethereum compatible chains, then aggregate RWA tokens into liquidity pools using composition strategies through our tailored RWA contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, ScaffoldEth and Typescript.

- ✅ **1st ever fully on-chain RWA DeFi protocol**: Financial Building Blocks for tokenization & Financial Instruments.
- 🪝 **RWA DeFi Composition**: Build Complex tradeable financial products.
- 🧱 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Aquo Logo](https://github.com/zillerium/aquoassets/blob/main/public/bluelogo.png)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Aquo, follow the steps below:

1. Clone this repo & install dependencies

```
git clone <repo>
cd Aquo
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/aquoconfig.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Documentation

Visit our [YouTube](https://www.youtube.com/@Aquo-tt5bx) to learn how to start with Aquo.

To know more about its features, check out our [website](https://www.aquoassets.com).

## Contributing to Aquo

We welcome contributions to Aquo!
