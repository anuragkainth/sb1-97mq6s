"use client"

import { Home, Settings, History } from 'lucide-react';
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <aside className="w-16 bg-secondary flex flex-col items-center py-4 space-y-4">
      <Button variant="ghost" size="icon">
        <Home className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon">
        <History className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon">
        <Settings className="h-6 w-6" />
      </Button>
    </aside>
  );
}