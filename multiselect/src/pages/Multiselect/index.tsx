import { Multiselect } from '../../stories/Multiselect/Multiselect';
import data from '../../data';
import './styles.css';

export default function Multiselects() {
  const {data, isModal, focus, isOpenModal} = data.demo[0]
  
  return (
    <div className='main'>
          <Multiselect
            items={data}
            focus={focus}
            isModal={isModal}
            isOpenModal={isOpenModal}
          />
    </div>
  )
}
