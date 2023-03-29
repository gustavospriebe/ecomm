import { ListComponent } from "./styles";
import { Card } from "../Card";
import useFetch from "../../hooks/useFetch";

export function List({ priceMax, sortBy, catID, subCatID }) {
    const { data, error, loading } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catID}${subCatID.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${priceMax}&sort=price:${sortBy}`
    );

    return (
        <ListComponent>
            {loading
                ? "loading"
                : data?.map((item) => <Card item={item} key={item.id} />)}
        </ListComponent>
    );
}
