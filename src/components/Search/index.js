import React, {
  useState,
  useReducer,
  useRef,
  useEffect,
  createContext,
} from 'react';
import PropTypes from 'prop-types';
import { FaCarSide, FaMotorcycle } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';

import { radius as radiusOptions, status, years, prices } from '../../data';
import api from '../../services/api';

import SearchTypeButton from '../SearchTypeButton';

import Option from '../Option';

import {
  Container,
  Header,
  Main,
  SaleButton,
  MainFooter,
  SearchButton,
  AdvancedSearchButton,
  ResetSearchButton,
  Checkbox,
  Label,
  LabelText,
  FieldsdGrid,
  FieldGroup,
  FieldColumn,
  TextInput,
  Select,
} from './styles';

const SearchContext = createContext();

const formInitialState = {
  vehicleType: 'car',
  status: ['new', 'used'],
  location: '',
  radius: 100,
  make: -1,
  model: -1,
  year: -1,
  priceRange: -1,
  version: -1,
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_VEHICLE':
      return {
        ...state,
        vehicleType: payload.value,
        make: -1,
        model: -1,
        version: -1,
      };

    case 'CHANGE_STATUS':
      return { ...state, status: payload.value };

    case 'CHANGE_LOCATION':
      return { ...state, location: payload.value };

    case 'RESET_LOCATION':
      return { ...state, location: '' };

    case 'CHANGE_RADIUS':
      return { ...state, radius: Number(payload.value) };

    case 'CHANGE_MAKE':
      return { ...state, make: payload.value, model: -1, version: -1 };

    case 'CHANGE_MODEL':
      return { ...state, model: payload.value, version: -1 };

    case 'CHANGE_YEAR':
      return { ...state, year: payload.value };

    case 'CHANGE_PRICE':
      return { ...state, price: payload.value };

    case 'CHANGE_VERSION':
      return { ...state, version: payload.value };

    case 'RESET_FORM':
      return { ...formInitialState, vehicleType: state.vehicleType };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const Search = ({ onSubmit, ...rest }) => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);
  const [state, dispatch] = useReducer(formReducer, formInitialState);
  const {
    vehicleType,
    status: formStatus,
    location,
    radius,
    make,
    model,
    version,
    year,
    priceRange,
  } = state;

  const locationRef = useRef();

  const value = { state };

  const onChangeVehicleType = (vehicle) => {
    dispatch({
      type: 'CHANGE_VEHICLE',
      payload: {
        value: vehicle,
      },
    });
  };

  const onChangeStatus = (status) => {
    const hasStatus = formStatus.includes(status);
    const updatedStatus = hasStatus
      ? formStatus.filter((stat) => stat !== status)
      : [...formStatus, status];

    dispatch({
      type: 'CHANGE_STATUS',
      payload: {
        value: updatedStatus,
      },
    });
  };

  const changeLocation = ({ target }) => {
    dispatch({
      type: 'CHANGE_LOCATION',
      payload: {
        value: target.value,
      },
    });
  };

  const resetLocation = ({ target }) => {
    dispatch({
      type: 'RESET_LOCATION',
    });
  };

  const resetForm = () => {
    dispatch({
      type: 'RESET_FORM',
    });
  };

  const changeSelectValue = (type) => (value) => {
    dispatch({
      type,
      payload: {
        value,
      },
    });
  };

  const getNameById = (id, type) => {
    console.log(id, type);
    if (type.length > 0) {
      const result = type
        .filter(({ ID }) => ID === Number(id))
        .reduce((acc, curr) => curr.Name, '');

      console.log('result', result);
      return result;
    }

    return -1;
  };

  const removeEmptyFilters = (obj) => {
    const newObj = {};
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != '' && obj[key] !== -1)
        newObj[key] = obj[key];
    }
    return newObj;
  };

  const handleSearch = () => {
    const filterObject = {
      // KM: {}
      make: getNameById(make, makes),
      model: getNameById(model, models),
      version: getNameById(model, version),
      year,
      price: priceRange,
    };

    onSubmit(removeEmptyFilters(filterObject));
  };

  useEffect(() => {
    const fetchMakes = async () => {
      const { data } = await api.get('/Make');
      setMakes(data);
    };

    fetchMakes();
  }, []);

  useEffect(() => {
    if (make > 0) {
      const fetchModels = async () => {
        const { data } = await api.get('/Model', {
          params: {
            MakeID: make,
          },
        });
        setModels(data);
      };
      fetchModels();
    } else {
      setModels([]);
    }
  }, [make]);

  useEffect(() => {
    if (model > 0) {
      const fetchVersions = async () => {
        const { data } = await api.get('/Version', {
          params: {
            ModelID: model,
          },
        });
        setVersions(data);
      };
      fetchVersions();
    } else {
      setVersions([]);
    }
  }, [model]);

  return (
    <SearchContext.Provider value={value}>
      <Container {...rest}>
        <Header>
          <SearchTypeButton
            icon={FaCarSide}
            smallText="comprar"
            bigText="Carros"
            selected={vehicleType === 'car'}
            onClick={() => onChangeVehicleType('car')}
          />
          <SearchTypeButton
            icon={FaMotorcycle}
            smallText="comprar"
            bigText="Motos"
            selected={vehicleType === 'motorcycle'}
            onClick={() => onChangeVehicleType('motorcycle')}
          />
          <SaleButton onClick={() => null} buttonStyle="secondary">
            Vender meu carro
          </SaleButton>
        </Header>
        <Main>
          <div>
            {status.map(({ label, value }) => (
              <Label key={value}>
                <Checkbox
                  checked={formStatus.includes(value)}
                  onChange={() => onChangeStatus(value)}
                />
                <LabelText>{label}</LabelText>
              </Label>
            ))}
          </div>

          <FieldsdGrid>
            <FieldGroup className="groupA">
              <TextInput
                ref={locationRef}
                value={location}
                onChange={changeLocation}
                innerLeft={
                  <div>
                    <FiMapPin />
                    <LabelText>Onde</LabelText>
                  </div>
                }
                innerRight={
                  location && <AiFillCloseCircle onClick={resetLocation} />
                }
              />
              <Select
                label="Raio"
                value={radius}
                onChange={changeSelectValue('CHANGE_RADIUS')}
              >
                {radiusOptions.map(({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
            </FieldGroup>

            <div>
              <Select
                onChange={changeSelectValue('CHANGE_MAKE')}
                label="Marca"
                value={make}
              >
                <Option value={-1}>Todas</Option>
                {makes.map((make) => (
                  <Option key={make.ID} value={make.ID}>
                    {make.Name}
                  </Option>
                ))}
              </Select>
            </div>

            <div>
              <Select
                onChange={changeSelectValue('CHANGE_MODEL')}
                label="Modelo"
                value={model}
              >
                <Option value={-1}>Todas</Option>
                {models.map(({ ID, Name }) => (
                  <Option key={ID} value={ID}>
                    {Name}
                  </Option>
                ))}
              </Select>
            </div>

            <div>
              <Select
                label="Ano Desejado"
                value={year}
                onChange={changeSelectValue('CHANGE_YEAR')}
              >
                <Option value={-1}>Todos</Option>
                {years.map(({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
            </div>

            <div>
              <Select
                value={priceRange}
                label="Faixa de preços"
                onChange={changeSelectValue('CHANGE_PRICE')}
              >
                <Option value={-1}>Todos</Option>
                {prices.map(({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </Select>
            </div>

            <FieldColumn className="field-version">
              <Select
                onChange={(value) =>
                  dispatch({
                    type: 'CHANGE_VERSION',
                    payload: {
                      value,
                    },
                  })
                }
                value={version}
                label="Versão"
              >
                <Option value={-1}>Todas</Option>
                {versions.map(({ ID, Name }) => (
                  <Option key={ID} value={ID}>
                    {Name}
                  </Option>
                ))}
              </Select>
            </FieldColumn>
          </FieldsdGrid>

          <MainFooter>
            <AdvancedSearchButton buttonStyle="link" onClick={() => null}>
              &gt; Busca Avançada
            </AdvancedSearchButton>
            <ResetSearchButton buttonStyle="link" onClick={resetForm}>
              Limpar Filtros
            </ResetSearchButton>
            <SearchButton onClick={handleSearch}>Ver Ofertas</SearchButton>
          </MainFooter>
        </Main>
      </Container>
    </SearchContext.Provider>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
