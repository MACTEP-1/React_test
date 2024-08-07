import React, { useState, createContext, useCallback } from 'react';
import Banner from './banner';
import HouseList from './houseList';
import House from './house';
import navValues from '@/helpers/navValues';
import ComponentPicker from './componentPicker';

const navContext = React.createContext(navValues.home);

const App = () => {
    /* const [selectedHouse, setSelectedHouse] = useState();

    const setSelectedHouseWrapper = (house) => {
        //do checks on house
        setSelectedHouse(house);
      }; */
    const navigate = useCallback(
        (navTo) => setNav({ current: navTo, navigate}), []
    );

    const [nav, setNav] = useState({ current: navValues.home, navigate});
    return (
        <navContext.Provider value={nav}>
            <Banner>List</Banner>
            {/* {selectedHouse ? (
                <House house={selectedHouse} /> 
            ) : ( 
                <HouseList selectHouse={setSelectedHouseWrapper} />
            )} */}
            <ComponentPicker currentNavLocation={nav.current} />
        </navContext.Provider>
    );
}

export { navContext };
export default App;