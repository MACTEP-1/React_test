const AddHouse = () => {
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 9,
                address: "345 Hello rd",
                country: "Malaysia",
                price: 422,
            },
        ]);
    };
    return (
        <>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default AddHouse;