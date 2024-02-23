interface Note {
  data: Data;
}

type Data = {
  title?: string;
  content?: string;
  createdAt?: string;
};

const ViewNote = ({ data }: Note) => {
  const { title, content, createdAt } = data;
  return (
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="text-sm font-semibold text-gray-400 mt-2 mb-5">
        Modified: {createdAt}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default ViewNote;
