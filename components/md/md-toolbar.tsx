"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Link,
  Image,
  Code,
  ChevronDown,
  Quote,
  Minus,
  Table,
  LucideIcon,
} from "lucide-react";

interface MarkdownToolbarProps {
  className?: string;
  onInsert: (text: string) => void;
}

interface ToolbarButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  onClick: () => void;
}

interface DropdownItem {
  icon?: LucideIcon;
  label: string;
  action: () => void;
}

const MarkdownToolbar: React.FC<MarkdownToolbarProps> = ({ onInsert }) => {
  const insertFormat = (before: string, after: string = before): void => {
    onInsert(`${before}Your text here${after}`);
  };

  const ToolbarButton: React.FC<ToolbarButtonProps> = ({
    icon,
    tooltip,
    onClick,
  }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClick}
            className="hover:bg-gray-200"
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  const toolbarButtons: ToolbarButtonProps[] = [
    {
      icon: <Bold className="h-4 w-4" />,
      tooltip: "Bold",
      onClick: () => insertFormat("**"),
    },
    {
      icon: <Italic className="h-4 w-4" />,
      tooltip: "Italic",
      onClick: () => insertFormat("*"),
    },
    {
      icon: <List className="h-4 w-4" />,
      tooltip: "Unordered List",
      onClick: () => insertFormat("- "),
    },
    {
      icon: <ListOrdered className="h-4 w-4" />,
      tooltip: "Ordered List",
      onClick: () => insertFormat("1. "),
    },
    {
      icon: <Link className="h-4 w-4" />,
      tooltip: "Link",
      onClick: () => insertFormat("[", "](url)"),
    },
    {
      icon: <Image className="h-4 w-4" />,
      tooltip: "Image",
      onClick: () => insertFormat("![alt text](", ")"),
    },
    {
      icon: <Code className="h-4 w-4" />,
      tooltip: "Inline Code",
      onClick: () => insertFormat("`"),
    },
  ];

  const headingOptions: DropdownItem[] = [1, 2, 3, 4, 5, 6].map((level) => ({
    label: `Heading ${level}`,
    action: () => insertFormat("#".repeat(level) + " "),
  }));

  const insertOptions: DropdownItem[] = [
    { icon: Quote, label: "Blockquote", action: () => insertFormat("> ") },
    {
      icon: Code,
      label: "Code Block",
      action: () => insertFormat("```\n", "\n```"),
    },
    {
      icon: Minus,
      label: "Horizontal Rule",
      action: () => insertFormat("---\n"),
    },
    {
      icon: Table,
      label: "Table",
      action: () =>
        insertFormat(
          "| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Row 1    | Row 1    | Row 1    |\n| Row 2    | Row 2    | Row 2    |\n"
        ),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 p-2  border-b border-gray-200 shadow-sm">
      {toolbarButtons.map((button, index) => (
        <ToolbarButton key={index} {...button} />
      ))}

      <div className="h-6 w-px bg-gray-300 mx-1" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-gray-200">
            Heading <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {headingOptions.map((option, index) => (
            <DropdownMenuItem key={index} onSelect={option.action}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-gray-200">
            Insert <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {insertOptions.map((option, index) => (
            <DropdownMenuItem key={index} onSelect={option.action}>
              {option.icon && <option.icon className="mr-2 h-4 w-4" />}
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MarkdownToolbar;
