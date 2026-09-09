import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItemInfoCard = ({ img, title, row1, row2, linkUrl, linkname, policyLinkUrl, policyLinkName }) => {
  return (
    <div className="bg-base-300 rounded-xl shadow-lg p-4 flex flex-col items-center AH-Expand transition w-full">
      <div className="w-full flex flex-col items-center">
        <img
          src={img}
          alt={title}
          className="rounded-lg border-2 border-primary mb-3 w-32 h-32 object-contain"
        />
        <h3 className="text-primary font-bold text-lg mb-4">{title}</h3>
      </div>

      <div className="w-full flex flex-col gap-2">
        {row1 && (<div className=' TransparentUI mt-3 w-10/10 p-2 rounded-sm'>{row1}</div>)}
        {row2 && (<div className=' TransparentUI mt-3 w-10/10 p-2 rounded-sm'>{row2}</div>)}
      </div>
          <a href={linkUrl} className="btn btn-secondary btn-sm ransparentUI mt-3 w-10/10 p-2 rounded-sm AH-Pulse" target="_blank" rel="noopener noreferrer"> 
            {linkname}
            <ExternalLink className="ml-1 w-5 h-5" />
          </a>
          {policyLinkUrl && (
            policyLinkUrl.startsWith('/') ? (
              <Link to={policyLinkUrl} className="btn btn-secondary btn-sm ransparentUI mt-3 w-10/10 p-2 rounded-sm AH-Pulse">
                {policyLinkName || 'Privacy Policy'}
              </Link>
            ) : (
              <a href={policyLinkUrl} className="btn btn-secondary btn-sm ransparentUI mt-3 w-10/10 p-2 rounded-sm AH-Pulse" target="_blank" rel="noopener noreferrer">
                {policyLinkName || 'Privacy Policy'}
                <ExternalLink className="ml-1 w-5 h-5" />
              </a>
            )
          )}



      
    </div>
  );
};

export default ItemInfoCard;
