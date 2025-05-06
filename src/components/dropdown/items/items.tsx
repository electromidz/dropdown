import './item.scss';
import { DropdownListItem } from '../dropdown-item/dropdown-item';
import React from 'react';

const emoji = ['🧳', '🌂', '☂️', '🧵', '🪡', '🪢', '🪭', '🧶'];

interface Props {
  items: React.ReactNode[];
  open: boolean;
}

export const Items: React.FC<Props> = ({ items, open }) => {
  console.log(items);
  const listItems = items.map((item, index) => {
    if (typeof item === 'object') {
      return (
        <li key={index}>
          <DropdownListItem item={item} icon={emoji[index]} newItem={true} />
        </li>
      );
    } else {
      return (
        <li key={index}>
          <DropdownListItem item={item} icon={emoji[index]} />
        </li>
      );
    }
  });
  return (
    <div className={`dropdown-items ${open ? 'open-menu' : 'close-menu'}`}>
      <ul>{listItems}</ul>
    </div>
  );
};
