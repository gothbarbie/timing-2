import React from 'react'
import { shallow } from 'enzyme'

import { theme } from '../../Theme'
import Input from './Input'

describe('generic/atoms/Input', () => {
  it('renders', () => {
    const component = shallow(<Input theme={theme} />)

    expect(component).toMatchSnapshot()
  })
})
