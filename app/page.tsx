"use client"

import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { ImageDisplay } from "@/components/image-display"

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to generate image
    // For now, we'll use a placeholder image
    setGeneratedImage('https://source.unsplash.com/random/800x600');
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <ImageDisplay imageUrl={generatedImage} />
        </div>
        <form onSubmit={handleSubmit} className="p-4 flex gap-2">
          <Input
            type="text"
            placeholder="Enter your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">Generate</Button>
        </form>
      </main>
    </div>
  );
}