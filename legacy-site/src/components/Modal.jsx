import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'gatsby';
import styled from 'react-emotion';

ReactModal.setAppElement('#___gatsby')

const customStyles = {
  overlay : {
    'zIndex': '10000',
    'backgroundColor' : 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    'display': 'flex',
    'flexFlow': 'column nowrap',
    'justifyContent': 'center',
    'backgroundColor' : 'rgba(0, 0, 0, 0.75)',
    'border': 'none'
  }
};

const ModalButton = styled.button`
    width: 40px;
    height: 36px;
    appearance: none;
    background: ${props => props.theme.colors.white};
    padding: 0;
    margin: 0;
    border-radius: 9px;
    cursor: pointer;
    transition: ${props => props.theme.globalTransition};
    position: relative;

    &:hover {
      .modal__close-icon {
        background: ${props => props.theme.colors.greyLight};
      }
    }

    span.modal__close-icon {
      display: block;
      position: absolute;
      height: 6px;
      width: calc(100% - 10px);
      background: ${props => props.theme.colors.greyDark};
      border-radius: 9px;
      left: 5px;
      transition: ${props => props.theme.globalTransition};
      top: 14px;

      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
`;

const ModalButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Modal = ({isModalOpen, modalLabel, handleModalClose, children}) => {

  return (
    <ReactModal isOpen={isModalOpen} contentLabel={modalLabel + 'Gallery Modal'} style={customStyles} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true}>
      {children}
      <ModalButtonContainer>
        <ModalButton onClick={handleModalClose}>
          <span className="modal__close-icon"></span>
          <span className="modal__close-icon"></span>
          <span className="sr-only">Close Modal</span>
        </ModalButton>
      </ModalButtonContainer>
    </ReactModal>
  )
}

export default Modal;
