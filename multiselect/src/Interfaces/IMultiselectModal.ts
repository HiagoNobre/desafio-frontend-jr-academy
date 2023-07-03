import { Dispatch, SetStateAction } from 'react';
import TItems from "../Types/TItems";

interface IMultiselectModal {
  items: TItems[];
  setItems?: Dispatch<SetStateAction<TItems[]>> | undefined;
  primary?: boolean | undefined;
  isModal?: boolean | undefined;
  isOpenModal: boolean;
}

export default IMultiselectModal;
