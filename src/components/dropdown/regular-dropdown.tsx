import { Button } from './button/button';
import { Items } from './items/items';
import './reqular-dropdown.scss';
import { useState, useMemo, useRef, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  setOpen: () => void;
  setItemsDropDown: () => void;
  itemsDropDown: Array<React.ReactNode | string>;
}

export const RegularDropdown: React.FC<Props> = ({
  children,
  setOpen,
  setItemsDropDown,
  itemsDropDown,
}) => {
  async function handleSubmit(formData: FormData) {
    const data = Object.fromEntries(formData);
    if (data.input && data.input.length > 0) {
      let elements = [];
      itemsDropDown.forEach((e) => {
        if (e?.props?.children) {
          elements.push(e.props.children);
        } else {
          elements.push(e);
        }
      });
      setItemsDropDown([...elements, <span className="new-item">{data.input}</span>]);
    }
  }

  const refList = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refList.current && !refList.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [refList]);

  return (
    <div>
      <div className="dropdown" ref={refList}>
        <form action={handleSubmit}>
          {children}
          <button type="submit" style={{ display: 'none' }} />
        </form>
      </div>
    </div>
  );
};
