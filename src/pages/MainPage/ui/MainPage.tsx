import React, { useCallback } from "react";
import { useListActions } from "@/entities/ListItem";
import { AddItemModal, useAddItemModal } from "@/features/addListItem";
import { NestedList } from "@/widgets/NestedList";

const MainPage: React.FC = () => {
  const { list, addItem, deleteItem } = useListActions();
  const { isOpen, inputValue, setInputValue, openModal, closeModal } =
    useAddItemModal();

  const [currentParentId, setCurrentParentId] = React.useState<string | null>(
    null,
  );

  const handleAdd = useCallback(
    (parentId: string) => {
      setCurrentParentId(parentId);
      openModal();
    },
    [openModal],
  );

  const handleDelete = (itemId: string) => {
    deleteItem(itemId);
  };

  const handleAddConfirm = useCallback(() => {
    if (currentParentId && inputValue.trim()) {
      addItem(currentParentId, inputValue.trim());
      closeModal();
    }
  }, [addItem, closeModal, currentParentId, inputValue]);

  return (
    <div>
      <NestedList item={list} onAdd={handleAdd} onDelete={handleDelete} />
      <AddItemModal
        isOpen={isOpen}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClose={closeModal}
        onAdd={handleAddConfirm}
      />
    </div>
  );
};

export default MainPage;
