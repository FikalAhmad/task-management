import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResizablePanel } from "@/components/ui/resizable";
import { useState } from "react";

type Values = {
  title: string;
  task: string;
  done: string;
};

const Todo = () => {
  const [todos, setTodos] = useState<Values>({
    title: "",
    task: "",
    done: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodos({ ...todos, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todos);
  };

  return (
    <ResizablePanel defaultSize={80}>
      <h1 className="font-semibold text-3xl p-10">tes</h1>
      <form onSubmit={handleSubmit}>
        <Label>Add Title</Label>
        <Input
          type="text"
          value={todos.title}
          onChange={handleChange}
          name="title"
        />
        <Label>Add Task</Label>
        <Input
          type="text"
          value={todos.task}
          onChange={handleChange}
          name="task"
        />
        <Button type="submit">Save</Button>
      </form>
    </ResizablePanel>
  );
};

export default Todo;
