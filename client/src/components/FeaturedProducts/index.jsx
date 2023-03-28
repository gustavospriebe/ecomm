import React, { useEffect, useState } from "react";
import { FeaturedProductsComponent } from "./styles.js";
import { Card } from "../Card/index.jsx";
import axios from "axios";

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

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(
                    import.meta.env.VITE_APP_API_URL + "/products?populate=*",
                    {
                        headers: {
                            Authorization:
                                "bearer" + import.meta.env.VITE_APP_API_TOKEN,
                        },
                    }
                );
                setProducts(data.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    console.log(products);

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
                        : products?.map((item) => (
                            <Card item={item.attributes} key={item.id} />
                        ))
                }
            </div>
        </FeaturedProductsComponent>
    );
}
