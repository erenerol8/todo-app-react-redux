import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todos/todosSlice";

const HeaderForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(addTodoAsync(title));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default HeaderForm;
