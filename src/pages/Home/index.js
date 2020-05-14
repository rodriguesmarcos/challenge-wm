import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Search from '../../components/Search';
import VehicleList from '../../components/VehicleList';

import { Container } from './styles';

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filters, setFilters] = useState(null);

  const filterVehicles = () => {
    if (filters) {
      // const filterEntries = Object.entries(filters);

      return vehicles.filter((el) => el.Make === filters.make);
      // @TODO filter items
    }

    return vehicles;
  };

  useEffect(() => {
    const fetchVehicles = async (page = 1) => {
      const { data } = await api.get('/Vehicles', {
        params: {
          Page: page,
        },
      });
      setVehicles([...data]);
    };
    fetchVehicles();
  }, []);

  return (
    <Container>
      <Search onSubmit={setFilters} />

      <VehicleList data={filterVehicles()} />
    </Container>
  );
};

export default Home;
