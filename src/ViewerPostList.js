import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import PostList from './PostList'

import environment from './environment'

export default class ViewerPostList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          # Operation names in graphql tags must be prefixed
          # with the module name and end in "Mutation", "Query", or "Subscription"
          query ViewerPostListQuery($where: UserWhereUniqueInput!) {
            user(where: $where) {
              id
              # Re-use the fragment here
              ...PostList_userPosts
            }
          }
        `}
        variables={{ where: { id: 'ck0yqro110wpl0b40pu2euozh' } }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return (
            <div>
              <div>Post list for User {props.user.id}:</div>
              <PostList userPosts={props.user} />
            </div>
          )
        }}
      />
    )
  }
}
