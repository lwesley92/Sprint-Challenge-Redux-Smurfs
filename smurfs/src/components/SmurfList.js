import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    return (
        <div>
            <h1>Smurf Redux Village</h1>
            <div>
                {props.smurfs.map(smurf => {
                    return (
                        <Smurf 
                            smurf = {smurf}
                            key = {smurf.id}
                            deleteSmurf = {props.deleteSmurf}
                        />
                    )
                })}
            </div>
        </div>
    )
}


export default SmurfList;