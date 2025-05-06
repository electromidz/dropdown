import React, { useState, useMemo, useEffect, useRef } from 'react';
import { RegularDropdown } from './components/dropdown/regular-dropdown';
import { FaAngleDown } from 'react-icons/fa6';
import './index.scss';
import { Button } from './components/dropdown/button/button';
import { Items } from './components/dropdown/items/items';

const hoppies = ['Education', 'Art', 'Sports', 'Games', 'Health'];

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [itemsDropDown, setItemsDropDown] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement | any>(null);

  function toggle() {
    if (inputRef.current) {
      inputRef.current.style.display = 'visible';
      inputRef.current.focus();
    } else {
      inputRef.current.style.display = 'hidden';
    }
    setOpen(!open);
  }

  let dropdownItems = useMemo(() => {
    if (hoppies) {
      setItemsDropDown(hoppies);
    } else {
      setItemsDropDown([]);
    }
  }, []);

  return (
    <div className="parent">
      <RegularDropdown
        setOpen={setOpen}
        itemsDropDown={itemsDropDown}
        setItemsDropDown={setItemsDropDown}
      >
        <Button
          item={<input ref={inputRef} autoComplete="false" type="text" name="input" />}
          icon={<FaAngleDown color="grey" />}
          toggle={toggle}
          open={open}
        />
        <Items items={itemsDropDown} open={open} />
      </RegularDropdown>
    </div>
  );
}

export default App;
