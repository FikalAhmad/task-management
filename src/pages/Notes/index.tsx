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
import { Link, useParams } from "react-router-dom";
import AddNote from "./AddNote";
import { useSelector } from "react-redux";
import { RootState } from "@/MyContext/store";
import ViewNote from "./ViewNote";

const NotesList = () => {
  const { noteId } = useParams();
  const notes = useSelector((state: RootState) => state.notes);

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
              <Button className="w-full mr-5" asChild>
                <Link to="/notes/addnote">Add Note</Link>
              </Button>
              <Button className="w-full">Remove Note</Button>
            </div>
            <div>
              <Input type="text" placeholder="Search..." />
            </div>
          </div>
          <ScrollArea className="h-[500px] mt-5">
            {notes.length <= 0 ? (
              <p>tidak ada note</p>
            ) : (
              notes.map((item: any) => {
                return (
                  <Card key={item.id} className="mb-5">
                    <CardHeader>
                      <CardTitle>
                        <Link to={`/notes/${item.id}`}>{item.title}</Link>
                      </CardTitle>
                      <CardDescription className="h-10 text-ellipsis overflow-hidden">
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
          </ScrollArea>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55}>
        <div className="p-10">
          <AddNote />
          <ViewNote noteId={noteId} />
        </div>
      </ResizablePanel>
    </>
  );
};

export default NotesList;
