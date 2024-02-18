import AddNote from "./AddNote";
import ViewNote from "./ViewNote";

interface Status {
  status: string;
  data: object;
}

const RenderPanelNote = ({ status, data }: Status) => {
  switch (status) {
    case "ADD_NOTE":
      return <AddNote />;
    case "VIEW_NOTE":
      return <ViewNote data={data} />;
    default:
      return <div>Tidak ada yang dipilih</div>;
  }
};

export default RenderPanelNote;
