export type Task = {
  id: string;
  name: string;
  dueDate: Date;
  completed: boolean;
  count: number;
  members: string[];
  progress: number;
};
