import React from 'react';
import PropTypes from 'prop-types';

import { Container, Photo, Content, ModelName, MakeName } from './styles';

const VehicleCard = ({ vehicle }) => {
  const { Image, Model, Make } = vehicle;

  return (
    <Container>
      <Photo src={Image} />
      <Content>
        <ModelName>{Model}</ModelName>
        <MakeName>{Make}</MakeName>
      </Content>
      {/* <Footer>
        <Price>{Price}</Price>
      </Footer> */}
    </Container>
  );
};

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
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
  }),
};

export default VehicleCard;
