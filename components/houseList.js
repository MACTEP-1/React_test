import { useEffect, useState } from "react";
import HouseRow, { HouseRowMem } from "./houseRow";

/* const houseArray = [
    {
        id: 1,
        address: "123 Main st",
        country: "USA",
        price: 24242,
    },
    {
        id: 2,
        address: "1212 Via Corso",
        country: "Italy",
        price: 1234,
    },
]; */

const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();
            setHouses(houses);
        }
        fetchHouses();
    });

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "345 Hello rd",
                country: "Malaysia",
                price: 422,
            },
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses for sale
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        <HouseRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseList;