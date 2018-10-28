import React from 'react'
import { render } from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faCog,
  faEllipsisH,
  faPencilAlt,
  faPlusCircle,
  faSearch,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'

import './firebase/firebase'

import App from './components/App'

library.add(
  faArrowCircleLeft,
  faArrowCircleRight,
  faCog,
  faEllipsisH,
  faPencilAlt,
  faPlusCircle,
  faSearch,
  faTimes,
  faTimesCircle
)

render(<App />, document.getElementById('root'))
