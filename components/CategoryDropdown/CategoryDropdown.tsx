import React, { useState, useEffect, useRef } from 'react';

interface Option {
    label: string;
    value: string;
    imageUrl?: string;
}

interface DropdownProps {
    options: Option[];
}

export default function CategoryDropdown({ options }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [dropdownLabel, setDropdownLabel] = useState('Danh mục');

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setDropdownLabel(option.label);
        setIsOpen(false);
    };

    return (
        <div className="dropdown h-full " ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                id="hs-dropdown-with-icons"
                type="button"
                className="w-max h-full px-4 py-2 bg-gray-100 hs-dropdown-toggle inline-flex justify-between items-center gap-2 rounded-md outline-none text-xs font-semibold text-gray-500 align-middle focus:outline-none focus:ring-0 transition-all"
            >
                {dropdownLabel}
                <svg
                    className={`hs-dropdown-open:${isOpen ? 'rotate-180' : 'rotate-0'} w-2.5 h-2.5 text-gray-600`}
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-[50px] right-0 bg-white rounded-lg shadow-md z-50 w-max">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                            {option.imageUrl && (
                                <img src={option.imageUrl} alt={option.label} className="w-6 h-6 rounded-full" />
                            )}
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
