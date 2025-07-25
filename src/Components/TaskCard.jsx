import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  const eliminar = () => {
    deleteTask(task.id);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize ">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        onClick={eliminar}
        className="bg-red-500 px-2 py-1 rounded-md mt-4 cursor-pointer hover:bg-red-400"
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
