import { useState, useRef, useEffect } from 'react';
import { selectArrowIcon } from '@/components/icons/common';
import './Select.scss';

const Select = ({ options, defaultValue, placeHolder }) => {
    const [selected, setSelectIndex] = useState(-1);
    const selectRef = useRef(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        if (defaultValue !== undefined && defaultValue > -1) {
            setSelectIndex(defaultValue);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [selectRef]);

    const handleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSelectOption = (index) => {
        setSelectIndex(index);
        setDropdownVisible(false);
    };

    const optionElement = options.map((item, index) => (
        <div className="select-option" key={index} onClick={() => handleSelectOption(index)}>
            {item}
        </div>
    ));

    return (
        <div className="select" ref={selectRef}>
            <div className="select-main" onClick={handleDropdown} onBlur={() => setDropdownVisible(false)}>
                {selected > -1 ? options[selected] : <span className="select-placeholder">{placeHolder}</span>}
                <span className="select-dropdown-icon">{selectArrowIcon}</span>
            </div>
            <div className={`select-dropdown ${dropdownVisible ? 'show' : ''}`}>{optionElement}</div>
        </div>
    );
};

export default Select;
