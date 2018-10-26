import React from 'react'
import styled from 'styled-components'

import TimeSlot from '../../molecules/TimeSlot'

const SchedulerStyle = styled.section`
  width: 100%;
  max-width: 1200px;
`

const DayNames = styled.section`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.grayScale[0]};
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 0.4fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`

const Days = styled(DayNames)`
  grid-template-columns: 0.25fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
`

const Day = styled.div`
  display: grid;
  grid-gap: 0.2rem;
  width: 100%;

  > div:last-of-type {
    height: 3rem;
    background: transparent;
  }
`

const Times = styled.div`
  display: grid;
  grid-gap: 0.2rem;
  width: 100%;
  margin-top: 0;
  padding-right: 4rem;
`

const Time = styled.div`
  color: ${({ theme }) => theme.palette.grayScale[0]};
  font-size: 1.8rem;
  font-weight: 700;
  justify-self: end;
  height: 5rem;
`

const Scheduler = () => (
  <SchedulerStyle>
    <DayNames>
      <div />
      <div>Monday</div>
      <div>Tuesday</div>
      <div>Wednesday</div>
      <div>Thursday</div>
      <div>Friday</div>
    </DayNames>

    <Days>
      <Times>
        <Time>07:00</Time>
        <Time>08:00</Time>
        <Time>09:00</Time>
        <Time>10:00</Time>
        <Time>11:00</Time>
        <Time>12:00</Time>
        <Time>13:00</Time>
        <Time>14:00</Time>
        <Time>15:00</Time>
        <Time>16:00</Time>
        <Time>17:00</Time>
        <Time>18:00</Time>
      </Times>
      <Day>
        <TimeSlot data={{ title: 'Working on the new feature in Story-333' }} />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />

        <div />
      </Day>
      <Day>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <div />
      </Day>
      <Day>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <div />
      </Day>
      <Day>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <div />
      </Day>
      <Day>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <div />
      </Day>
    </Days>
  </SchedulerStyle>
)

export default Scheduler
