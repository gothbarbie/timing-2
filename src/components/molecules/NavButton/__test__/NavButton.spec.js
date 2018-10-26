import React from 'react'
import { shallow } from 'enzyme'

import NavButton from '../NavButton'

describe('components/molecules/NavButton', () => {
  it('renders', () => {
    const props = {
      direction: 'left',
      onClick: jest.fn(),
      title: 'left',
    }
    const component = shallow(<NavButton {...props} />)

    expect(component).toMatchSnapshot()
  })
})
