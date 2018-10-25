import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { updateCategory, removeCategory } from './categoryActions'

import IconButton from 'generic/atoms/IconButton'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
`

const EditNameInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
  font-size: 1.4rem;
`

const Name = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`

const Actions = styled.div`
  display: flex;

  button:last-of-type {
    margin-left: 1rem;
  }
`

class Category extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      name: props.name,
    }
    this.editNameInput = React.createRef()
  }

  handleEdit = () => {
    this.setState({ isEditing: true })
    setTimeout(() => this.editNameInput.current.focus(), 400)
  }

  handleOnChange = e => {
    this.setState({ name: e.target.value })
  }

  handleRemove = () => {
    const { removeCategory, id } = this.props
    removeCategory(id)
  }

  handleEnterKey = e => {
    if (e.which === 13 || e.keyCode === 13 || e.charCode === 13) {
      this.updateCategory()
    }
  }

  updateCategory = () => {
    this.setState({ isEditing: false })
    const { name } = this.state
    const { updateCategory, id } = this.props
    updateCategory(id, name)
  }

  render() {
    const { name, isEditing } = this.state
    return (
      <Wrapper>
        {isEditing ? (
          <EditNameInput
            name="name"
            onBlur={this.updateCategory}
            onChange={this.handleOnChange}
            onKeyPress={this.handleEnterKey}
            ref={this.editNameInput}
            type="text"
          />
        ) : (
          <Name>{name}</Name>
        )}
        <Actions>
          {!isEditing && (
            <IconButton
              color="primary"
              icon={['fas', 'pencil-alt']}
              onClick={this.handleEdit}
              size="2x"
            />
          )}
          <IconButton
            color="primary"
            icon={['fas', 'times']}
            onClick={this.handleRemove}
            size="2x"
          />
        </Actions>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = {
  updateCategory,
  removeCategory,
}

export default connect(
  null,
  mapDispatchToProps
)(Category)
