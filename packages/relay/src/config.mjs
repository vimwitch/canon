import { ethers } from 'ethers'
import { config } from 'dotenv'
config()

export const UNIREP_ADDRESS = process.env.UNIREP_ADDRESS ?? '0xba01c6d23909cdD4F3edAf3a0B97096E46aec227'
export const CANON_ADDRESS = process.env.CANON_ADDRESS ?? '0x60817191260F11021d3c39F763907b7655156ac4'
export const ETH_PROVIDER_URL = process.env.ETH_PROVIDER_URL ?? 'https://goerli-arb.tubby.cloud'
export const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '0x4fba49cf81efd3609744b42bfaafbd1fa55b381ee9de06045677842cf38ee940'

export const DB_PATH = process.env.DB_PATH ?? ':memory:'

export const provider = ETH_PROVIDER_URL.startsWith('http') ? new ethers.providers.JsonRpcProvider(ETH_PROVIDER_URL) : new ethers.providers.WebSocketProvider(ETH_PROVIDER_URL)
