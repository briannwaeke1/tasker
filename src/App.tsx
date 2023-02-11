import { FormEvent, useState } from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import Summary from "./components/Summary/Summary";
import Tasks from "./components/Tasks/Tasks";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  name: string;
  done: boolean;
  id: string;
}

const initialTasks = [
  {
    name: "task one",
    done: false,
    id: uuidv4(),
  },
  {
    name: "task two",
    done: true,
    id: uuidv4(),
  },
];


function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);


// handleSubmit returns a new array with the old tasks plus the new one.
  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask = {
      name: value,
      done: false,
      id: uuidv4(),
    };
    setTasks((tasks) => [...tasks, newTask]);
  };


// toggleDoneTask returns a new array with the opposite done property, for the specified id. 
  const toggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };


// handleDeleteTask returns a new array without the task with the specified id.
  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };




  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
          <Container title={"Summary"}>
            <Summary tasks={tasks} />
          </Container>
          <Container>
          <Input handleSubmit={handleSubmit} />
          </Container>
          <Container title={"Tasks"}>
          <Tasks
              tasks={tasks}
              toggleDone={toggleDoneTask}
              handleDelete={handleDeleteTask}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}
export default App;
