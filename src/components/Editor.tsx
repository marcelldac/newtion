import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";

export interface EditorProps {}

export default function Editor(props: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
  });

  return (
    <EditorContent
      editor={editor}
      className="max-w-[700px] mx-auto pt-16 prose"
    />
  );
}
