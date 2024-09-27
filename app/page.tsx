import React from "react";
import MdPlayGround from "@/components/md/md-playground";
import { ModeToggle } from "@/components/ui/mode-toggle";

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-wide">Md-Editor-Play</h1>
          <ModeToggle />
        </div>
        <MdPlayGround />
      </div>
    </div>
  );
}

export default Page;
