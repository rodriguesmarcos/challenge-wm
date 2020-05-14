import styled from 'styled-components';
import CheckboxComponent from 'react-simple-checkbox';
import TextInputComponent from '../TextInput';
import SelectComponent from '../Select';

import Button from '../Button';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  @media (min-width: 600px) {
    flex-flow: row;
  }
`;

export const Main = styled.div`
  background: #fff;
  padding: 25px 50px;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.05);
`;

export const MainFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const SaleButton = styled(Button)`
  order: -1;
  flex: 0 0 80%;
  margin: 0 auto 30px;

  @media (min-width: 600px) {
    order: 10;
    margin: 0 0 0 auto;
    flex: unset;
  }
`;

export const AdvancedSearchButton = styled(Button)`
  order: 5;
  color: #ca242e;
  font-size: 13px;
  font-weight: bold;
`;

export const ResetSearchButton = styled(Button)`
  order: 15;
  color: #bcbabc;

  @media (min-width: 600px) {
    margin-right: 20px;
    margin-left: auto;
    order: 10;
  }
`;

export const SearchButton = styled(Button)`
  order: 10;
  padding: 0.75rem 5rem;
  font-size: 14px;
  margin: 20px 0;

  @media (min-width: 600px) {
    order: 15;
  }
`;

export const Checkbox = styled(CheckboxComponent).attrs({
  size: 2,
  tickSize: 3,
  borderThickness: 1,
  color: {
    backgroundColor: '#fff',
    borderColor: '#d8dcdd',
    uncheckedBorderColor: '#d8dcdd',
    tickColor: '#ca242e',
  },
})``;

export const Label = styled.label`
  font-size: 14px;
  cursor: pointer;
  margin-right: 40px;
`;

export const LabelText = styled.span`
  padding-left: 5px;
`;

export const FieldsdGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1;
  margin: 20px 0;
  @media (min-width: 600px) {
    grid-template-areas:
      'a a b c'
      'd e f f';
  }
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-area: a;

  @media (min-width: 600px) {
    display: flex;
  }
`;

export const FieldColumn = styled.div`
  &.field-version {
    grid-area: f;
  }
`;

export const TextInput = styled(TextInputComponent).attrs({
  containerStyle: {
    width: '100%',
  },
})`
  flex: 1;
`;

export const Select = styled(SelectComponent)`
  flex: 1;
`;
