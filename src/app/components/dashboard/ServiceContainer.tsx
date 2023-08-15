import React from "react";

type ServiceContainerProps = {
  title: string;
  image: string;
  content: string;
};

export default function ServiceContainer({
  title,
  image,
  content,
}: ServiceContainerProps): React.ReactElement {
  return (
    <div className="mx-20 flex flex-col bg-white shadown-inner rounded-md shadow-2xl mb-10 p-4">
      <h1 className="text-center font-bold mb-4 text-3xl">{title}</h1>
      <img
        src={image}
        className="rounded h-40 w-auto border-black mb-4 border m-auto"
      ></img>
      {content}
    </div>
  );
}
