type NoteID = {
  noteId?: string;
};

const ViewNote = ({ noteId }: NoteID) => {
  return (
    <div>
      <div>{noteId}</div>
    </div>
  );
};

export default ViewNote;
