import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}
 
const getData = async () => {
  return('Hello World')
}

export default async function handler(req: NextRequest) {
  const result = await getData();

  return new Response(
    JSON.stringify({
      result,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}