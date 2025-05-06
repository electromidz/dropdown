import './reqular-dropdown.scss';
import React, { useRef, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  setOpen: (arg: boolean) => void;
  setItemsDropDown: (arg: any) => void;
  itemsDropDown: Array<React.ReactNode | string>;
}

export const RegularDropdown: React.FC<Props> = ({
  children,
  setOpen,
  setItemsDropDown,
  itemsDropDown,
}) => {
  async function handleSubmit(formData: any) {
    const data = Object.fromEntries(formData);
    if (data.input && data.input.length > 0) {
      const elements: any = [];
      itemsDropDown.forEach((e: any) => {
        if (e?.props?.children) {
          elements.push(e.props.children);
        } else {
          elements.push(e);
        }
      });
      setItemsDropDown([...elements, <span className="new-item">{data.input}</span>]);
    }
  }

  const refList = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refList && refList.current && !refList.current.contains(event.target)) {
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
