import React from 'react'
import { shallow } from 'enzyme'

import { theme } from '../../Theme'
import Button from './Button'

describe('generic/atoms/Button', () => {
  it('renders Default style', () => {
    const component = shallow(<Button theme={theme}>Text</Button>)

    expect(component).toMatchSnapshot()
  })

  it('renders Primary style', () => {
    const component = shallow(
      <Button primary theme={theme}>
        Text
      </Button>
    )

    expect(component).toMatchSnapshot()
  })

  it('renders Icon style', () => {
    const component = shallow(
      <Button icon theme={theme}>
        <i />
      </Button>
    )

    expect(component).toMatchSnapshot()
  })
})
