import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/MyContext/store";
import { useState } from "react";
import RenderPanelNote from "./RenderPanelNote";
import { Checkbox } from "@/components/ui/checkbox";
import { removeNote } from "@/MyContext/NoteSlice";

type NoteMap = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

const NotesList = () => {
  const [selectedNote, setSelectedNote] = useState({});
  const [status, setStatus] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [searchNote, setSearchNote] = useState<string>("");

  const notes = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch<AppDispatch>();

  const filteredNote = notes.filter((note) =>
    note.title.toLowerCase().includes(searchNote.toLowerCase())
  );

  //TODO: in card case, i want to change event onclick to view note from title to all element card.
  //TODO: edit feature. i want to add edit feature at view note with the icon button or just button.
  //TODO:

  return (
    <>
      <ResizablePanel
        defaultSize={25}
        minSize={25}
        maxSize={35}
        className="h-[100vh] flex flex-col justify-between"
      >
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Notes</h1>
          <div className="mt-5 h-20 flex flex-col justify-between">
            <div className="flex justify-between">
              <Button
                className="w-full mr-5"
                onClick={() => {
                  setStatus("ADD_NOTE");
                }}
              >
                Add Note
              </Button>
              <Button
                className="w-full"
                onClick={() => dispatch(removeNote(selected))}
              >
                Remove Note
              </Button>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Search..."
                value={searchNote}
                onChange={(e) => {
                  setSearchNote(e.target.value);
                }}
              />
            </div>
          </div>
          <ScrollArea className="h-[500px] mt-5">
            <div className="grid grid-cols-1">
              {notes.length <= 0 ? (
                <p>tidak ada note</p>
              ) : (
                filteredNote.map((item: NoteMap) => {
                  return (
                    <Card key={item.id} className="mb-5">
                      <CardHeader>
                        <CardTitle
                          className="truncate cursor-pointer text-lg font-bold"
                          onClick={() => {
                            setSelectedNote(item);
                            setStatus("VIEW_NOTE");
                          }}
                        >
                          {item.title}
                        </CardTitle>
                        <CardDescription className="h-16 text-pretty truncate">
                          {item.content}
                        </CardDescription>
                        <div className="flex justify-between">
                          <p className="text-xs font-sans text-slate-500">
                            Modified: {item.createdAt}
                          </p>
                          <Checkbox
                            value={item.id}
                            onCheckedChange={(checked) =>
                              checked
                                ? setSelected((prev) => [...prev, item.id])
                                : ""
                            }
                          />
                        </div>
                      </CardHeader>
                    </Card>
                  );
                })
              )}
            </div>
          </ScrollArea>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55}>
        <div className="p-10">
          <RenderPanelNote status={status} data={selectedNote} />
        </div>
      </ResizablePanel>
    </>
  );
};

export default NotesList;
