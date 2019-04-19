import React from 'react';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import { connect } from 'react-redux';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if (this.props.loadingSmurfs) {
            return(
                <div className='loading'>
                    <h1>...LOADING...</h1>
                </div>
            )
        }
        return (
            <div className='smurfList'>
                {this.props.smurfs.map(smurf => {
                    return (
                        <Smurf key={smurf.id} smurf={smurf} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        loadingSmurfs: state.loadingSmurfs
    }
}

export default connect (
    mapStateToProps,
    { getSmurfs }
) (SmurfList);