import React from 'react'
import { shallow } from 'enzyme'

import IconButton from '../IconButton'

describe('components/atoms/IconButton', () => {
  it('renders', () => {
    const component = shallow(<IconButton />)

    expect(component).toMatchSnapshot()
  })
})
