import React from 'react'
import { useState } from 'react';
import Todo from './Todo';

const TodoDisplay = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);
  
    const addTodo = () => {
      if (editId) {
        const updatedTodos = todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        );
        setTodos(updatedTodos);
        setEditId(null);
      } else {
        setTodos([...todos, { id: Date.now(), text: input }]);
      }
      setInput('');
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const editTodo = (id) => {
      const todoToEdit = todos.find((todo) => todo.id === id);
      setInput(todoToEdit.text);
      setEditId(id);
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
          <div className="bg-purple-400 p-8 rounded shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center text-black">Todo App</h1>
            <div className="flex mb-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded mr-2"
              />
              <button
                onClick={addTodo}
                className="bg-pink-500 text-white px-4 py-2 rounded "
              >
                {editId ? 'Update' : 'Add'}
              </button>
            </div>
            <div className="todo-list">
              {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={deleteTodo} onEdit={editTodo} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default TodoDisplay