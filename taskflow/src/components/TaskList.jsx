
import { TaskItem } from "./TaskItem";

export function TaskList({ tarefas, onToggle, onRemover }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <TaskItem
          key={tarefa.id}
          tarefa={tarefa}
          onToggle={onToggle}
          onRemover={onRemover}
        />
      ))}
    </ul>
  );
}
