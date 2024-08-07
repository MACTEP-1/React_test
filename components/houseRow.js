import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import { navContext } from "./app";
import navValues from "@/helpers/navValues";

const HouseRow = ({ house/*, selectHouse*/ }) => {
    const {navigate} = useContext(navContext);
    return (
        <tr onClick={() => navigate(navValues.house /* selectHouse(house)*/)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && (
                <td className={`${house.price >= 300000 ? "text-primary" : ""}`}>
                    {currencyFormatter.format(house.price)}
                </td>
            )}
        </tr>
    );
};

export default HouseRow;