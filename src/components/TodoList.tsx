import React from "react";

// creating a interface to lay out what the props we are passing to this component will look like
interface TodoListProps {
  items: { id: string; text: string }[];
  todoDeleteHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, todoDeleteHandler }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={todoDeleteHandler.bind(null, todo.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
