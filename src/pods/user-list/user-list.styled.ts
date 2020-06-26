import styled from '../../styled-components'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const LoadMore = styled.div``
