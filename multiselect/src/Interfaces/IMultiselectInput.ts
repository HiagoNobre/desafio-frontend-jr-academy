import { Dispatch, SetStateAction } from 'react';
import TItems from "../Types/TItems";

interface IMultiselectInput {
  title?: string | undefined;
  items: TItems[];
  setItems?: Dispatch<SetStateAction<TItems[]>> | undefined;
  focus?: boolean | undefined;
  setIsOpenModal?: Dispatch<SetStateAction<boolean>> | undefined;
}

export default IMultiselectInput;
