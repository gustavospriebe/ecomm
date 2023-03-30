import { CartComponent } from "./styles";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";

export function Cart() {
    const products = useSelector((state) => state.cart.products);

    const dispatch = useDispatch();

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
                            {item.quantity}x{" "}
                            {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "USD",
                            }).format(item.price)}
                        </div>
                        <DeleteOutlinedIcon
                            className="delete"
                            onClick={() => dispatch(removeFromCart(item.id))}
                        />
                    </div>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "USD",
                    }).format(
                        products.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                        )
                    )}
                </span>
            </div>
            <button>PROCEED TO PAYMENT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </CartComponent>
    );
}
