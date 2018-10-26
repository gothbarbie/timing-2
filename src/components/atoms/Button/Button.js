import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Default = styled.button`
  cursor: pointer;
  width: ${({ size }) => size === 's' && 'auto'};
  width: ${({ fullWidth }) => fullWidth && '100%'};

  background-color: transparent;
  color: ${({ theme }) => theme.palette.grayScale[0]};
  color: ${({ active, theme }) => active && theme.palette.primary[0]};
  outline: none;
  font-size: 1.6rem;
  font-weight: 500;
  border: 1px solid transparent;
  border-color: ${({ active, theme }) => active && theme.palette.grayScale[0]};
  padding: 1rem 2rem;
  padding: ${({ size }) => size === 's' && '.5rem'};

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary[0]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.grayScale[1]};
    color: ${({ theme }) => theme.palette.primary[0]};
    border-color: ${({ theme }) => theme.palette.grayScale[0]};
  }

  &:active {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25);
  }

  border-radius: 4px;
`

const WithIcon = styled(Default)`
  &:focus {
    border-color: ${({ theme }) => theme.palette.grayScale[2]};
    color: ${({ theme }) => theme.palette.primary[0]};
  }

  &:hover {
    border-color: ${({ theme }) => theme.palette.grayScale[0]};
    color: ${({ theme }) => theme.palette.primary[0]};
    fill: ${({ theme }) => theme.palette.primary[0]};
  }
`

const Primary = styled(Default)`
  background-color: ${({ theme }) => theme.palette.primary[0]};
  color: ${({ theme }) => theme.palette.white[0]};

  box-shadow: ${({ active }) =>
    active ? 'inset 0 2px 2px rgba(0, 0, 0, 0.25)' : 'none'};

  &:focus {
    border-color: ${({ theme }) => theme.palette.white[0]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary[0]};
    border-color: ${({ theme }) => theme.palette.white[0]};
    color: ${({ theme }) => theme.palette.white[0]};
  }
`

export const Button = ({
  active = false,
  children,
  fullWidth,
  hasIcon,
  primary,
  size,
  title,
  onClick,
}) => {
  if (primary)
    return (
      <Primary
        active={active}
        fullWidth={fullWidth}
        onClick={onClick}
        size={size}
        title={title}
      >
        {children}
      </Primary>
    )
  if (hasIcon) {
    return (
      <WithIcon
        active={active}
        fullWidth={fullWidth}
        hasIcon={hasIcon}
        onClick={onClick}
        title={title}
      >
        {children}
      </WithIcon>
    )
  }

  return (
    <Default
      active={active}
      fullWidth={fullWidth}
      onClick={onClick}
      size={size}
      title={title}
    >
      {children}
    </Default>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  hasIcon: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
}

/** @component */
export default Button
