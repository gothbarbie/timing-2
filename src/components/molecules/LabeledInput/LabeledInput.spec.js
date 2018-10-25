import React from 'react'
import { shallow } from 'enzyme'

import { theme } from '../../Theme'
import LabeledInput from './LabeledInput'

describe('generic/molecules/LabeledInput', () => {
  it('renders', () => {
    const component = shallow(
      <LabeledInput
        theme={theme}
        label="Test"
        onChange={() => jest.fn()}
        name="test"
      />
    )

    expect(component).toMatchSnapshot()
  })
})
