import React from 'react'
import { shallow } from 'enzyme'

import Input from '../Input'

describe('components/atoms/Input', () => {
  it('renders', () => {
    const component = shallow(<Input />)

    expect(component).toMatchSnapshot()
  })
})
