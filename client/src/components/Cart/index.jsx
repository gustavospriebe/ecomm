import { CartComponent } from "./styles";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

export function Cart() {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    const stripePromise = loadStripe(
        "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
    );

    async function handlePayment() {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });
            console.log(res);
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <CartComponent>
            <h1>Products in your cart</h1>
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
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon
                        className="delete"
                        onClick={() => dispatch(removeFromCart(item.id))}
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button
            //  onClick={handlePayment}
            >
                PROCEED TO CHECKOUT
            </button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </CartComponent>
    );
}
