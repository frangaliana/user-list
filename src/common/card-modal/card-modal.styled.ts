import styled from '../../styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1050;
  display: flex;
  align-items: baseline;
`

export const ModalBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  overflow: hidden;
  margin: auto auto;
  box-sizing: border-box;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 32%;
    height: 32%;
  }
`

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`
