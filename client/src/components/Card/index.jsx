import { CardComponent } from "./styles.js";
import { Link } from "react-router-dom";

const url = "http://localhost:1337";

export function Card({ item }) {
    console.log(item);

    return (
        <Link className="link" to={`/product/${item.id}`}>
            <CardComponent>
                <div className="image">
                    {item?.isNew && <span>New Season</span>}
                    <img
                        src={url + item?.img?.data?.attributes.url}
                        alt=""
                        className="mainImg"
                    />
                    {item.img2.data && (
                        <img
                            src={url + item?.img2?.data?.attributes.url}
                            alt=""
                            className="secondImg"
                        />
                    )}
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>${Math.round((item.price + 20) * 100) / 100}</h3>
                    <h3>${item.price}</h3>
                </div>
            </CardComponent>
        </Link>
    );
}
