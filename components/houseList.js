
import useHouses from "@/hooks/useHouses";
import HouseRow, { HouseRowMem } from "./houseRow";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

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

const HouseList = (/*{ selectHouse }*/) => {
    const {houses, setHouses, loadingState } = useHouses();

    if (loadingState !== loadingStatus.loaded) 
        return <LoadingIndicator loadingState={loadingState} />
    
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 9,
                address: "345 Hello rd",
                country: "Malaysia",
                //price: 422,
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
                        <HouseRow key={h.id} house={h} /*selectHouse={selectHouse}*/ />
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