import styled from '../../styled-components'

export const Container = styled.div`
  display: flex;
  margin: ${({ theme: { spacing } }) => spacing(0.5)}px;
`

export const FieldName = styled.span`
  margin-right: ${({ theme: { spacing } }) => spacing(1)}px;
`

type DataInputProps = {
  readMode: boolean
}

export const DataInput = styled.input<DataInputProps>`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.text};
  background-color: ${({ theme: { palette } }) => palette.background};

  width: ${({ theme: { spacing } }) => spacing(10)}px;

  border: none;
  &:focus {
    outline: none;
  }

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
