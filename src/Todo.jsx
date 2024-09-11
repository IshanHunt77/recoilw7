import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { description, filtervalue, title, TodoAtom, filt } from "./store/atoms/TodoAtom";

export const Todo = () => {
  const setTitle = useSetRecoilState(title);
  const setDescription = useSetRecoilState(description);
  const setTodos = useSetRecoilState(TodoAtom); // This is for adding to the todo list
  const currentTitle = useRecoilValue(title); // Get the current title
  const currentDescription = useRecoilValue(description); // Get the current description
  const filteredTodos = useRecoilValue(filt); // Use selector to get filtered todos
  const setFilterValue = useSetRecoilState(filtervalue); // Set the filter value

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (currentTitle && currentDescription) {
      setTodos((oldTodos) => [
        ...oldTodos,
        { title: currentTitle, description: currentDescription },
      ]);
      setTitle(""); // Reset title
      setDescription(""); // Reset description
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter todo title"
        value={currentTitle}
        onChange={handleTitle}
      />
      <input
        type="text"
        placeholder="Enter todo description"
        value={currentDescription}
        onChange={handleDescription}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <br />
      <input
        type="text"
        placeholder="Filter todos"
        onChange={handleFilter}
      />
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>: {todo.description}
          </li>
        ))}
      </ul>
    </>
  );
};
