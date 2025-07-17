import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-600 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Agregar tareas</h1>
        <input
          autoFocus
          value={title}
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2"
        />

        <textarea
          value={description}
          placeholder="Introduzca la descripcion de su tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white cursor-pointer hover:bg-indigo-400">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
