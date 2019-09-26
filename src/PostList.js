import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import Post from './Post'

class PostList extends React.Component {
  render() {
    const {
      userPosts: { posts, name }
    } = this.props

    return (
      <section>
        <p>{name}</p>
        <ul>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      </section>
    )
  }
}

export default createFragmentContainer(PostList, {
  userPosts: graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<PropName>'
    fragment PostList_userPosts on User {
      posts {
        id
        # We use the fragment defined by the child Post component here
        ...Post_post
      }
      name
    }
  `
})
