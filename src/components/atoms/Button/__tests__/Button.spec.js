import React from 'react'
import { shallow } from 'enzyme'

import Button from '../Button'

describe('components/atoms/Button', () => {
  it('renders', () => {
    const component = shallow(<Button>Test</Button>)

    expect(component).toMatchSnapshot()
  })
})
