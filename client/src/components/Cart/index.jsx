import { CartComponent } from "./styles";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";

export function Cart() {
    const products = useSelector((state) => state.cart.products);

    console.log(products);

    return (
        <CartComponent>
            <h1>Products in your Cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img
                        src={
                            import.meta.env.VITE_APP_UPLOAD_URL +
                            item.img.data.attributes.url
                        }
                        alt=""
                    />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.description?.substring(0, 50)}</p>
                        <div className="price">
                            {item.quantity}x ${item.price}
                        </div>
                        <DeleteOutlinedIcon className="delete" />
                    </div>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>
                    ${" "}
                    {Math.round(
                        products.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                        )
                    )}
                </span>
            </div>
            <button>PROCEED TO PAYMENT</button>
            <span className="reset">Reset Cart</span>
        </CartComponent>
    );
}

