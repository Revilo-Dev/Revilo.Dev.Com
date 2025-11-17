import React from 'react';

function TitleCard({
  image = "/assets/revilo.png",
  title = "Default Title",
  subtitle = "Default subtitle text",
  children,
}) {
  return (
    <div className="bg-base-300 w-12/13 rounded-lg p-6 mt-12 flex flex-col md:flex-row items-center md:items-center shadow-lg z-10">

      <img
        src={image}
        alt={title}
        className="AH-Pulse rounded-3xl w-32 h-32 md:w-52 md:h-52 object-cover mb-4 md:mb-0 md:mr-8 border-4 border-primary"
      />

      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">

        <h1 className="text-4xl font-bold text-primary AH-Underline">
          {title}
        </h1>

        <p className="text-sm text-zinc-400 mt-1 mb-4">
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );
}

export default TitleCard;
