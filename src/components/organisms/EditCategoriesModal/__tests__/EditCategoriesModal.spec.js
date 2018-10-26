import React from 'react'
import { render } from 'enzyme'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPencilAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import Root from 'components/Root'
import Theme from 'components/Theme'

import EditCategoriesModal from '../EditCategoriesModal'

library.add(faSearch, faPencilAlt, faTimes)

describe('components/organisms/EditCategoriesModal', () => {
  it('renders', () => {
    const component = render(
      <Root>
        <Theme>
          <EditCategoriesModal />
        </Theme>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
