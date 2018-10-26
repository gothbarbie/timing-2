import React from 'react'
import { render } from 'enzyme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

import Root from 'components/Root'
import Theme from 'components/Theme'
import Category from '../Category'

library.add(faTimes, faPencilAlt)

describe('components/molecules/Category', () => {
  it('renders', () => {
    const component = render(
      <Root>
        <Theme>
          <Category />
        </Theme>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
