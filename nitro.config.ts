// nitro.config.ts
import * as dotenv from 'dotenv'
import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  routeRules: {
    '/**': { cors: true }
  }    
})