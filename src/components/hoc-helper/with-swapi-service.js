import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
  // eslint-disable-next-line react/display-name
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;