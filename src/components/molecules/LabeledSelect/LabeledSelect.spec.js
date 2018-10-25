import React from 'react'
import { shallow } from 'enzyme'

import { theme } from '../../Theme'
import LabeledSelect from './LabeledSelect'

describe('generic/molecules/LabeledSelect', () => {
  it('renders', () => {
    const options = [
      {
        key: 'first',
        value: 1,
      },
    ]
    const component = shallow(
      <LabeledSelect
        theme={theme}
        label="Test"
        onChange={() => jest.fn()}
        name="test"
        options={options}
      />
    )

    expect(component).toMatchSnapshot()
  })
})
