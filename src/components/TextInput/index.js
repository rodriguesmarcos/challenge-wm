import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Left, Right } from './styles';

const TextInput = React.forwardRef(
  ({ innerLeft, innerRight, containerStyle, ...rest }, ref) => {
    const [inputEl, setInputEl] = useState(null);
    const focusInput = () => {
      if (inputEl) inputEl.focus();
    };

    return (
      <Container style={containerStyle}>
        {innerLeft && <Left onClick={focusInput}>{innerLeft}</Left>}
        <Input
          {...rest}
          ref={(el) => {
            setInputEl(el);
          }}
        />
        {innerRight && <Right onClick={focusInput}>{innerRight}</Right>}
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
