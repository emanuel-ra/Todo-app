export type Status = 'active' | 'complete';
export type Filters = 'all' | 'active' | 'complete';
export interface Todo {
  id: string;
  todo: string;
  status: Status;
}


