import { CartComponent } from "./styles";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const data = [
    {
        id: 1,
        img: "http://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "http://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, magnam a? Recusandae, impedit debitis sequi sint incidunt laborum dolorem blanditiis a hic possimus reprehenderit! Voluptates excepturi quae omnis ab porro!",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 1,
        img: "http://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "http://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, magnam a? Recusandae, impedit debitis sequi sint incidunt laborum dolorem blanditiis a hic possimus reprehenderit! Voluptates excepturi quae omnis ab porro!",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
];

export function Cart() {
    return (
        <CartComponent>
            <h1>Products in your Cart</h1>
            {data?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 50)}</p>
                        <div className="price">1x ${item.price}</div>
                        <DeleteOutlinedIcon className="delete" />
                    </div>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$ 123</span>
            </div>
            <button>PROCEED TO PAYMENT</button>
            <span className="reset">Reset Cart</span>
        </CartComponent>
    );
}
