import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const LinkCard = ({ icon: Icon, title, subtitle, to }) => {
  const hasIcon = !!Icon;

  return (
    <Link 
      to={to} 
      className={`flex items-center justify-between bg-base-300 rounded-xl p-4 cursor-pointer AH-Expand transition`}
    >
      <div className="flex items-center gap-3 text-primary font-bold text-lg">

        {hasIcon && (
          <Icon 
            size={22}
            className="max-[550px]:w-6 max-[550px]:h-6"
          />
        )}

        <span className={hasIcon ? "max-[550px]:hidden" : ""}>
          {title}
        </span>

        {subtitle && (
          <span className={`text-zinc-500 ${hasIcon ? "max-[550px]:hidden" : ""}`}>
            {subtitle}
          </span>
        )}
      </div>


      <ChevronRight 
        className={`text-primary ${hasIcon ? "max-[550px]:hidden" : ""}`} 
        size={20} 
      />
    </Link>
  );
};

export default LinkCard;
