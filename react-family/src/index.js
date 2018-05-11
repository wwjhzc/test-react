import React from 'react'
import ReactDom from 'react-dom'
import App from './module/app'
if(module.hot){
    module.hot.accept()
}
const rootNode = document.getElementById('app')
ReactDom.render(
    <App />,
    rootNode
)