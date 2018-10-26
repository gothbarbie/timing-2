import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { openModal } from '../Modal/modalActions'

import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon/Icon'
import IconButton from '../../atoms/IconButton'

const TimeSlotStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.grayScale[1]};
  background-color: ${({ blue, theme }) => blue && theme.palette.primary[1]};

  height: 5rem;
  padding: 0 1rem;
`

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`

const TimeSlot = ({ data, openModal }) => {
  if (data) {
    return (
      <TimeSlotStyle blue>
        <Title>{data.title}</Title>
        <IconButton
          color="gray"
          icon={['fas', 'ellipsis-h']}
          onClick={() => openModal({ content: 'editEvent' })}
        />
      </TimeSlotStyle>
    )
  }
  return (
    <TimeSlotStyle>
      <Button
        fullWidth
        hasIcon
        icon={['fas', 'plus-circle']}
        onClick={() => openModal({ content: 'addEvent' })}
      >
        <Icon icon={['fas', 'plus-circle']} size="lg" />
      </Button>
    </TimeSlotStyle>
  )
}

const mapDispatchToProps = {
  openModal,
}

export default connect(
  null,
  mapDispatchToProps
)(TimeSlot)
