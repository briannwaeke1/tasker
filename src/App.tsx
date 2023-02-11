import { useState } from "react";
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
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
          <Container title={"Summary"}>
            <Summary tasks={tasks} />
          </Container>
          <Container>
            <Input />
          </Container>
          <Container title={"Tasks"}>
            <Tasks tasks={tasks} />
          </Container>
        </div>
      </div>
    </div>
  );
}
export default App;
