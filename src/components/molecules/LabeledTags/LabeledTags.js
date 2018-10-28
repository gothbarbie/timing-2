import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from '../../atoms/Label'
import Tag from '../../atoms/Tag'

const LabeledTagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const LabelStyled = styled(Label)`
  margin-bottom: 1rem;
`
const LabeledTags = ({ label, tags, onClick }) => (
  <LabeledTagsWrapper>
    <LabelStyled>{label}</LabelStyled>
    {tags.map(tag => (
      <Tag
        blue={tag.blue}
        key={tag.id}
        name={tag.name}
        onClick={() => onClick(tag.id)}
      />
    ))}
  </LabeledTagsWrapper>
)

LabeledTags.propTypes = {
  label: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      blue: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default LabeledTags
