import React, { useState, createContext } from 'react';
import Banner from './banner';
import HouseList from './houseList';
import House from './house';
import navValues from '@/helpers/navValues';

const navContext = React.createContext(navValues.home);

const App = () => {
    /* const [selectedHouse, setSelectedHouse] = useState();

    const setSelectedHouseWrapper = (house) => {
        //do checks on house
        setSelectedHouse(house);
      }; */

    return (
        <>
            <Banner>List</Banner>
            {/* {selectedHouse ? (
                <House house={selectedHouse} /> 
            ) : ( 
                <HouseList selectHouse={setSelectedHouseWrapper} />
            )} */}
        </>
    );
}

export { navContext };
export default App;