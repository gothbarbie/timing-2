import React from 'react'
import { shallow } from 'enzyme'

import { theme } from '../../Theme'
import Label from './Label'

describe('generic/atoms/Label', () => {
  it('renders', () => {
    const component = shallow(<Label theme={theme}>Text</Label>)

    expect(component).toMatchSnapshot()
  })
})
