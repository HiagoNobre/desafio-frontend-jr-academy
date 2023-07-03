import TItems from "./Types/TItems";

type TIdItems = number[];

const items = [
  {
    id: 1,
    selected: false,
    content: 'First'
  },
  {
    id: 2,
    selected: false,
    content: 'Second'
  },
  {
    id: 3,
    selected: false,
    content: 'Forty five'
  },
  {
    id: 4,
    selected: false,
    content: 'Forty six'
  },
  {
    id: 5,
    selected: false,
    content: 'Last one'
  }
];

const secondItems = [
  {
    id: 1,
    selected: false,
    content: 'First'
  },
  {
    id: 2,
    selected: false,
    content: 'Second'
  },
  {
    id: 3,
    selected: false,
    content: 'Third'
  },
  {
    id: 4,
    selected: false,
    content: 'Fourth'
  }
];

const selectItems = (idItems: TIdItems, array: TItems[]): TItems[] => {

  if (idItems.length < 1 || !idItems) return array;

  const newItems: TItems[] = [];

  array.forEach(item => {
    if (idItems.includes(item.id)) {
      newItems.push({ ...item, selected: true });
      return;
    }

    newItems.push({ ...item, selected: false });
    return;
  });

  return newItems;
}

const demo = [
  {
    id: 1,
    data: selectItems([], secondItems),
    isModal: true,
    isOpenModal: false,
    focus: false,
  },
  {
    id: 2,
    data: selectItems([3], secondItems),
    isModal: false,
    isOpenModal: true,
    focus: true,
  },
  {
    id: 3,
    data: selectItems([1, 2, 3, 4], items),
    isModal: false,
    isOpenModal: false,
    focus: false,
  },
  {
    id: 4,
    data: selectItems([], secondItems),
    isModal: false,
    isOpenModal: true,
    focus: true,
  },
  {
    id: 5,
    data: selectItems([1, 2, 3, 4], items),
    isModal: false,
    isOpenModal: true,
    focus: true,
  },
];

export default {
  items,
  secondItems,
  demo,
  selectItems,
}
