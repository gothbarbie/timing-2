import React from 'react'
import { render } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

import Root from 'Root'
import configureStore from 'store'
import { theme } from '../../../Theme'
import Category from '../Category'

library.add(faTimes, faPencilAlt)

const store = configureStore()

describe('generic/molecules/Category', () => {
  it('renders', () => {
    const component = render(
      <Root store={store}>
        <ThemeProvider theme={theme}>
          <Category />
        </ThemeProvider>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
