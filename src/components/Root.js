import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import store from '../store/configureStore'

const Root = ({ children }) => <Provider store={store}>{children}</Provider>

Root.propTypes = {
  children: PropTypes.node,
}

export default Root
