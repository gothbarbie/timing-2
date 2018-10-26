import React from 'react'
import { render } from 'enzyme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisH, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import Scheduler from '../Scheduler'
import Root from 'components/Root'
import Theme from 'components/Theme'

library.add(faEllipsisH, faPlusCircle)

describe('components/organisms/Scheduler', () => {
  it('renders', () => {
    const component = render(
      <Root>
        <Theme>
          <Scheduler />
        </Theme>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
