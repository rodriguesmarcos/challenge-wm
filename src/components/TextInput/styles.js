import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #dadada;
  border-radius: 2px;
  padding: 5px 10px;
  height: 40px;
`;
export const Input = styled.input.attrs({ type: 'text' })`
  border: 0 none;
  align-self: stretch;
  flex: 1;
  padding: 5px;
`;
