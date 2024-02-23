import { AppDispatch, RootState } from "@/MyContext/store";
import { addTodo } from "@/MyContext/TodoSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResizablePanel } from "@/components/ui/resizable";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface TodoMap {
  id: string;
  task: string;
  done: boolean;
}

const Todo = () => {
  const [task, setTask] = useState<string>("");

  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: nanoid(),
        task,
        done: false,
      })
    );
    setTask("");
  };

  return (
    <ResizablePanel defaultSize={80}>
      <div className="p-10">
        <h1 className="font-semibold text-3xl mb-8">Todo List</h1>
        <form onSubmit={handleSubmit}>
          <Label>Add Task</Label>
          <Input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            name="task"
          />
          <Button type="submit">Save</Button>
        </form>
        <div className="mt-8">
          {todos.map((item: TodoMap, index) => {
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
      </div>
    </ResizablePanel>
  );
};

export default Todo;
