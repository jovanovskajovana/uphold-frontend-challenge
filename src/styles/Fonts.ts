import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova'), url(../assets/fonts/Proxima-Nova-Regular.otf) format('otf');
    font-style: normal;
    font-weight: 400;
  }
`

export default Typography
