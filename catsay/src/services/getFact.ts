import type { Fact } from '../types'

const API_FACT_URL = 'https://catfact.ninja/fact'

export const getFact = async (): Promise<Fact> => {
  const response = await fetch(API_FACT_URL)
  const json = await response.json()
  return json.fact
}
