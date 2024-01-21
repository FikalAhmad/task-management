import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResizablePanel } from "@/components/ui/resizable";
import { useState } from "react";

type Values = {
  id: number;
  task: string;
  done: boolean;
};

const Todo = () => {
  const [activity, setActivity] = useState<string>("");
  const [todos, setTodos] = useState<Values[]>([]);

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: activity,
        done: false,
      },
    ]);
  };

  return (
    <ResizablePanel defaultSize={80}>
      <h1 className="font-semibold text-3xl p-10">tes</h1>
      <form onSubmit={addTodo}>
        <Label>Add Task</Label>
        <Input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          name="task"
        />
        <Button type="submit">Save</Button>
      </form>
      <div>
        {todos.map((item, index) => {
          return (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                {index + 1}. {item.task}
              </div>
              <div>
                <Button className="mr-5">Edit</Button>
                <Button>Hapus</Button>
              </div>
            </div>
          );
        })}
      </div>
    </ResizablePanel>
  );
};

export default Todo;
