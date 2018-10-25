import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setCategoriesFilter } from './categoriesFilterActions'
import { getFilteredCategories } from './categoriesSelectors'

import Icon from 'generic/atoms/Icon'
import Button from 'generic/atoms/Button'

import LabeledInput from 'generic/molecules/LabeledInput'

import Category from 'generic/molecules/Category'

const FormSection = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 1rem;
  margin: 0 0 3rem 0;
  align-items: flex-end;
`
const SearchResults = styled.section`
  display: flex;
  margin-bottom: 2rem;
`
const NoResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`

class SearchCategories extends React.PureComponent {
  handleSetCategoriesFilter = event => {
    console.log('handleSetCategoriesFilter', event.target.value)
    this.props.setCategoriesFilter(event.target.value)
  }

  render() {
    console.log('categories', this.props.categories)
    return (
      <>
        <FormSection>
          <LabeledInput
            label="Search"
            name="search-category"
            onChange={this.handleSetCategoriesFilter}
            type="search"
          />
          <Button hasIcon primary>
            <Icon icon={['fas', 'search']} />
          </Button>
        </FormSection>

        <SearchResults>
          {!this.props.categories.length && (
            <NoResults>Search to get results</NoResults>
          )}
          {this.props.categories.map(category => (
            <Category
              id={category[0]}
              key={category[0]}
              name={category[1].name}
            />
          ))}
        </SearchResults>
      </>
    )
  }
}

const mapStateToProps = state => ({
  categories: getFilteredCategories(state),
})

const mapDispatchToProps = {
  setCategoriesFilter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCategories)
