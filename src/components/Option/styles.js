import styled from 'styled-components';

export const Container = styled.li`
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};

  ${({ selected }) =>
    selected &&
    `
    background-color: #ca222a;
    color: #fff;
  `}
`;
