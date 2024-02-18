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
import { useSelector } from "react-redux";
import { RootState } from "@/MyContext/store";
import { useState } from "react";
import RenderPanelNote from "./RenderPanelNote";

type NoteMap = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

const NotesList = () => {
  const [selectedNote, setSelectedNote] = useState({});
  const [status, setStatus] = useState("");
  const notes = useSelector((state: RootState) => state.notes);

  //TODO: in card case, i want to change event onclick to view note from title to all element card

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
              <Button className="w-full">Remove Note</Button>
            </div>
            <div>
              <Input type="text" placeholder="Search..." />
            </div>
          </div>
          <ScrollArea className="h-[500px] mt-5">
            <div className="grid grid-cols-1">
              {notes.length <= 0 ? (
                <p>tidak ada note</p>
              ) : (
                notes.map((item: NoteMap) => {
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
                        <CardDescription className="h-16 truncate">
                          {item.content}
                        </CardDescription>
                        <p className="text-xs font-sans text-slate-500">
                          Modified: {item.createdAt}
                        </p>
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
