import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  outline: 0;
  border-radius: 3px;
  background: #ca242e;
  color: #fff;
  text-transform: uppercase;
  border: 0 none;
  font-weight: bold;

  ${({ buttonStyle }) =>
    buttonStyle === 'secondary' &&
    `
    color: #d1a468;
    border: 3px solid;
    background: transparent;
    text-transform: none;
  `};

  ${({ buttonStyle }) =>
    buttonStyle === 'link' &&
    `
    background: none;
    border: 0 none;
    padding: 0;
    text-transform: none;
    font-weight: none;
    height: 30px;
  `};
`;
