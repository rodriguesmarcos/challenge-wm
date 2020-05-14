import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 15px 15px;
  text-transform: uppercase;
  cursor: pointer;
  color: #9d9595;
  flex: 1;

  @media (min-width: 600px) {
    flex: 0;
  }

  @media (min-width: 600px) {
    justify-content: unset;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${({ selected }) => (selected ? '3px' : '2px')};
    background: ${({ selected }) => (selected ? '#ca242e' : '#e5e5e5')};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 20px;
`;

export const Small = styled.div`
  font-size: 12px;
  line-height: 1;
  margin-left: ${({ hasIcon }) => (hasIcon ? '15px' : '0')};
`;
export const Big = styled.div`
  font-size: 20px;
  margin-left: ${({ hasIcon }) => (hasIcon ? '15px' : '0')};
  color: ${({ isSelected }) => (isSelected ? '#ca242e' : 'inherit')};
`;
