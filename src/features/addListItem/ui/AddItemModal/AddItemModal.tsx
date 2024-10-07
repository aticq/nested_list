import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ButtonUI } from "@/shared/ui/ButtonUI";

interface AddItemModalProps {
  isOpen: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  onClose: () => void;
  onAdd: () => void;
}

export const AddItemModal: React.FC<AddItemModalProps> = ({
  isOpen,
  inputValue,
  setInputValue,
  onClose,
  onAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <Title>Добавить новый элемент</Title>
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите название"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAdd();
            }
          }}
        />
        <ButtonContainer>
          <ButtonUI onClick={onAdd}>Добавить</ButtonUI>
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

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #ff5c00;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
