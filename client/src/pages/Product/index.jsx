import { useState } from "react";
import { ProductComponent } from "./styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const images = [
    "http://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "http://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
];

export function Product() {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    return (
        <ProductComponent>
            <div className="left">
                <div className="images">
                    {images.map((image, index) => (
                        <img
                            src={image}
                            key={index}
                            onClick={() => setSelectedImg(index)}
                            alt=""
                        />
                    ))}
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
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
