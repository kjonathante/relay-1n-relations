import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'

class Post extends React.Component {
  render() {
    const {
      post: { id, text, published }
    } = this.props

    return (
      <li>
        <div>
          <p>Post ID: {id}</p>
          <p>{text}</p>
          <input checked={published} type="checkbox" readOnly />
          <label>Published</label>
        </div>
      </li>
    )
  }
}

export default createFragmentContainer(
  Post,
  // Each key specified in this object will correspond to a prop available to the component
  {
    post: graphql`
      # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
      fragment Post_post on Post {
        id
        text
        published
      }
    `
  }
)
