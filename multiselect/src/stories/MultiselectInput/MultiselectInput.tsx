import { useState } from 'react';
import IMultiselectInput from '../../Interfaces/IMultiselectInput';
import TItems from '../../Types/TItems';
import './styles.css';

export function MultiselectInput({
  title = 'Multiselect',
  items = [],
  setItems,
  focus = false,
  setIsOpenModal,
}: IMultiselectInput) {

  const [listItems, setListItems] = useState<TItems[]>(items);
  const [isFocus, setIsFocus] = useState<boolean>(focus);

  const handleFocus = (): void => {

    setIsFocus(!isFocus)

    if (!setIsOpenModal) return;

    setIsOpenModal(!isFocus);
  };

  const handleDeselect = (
    id: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {

    e.stopPropagation();

    if (!setItems || !items) return;

    const newItems = listItems.filter(item => {
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return true;
    });

    if (!setItems) {
      setListItems(newItems);
      items = [...newItems];
      return;
    }

    setItems(newItems);
  }

  const handlePlaceholder = (): string => {
    const selected = items.find(item => item.selected);

    return selected ? '' : 'Selecionado';
  }

  return (
    <div>
      <label className='storybook-multiselect-input-title' htmlFor='multiselect-input'>
        {title}
      </label>
      <div className={[
        'storybook-multiselect-input',
        `storybook-multiselect-input--${isFocus ? 'selected' : 'not-selected'}`
      ].join(' ')}
        id='multiselect-input'
        onClick={handleFocus}
      >
        <div className='storybook-multiselect-input-left'>
          {
            listItems.length > 0 &&
            listItems.map(item => (
              item.selected &&
              <div className='storybook-multiselect-input-checkbox'
                key={item.id}
                onClick={(e) => handleDeselect(item.id, e)}
              >
                <span>{item.content}</span>
                <span>X</span>
              </div>
            ))
          }
          {handlePlaceholder()}
        </div>
        <div className={[
          'storybook-multiselect-input-right',
          `storybook-multiselect-input-right--${isFocus ? 'selected' : 'not-selected'}`
        ].join(' ')}>
          ^
        </div>
      </div>
    </div>
  )
}
