import Image from "next/image";
import React from "react";

export function ProductImages({ images = [] }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = React.useState("");

  React.useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);
  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden border border-slate-200 rounded-2xl h-[660px]">
        <Image
          src={selectedImage}
          alt="selected product"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`spacet-square w-20 overflow-hidden border border-slate-200 rounded-lg mr-2 ${
              selectedImage === img && "ring-2 ring-offset-2 ring-blue-500"
            }`}
          >
            <Image
              src={img}
              alt={`product image ${index + 1}`}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
