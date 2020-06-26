import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from '../../styled-components'

import { fontFaces } from '../../app.fonts'
import { Theme } from '../../app.theme'

type ThemeStyledProviderProps = {
  theme: Theme
}

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  
  ::-webkit-scrollbar {
    width: ${({ theme: { spacing } }) => spacing(0.5)}px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { palette } }): string => palette.text};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { palette } }): string => palette.highlighted};
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    font-family: ${({ theme: { typography } }) => typography.fontFamily};
    font-size: ${({ theme: { spacing } }): string => `${spacing(2)}px`};
    
    background-color: ${({ theme: { palette } }): string => palette.background};
    color: ${({ theme: { palette } }): string => palette.text};
  }
`

export const ThemeStyledProvider: React.FC<ThemeStyledProviderProps> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
