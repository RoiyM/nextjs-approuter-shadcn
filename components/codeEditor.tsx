"use client";
import { useRef } from "react";
import Editor from "@monaco-editor/react";
// import * as Y from "yjs";
// import { WebrtcProvider } from "y-webrtc";
// import { MonacoBinding } from "y-monaco";

export default function CodeEditor() {
  const editorRef = useRef(null);

  // Editor value -> YJS Text value (A text value shared by multiple people)
  // One person deletes text -> Deletes from the overall shared text value
  // Handled by YJS

  // Initialize YJS, tell it to listen to our Monaco instance for changes.

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;

    // editorRef.current = editor;
    // // Initialize YJS
    // const doc = new Y.Doc(); // a collection of shared objects -> Text
    // // Connect to peers (or start connection) with WebRTC
    // const provider = new WebrtcProvider("test-room", doc); // room1, room2
    // const type = doc.getText("monaco"); // doc { "monaco": "what our IDE is showing" }
    // // Bind YJS to Monaco
    // const binding = new MonacoBinding(
    //   type,
    //   editorRef.current.getModel(),
    //   new Set([editorRef.current]),
    //   provider.awareness
    // );
    // console.log(provider.awareness);
  }

  return (
    <Editor
      height="75vh"
      width="100vw"
      onMount={handleEditorDidMount}
      language="javascript"
      theme="vs-dark"
      options={{
        quickSuggestions: false,
        suggestOnTriggerCharacters: false,
        snippetSuggestions: "none",
      }}
    />
  );
}
