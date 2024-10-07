import React from "react";
import styled from "styled-components";
import {
  FaPlus,
  FaMinus,
  FaFolder,
  FaFolderOpen,
  FaFile,
} from "react-icons/fa";
import { ListItemType } from "@/entities/ListItem";
import { DeleteItemModal, useDeleteItemModal } from "@/features/deleteListItem";
import { ButtonUI } from "@/shared/ui/ButtonUI";

interface NestedListProps {
  item: ListItemType;
  onAdd: (parentId: string) => void;
  onDelete: (itemId: string) => void;
  level?: number;
}

export const NestedList: React.FC<NestedListProps> = ({
  item,
  onAdd,
  onDelete,
  level = 0,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const hasChildren = item.children.length > 0;

  const { isOpen, itemIdToDelete, openModal, closeModal } =
    useDeleteItemModal();

  const handleDeleteConfirm = () => {
    if (itemIdToDelete) {
      onDelete(itemIdToDelete);
      closeModal();
    }
  };

  return (
    <>
      <ListContainer $level={level}>
        <ListItemContainer $level={level}>
          {hasChildren ? (
            <ToggleIcon onClick={() => setIsCollapsed(!isCollapsed)}>
              {isCollapsed ? <FaFolder /> : <FaFolderOpen />}
            </ToggleIcon>
          ) : (
            <FaFile />
          )}
          <span>{item.name}</span>
          <ButtonUI onClick={() => onAdd(item.id)} small>
            <FaPlus />
          </ButtonUI>
          {item.id !== "root" && (
            <ButtonUI onClick={() => openModal(item.id)} small>
              <FaMinus />
            </ButtonUI>
          )}
        </ListItemContainer>
        {!isCollapsed && (
          <ChildrenContainer>
            {item.children.map((child) => (
              <NestedList
                key={child.id}
                item={child}
                onAdd={onAdd}
                onDelete={onDelete}
                level={level + 1}
              />
            ))}
          </ChildrenContainer>
        )}
      </ListContainer>
      <DeleteItemModal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

const ListContainer = styled.div<{ $level: number }>`
  position: relative;
  margin-left: ${({ $level }) => ($level > 0 ? 20 : 0)}px;
  padding-left: ${({ $level }) => ($level > 0 ? 10 : 0)}px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: ${({ $level }) => ($level > 0 ? -10 : 0)}px;
    bottom: 0;
    width: ${({ $level }) => ($level > 0 ? "1px" : "0")};
    background: #ccc;
  }
`;

const ListItemContainer = styled.div<{ $level: number }>`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  padding: 5px 10px;
  background-color: ${({ $level }) => `hsl(${$level * 20}, 80%, 90%)`};
  border-radius: 5px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    width: ${({ $level }) => ($level > 0 ? "10px" : "0")};
    height: 1px;
    background: #ccc;
  }
`;

const ToggleIcon = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ChildrenContainer = styled.div`
  margin-top: 5px;
`;
