import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import WeekNavigation from '../../organisms/WeekNavigation'
import Scheduler from '../../organisms/Scheduler'
import AddEventModal from '../../organisms/AddEventModal'
import EditCategoriesModal from '../../organisms/EditCategoriesModal'

import Modal from '../../molecules/Modal'
import Category from '../../molecules/Category'

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background[0]};
`

const Home = ({ modalContent }) => (
  <HomeStyle>
    <WeekNavigation />
    <Scheduler />
    {modalContent === 'addEvent' && (
      <Modal title="Add event">
        <AddEventModal />
      </Modal>
    )}
    {modalContent === 'editCategories' && (
      <Modal title="Edit categories">
        <EditCategoriesModal />
      </Modal>
    )}
    <Category />
  </HomeStyle>
)

Home.propTypes = {
  modalContent: PropTypes.string.isRequired,
}

const mapStateToProps = ({ modal }) => {
  const modalContent = modal.content
  return {
    modalContent,
  }
}

export default connect(mapStateToProps)(Home)
