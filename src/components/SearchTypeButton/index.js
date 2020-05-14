import React from 'react';
import PropTypes from 'prop-types';

import { Container, Wrapper, Small, Big } from './styles';

const SearchTypeButton = ({ icon, smallText, bigText, selected, ...rest }) => {
  const hasIcon = icon;
  const Icon = icon;
  return (
    <Container selected={selected} {...rest}>
      <Wrapper>
        {hasIcon && (
          <Icon size={25} style={{ color: selected ? '#ca242e' : 'inherit' }} />
        )}
        <div>
          <Small hasIcon={hasIcon}>{smallText}</Small>
          <Big hasIcon={hasIcon} isSelected={selected}>
            {bigText}
          </Big>
        </div>
      </Wrapper>
    </Container>
  );
};

SearchTypeButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  smallText: PropTypes.string.isRequired,
  bigText: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

SearchTypeButton.defaultProps = {
  selected: false,
};

export default SearchTypeButton;
