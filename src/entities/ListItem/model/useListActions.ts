import { useState } from "react";
import { ListItemType } from "@/entities/ListItem/types/types";

export const useListActions = () => {
  const [list, setList] = useState<ListItemType>({
    id: "root",
    name: "Root",
    children: [],
  });

  const addItem = (parentId: string, name: string) => {
    const newItem = {
      id: Date.now().toString(),
      name,
      children: [],
    };

    const addRecursive = (item: ListItemType): ListItemType => {
      if (item.id === parentId) {
        return { ...item, children: [...item.children, newItem] };
      }
      return { ...item, children: item.children.map(addRecursive) };
    };

    setList(addRecursive(list));
  };

  const deleteItem = (itemId: string) => {
    if (itemId === "root") return;

    const deleteRecursive = (item: ListItemType): ListItemType | null => {
      if (item.id === itemId) {
        return null;
      }
      return {
        ...item,
        children: item.children
          .map(deleteRecursive)
          .filter((child) => child !== null),
      };
    };

    const updatedList = deleteRecursive(list);
    if (updatedList) {
      setList(updatedList);
    }
  };

  return { list, addItem, deleteItem };
};
