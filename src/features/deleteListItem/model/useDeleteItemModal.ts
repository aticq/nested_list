import { useState, useCallback, useEffect } from "react";

export const useDeleteItemModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState<string | null>(null);

  const openModal = useCallback((itemId: string) => {
    setItemIdToDelete(itemId);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setItemIdToDelete(null);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return {
    isOpen,
    itemIdToDelete,
    openModal,
    closeModal,
  };
};
