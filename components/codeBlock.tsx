import Link from "next/link";

interface CodeBlockProps {
  id: number;
  name: string;
}

export default function CodeBlock({ id, name }: CodeBlockProps) {
  return (
    <>
      <Link href={`/codeBlocks/${id}`}>{name}</Link>
    </>
  );
}
