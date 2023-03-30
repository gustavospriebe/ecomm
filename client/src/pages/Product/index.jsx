import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { ProductComponent } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

export function Product() {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const { data, error, loading } = useFetch(`/products/${id}?populate=*`);

    const img = data?.attributes?.img?.data?.attributes.url;
    const img2 = data?.attributes?.img2?.data?.attributes.url;

    return (
        <ProductComponent>
            <div className="left">
                <div className="images">
                    <img
                        src={import.meta.env.VITE_APP_UPLOAD_URL + img}
                        onClick={() => setSelectedImg("img")}
                        alt=""
                    />
                    <img
                        src={import.meta.env.VITE_APP_UPLOAD_URL + img2}
                        onClick={() => setSelectedImg("img2")}
                        alt=""
                    />
                </div>
                <div className="mainImg">
                    <img
                        src={
                            import.meta.env.VITE_APP_UPLOAD_URL +
                            (selectedImg === "img" ? img : img2)
                        }
                        alt=""
                    />
                </div>
            </div>
            <div className="right">
                <h1>{data?.attributes?.title}</h1>
                <span className="price">$ {data?.attributes?.price}</span>
                <p>{data?.attributes?.description}</p>
                <div className="quantity">
                    <button
                        onClick={() =>
                            setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                    >
                        -
                    </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>
                        +
                    </button>
                </div>
                <button
                    className="add"
                    onClick={() =>
                        dispatch(
                            addToCart({
                                id: data.id,
                                title: data.attributes.title,
                                description: data.attributes.description,
                                img: data.attributes.img,
                                price: data.attributes.price,
                                quantity,
                            })
                        )
                    }
                >
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>
                        Product Type:{" "}
                        {
                            data?.attributes?.sub_categories.data[0].attributes
                                .title
                        }
                    </span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </ProductComponent>
    );
}
