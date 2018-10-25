import React from 'react'
import { shallow } from 'enzyme'

import Icon from './Icon'

describe('generic/atoms/Icon', () => {
  it('renders', () => {
    const component = shallow(<Icon icon={['fa', 'times']} />)

    expect(component).toMatchSnapshot()
  })
})
