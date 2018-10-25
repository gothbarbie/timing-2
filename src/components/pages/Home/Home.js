import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import WeekNavigation from 'generic/organisms/WeekNavigation'
import Scheduler from 'generic/organisms/Scheduler'
import AddEventModal from 'generic/organisms/AddEventModal'
import EditCategoriesModal from 'generic/organisms/EditCategoriesModal'

import Modal from 'generic/molecules/Modal'
import Category from 'generic/molecules/Category'

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`

const Home = ({ content }) => (
  <HomeStyle>
    <WeekNavigation />
    <Scheduler />
    {content === 'addEvent' && (
      <Modal title="Add event">
        <AddEventModal />
      </Modal>
    )}
    {content === 'editCategories' && (
      <Modal title="Edit categories">
        <EditCategoriesModal />
      </Modal>
    )}
    <Category />
  </HomeStyle>
)

const mapStateToProps = ({ modal }) => {
  const content = modal.content
  return {
    content,
  }
}

export default connect(mapStateToProps)(Home)
