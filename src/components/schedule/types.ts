export type Event = {
  title: string;
  color: string;
};
export type Schedule = {
  time: string;
  events: (Event | null)[];
};

export type SelectedValues = {
  [key: number]: boolean;
};
