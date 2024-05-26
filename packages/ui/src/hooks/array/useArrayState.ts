import { useState } from "react"

type ArrayStateActions<T> = {
    add: (item: T) => void;
    remove: (item: T) => void;
    clear: () => void;
    edit: (elementId: string, value: T) => void;
}

const useArrayState = <T>(initialItems: T[]):[T[], ArrayStateActions<T>] => {
    const [items, setItems] = useState(initialItems);

    const add = (item: T) => setItems([...items, item]);
    
    const remove = (item: T) => setItems([...items.filter((i) => i !== item)])

    const clear = () => setItems([]);
    
      
  const edit = (elementId: string, value: T) => {
    setItems((prev) =>  {
      return prev.map((element) => {
        if (element === elementId) {
          return  value ;
        }
        return element;
      });
    });
  };

    return [items, {add, remove, clear, edit}]
}

export default useArrayState;