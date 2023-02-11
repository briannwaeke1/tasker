import { Task } from "../../App";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((t) => (
        <TaskItem key={t.id} name={t.name} />
      ))}
    </div>
  );
};

export default Tasks;