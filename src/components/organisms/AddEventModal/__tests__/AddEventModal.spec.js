import React from 'react'
import { render } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPencilAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import { theme } from '../../../Theme/Theme'

import AddEventModal from '../AddEventModal'
import Root from 'Root'
import configureStore from 'store'

library.add(faSearch, faPencilAlt, faTimes)

const store = configureStore()

describe('generic/organisms/AddEventModal', () => {
  it('renders', () => {
    const component = render(
      <Root store={store}>
        <ThemeProvider theme={theme}>
          <AddEventModal />
        </ThemeProvider>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
