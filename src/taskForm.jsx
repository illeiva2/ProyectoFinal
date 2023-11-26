import { useState } from "react";
import PropTypes from "prop-types";

export const TaskForm = ({ setItems }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [daysToComplete, setDaysToComplete] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Task:", task);
    console.log("Description:", description);
    console.log("Days to Complete:", daysToComplete);

    if (!task.trim() || !description.trim() || !daysToComplete.trim()) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    const newTask = {
      task,
      description,
      daysToComplete: parseInt(daysToComplete),
    };

    setItems((prevTasks) => [...prevTasks, newTask]);

    setTask("");
    setDescription("");
    setDaysToComplete("");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <label htmlFor="task" style={labelStyles}>
        Tarea:
      </label>
      <input
        type="text"
        id="task"
        style={inputStyles}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <label htmlFor="description" style={labelStyles}>
        Descripción:
      </label>
      <input
        type="text"
        id="description"
        style={inputStyles}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="daysToComplete" style={labelStyles}>
        Días para Completar:
      </label>
      <input
        type="number"
        id="daysToComplete"
        style={inputStyles}
        value={daysToComplete}
        onChange={(e) => setDaysToComplete(e.target.value)}
      />

      <button type="submit" style={buttonStyles}>
        Agregar Tarea
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  setItems: PropTypes.func,
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  margin: "auto",
};

const labelStyles = {
  marginBottom: "5px",
  fontSize: "14px",
};

const inputStyles = {
  padding: "8px",
  marginBottom: "10px",
  fontSize: "16px",
};

const buttonStyles = {
  backgroundColor: "#007BFF",
  color: "#fff",
  padding: "10px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
};
