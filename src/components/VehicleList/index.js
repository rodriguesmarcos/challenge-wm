import React from 'react';
import PropTypes from 'prop-types';

import VehicleCard from '../VehicleCard';

import { Container } from './styles';

const VehicleList = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      {data.map((vehicle) => (
        <VehicleCard key={vehicle.ID} vehicle={vehicle} />
      ))}
    </Container>
  );
};

VehicleList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Color: PropTypes.string.isRequired,
      ID: PropTypes.number.isRequired,
      Image: PropTypes.string.isRequired,
      KM: PropTypes.number.isRequired,
      Make: PropTypes.string.isRequired,
      Model: PropTypes.string.isRequired,
      Price: PropTypes.string.isRequired,
      Version: PropTypes.string.isRequired,
      YearFab: PropTypes.number.isRequired,
      YearModel: PropTypes.number.isRequired,
    })
  ),
};

VehicleList.defaultProps = {
  data: [],
};

export default VehicleList;
