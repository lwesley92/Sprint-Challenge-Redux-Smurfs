import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchSmurfs, deleteSmurf, updateSmurf } from '../actions';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  state = {
    editForm: false,
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfForm 
            handleChange = {this.handleChange}
          />
          <SmurfList 
            smurfs = {this.props.smurfs}
            deleteSmurf = {this.props.deleteSmurf}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}



export default connect(mapStateToProps, {fetchSmurfs, deleteSmurf, updateSmurf })(App);
