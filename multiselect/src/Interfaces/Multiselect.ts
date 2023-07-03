import TItems from "../Types/TItems";

interface IMultiselect {
  title?: string | undefined;
  items: TItems[];
  focus?: boolean | undefined;
  primary?: boolean | undefined;
  isModal?: boolean | undefined;
  isOpenModal?: boolean | undefined;
}

export default IMultiselect;
