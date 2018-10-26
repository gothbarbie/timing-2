import React from 'react'
import { shallow } from 'enzyme'

import Label from '../Label'

describe('components/atoms/Label', () => {
  it('renders', () => {
    const component = shallow(<Label>Text</Label>)

    expect(component).toMatchSnapshot()
  })
})
