# Relay

## Using Fragments

ViewerPostList

```javascript
{
  graphql`
    # Operation names in graphql tags must be prefixed
    # with the module name and end in "Mutation", "Query", or "Subscription"
    query ViewerPostListQuery($where: UserWhereUniqueInput!) {
      user(where: $where) {
        id
        # Re-use the fragment here
        ...PostList_userPosts
      }
    }
  `
}
```

PostList

```javascript
{
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
}
```

Post

```javascript
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
```

ViewerPostList

```jsx
<PostList userPosts={props.user} />
```

PostList

```jsx
const {
  userPosts: { posts, name }
} = this.props

<Post key={post.id} post={post} />
```

Post

```jsx
const {
  post: { id, text, published }
} = this.props
```

## Datamodel

```

type User {
id: ID! @id
name: String!
posts: [Post!]!
}

type Post {
id: ID! @id
text: String!
published: Boolean!
author: User! @relation(link: INLINE)

```
