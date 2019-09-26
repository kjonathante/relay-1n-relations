import { Environment, Network, RecordSource, Store } from 'relay-runtime'

function fetchQuery(operation, variables) {
  return fetch('https://us1.prisma.sh/kjonathante-151c9e/service-1n/dev', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json()
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})

export default environment
