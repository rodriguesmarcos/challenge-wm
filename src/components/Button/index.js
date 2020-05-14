import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ onClick, buttonStyle, children, ...props }) => {
  return (
    <Container onClick={onClick} buttonStyle={buttonStyle} {...props}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  buttonStyle: PropTypes.oneOf(['primary', 'secondary', 'link']),
};

Button.defaultProps = {
  buttonStyle: 'primary',
};

export default Button;
