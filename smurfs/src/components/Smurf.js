import React from 'react';
import Form from './Form';
import { updateSmurf } from '../actions';
import connect from 'react-redux/lib/connect/connect';

class Smurf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState( originalState => ({
            edit: !originalState.edit
        }))
    }

    render() {
        return (
            <div className='container'>
                <div className='smurf'>
                    <p>Name: <strong>{this.props.smurf.name}</strong></p>
                    <p>Age: {this.props.smurf.age}</p>
                    <p>Height: {this.props.smurf.height}</p>
                    {this.state.edit && <Form smurf={this.props.smurf} submit={this.props.updateSmurf}/>}
                    <button 
                        className='edit' 
                        onClick={this.toggleEdit}
                    >Edit Smurf</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        edit: state.editing
    }
}

export default connect(
    mapStateToProps,
    { updateSmurf }
) (Smurf);