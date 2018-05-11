import React from 'react'
import ReactDom from 'react-dom'
import {Component} from 'react'

// import Home from './component/Home'

class Welcome extends React.Component{
  render(){
    return (
      <div>this is a ES6</div>
    )
  }
}

ReactDom.render(
  <Welcome />, 
  document.getElementById('app')
)