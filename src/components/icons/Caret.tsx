import { FC } from 'react'

import { theme } from '../../constants/theme'

import { IconProps } from '../../interfaces/ui'

const Caret: FC<IconProps> = ({ fill = theme.textPrimary, className }) => (
  <svg
    height="5"
    viewBox="0 0 8 5"
    width="8"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g fill="none" fillRule="evenodd" transform="translate(-4 -6)">
      <path d="m0 0h16v16h-16z" />
      <path
        d="m4.50260994 6h6.99478016c.2761423 0 .5.22385763.5.5 0 .13260824-.0526785.2597852-.1464466.35355339l-3.49739011 3.49739011c-.19526215.1952621-.51184463.1952621-.70710678 0l-3.49739006-3.49739011c-.19526215-.19526215-.19526215-.51184463 0-.70710678.09376819-.09376819.22094514-.14644661.35355339-.14644661z"
        fill={fill}
      />
    </g>
  </svg>
)

export default Caret
