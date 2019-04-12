import React from 'react';

const Smurf = props => {
    return (
        <div>
            <h1>{props.smurf.name}</h1>
            <h2>ID: {props.smurf.id}</h2>
            <h3>Height: {props.smurf.height} Tall</h3>
            <h3>Age: {props.smurf.age} Smurf Years Old</h3>
            <button onClick = {() => props.deleteSmurf(props.smurf.id)}>Delete Smurf</button>
        </div>
    )
}

export default Smurf;