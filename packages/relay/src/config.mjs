import { ethers } from 'ethers'
import { config } from 'dotenv'
config()

export const UNIREP_ADDRESS = process.env.UNIREP_ADDRESS ?? '0xCa61bFcA0107c5952f8bf59f4D510d111cbcE146'
export const CANON_ADDRESS = process.env.CANON_ADDRESS ?? '0x25575Fb6C5599d84e87e55392B531736ec9a4ecB'
export const ETH_PROVIDER_URL = process.env.ETH_PROVIDER_URL ?? 'https://arbitrum.goerli.unirep.io'
// export const ETH_PROVIDER_URL = process.env.ETH_PROVIDER_URL ?? 'http://localhost:8545'
// export const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '0x4fba49cf81efd3609744b42bfaafbd1fa55b381ee9de06045677842cf38ee940'
// export const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '0x0f70e777f814334daa4456ac32b9a1fdca75ae07f70c2e6cef92679bad06c88b'
export const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'

export const DB_PATH = process.env.DB_PATH ?? ':memory:'

export const provider = ETH_PROVIDER_URL.startsWith('http') ? new ethers.providers.JsonRpcProvider(ETH_PROVIDER_URL) : new ethers.providers.WebSocketProvider(ETH_PROVIDER_URL)
