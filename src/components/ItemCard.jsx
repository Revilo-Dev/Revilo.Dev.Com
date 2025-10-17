import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ItemCard = ({ image, title, links }) => {
  return (
    <div className="bg-base-300 rounded-xl shadow-lg p-4 flex flex-col items-center AH-Expand transition w-full">
      <div className="w-full flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="rounded-lg border-2 border-primary mb-3 w-32 h-32 object-contain"
        />
        <h3 className="text-primary font-bold text-lg mb-4">{title}</h3>
      </div>

      <div className="w-full flex flex-col gap-2">
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className="flex items-center justify-between bg-base-200 rounded-lg px-3 py-2 hover:bg-base-100 transition"
          >
            <div className="flex items-center gap-2">
              {link.icon && <link.icon size={18} className="text-primary" />}
              <span className="text-primary font-medium">{link.label}</span>
            </div>
            <ChevronRight size={18} className="text-primary" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
