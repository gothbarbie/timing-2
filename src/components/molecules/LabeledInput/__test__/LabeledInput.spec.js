import React from 'react'
import { shallow } from 'enzyme'

import LabeledInput from '../LabeledInput'

describe('components/molecules/LabeledInput', () => {
  it('renders', () => {
    const props = {
      label: 'Test',
      onChange: jest.fn(),
      name: 'test',
    }
    const component = shallow(<LabeledInput {...props} />)

    expect(component).toMatchSnapshot()
  })
})
