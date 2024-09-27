"use client";
import { useCallback, useState } from "react";
import MdEditor from "./md-editor";
import MdPreview from "./md-preview";
import MdToolbar from "./md-toolbar";
import CopyButton from "../ui/copy-button";

function MdPlayGround() {
  const [markdown, setMarkdown] = useState("");
  const onInsert = useCallback((text: string) => {
    setMarkdown((prev) => prev + text);
  }, []);

  return (
    <div className="flex flex-col h-screen px-8 py-8 bg-background text-foreground">
      <div className="flex flex-col flex-grow overflow-hidden border rounded-md bg-card">
        <MdToolbar
          text={markdown}
          className="p-2 border-b"
          onInsert={onInsert}
        />
        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/2 overflow-hidden flex flex-col border-r">
            <div className="flex-grow overflow-hidden">
              <MdEditor
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-full h-full resize-none bg-background p-4 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-1/2 overflow-hidden relative flex flex-col">
            <div className="flex-grow overflow-auto bg-background p-4">
              <MdPreview markdown={markdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MdPlayGround;
