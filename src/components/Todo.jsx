
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded  text-2x">
      <span>{todo.text}</span>
      <div className="flex space-x-2">
        <FontAwesomeIcon
          icon={faEdit}
          className="text-black cursor-pointer hover:text-blue-700"
          onClick={() => onEdit(todo.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="text-black cursor-pointer hover:text-blue-400"
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;