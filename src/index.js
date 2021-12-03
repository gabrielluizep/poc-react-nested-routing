import React from 'react'
import ReactDOM from 'react-dom'

import { Routing } from 'navigation/index.js'

import { BrowserRouter } from 'react-router-dom'

import 'styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
