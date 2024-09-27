"use client";

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
      className={`w-full h-[calc(100vh-100px)] ${className}`} // Apply className if provided
      placeholder="Type your markdown here..."
    />
  );
}

export default MdEditor;
