# DEI Holder Subgraph

indexes all dei holder from block 22875881.

## Entities:

```
type TransferTransaction @entity {
  id: ID!
  from: Bytes!
  to: Bytes!
  amount: BigInt!
}

type Holder @entity {
  id: ID!
  address: Bytes!
}
```

## Use

### Playground

the subgraph is deployed at: [spsina/dei-holder](https://thegraph.com/hosted-service/subgraph/spsina/dei-holde)

### Subgraph endpoints:

- Queries (HTTP): https://api.thegraph.com/subgraphs/name/spsina/dei-holder
- Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/spsina/dei-holder

## Dev

### setup

```bash
$ yarn global add @graphprotocol/graph-cli
$ yarn install
$ yarn codegen
```

### deploy

```bash
$ graph auth --product hosted-service <ACCESS_TOKEN>
$ graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>
```
