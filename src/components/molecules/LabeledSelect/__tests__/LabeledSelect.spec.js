import React from 'react'
import { shallow } from 'enzyme'

import LabeledSelect from '../LabeledSelect'

describe('generic/molecules/LabeledSelect', () => {
  it('renders', () => {
    const options = [
      {
        key: 1,
        name: 'first',
        value: 1,
      },
    ]

    const props = {
      label: 'Test',
      onChange: jest.fn(),
      name: 'test',
      options,
    }

    const component = shallow(<LabeledSelect {...props} />)

    expect(component).toMatchSnapshot()
  })
})
