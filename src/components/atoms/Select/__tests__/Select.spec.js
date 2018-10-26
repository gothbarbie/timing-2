import React from 'react'
import { shallow } from 'enzyme'

import Select from '../Select'

describe('components/atoms/Select', () => {
  it('renders', () => {
    const options = [
      {
        key: 'test',
        name: 'test',
        value: 'test',
      },
    ]

    const props = {
      name: 'Test',
      options,
      onChange: jest.fn(),
    }

    const component = shallow(<Select {...props} />)

    expect(component).toMatchSnapshot()
  })
})
