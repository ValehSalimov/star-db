import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';

const withChildFunction = fn => Wrapped => {
  // eslint-disable-next-line react/display-name
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);

export { PersonList, PlanetList, StarshipList };
