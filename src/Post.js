import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import ChangePostStatusMutation from './ChangePostStatusMutation'

class Post extends React.Component {
  _handleOnCheckboxChange = e => {
    const published = e.target.checked
    ChangePostStatusMutation.commit(
      this.props.relay.environment,
      published,
      this.props.post
    )
  }

  render() {
    const {
      post: { id, text, published }
    } = this.props

    return (
      <li>
        <div>
          <p>Post ID: {id}</p>
          <p>{text}</p>
          <input
            checked={published}
            type="checkbox"
            readOnly
            onChange={this._handleOnCheckboxChange}
          />
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
