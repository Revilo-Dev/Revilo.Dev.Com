import { ExternalLink } from 'lucide-react';
import React from 'react';


const InfoCard = ({ title, description, subtitle, img, imgAlt, linkUrl, linkname, row1, row2, row3, row4 }) => {

  return (  
    <div className="relative flex bg-base-300 shadow-xl rounded-lg p-4 mb-6 text-left flex-row items-center AH-Expand">
      <div className="flex-grow mr-4 flex-shrink min-w-0 pb-10"> 

        <h2 className="text-base min-[410px]:text-lg md:text-xl font-bold text-primary mb-0">{title}</h2>
        <h6 className="text-zinc-500">{subtitle}</h6>
        <h3 className="text-sm md:text-base lg:text-xl text-base-content">{description}</h3>
        {row1 && (<div className=' TransparentUI mt-3 w-10/10 p-2 rounded-sm'>{row1}</div>)}
        {row2 && (<div className=' TransparentUI mt-3 w-10/10 p-2 rounded-sm'>{row2}</div>)}
        {row3 && (<div className=' TransparentUI mt-3 w-10/10 p-2 rounded-sm'>{row3}</div>)}
        {row4 && (<div className=' TransparentUI mt-3 w-10/10 p-2 rounded-sm'>{row4}</div>)}

        {linkUrl && (
          <a href={linkUrl} className="btn btn-secondary btn-sm absolute bottom-4 left-4 AH-Pulse" target="_blank" rel="noopener noreferrer"> 
            {linkname}
            <ExternalLink className="ml-1 w-5 h-5" />
          </a>
        )}

      </div>
      {img && (
        <div className="ml-4 flex-shrink-0 hidden md:block justify-center items-center text-center">
          <img src={img} alt={imgAlt} className="max-w-full sm:max-w-xs max-h-48 rounded-lg border-3 border-primary AH-Pulse" />
        </div>
      )}
    </div>
  );
};

export default InfoCard;