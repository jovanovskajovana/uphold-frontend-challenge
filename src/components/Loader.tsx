import { FC } from 'react'

import { LoaderStyled, LoaderInner } from '../styles/components/LoaderStyled'

const Loader: FC = () => (
  <LoaderStyled>
    <LoaderInner />
  </LoaderStyled>
)

export default Loader
