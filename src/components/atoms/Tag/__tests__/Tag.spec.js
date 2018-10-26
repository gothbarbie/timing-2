import React from 'react'
import { shallow } from 'enzyme'

import Tag from '../Tag'

describe('components/atoms/Tag', () => {
  it('renders', () => {
    const component = shallow(<Tag name="Tag 1" onClick={() => jest.fn()} />)

    expect(component).toMatchSnapshot()
  })

  it('renders blue', () => {
    const component = shallow(
      <Tag blue name="Tag 2" onClick={() => jest.fn()} />
    )

    expect(component).toMatchSnapshot()
  })
})
