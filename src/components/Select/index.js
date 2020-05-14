import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Selected,
  Label,
  SelectedValue,
  Options,
  Arrow,
} from './styles';

const SelectContext = createContext();

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(
      'Select compound components should only be used inside Select component'
    );
  }

  return context;
};

const Select = ({ children, label, onChange, value, ...rest }) => {
  const labelRef = useRef();
  const optionsRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);

  const toggle = useCallback(() => setIsOpen((oldIsOpen) => !oldIsOpen), []);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const selectOption = (value, label) => {
    setSelectedObject({ label, value });
    onChange(value);
  };

  const contextValue = {
    isOpen,
    open,
    close,
    toggle,
    selectOption,
    selectedObject,
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        optionsRef.current &&
        !optionsRef.current.contains(e.target) &&
        labelRef.current &&
        !labelRef.current.contains(e.target)
      ) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [labelRef, optionsRef, isOpen]);

  return (
    <SelectContext.Provider value={contextValue} {...rest}>
      <Container>
        <Selected ref={labelRef} onClick={toggle} isOpen={isOpen}>
          <Arrow />
          <Label>{label}:</Label>
          <SelectedValue>
            {selectedObject && selectedObject.label}
          </SelectedValue>
        </Selected>
        {isOpen && <Options ref={optionsRef}>{children}</Options>}
      </Container>
    </SelectContext.Provider>
  );
};

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

export default Select;
