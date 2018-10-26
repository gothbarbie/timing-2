import React from 'react'
import { render } from 'enzyme'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPencilAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import Theme from 'components/Theme'
import Root from 'components/Root'

import AddEventModal from '../AddEventModal'

library.add(faSearch, faPencilAlt, faTimes)

describe('generic/organisms/AddEventModal', () => {
  it('renders', () => {
    const props = {
      openModal: jest.fn(),
    }
    const component = render(
      <Root>
        <Theme>
          <AddEventModal {...props} />
        </Theme>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
