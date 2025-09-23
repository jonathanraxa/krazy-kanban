export const data = [
  {
    id: 1,
    text: 'Buy milk',
    status: 'todo',
  },
  {
    id: 2,
    text: 'Buy oranges',
    status: 'todo',
  },
  {
    id: 3,
    text: 'Buy apples',
    status: 'in-progress',
  },
  {
    id: 4,
    text: 'Buy pears',
    status: 'in-progress',
  },
  {
    id: 5,
    text: 'Buy hotdogs',
    status: 'done'
  }
];

export interface DataPropType { id: number; text: string; status: string; }
