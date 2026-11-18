/// <reference types="vite/client" />

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '7sp3ksgg',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
    token: import.meta.env.VITE_SANITY_TOKEN,
})
