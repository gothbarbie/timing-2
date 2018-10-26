import React from 'react'
import { shallow } from 'enzyme'

import Root from '../../../Root'
import Theme from '../../../Theme'
import Modal from '../Modal'

describe('components/molecules/Modal', () => {
  it('renders', () => {
    const props = {
      closeModal: jest.fn(),
      title: 'Test Modal',
      visible: true,
    }

    const component = shallow(
      <Root>
        <Theme>
          <Modal {...props}>
            <div>Modal Content</div>
          </Modal>
        </Theme>
      </Root>
    )
      .dive()
      .dive()
      .dive()

    expect(component).toMatchSnapshot()
  })
})
