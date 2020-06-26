import React, { Component } from 'react'

import { ModalContainer, ModalBox, ModalBackground } from './card-modal.styled'

type CardModalProps = {
  visible: boolean
  dismiss: () => void
}

export const CardModal: React.FC<CardModalProps> = ({ dismiss, children, visible }) => {
  return (
    <>
      {visible && (
        <ModalContainer>
          <ModalBox>{children}</ModalBox>
          <ModalBackground onClick={dismiss} />
        </ModalContainer>
      )}
    </>
  )
}
