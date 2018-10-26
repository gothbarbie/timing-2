import React from 'react'
import { render } from 'enzyme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Root from '../../../Root'
import Theme from '../../../Theme'
import SearchCategories from '../SearchCategories'

library.add(faSearch)

describe('components/molecules/SearchCategories', () => {
  it('renders', () => {
    const props = {
      categories: [{ key: '123', name: 'name' }],
    }
    const component = render(
      <Root>
        <Theme>
          <SearchCategories {...props} />
        </Theme>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
