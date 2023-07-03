import { useState } from 'react';
import IMultiselectModal from '../../Interfaces/IMultiselectModal';
import TItems from '../../Types/TItems';
import './styles.css';

export function MultiselectModal({
  items = [],
  setItems,
  primary,
  isModal = true,
  isOpenModal = false,
}: IMultiselectModal) {

  const [listItems, setListItems] = useState<TItems[]>(items);

  const handleSelection = ({ id }: TItems): void => {

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

  return (
    isOpenModal &&
    <div className={[
      'storybook-multiselect-modal',
      `${primary && 'storybook-multiselect-modal--primary'}`
    ].join(' ')}
      style={isModal ? { position: 'absolute' } : undefined}
    >
      {
        listItems.length > 0 &&
        listItems.map((item) => (
          <div className={[
            'storybook-multiselect-modal-checkbox',
            `storybook-multiselect-modal-checkbox--${item.selected && primary ? 'selected' : 'not-selected'}`
          ].join(' ')}
            key={item.id}
            onClick={() => handleSelection(item)}
          >
            <div className={[
              'storybook-multiselect-modal-square',
              `${item.selected ? 'storybook-multiselect-modal-square--selected' : ''}`
            ].join(' ')}
            ></div>
            <span>{item.content}</span>
          </div>
        ))
      }
    </div>
  )
}
