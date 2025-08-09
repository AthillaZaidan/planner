import { useState } from "react";
import "./index.css";
import headerpic from "./assets/beautiful-office-space-cartoon-style.jpg";
import TodoCard from "./TodoCard";
import { FaPlus } from "react-icons/fa";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  deadline: string;
  durationInMinutes: number;
}

function MainArea() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: "buy food", completed: true, deadline: "2025-08-10", durationInMinutes: 120 },
    { id: 2, text: "makan", completed: true, deadline: "2025-08-12", durationInMinutes: 90 },
    { id: 3, text: "tidur", completed: false, deadline: "2025-08-15", durationInMinutes: 240 },
    { id: 4, text: "kuliah", completed: false, deadline: "2025-08-16", durationInMinutes: 60 },
    { id: 5, text: "belajar OS", completed: false, deadline: "2025-08-18", durationInMinutes: 90 },
    { id: 6, text: "belajar stima", completed: false, deadline: "2025-08-20", durationInMinutes: 30 },
    { id: 7, text: "belajar algeo", completed: false, deadline: "2025-08-22", durationInMinutes: 75 },
  ]);

  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoDeadline, setNewTodoDeadline] = useState('');
  const [newTodoDuration, setNewTodoDuration] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddTodo = () => {
    if (newTodoText.trim() === '' || !newTodoDeadline || !newTodoDuration) {
      alert("Please fill out all fields!");
      return;
    }
    const newTodo: TodoItem = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
      deadline: newTodoDeadline,
      durationInMinutes: parseInt(newTodoDuration, 10),
    };
    setTodos([...todos, newTodo]);
    setNewTodoText('');
    setNewTodoDeadline('');
    setNewTodoDuration('');
    setIsFormVisible(false);
  };

  const handleDeleteTodo = (idToDelete: number) => {
    setTodos(todos.filter(todo => todo.id !== idToDelete));
  };

  const handleToggleStatus = (idToToggle: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-col h-full w-full bg-putihkmj rounded-lg shadow p-6">
      
      <div className="w-full h-40 rounded-lg overflow-hidden mb-6 flex-shrink-0">
        <img src={headerpic} className="w-full h-full object-cover" alt="Office Space" />
      </div>
      
      <div className="mb-6 flex-shrink-0">
        <button
          onClick={() => setIsFormVisible(true)}
          className="flex items-center gap-2 px-4 py-2 bg-birukmj text-white rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
        >
          <FaPlus />
          Add New Task
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {todos.map(todo => (
            <TodoCard
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              deadline={todo.deadline}
              durationInMinutes={todo.durationInMinutes}
              onDelete={() => handleDeleteTodo(todo.id)}
              onToggleStatus={() => handleToggleStatus(todo.id)}
            />
          ))}
        </div>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale">
            <h2 className="text-2xl font-bold mb-4 text-birukmj">Create a New Task</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                className="p-2 border rounded-lg"
                placeholder="Task name..."
              />
              <input
                type="date"
                value={newTodoDeadline}
                onChange={(e) => setNewTodoDeadline(e.target.value)}
                className="p-2 border rounded-lg"
              />
              <input
                type="number"
                value={newTodoDuration}
                onChange={(e) => setNewTodoDuration(e.target.value)}
                className="p-2 border rounded-lg"
                placeholder="Duration in minutes"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setIsFormVisible(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTodo}
                  className="px-4 py-2 bg-birukmj text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainArea;
