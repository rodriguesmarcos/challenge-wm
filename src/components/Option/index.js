import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelectContext } from '../Select';
import { Container } from './styles';

const Option = ({ children, value }) => {
  const { selectOption, selectedObject, close } = useSelectContext();

  const handleClick = () => {
    selectOption(value, children);
    close();
  };

  useEffect(() => {}, []);

  return (
    <Container
      onClick={handleClick}
      selected={selectedObject && selectedObject.value === value}
    >
      {children}
    </Container>
  );
};

Option.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Option;
