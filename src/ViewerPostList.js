// @flow
import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import PostList from './PostList'

import type { ViewerPostListQueryResponse } from 'ViewerPostListQuery.graphql'

import environment from './environment'

export default class ViewerPostList extends React.Component<{}> {
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
        render={({
          error,
          props
        }: {
          error: ?Error,
          props: ?ViewerPostListQueryResponse
        }) => {
          if (props && props.user) {
            return (
              <div>
                <div>Post list for User {props.user.id}:</div>
                <PostList userPosts={props.user} />
              </div>
            )
          } else if (error) {
            return <div>error.message</div>
          }

          return <div>Loading...</div>
        }}
      />
    )
  }
}
