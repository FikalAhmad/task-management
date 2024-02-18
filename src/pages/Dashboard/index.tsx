import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import kalphoto from "@/assets/img/kalprofile.png";
import { Link } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface DashboardPages {
  page?: React.ReactNode;
}

const Dashboard = ({ page }: DashboardPages) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20} minSize={20} maxSize={20}>
        <ScrollArea className="h-full rounded-md border-x">
          <div className="h-[100vh] flex flex-col justify-between items-center">
            <div>
              <h1 className="flex justify-center p-6 font-bold text-3xl">
                <Link to="/">DREAMS NOTE</Link>
              </h1>
              <Button
                variant="ghost"
                className="w-full py-6 mt-5 text-md"
                asChild
              >
                <Link to="/notes">Notes</Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full py-6 mt-5 text-md"
                asChild
              >
                <Link to="/todo">Todo List</Link>
              </Button>
              <Button variant="ghost" className="w-full py-6 mt-5 text-md">
                Planning Day
              </Button>
              <Button
                variant="ghost"
                className="w-full py-6 mt-5 text-md"
                asChild
              >
                <Link to="/pomodoro">Pomodoro Timer</Link>
              </Button>
            </div>
            <div className="flex justify-center items-center border rounded-md w-40 mb-5 py-2 shadow-lg">
              <Avatar>
                <AvatarImage src={kalphoto} alt="avatar" />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
              <p className="pl-3">HAIKAL</p>
            </div>
          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle />
      {page}
    </ResizablePanelGroup>
  );
};

export default Dashboard;
