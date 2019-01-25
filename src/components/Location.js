import React from "react";

const Location = ({city}) => {
    //Destructuring (opcion 1)
    //const { city } = props;
    
    //const city = props.city; (opcion 2)

    return (
        <div>
            <h1>{city}</h1>
        </div>
    );
};

export default Location;
