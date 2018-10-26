import React from 'react'
import { shallow } from 'enzyme'

import Button from '../Button'

describe('components/atoms/Button', () => {
  it('renders Default style', () => {
    const component = shallow(<Button>Text</Button>)

    expect(component).toMatchSnapshot()
  })

  it('renders Primary style', () => {
    const component = shallow(<Button primary>Text</Button>)

    expect(component).toMatchSnapshot()
  })

  it('renders Icon style', () => {
    const component = shallow(
      <Button hasIcon>
        <i />
      </Button>
    )

    expect(component).toMatchSnapshot()
  })
})
