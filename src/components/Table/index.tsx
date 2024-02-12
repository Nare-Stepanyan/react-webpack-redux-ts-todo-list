import React, { FC } from "react";
import { todo } from "../../types";

type TableProps = {
  todoList: todo[];
};

const Table: FC<TableProps> = ({ todoList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todoList?.map(({ id, completed, title }, i) => (
          <tr key={i}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{`${completed}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
