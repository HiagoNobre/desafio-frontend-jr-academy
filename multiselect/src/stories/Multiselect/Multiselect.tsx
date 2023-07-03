import { useState } from 'react';
import IMultiselect from '../../Interfaces/Multiselect';
import TItems from '../../Types/TItems';
import { MultiselectInput } from '../MultiselectInput/MultiselectInput';
import { MultiselectModal } from '../MultiselectModal/MultiselectModal';
import './styles.css';

export function Multiselect(props: IMultiselect) {
  const [items, setItems] = useState<TItems[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className='multiselect'>
      <MultiselectInput
        title={props.title}
        focus={props.focus}
        items={props.items || items}
        setItems={setItems}
        setIsOpenModal={setIsOpenModal}
      />
      <MultiselectModal
        isModal={props.isModal}
        isOpenModal={props.isOpenModal || isOpenModal}
        items={props.items}
        setItems={setItems}
        primary={props.primary}
      />
    </div>
  )
}
