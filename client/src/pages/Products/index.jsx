import { useParams } from "react-router-dom";
import { List } from "../../components/List";
import { ProductsComponent } from "./styles";
import { useState } from "react";

export function Products() {
    const catID = Number(useParams().id);
    const [priceMax, setPriceMax] = useState(1000);
    const [sortBy, setSortBy] = useState(null);

    console.log(sortBy)

    return (
        <ProductsComponent>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" value={1} id="1" />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" value={2} id="2" />
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" value={3} id="3" />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            onChange={(e) => setPriceMax(e.target.value)}
                        />
                        <span>{priceMax}</span>
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
                <List catID={catID} priceMax={priceMax} sortBy={sortBy} />
            </div>
        </ProductsComponent>
    );
}
