import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { openModal } from '../../../actions/modalActions'

import Button from '../../atoms/Button'

import LabeledInput from '../../molecules/LabeledInput'
import LabeledSelect from '../../molecules/LabeledSelect'
import LabeledTags from '../../molecules/LabeledTags'

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin: 3rem 0;
`

const CategorySection = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-gap: 1rem;
  margin: 3rem 0;
  align-items: flex-end;
`

const AlignRight = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const AddEventModal = ({ openModal }) => (
  <section>
    <LabeledInput label="Title" name="title" />
    <TwoColumns>
      <LabeledInput
        label="Start"
        name="start"
        type="date"
        onChange={() => console.log('changed')}
      />
      <LabeledInput
        label="End"
        name="end"
        type="date"
        onChange={() => console.log('changed')}
      />
    </TwoColumns>
    <CategorySection>
      <LabeledSelect
        label="Category"
        name="category"
        onChange={() => console.log('changed')}
        options={[{ key: 'Test', name: 'Test Name', value: 'TestValue' }]}
      />
      <Button
        fullWidth
        onClick={() => openModal({ content: 'editCategories' })}
        primary
      >
        Edit
      </Button>
    </CategorySection>
    <TwoColumns>
      <LabeledInput
        label="Add tags"
        name="add-tags"
        onChange={() => console.log('changed')}
      />
      <LabeledTags
        label="Used recently"
        onClick={id => console.log('added', id)}
        tags={[{ blue: true, name: 'unit test', id: '1' }]}
      />
    </TwoColumns>
    <LabeledTags
      label="Selected tags"
      onClick={id => console.log('deleted', id)}
      tags={[{ blue: false, name: 'story-125', id: '3' }]}
    />
    <AlignRight>
      <Button primary>Create</Button>
    </AlignRight>
  </section>
)

AddEventModal.propTypes = {
  openModal: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      blue: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

const mapStateToProps = ({ tags }) => ({
  tags,
})

const mapDispatchToProps = {
  openModal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEventModal)
