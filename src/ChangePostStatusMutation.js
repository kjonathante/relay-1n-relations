import { graphql, commitMutation } from 'react-relay'

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation ChangePostStatusMutation(
    $data: PostUpdateInput!
    $where: PostWhereUniqueInput!
  ) {
    updatePost(data: $data, where: $where) {
      id
      text
      published
    }
  }
`

function commit(environment, published, post) {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      where: { id: post.id },
      data: { published }
    }
  })
}

export default { commit }
