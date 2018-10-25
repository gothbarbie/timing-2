import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Root from './Root'
import Theme from './Theme'
import ScrollToTop from './hoc/ScrollToTop'
import Loading from './atoms/Loading/Loading'
import Normalize from './Normalize/Normalize'

const Home = () => <div>Home</div>

const ShowButton = () => <Loading />

const App = () => (
  <Root>
    <Router>
      <Theme>
        <>
          <Normalize />
          <ScrollToTop>
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/loading">Loading</Link>
                  </li>
                </ul>
              </nav>
              <Route exact path="/" component={Home} />
              <Route exact path="/loading" component={ShowButton} />
            </>
          </ScrollToTop>
        </>
      </Theme>
    </Router>
  </Root>
)

export default hot(module)(App)
