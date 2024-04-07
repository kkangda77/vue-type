export interface Todo<T> {
  userId: number;
  id: number;
  title: string;
  completed: T;
}
export type OrderTerm = 'title' | 'completed';
