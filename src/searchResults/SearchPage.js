import React from 'react';
import SearchPreview from './SearchPreview';
import FilterButton from './FilterButton';
import { Button, Col, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './SearchPage.css'
import * as global from '../global.js'
import NewTicketButton from '../ticket/NewTicketButton';
import firebase from 'firebase';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchType: this.props.match.params.type == global.TICKETS ? "Ticket" : "User",
      loggedIn: false
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ loggedIn: true });
      else this.setState({ loggedIn: false });
    });
  }

  render() {
    return (
      <div className='container searchpage'>
        <div className='searchTitle'>
          <h3 className='left'> {this.state.searchType} Results: {this.props.match.params.keyword}</h3>
          <FilterButton className='right' />
        </div>
        <hr />

        <div className="card-deck">
          <SearchPreview ticketID='1'/>
          <SearchPreview ticketID='1'/>
          <SearchPreview ticketID='1'/>
          <SearchPreview ticketID='1'/>
        </div>

        <div className="create-ticket" style={{ marginTop: '1rem' }}>
          {this.state.loggedIn ? <NewTicketButton /> : <Button>Sign In to Post</Button>}
        </div>
      </div>
    );
  }
}

export default SearchPage;