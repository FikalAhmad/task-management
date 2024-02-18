import { addNote } from "@/MyContext/NoteSlice";
import { AppDispatch } from "@/MyContext/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddNote = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addNote({
        id: nanoid(),
        title,
        content,
        createdAt: new Date().toLocaleDateString(),
      })
    );
    setTitle("");
    setContent("");
  };
  // TODO: maybe if u can give the scroll area component, so that the input can have a lot of content without disturbing the overflow of other element
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
        <Label htmlFor="title">Add Title</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          className="text-2xl font-bold py-2"
        />
        <Label htmlFor="content">Add Content</Label>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          rows={20}
          className="overflow-y-hidden resize-none "
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default AddNote;
