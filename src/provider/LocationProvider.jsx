import { useState } from "react";
import PropTypes from 'prop-types';
// import { LocationContext } from "./context";
import { LocationContext } from "../context";


const LocationProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        latitude: 0,
        longitude: 0,
    });
    return (
        <LocationContext.Provider
            value={{ selectedLocation, setSelectedLocation }}
        >
            {children}
        </LocationContext.Provider>
    );
};


LocationProvider.propTypes =
{
    children: PropTypes.node.isRequired
}
export default LocationProvider;