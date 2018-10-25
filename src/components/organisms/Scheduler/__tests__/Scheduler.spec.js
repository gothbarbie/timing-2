import React from 'react'
import { render } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { theme } from '../../../Theme/Theme'

import Scheduler from '../Scheduler'
import Root from 'Root'
import configureStore from 'store'

library.add(faEllipsisH, faPlusCircle)

const store = configureStore()

describe('generic/organisms/Scheduler', () => {
  it('renders', () => {
    const component = render(
      <Root store={store}>
        <ThemeProvider theme={theme}>
          <Scheduler />
        </ThemeProvider>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
