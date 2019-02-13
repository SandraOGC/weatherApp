import React from "react";
// import PropTypes from 'prop-types';

const Location = ({city}) => {
    //Destructuring (opcion 1)
    //const { city } = props;
    
    //const city = props.city; (opcion 2)

    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    );
};

// Location.PropTypes = {
//   city: PropTypes.string.isRequired,
// }
export default Location;
