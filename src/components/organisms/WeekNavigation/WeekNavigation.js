import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { nextWeek, previousWeek } from './weekActions'

import H1 from '../../atoms/Typography/H1'
import NavButton from '../../molecules/NavButton/NavButton'

const H1Dimmed = styled(H1)`
  color: ${({ theme }) => theme.palette.grayScale[2]};
`

const NavigationStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;
`
const WeekNavigation = ({ nextWeek, previousWeek, week }) => (
  <NavigationStyle>
    <NavButton direction="left" onClick={previousWeek} title="Previous week" />
    <H1Dimmed>Week {week}</H1Dimmed>
    <NavButton direction="right" onClick={nextWeek} title="Next week" />
  </NavigationStyle>
)

WeekNavigation.propTypes = {
  nextWeek: PropTypes.func.isRequired,
  previousWeek: PropTypes.func.isRequired,
  week: PropTypes.number.isRequired,
}

const mapStateToProps = ({ week }) => ({
  week,
})

const mapDispatchToProps = {
  nextWeek,
  previousWeek,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekNavigation)
