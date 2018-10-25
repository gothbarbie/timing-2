import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { closeModal } from './modalActions'

import IconButton from 'generic/atoms/IconButton'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalStyle = styled.div`
  min-width: 300px;
  background: ${({ theme }) => theme.colors.background};
`

const ModalHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  font-weight: 500;
  padding: 1rem 1rem 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ModalMain = styled.main`
  padding: 3rem;
`

class Modal extends React.PureComponent {
  onClickHandler = event => {
    const { closeModal } = this.props
    if (event.target.id === 'overlay') {
      closeModal()
    }
  }

  render() {
    const { closeModal, children, title, visible } = this.props

    return !visible ? null : (
      <Overlay id="overlay" onClick={this.onClickHandler}>
        <ModalStyle>
          <ModalHeader>
            {title}
            <IconButton
              color="white"
              hoverColor="gray"
              icon={['fas', 'times-circle']}
              onClick={closeModal}
              size="1x"
            />
          </ModalHeader>
          <ModalMain>{children}</ModalMain>
        </ModalStyle>
      </Overlay>
    )
  }
}

const mapStateToProps = ({ modal }) => {
  return {
    visible: modal.visible,
  }
}

const mapDispatchToProps = {
  closeModal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
