import React from 'react'
import ReactDOM from 'react-dom'

import Container from './components/container'
import './styl/base.styl'
import { drawLoop, initialize } from './components/Firefly'

initialize()
drawLoop()

// ReactDOM.render(<Container />, document.getElementById('root'))
// hmr replacement
if (module.hot) {
  module.hot.accept()
}
