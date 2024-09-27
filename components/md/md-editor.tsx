"use client";

import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

interface MdEditorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Type for onChange
  className?: string;
}

function MdEditor({ value, onChange, className }: MdEditorProps) {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      className={cn("", className)}
      placeholder="Type your markdown here..."
    />
  );
}

export default MdEditor;
