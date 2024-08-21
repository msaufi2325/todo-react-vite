import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-center space-y-2">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Delete all completed
        </button>
      )}
    </div>
  )
}
