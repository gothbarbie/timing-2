import React from 'react'
import { render } from 'enzyme'

import Root from '../../../Root'
import Theme from '../../../Theme'
import TimeSlot from '../TimeSlot'

describe('components/molecules/TimeSlot', () => {
  it('renders with data', () => {
    const props = {
      data: {
        title: 'TimeSlot Test',
      },
      openModal: jest.fn(),
    }
    const component = render(
      <Root>
        <Theme>
          <TimeSlot {...props} />
        </Theme>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })

  it('renders without data', () => {
    const props = {
      openModal: jest.fn(),
    }
    const component = render(
      <Root>
        <Theme>
          <TimeSlot {...props} />
        </Theme>
      </Root>
    )

    expect(component).toMatchSnapshot()
  })
})
