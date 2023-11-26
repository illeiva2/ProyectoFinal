import { useState, useEffect } from "react";
import { TaskItem } from "./taskitem";
import { TaskForm } from "./taskform";

// No iba a estar hasta el domingo sin usar localStorage

export const TaskList = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || [];
  });
  // Casi me olvido de usar useEffect

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDeleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // No estoy muy seguro de que localStorage Ande, en el caso de que no, usar el codigo de abajo que esta comentado

  // const [tasks, setTasks] = useState([
  //   {
  //     task: "Primer tarea ejemplo",
  //     decription: "Descripcion de la tarea",
  //     daysToComplete: 10,
  //     isComplete: false,
  //   },
  // ]);

  return (
    <>
      <h1>Lista de Tareas APP React Proyecto Final</h1>
      <TaskForm setItems={setTasks} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            setTasks={setTasks}
            onDelete={() => handleDeleteTask(index)}
            onComplete={() => handleCompleteTask(index)}
          />
        ))}
      </div>
    </>
  );
};

/**
 * Resumen: Código para una aplicación de lista de tareas en React.
 */
