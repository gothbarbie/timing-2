import React from 'react'
import { shallow } from 'enzyme'

import Select from '../Select'

describe('components/atoms/Select', () => {
  it('renders', () => {
    const options = [
      {
        key: 'test',
        value: 'test',
      },
    ]
    const component = shallow(<Select name="test" options={options} />)

    expect(component).toMatchSnapshot()
  })
})
