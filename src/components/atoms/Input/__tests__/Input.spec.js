import React from 'react'
import { shallow } from 'enzyme'

import Input from '../Input'

describe('components/atoms/Input', () => {
  it('renders', () => {
    const props = {
      name: 'test',
      onChange: jest.fn(),
      type: 'text',
    }
    const component = shallow(<Input {...props} />)

    expect(component).toMatchSnapshot()
  })
})
