import React from 'react';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        if (this.props.smurf) {
            this.state = {
                id: this.props.smurf.id,
                name: this.props.smurf.name,
                age: this.props.smurf.age,
                height: this.props.smurf.height
            }
        } else {
            this.state = {
                id: null,
                name: '',
                age: '',
                height: ''
            }
        }
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.id) {
            const smurf = {
                id: this.state.id,
                name: this.state.name,
                age: this.state.age,
                height: this.state.height
            }

            this.props.submit(smurf);
            this.setState({
                id: null,
                name: '',
                age: '',
                height: ''
            })
        }
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.submit(smurf);
        this.setState({
            id: null,
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='name'
                    text='text'
                    value={this.state.name}
                    placeholder='Name'
                    onChange={this.handleInput}
                />

                <input
                    name='age'
                    text='text'
                    value={this.state.age}
                    placeholder='Age'
                    onChange={this.handleInput}
                />

                <input
                    name='height'
                    text='text'
                    value={this.state.height}
                    placeholder='Height'
                    onChange={this.handleInput}
                />

                <button className='buttonOnForm'>{this.props.smurf ? 'save' : 'add'}</button>

            </form>
        )
    }

}