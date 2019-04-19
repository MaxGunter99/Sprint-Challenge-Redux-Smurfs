import React, { Component } from 'react';
import './App.css';
import connect from 'react-redux/lib/connect/connect';
import Form from './Form';
import { addSmurf } from '../actions';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className='addSmurf'>
          <Form submit={this.props.addSmurf}/>
        </div>
        <SmurfList/>
      </div>
    );
  }
}

export default connect(
  null,
  {addSmurf}
) (App);
