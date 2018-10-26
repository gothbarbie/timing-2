import React from 'react'
import { shallow } from 'enzyme'

import IconButton from '../IconButton'

describe('components/atoms/IconButton', () => {
  it('renders', () => {
    const props = {
      color: 'gray',
      hoverColor: 'gray',
      icon: ['fas', 'chevron-down'],
      size: 'lg',
      onClick: jest.fn(),
    }
    const component = shallow(<IconButton {...props} />)

    expect(component).toMatchSnapshot()
  })
})
