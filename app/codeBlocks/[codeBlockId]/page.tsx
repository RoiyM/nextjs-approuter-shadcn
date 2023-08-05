"use client";
import CodeEditor from "@/components/codeEditor";
import { Button } from "@/components/ui/button";

export default function page({ params }: { params: { codeBlockId: string } }) {
  return (
    <>
      <div className="flex items-center p-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Code Block {params.codeBlockId}
        </h1>
      </div>
      <CodeEditor />
      <Button className=" m-5">Submit</Button>
    </>
  );
}
