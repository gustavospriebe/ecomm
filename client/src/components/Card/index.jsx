import { CardComponent } from "./styles.js";
import { Link } from "react-router-dom";

export function Card({ item }) {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <CardComponent>
                <div className="image">
                    {item?.isNew && <span>New Season</span>}
                    <img src={item.img} alt="" className="mainImg" />
                    <img src={item.img2} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </CardComponent>
        </Link>
    );
}
