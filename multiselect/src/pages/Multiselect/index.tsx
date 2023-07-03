import { Multiselect } from '../../stories/Multiselect/Multiselect';
import data from '../../data';
import './styles.css';

export default function Multiselects() {
  return (
    <div className='multiselects'>
      {
        data.demo.map(({ id, data, isModal, focus, isOpenModal }) => (
          <Multiselect
            key={id}
            items={data}
            focus={focus}
            isModal={isModal}
            isOpenModal={isOpenModal}
          />
        ))
      }
    </div>
  )
}
