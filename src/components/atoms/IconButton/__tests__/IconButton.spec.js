import React from 'react'
import { shallow } from 'enzyme'
import { theme } from '../../../Theme'

import IconButton from '../IconButton'

describe('generic/molecules', () => {
  it('renders', () => {
    const component = shallow(<IconButton theme={theme} />)

    expect(component).toMatchSnapshot()
  })
})
