import React from 'react'
import { shallow } from 'enzyme'

import { theme } from '../../Theme'
import Select from './Select'

describe('generic/atoms/Select', () => {
  it('renders', () => {
    const options = [
      {
        key: 'test',
        value: 'test',
      },
    ]
    const component = shallow(
      <Select theme={theme} name="test" options={options} />
    )

    expect(component).toMatchSnapshot()
  })
})
