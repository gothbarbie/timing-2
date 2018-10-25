import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Button from 'generic/atoms/Button'
import Label from 'generic/atoms/Label'

import LabeledInput from 'generic/molecules/LabeledInput'
import Category from 'generic/molecules/Category'
import SearchCategories from 'generic/molecules/SearchCategories'

const FormSection = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 1rem;
  margin: 0 0 3rem 0;
  align-items: flex-end;
`

const RecentlyUsed = styled.section``

const CategoriesList = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
`

const AlignRight = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const EditCategoriesModal = ({ categories }) => (
  <section>
    <FormSection>
      <LabeledInput label="New" name="new-category" />
      <Button primary>Add</Button>
    </FormSection>

    <SearchCategories />

    <RecentlyUsed>
      <Label>Recently used</Label>
      <CategoriesList>
        {Object.entries(categories).map(([key, value]) => (
          <Category id={key} key={key} name={value.name} />
        ))}
      </CategoriesList>
    </RecentlyUsed>
    <AlignRight>
      <Button primary>Create</Button>
    </AlignRight>
  </section>
)

const mapStateToProps = ({ categories }) => ({
  categories,
})

export default connect(mapStateToProps)(EditCategoriesModal)
