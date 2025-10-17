import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const LinkCard = ({ icon: Icon, title, subtitle, to }) => {
  return (
    <Link 
      to={to} 
      className="flex items-center justify-between bg-base-300 rounded-xl p-4 cursor-pointer AH-Expand transition"
    >
      <div className="flex items-center gap-3 text-primary font-bold text-lg">
        {Icon && <Icon size={20} />}
        <span>{title}</span>
        <span className='text-zinc-500'>{subtitle}</span>
      </div>
      <ChevronRight className="text-primary" size={20} />
    </Link>
  );
};

export default LinkCard;
