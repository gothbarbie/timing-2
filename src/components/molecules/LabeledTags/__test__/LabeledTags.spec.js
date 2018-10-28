import React from 'react'
import { shallow } from 'enzyme'

import LabeledTags from '../LabeledTags'

describe('components/molecules/LabeledTags', () => {
  it('renders', () => {
    const tags = [
      {
        blue: true,
        name: 'tag 1',
        id: '1',
      },
    ]

    const props = {
      label: 'Test Tag',
      onClick: jest.fn(),
      tags,
    }

    const component = shallow(<LabeledTags {...props} />)

    expect(component).toMatchSnapshot()
  })
})
