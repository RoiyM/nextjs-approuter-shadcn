import CodeBlock from "@/components/codeBlock";

export default function Home() {
  const codeBlocks = [
    {
      id: 1,
      name: "Hello World!",
    },
    {
      id: 2,
      name: "Square Root",
    },
    {
      id: 3,
      name: "String Length",
    },
    {
      id: 4,
      name: "Array Sort",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold tracking-tight">Lobby Page</h1>
      {codeBlocks.map(({ id, name }) => (
        <CodeBlock key={id} id={id} name={name} />
      ))}
    </main>
  );
}
