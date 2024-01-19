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

const NotesList = () => {
  const NotesData = [
    {
      title: "Mengerjakan Website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id, ducimus libero rerum sed eius ex repellendus fuga facilis minus, harum culpa error animi omnis. Laborum deleniti est cumque dignissimos!",
      createdAt: "20 Januari 2024",
    },
    {
      title: "Mengerjakan Website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id, ducimus libero rerum sed eius ex repellendus fuga facilis minus, harum culpa error animi omnis. Laborum deleniti est cumque dignissimos!",
      createdAt: "20 Januari 2024",
    },
    {
      title: "Mengerjakan Website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id, ducimus libero rerum sed eius ex repellendus fuga facilis minus, harum culpa error animi omnis. Laborum deleniti est cumque dignissimos!",
      createdAt: "20 Januari 2024",
    },
    {
      title: "Mengerjakan Website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id, ducimus libero rerum sed eius ex repellendus fuga facilis minus, harum culpa error animi omnis. Laborum deleniti est cumque dignissimos!",
      createdAt: "20 Januari 2024",
    },
    {
      title: "Mengerjakan Website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id, ducimus libero rerum sed eius ex repellendus fuga facilis minus, harum culpa error animi omnis. Laborum deleniti est cumque dignissimos!",
      createdAt: "20 Januari 2024",
    },
    {
      title: "Mengerjakan Website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id, ducimus libero rerum sed eius ex repellendus fuga facilis minus, harum culpa error animi omnis. Laborum deleniti est cumque dignissimos!",
      createdAt: "20 Januari 2024",
    },
  ];
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
              <Button className="w-full mr-5">Add Note</Button>
              <Button className="w-full">Remove Note</Button>
            </div>
            <div>
              <Input type="text" placeholder="Search..." />
            </div>
          </div>
          <ScrollArea className="h-[500px] mt-5">
            {NotesData.map((item, index) => {
              return (
                <Card key={index} className="mb-5">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="h-10 text-ellipsis overflow-hidden">
                      {item.desc}
                    </CardDescription>
                    <p className="text-xs font-sans text-slate-500">
                      Modified: {item.createdAt}
                    </p>
                  </CardHeader>
                </Card>
              );
            })}
          </ScrollArea>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55}>
        <div className="p-10">
          <h1 className="text-3xl font-bold">Mengerjakan Website</h1>
          <div className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            illum harum et explicabo culpa, consequatur, ratione quibusdam nam
            sunt sed natus velit obcaecati saepe omnis reiciendis alias tempora
            laborum facere?
          </div>
        </div>
      </ResizablePanel>
    </>
  );
};

export default NotesList;
