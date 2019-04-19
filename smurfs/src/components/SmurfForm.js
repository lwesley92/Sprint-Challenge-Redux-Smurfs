import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            height: '',
            age: ''
        }
    }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleAddSmurf = () => {
        let smurf = { ...this.state};
        this.props.addSmurf(smurf);
        this.setState({
          name: '',
          age: '',
          height: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Add a Smurf to the Village</h1>
                <form>
                    <input 
                        type = 'text'
                        name = 'name'
                        placeholder = 'name'
                        value = {this.state.name}
                        onChange = {this.handleChange}
                    />

                    <input 
                        type = 'text'
                        name = 'height'
                        placeholder = 'height'
                        value = {this.state.height}
                        onChange = {this.handleChange}
                    />

                    <input 
                        type = 'number'
                        name = 'age'
                        placeholder = 'age'
                        value = {this.state.age}
                        onChange = {this.handleChange}
                    />
                </form>
                <button onClick = {() => this.handleAddSmurf()}>Add Smurf</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    }
}


export default connect(mapStateToProps, { addSmurf })(SmurfForm);