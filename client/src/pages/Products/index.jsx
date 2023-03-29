import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import { ProductsComponent } from "./styles";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

export function Products() {
    const catID = Number(useParams().id);
    const [priceMax, setPriceMax] = useState(100);
    const [price, setPrice] = useState(50);
    const [sortBy, setSortBy] = useState("asc");
    const [selectedSubCat, setSelectedSubCat] = useState([]);

    const { data, loading, error } = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=${catID}`
    );

    function handleChange(e) {
        setSelectedSubCat(
            e.target.checked
                ? [...selectedSubCat, e.target.value]
                : selectedSubCat.filter((item) => item !== e.target.value)
        );
    }

    return (
        <ProductsComponent>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    {data.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input
                                type="checkbox"
                                value={item.id}
                                id={item.id}
                                onChange={handleChange}
                            />
                            <label htmlFor={item.id}>
                                {item.attributes.title.charAt(0).toUpperCase() +
                                    item.attributes.title.slice(1)}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            onChange={(e) => setPrice(e.target.value)}
                            onMouseUp={(e) =>
                                setPriceMax(parseInt(e.target.value))
                            }
                        />
                        <span>{price}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input
                            type="radio"
                            name="price"
                            id="asc"
                            value="asc"
                            onClick={(e) => setSortBy(e.target.value)}
                        />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input
                            type="radio"
                            name="price"
                            id="desc"
                            value="desc"
                            onClick={(e) => setSortBy(e.target.value)}
                        />
                        <label htmlFor="asc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img
                    className="catImg"
                    src="http://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <List
                    catID={catID}
                    priceMax={priceMax}
                    sortBy={sortBy}
                    subCatID={selectedSubCat}
                />
            </div>
        </ProductsComponent>
    );
}
