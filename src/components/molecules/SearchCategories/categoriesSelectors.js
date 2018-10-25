import { createSelector } from 'reselect'

const getCategoryFilter = state => state.categoriesFilter
const getCategories = state => state.categories

export const getFilteredCategories = createSelector(
  [getCategoryFilter, getCategories],
  (categoryFilter, categories) => {
    if (categoryFilter !== '') {
      const filtered = Object.entries(categories).filter(([key, c]) =>
        c.name.includes(categoryFilter)
      )

      // TODO: recreate filtered as Object

      return filtered
    }
    return []
  }
)
