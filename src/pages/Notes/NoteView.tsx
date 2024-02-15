type NoteID = {
  noteId?: number;
};

const NoteView = ({ noteId }: NoteID) => {
  return (
    <div>
      <div>{noteId}</div>
    </div>
  );
};

export default NoteView;
