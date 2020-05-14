import styled from 'styled-components';

export const Container = styled.li`
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;
