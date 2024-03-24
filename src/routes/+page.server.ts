import { env } from "$env/dynamic/public";
import * as agent from "$lib/agent";
import type { PageServerLoad } from "./$types";

const base = `${env.PUBLIC_API_URI}/api`

export interface ListingData {
  data: Listing[]
}

export interface Listing {
  id: string
  created_at: Date
}

export const load: PageServerLoad = async () => {
  const listings: ListingData = await agent.get(
    `${base}/v1/list?page_number=1&page_size=10`,
  )
  return listings
}
