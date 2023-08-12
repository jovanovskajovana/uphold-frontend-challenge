import { FC } from 'react'

import { LoaderStyled, LoaderInner } from '../../styles/components/LoaderStyled'

const Loader: FC = () => (
  <LoaderStyled data-testid="loader">
    <LoaderInner data-testid="loader-inner" />
  </LoaderStyled>
)

export default Loader
