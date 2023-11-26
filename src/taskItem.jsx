import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const TaskItem = ({ task, onDelete, onComplete }) => {
  const colors = {
    background: "#f8f8f8",
    primaryText: "#333",
    accent: "#007BFF",
    delete: "red",
    cardBackground: "#fff",
  };

  const typography = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    headingFontSize: "24px",
  };

  const cardStyles = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const buttonStyles = {
    background: colors.accent,
    color: "#fff",
    borderRadius: "4px",
    padding: "10px 15px",
    cursor: "pointer",
  };

  const buttonDeleteStyles = {
    background: colors.delete,
    color: "#fff",
    borderRadius: "4px",
    padding: "10px 15px",
    cursor: "pointer",
  };

  return (
    <Card
      sx={{
        ...cardStyles,
        backgroundColor: task.isCompleted ? "green" : "white",
        minWidth: 275,
      }}
    >
      <CardContent>
        <Typography
          sx={{ ...typography, fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {task.task}
        </Typography>
        <Typography sx={{ ...typography }} variant="h5" component="div">
          {task.decription}
        </Typography>
        <Typography sx={{ ...typography, mb: 1.5 }} color="text.secondary">
          Esta tarea deberia llevar {task.daysToComplete} dias
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ ...buttonStyles }} size="small" onClick={onComplete}>
          Completada
        </Button>
        <Button sx={{ ...buttonDeleteStyles }} size="small" onClick={onDelete}>
          Borrar
        </Button>
      </CardActions>
    </Card>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};
