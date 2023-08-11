import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title == "" || description == ""){
      return alert("No debe estar vacio")
    }
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">

      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crear Tareas</h1>
        <input
          type="text"
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la tarea"
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
