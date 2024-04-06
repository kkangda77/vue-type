const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
export const fetchTodos = async () => {
  const response = await fetch(apiUrl);
  const res = await response.json();
  return res;
};
