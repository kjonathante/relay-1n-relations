// @flow
import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestNode,
  type Variables
} from 'relay-runtime'

async function fetchQuery(
  operation: RequestNode,
  variables: Variables
): Promise<{}> {
  const response = await fetch(
    'https://us1.prisma.sh/kjonathante-151c9e/service-1n/dev',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    }
  )
  return response.json()
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})

export default environment
