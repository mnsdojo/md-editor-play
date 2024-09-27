"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Link,
  Image as ImageIcon,
  Code,
} from "lucide-react";
interface MarkDownToolbarProps {
  onInsert: (text: string) => void;
  className?: string;
}
function MdToolbar({ onInsert, className }: MarkDownToolbarProps) {
  const insertFormat = (before: string, after: string = before) => {
    onInsert(`${before}Your text here${after}`);
  };

  return (
    <div
      className={cn("flex flex-wrap p-2 bg-gray-100 rounded-t-md ", className)}
    >
      <Button variant="outline" size="icon" onClick={() => insertFormat("**")}>
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => insertFormat("*")}>
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => insertFormat("- ")}>
        <List className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => insertFormat("1. ")}>
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => insertFormat("[", "](url)")}
      >
        <Link className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => insertFormat("![alt text](", ")")}
      >
        <ImageIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={() => insertFormat("`")}>
        <Code className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default MdToolbar;
