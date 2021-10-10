import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { putTodo } from "../Reducer/todoSlice";

const TodoDetails = () => {
  const todoList = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const todo = todoList.find((t) => t.id === Number(id));
    if (todo) {
      setTitle(todo.title);
      setDone(todo.done);
    }
  }, [id, todoList]);

  const [title, setTitle] = useState("");
  const [done, setDone] = useState("");

  const handleChangeTitle = (e) => {
    if (e.key === "Enter") {
      dispatch(putTodo({ id: Number(id), done, title }));
      history.push("/");
    }
  };

  return (
    <div className="TodoInputContainer">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ändere Todo Titel"
        className="InputItem"
        onKeyDown={handleChangeTitle}
      />
    </div>
  );
};

export default TodoDetails;
