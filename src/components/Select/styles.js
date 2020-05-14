import styled, { css } from 'styled-components';

const config = {
  height: '40px',
};

export const Container = styled.div`
  position: relative;
  background: #fff;
`;

export const Label = styled.span`
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`;

export const SelectedValue = styled.span`
  font-weight: bold;
  margin-left: 5px;
  user-select: none;
`;

export const Arrow = styled.div`
  position: absolute;
  pointer-events: none;
  right: 7px;
  top: 50%;
  margin-top: -3px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
`;

export const Options = styled.ul`
  position: absolute;
  border: solid 1px #dadada;
  background: #fff;
  border-top: none;
  overflow-y: auto;
  padding: 0;
  width: 100%;
  top: ${config.height};
  z-index: 20;

  & li {
    list-style: none;
    padding: 2px 0;
    text-transform: uppercase;
    padding: 5px 10px;
    user-select: none;
    cursor: pointer;
    font-weight: normal;
  }
`;

export const Selected = styled.div`
  position: relative;
  border: solid 1px #dadada;
  border-radius: 2px;
  padding: 5px 30px 5px 10px;
  height: ${config.height};
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  /* z-index: ${({ isOpen }) => (isOpen ? 20 : 10)}; */

  ${({ isOpen }) =>
    isOpen &&
    css`
      border: solid 1px black;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      ${Arrow} {
        transform: rotate(180deg);
      }
    `}
`;
