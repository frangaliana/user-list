import * as React from 'react'
import ContentLoader from 'react-content-loader'

import { Container } from './skeleton-loader.styled'

export const SkeletonLoader: React.FC<{}> = (props) => (
  <Container>
    <ContentLoader
      speed={2}
      width={530}
      height={180}
      viewBox="0 0 530 180"
      backgroundColor="#E6E9EF"
      foregroundColor="#CED0D6"
      {...props}
    >
      <circle cx="104" cy="42" r="37" />
      <rect x="212" y="93" rx="10" ry="10" width="115" height="10" />
      <rect x="56" y="94" rx="10" ry="10" width="108" height="10" />
      <rect x="182" y="52" rx="10" ry="10" width="200" height="10" />
      <rect x="183" y="21" rx="10" ry="10" width="150" height="10" />
      <rect x="52" y="124" rx="10" ry="10" width="400" height="10" />
      <rect x="52" y="154" rx="10" ry="10" width="400" height="10" />
    </ContentLoader>
  </Container>
)
