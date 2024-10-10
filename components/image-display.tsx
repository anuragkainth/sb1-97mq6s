import Image from 'next/image';

interface ImageDisplayProps {
  imageUrl: string;
}

export function ImageDisplay({ imageUrl }: ImageDisplayProps) {
  return (
    <div className="relative w-full max-w-2xl aspect-square">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Generated image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-lg"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-accent rounded-lg">
          <p className="text-accent-foreground">Your generated image will appear here</p>
        </div>
      )}
    </div>
  );
}