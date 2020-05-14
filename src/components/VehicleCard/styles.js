import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.05);
`;

export const Photo = styled.div`
  background: ${({ src }) => `url(${src}) center center`};
  height: 150px;
  background-size: cover;
`;

export const Content = styled.div`
  padding: 20px;
`;
export const ModelName = styled.h2`
  font-size: 20px;
`;
export const MakeName = styled.h3`
  font-size: 14px;
  font-weight: normal;
`;
