import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

export default function Dropdown({ stack,setStack }) {
    const options = ['React', 'Vue', 'Angular', 'Svelte','Next', 'Java', 'C++', 'Python', "HTML/CSS", "JavaScript, NodeJS", "Express", "MongoDB", "SQL", "Firebase", "AWS", "GCP", "Azure", "Docker", "Kubernetes"]
    options.sort();
    
    useEffect(() => {
        setStack(options[0]);
    },[])

    const [isOpen, setIsOpen] = useState(false);
    const handleStack = (option) => {
        setStack(option);
    }
    
    const dropdownRef = useRef(null);
    useClickAway(dropdownRef, () => setIsOpen(false));

    return (
        <div className="relative" ref={dropdownRef}>
          <label htmlFor="dropdown" className="text-lg font-semibold">
            Tech Stack
          </label>
          <div
            className="border rounded-lg p-2 cursor-pointer bg-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {stack}
          </div>
    
          {isOpen && (
            <ul className="absolute z-10 w-full border rounded-lg bg-white shadow-lg max-h-60 overflow-y-auto">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    handleStack(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
    );
}