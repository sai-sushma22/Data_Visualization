import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = ({ items, isOpen, closeNav }) => {
  const [activeItem, setActiveItem] = useState(items[0]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`side-nav ${isOpen ? 'open' : ''}`}>
      <div className="nav-items">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={item === activeItem ? 'active' : ''}
            onClick={() => handleItemClick(item)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
