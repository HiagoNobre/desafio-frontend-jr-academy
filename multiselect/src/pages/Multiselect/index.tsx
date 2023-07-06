import { Multiselect } from '../../stories/Multiselect/Multiselect';
import data from '../../data';
import './styles.css';

export default function Multiselects() {
  const config = data.demo[0]
  
  return (
    <div className='main'>
          <Multiselect
            items={config.data}
            focus={config.focus}
            isModal={config.isModal}
            isOpenModal={config.isOpenModal}
          />
    </div>
  )
}
