import React, { KeyboardEvent, useEffect, useState } from 'react';
import styles from './Tags.module.css';
import { X } from 'react-feather';

interface Props {
  placeholder?: string;
  onChanged: (strings: string[]) => void; // Función para enviar el array de strings al padre
}

const TagsInput = ({ placeholder, onChanged }: Props) => {
  //   const [searchTerm, setSearchTerm] = useState('');
  //   const [, setSelectedOption] = useState('');
  //   const [selectedOptionText, setSelectedOptionText] = useState('');
  //   const [open, setOpen] = useState(false);

  //   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchTerm(e.target.value);
  //   };

  //   const handleOptionSelect = ({
  //     name,
  //     price,
  //   }: {
  //     name: string;
  //     price: number;
  //   }) => {
  //     setOpen(false);
  //     setSelectedOption(uuid);
  //     setSelectedOptionText(name);
  //     console.log('UUIDS', uuid);
  //     // handler({ uuid, price, name });
  //   };

  //   const filteredOptions = options?.filter((option) =>
  //     option.name.toLowerCase().includes(searchTerm.toLowerCase()),
  //   );

  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value); // Actualizar el estado con el valor del input
  };

  const addElement = () => {
    if (tag.trim() !== '') {
      setTags((prev) => [...prev, tag]);
      setTag('');
    }
  };

  const removeElement = (index: number) => {
    const nuevoArray = [...tags];
    nuevoArray.splice(index, 1);
    setTags(nuevoArray);
    onChanged(tags);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addElement();
      onChanged(tags);
    }
  };

  console.log({tags})

  useEffect(() => {
    onChanged(tags);
  }, [tags, onChanged]);
  return (
    <div className={styles.select_container}>
      <input
        type="text"
        className={styles.search_input}
        placeholder={placeholder}
        onChange={handleChange}
        value={tag}
        style={{
          marginBottom: 10,
        }}
        onKeyUp={handleKeyPress}
      />
      {/* <button onClick={addElement}>Add</button> */}

      <ul className={styles.list}>
        {tags.map((tag, index) => (
          <li key={tag + index}>
            <span>{tag}</span>
            <button className={styles.tag_btn} onClick={() => removeElement(index)}>
              <X size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsInput;
