import React from "react";
import { FeaturedProductsComponent } from "./styles.js";
import { Card } from "../Card/index.jsx";

const data = [
    {
        id: 1,
        img: "http://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "http://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "http://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
];

export function FeaturedProducts() {
        const loading = false;
        
    return (
        <FeaturedProductsComponent>
            <div className="top">
                <h1>Featured Products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus modi quos voluptatibus illum omnis fuga libero
                    officiis nam at et nostrum tenetur non molestias voluptatem
                    alias facilis, provident est neque!
                </p>
            </div>
            <div className="bottom">
                {
                // error
                //     ? "Something went wrong!"
                //     : 
                    loading
                    ? "loading"
                    : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </FeaturedProductsComponent>
    );
}
