import React from 'react'
import { shallow } from 'enzyme'

import MainHeader from '../MainHeader'

describe('organisms/MainHeader', () => {
  it('renders', () => {
    const component = shallow(<MainHeader />)

    expect(component).toMatchSnapshot()
  })

})
