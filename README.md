# Canon

A collaborative story writing system. Gain reputation for authoring portions of the story.

## Getting Started
```
  > git clone https://github.com/vimwitch/canon.git
  > cd canon
  > docker compose build
  > docker compose up
```
The Synchronizer will be running at `localhost:8000`. You can interact with the Canon app in your browser at `localhost:3000`.

## Running Only the Synchronizer
If you don't want to run the frontend for some reason, you can use the docker compose api to run the Synchronizer service alone.
```
  > git clone https://github.com/vimwitch/canon.git
  > cd canon
  > docker compose build synchronizer
  > docker compose run 
```
## Using a different deployment
This repository is linked to a deployed instance of Unirep and Canon. 
```
UNIREP_ADDRESS=0x24b540A1E487fdb0a30140Ad3ADe82CCa5F4e1F4
CANON_ADDRESS=0x8EB848cc903383986153711eEBdd81CA7d88856B
```
You may choose to deploy a new instance of Canon with a different epoch length. In order to do this, take the following steps:

1. change `./packages/contracts/contracts/Canon.sol:87` to the desired time length (ex: 1 hour = `unirep.attesterSignUp(60 * 60)`)
2. in director `./packages/contracts/` run `yarn deploy-arb` to deploy a new version of the contract to arbitrum goerli
3. update `CANON_ADDRESS` in `./packages/frontend/src/config.js`
4. update `CANON_ADDRESS` in `./packages/relay/src/config.mjs`

The synchronizer and the frontend will now point to the fresh deployment.