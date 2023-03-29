import { useState } from "react";
import { ProductComponent } from "./styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const url = "http://localhost:1337";

export function Product() {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState('img');
    const [quantity, setQuantity] = useState(1);

    const { data, error, loading } = useFetch(`/products/${id}?populate=*`);


    const img = data?.attributes?.img?.data?.attributes.url;
    const img2 = data?.attributes?.img2?.data?.attributes.url;

    console.log(id);
    console.log(data);

    return (
        <ProductComponent>
            <div className="left">
                <div className="images">
                    <img
                        src={url + img}
                        onClick={() => setSelectedImg('img')}
                        alt=""
                    />
                    <img
                        src={url + img2}
                        onClick={() => setSelectedImg('img2')}
                        alt=""
                    />
                </div>
                <div className="mainImg">
                    <img src={url + data?.attributes[selectedImg].data?.attributes.url} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>sdgasdfg</h1>
                <span className="price">$200</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, recusandae soluta? Consequuntur exercitationem
                    repellendus velit quo optio praesentium, placeat qui ipsam
                    cumque alias blanditiis ab pariatur rem reprehenderit hic
                    eaque?
                </p>
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
                    // onClick={() =>
                    //     dispatch(
                    //         addToCart({
                    //             id: data.id,
                    //             title: data.attributes.title,
                    //             desc: data.attributes.desc,
                    //             price: data.attributes.price,
                    //             img: data.attributes.img.data.attributes.url,
                    //             quantity,
                    //         })
                    //     )
                    // }
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
                    <span>Product Type: T-Shirt</span>
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
