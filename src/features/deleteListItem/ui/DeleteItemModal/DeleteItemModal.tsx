import React from "react";
import styled, { keyframes } from "styled-components";
import { ButtonUI } from "@/shared/ui/ButtonUI";

interface DeleteItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteItemModal: React.FC<DeleteItemModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <Title>Удалить элемент</Title>
        <Message>Вы действительно хотите удалить этот элемент?</Message>
        <ButtonContainer>
          <ButtonUI onClick={onConfirm} variant="primary">
            Удалить
          </ButtonUI>
          <ButtonUI onClick={onClose} variant="secondary">
            Отмена
          </ButtonUI>
        </ButtonContainer>
      </Modal>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled.div`
  z-index: 1;
  animation: ${fadeIn} 0.3s forwards;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Modal = styled.div`
  animation: ${slideDown} 0.3s forwards;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Message = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
