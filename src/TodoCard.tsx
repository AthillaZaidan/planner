import { FaCalendarAlt, FaClock, FaTrash } from 'react-icons/fa';

interface TodoCardProps {
  text: string;
  completed: boolean;
  deadline: string;
  durationInMinutes: number;
  onDelete: () => void; 
  onToggleStatus: () => void;
}

function TodoCard({ text, completed, deadline, durationInMinutes, onDelete, onToggleStatus }: TodoCardProps) {
  return (
    <div className="relative flex flex-col justify-between bg-white p-3 rounded-lg shadow-md aspect-square">
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Delete task"
      >
        <FaTrash />
      </button>

      <div className="flex-grow flex items-center justify-center">
        <p className={`text-xl font-bold text-center break-words ${completed ? 'line-through text-gray-400' : 'text-birukmj'}`}>
          {text}
        </p>
      </div>

      <div className="text-xs text-gray-500 mb-2">
        <div className="flex items-center gap-1.5">
          <FaCalendarAlt />
          <span>Due: {deadline}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <FaClock />
          <span>{durationInMinutes} min</span>
        </div>
      </div>

      <button
        onClick={onToggleStatus}
        className={`w-full p-2 text-sm rounded-md text-white transition-colors ${
          completed ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {completed ? 'Mark as Not Done' : 'Mark as Done'}
      </button>
    </div>
  );
}

export default TodoCard;