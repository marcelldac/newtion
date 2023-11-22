import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
} from "react-icons/rx";
import BubbleButton from "./BubbleButton";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-violet"
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-200 shadow-xl border border-zinc-300 shadow-white/20 rounded-lg overflow-hidden flex divide-x divide-x-zinc-600 "
          editor={editor}
        >
          <BubbleButton>
            <RxFontBold className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxFontItalic className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxStrikethrough className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            <RxCode className="w-4 h-4" />
          </BubbleButton>
        </BubbleMenu>
      )}
    </>
  );
}
