import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]); // task = []

  function createTask(tasks) {
    setTask([
      ...task,
      {
        title: tasks.title,
        id: task.length,
        description: tasks.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((tasks) => tasks.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          task,
          deleteTask: deleteTask,
          createTask: createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
