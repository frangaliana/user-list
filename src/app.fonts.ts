import { css } from './styled-components'

import mediumFont from './assets/fonts/montserrat-medium.ttf'
import boldFont from './assets/fonts/montserrat-bold.ttf'
import extraBoldFont from './assets/fonts/montserrat-extrabold.ttf'

export const fontFaces = css`
  @font-face {
    font-family: "'Montserrat', sans-serif";
    font-weight: 500;
    src: url(${mediumFont}) format('truetype');
  }
  @font-face {
    font-family: "'Montserrat', sans-serif";
    font-weight: 700;
    src: url(${boldFont}) format('truetype');
  }
  @font-face {
    font-family: "'Montserrat', sans-serif";
    font-weight: 900;
    src: url(${extraBoldFont}) format('truetype');
  }
`
