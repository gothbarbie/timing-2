import React from 'react'
import { shallow } from 'enzyme'

import { theme } from '../../Theme'
import Tag from './Tag'

describe('generic/atoms/Tag', () => {
  it('renders', () => {
    const component = shallow(
      <Tag theme={theme} name="Tag 1" onClick={() => jest.fn()} />
    )

    expect(component).toMatchSnapshot()
  })

  it('renders blue', () => {
    const component = shallow(
      <Tag theme={theme} blue name="Tag 2" onClick={() => jest.fn()} />
    )

    expect(component).toMatchSnapshot()
  })
})
