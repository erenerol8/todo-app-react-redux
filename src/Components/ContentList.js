import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle, destroy, getTodosAsync } from "../redux/todos/todosSlice";

const ContentList = () => {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.İsloading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something is off</div>;
  }

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(destroy(item.id))}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
