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
    <div className="flex flex-col h-screen px-8  py-24 ">
      <div className="flex flex-col flex-grow overflow-hidden">
        <MdToolbar className="p-2 border-b " onInsert={onInsert} />
        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/2 p-2 overflow-hidden flex flex-col">
            <div className="flex-grow overflow-hidden rounded-md bg-white/10 backdrop-blur-sm">
              <MdEditor
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-full h-full resize-none bg-transparent p-4 focus:outline-none "
              />
            </div>
          </div>
          <div className="w-1/2 p-2 overflow-hidden flex flex-col border">
            <h2 className="text-lg font-semibold text-gray-800  mb-2">
              Preview
            </h2>
            <div className="flex-grow  relative overflow-auto rounded-md bg-white/10 backdrop-blur-sm p-4">
              <div className="absolute bottom-4 right-4">
                <CopyButton text={markdown} />
              </div>
              <MdPreview markdown={markdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MdPlayGround;
