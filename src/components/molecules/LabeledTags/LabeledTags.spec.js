import React from 'react'
import { shallow } from 'enzyme'

import { theme } from '../../Theme'
import LabeledTags from './LabeledTags'

describe('generic/molecules/LabeledTags', () => {
  it('renders', () => {
    const tags = [
      {
        blue: true,
        name: 'tag 1',
        id: 1,
      },
    ]
    const component = shallow(
      <LabeledTags
        theme={theme}
        label="Test Tags"
        onChange={id => jest.fn(id)}
        tags={tags}
      />
    )

    expect(component).toMatchSnapshot()
  })
})
