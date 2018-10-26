import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Root from './Root'
import Theme from './Theme'
import ScrollToTop from './hoc/ScrollToTop'
import Normalize from './Normalize/Normalize'
import MainHeader from './organisms/MainHeader'

import Home from './pages/Home'

const App = () => (
  <Root>
    <Router>
      <Theme>
        <>
          <Normalize />
          <MainHeader />
          <ScrollToTop>
            <>
              <Route exact path="/" component={Home} />
            </>
          </ScrollToTop>
        </>
      </Theme>
    </Router>
  </Root>
)

export default hot(module)(App)
