import React, { useEffect } from "react";
import Button from "../button";
import { useSelector, useDispatch } from "react-redux";
import { todosSelecetor } from "../../store/app-selector";
import { setTodos } from "../../store/app-slice";
import Table from "../Table";

const Home = () => {
  const todos = useSelector(todosSelecetor);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTodos(data));
      });
  }, []);
  return (
    <div>
      <div>
        <h1>To do list</h1>
        <Table todoList={todos} />
      </div>
    </div>
  );
};

export default Home;
