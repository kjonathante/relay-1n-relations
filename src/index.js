// @flow
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import ViewerPostList from './ViewerPostList'

const target = document.getElementById('root')
if (target) {
  ReactDOM.render(<ViewerPostList />, target)
}
