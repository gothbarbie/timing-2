import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#6A9AE2', '#E7F0FF'],
  secondary: ['#000', '#000'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#f6f6f6', '#fcfcfc', '#fff'],
  black: ['#444', '#222', '#000'],
  background: '#eee',
  grayScale: ['#444', '#888', '#BBB', '#eee', '#F6F6F6', '#FCFCFC'],
}

theme.shadows = {
  dropShadow: '0 3px 4px rgba(0,0,0, 0.5)',
  innerShadow: '0 3px 4px rgba(0,0,0, 0.5)',
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '1100px',
}

export default theme
