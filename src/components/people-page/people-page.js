import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../item-details/person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundary from '../error-boundary';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {i => `${i.name}  (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      
        <Row left={itemList} right={personDetails} />
    
    );
  }
}
