import React from 'react'
import { shallow } from 'enzyme'

import Icon from '../Icon'

describe('components/atoms/Icon', () => {
  it('renders', () => {
    const component = shallow(<Icon icon={['fa', 'times']} />)

    expect(component).toMatchSnapshot()
  })
})
