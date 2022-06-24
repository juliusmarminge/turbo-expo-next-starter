import { trpc, inferQueryOutput } from "../utils/trpc";

export const ExamplesView: React.FC<{
  examples: inferQueryOutput<"example.getAll"> | undefined;
}> = ({ examples }) => {
  if (!examples) return <div>Loading...</div>;

  return (
    <div>
      {examples.map((e) => {
        return <p>{e.id}</p>;
      })}
    </div>
  );
};

export const ExampleCreator: React.FC = () => {
  const ctx = trpc.useContext();
  const create = trpc.useMutation(["example.create"], {
    onSuccess() {
      ctx.invalidateQueries(["example.getAll"]);
    },
  });

  return (
    <div>
      <button onClick={() => create.mutate()}>Create New</button>
    </div>
  );
};
