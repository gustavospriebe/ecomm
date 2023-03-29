import React from "react";
import { FeaturedProductsComponent } from "./styles.js";
import { Card } from "../Card/index.jsx";
import useFetch from "../../hooks/useFetch.js";

export function FeaturedProducts({ type }) {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );


    return (
        <FeaturedProductsComponent>
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus modi quos voluptatibus illum omnis fuga libero
                    officiis nam at et nostrum tenetur non molestias voluptatem
                    alias facilis, provident est neque!
                </p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                    ? "loading"
                    : data?.map((item) => (
                          <Card item={item.attributes} key={item.id} />
                      ))}
            </div>
        </FeaturedProductsComponent>
    );
}
