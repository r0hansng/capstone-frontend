import { useState, useRef, useEffect } from "react";
import {
  IconChevronDown,
} from "@tabler/icons-react";

const DropDown = (props) => {
  

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    console.log("Selected:", option);
  };

  return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-xs border border-outline bg-brand-white px-4 py-3 text-sm text-gray-700 shadow-sm focus:outline-none"
        >
          <span className="truncate">{selected?.label || "Choose an option"}</span>
          <IconChevronDown size={18} className="text-text-primary" />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-xs border border-gray-1 bg-white ">
            {props.options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className="flex items-center gap-2 px-4 py-3 text-sm text-text-primary hover:bg-gray-3 cursor-pointer"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default DropDown;