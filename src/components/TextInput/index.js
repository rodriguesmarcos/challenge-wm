import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Input } from './styles';

const TextInput = React.forwardRef(
  ({ innerLeft, innerRight, containerStyle, ...rest }, ref) => {
    const [inputEl, setInputEl] = useState(null);
    const focusInput = () => {
      if (inputEl) inputEl.focus();
    };

    return (
      <Container style={containerStyle}>
        {innerLeft && <div onClick={focusInput}>{innerLeft}</div>}
        <Input
          {...rest}
          ref={(el) => {
            setInputEl(el);
          }}
        />
        {innerRight && <div onClick={focusInput}>{innerRight}</div>}
      </Container>
    );
  }
);

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  innerLeft: PropTypes.node,
  innerRight: PropTypes.node,
  containerStyle: PropTypes.object,
};

TextInput.defaultProps = {
  innerLeft: null,
  innerRight: null,
};

export default TextInput;
