import { CardComponent } from "./styles.js";
import { Link } from "react-router-dom";

export function Card({ item }) {
    const attributesPath = item?.attributes;
    const img = attributesPath.img?.data?.attributes.url;
    const img2 = attributesPath?.img2?.data?.attributes.url;

    return (
        <Link className="link" to={`/product/${item.id}`}>
            <CardComponent>
                <div className="image">
                    {attributesPath.isNew && <span>New Season</span>}
                    <img
                        src={import.meta.env.VITE_APP_UPLOAD_URL + img}
                        alt=""
                        className="mainImg"
                    />
                    {attributesPath.img2.data && (
                        <img
                            src={import.meta.env.VITE_APP_UPLOAD_URL + img2}
                            alt=""
                            className="secondImg"
                        />
                    )}
                </div>
                <h2>{attributesPath.title}</h2>
                <div className="prices">
                    <h3>
                        {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "USD",
                        }).format(((attributesPath.price + 20) * 100) / 100)}
                    </h3>
                    <h3>
                        {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "USD",
                        }).format(attributesPath.price)}
                    </h3>
                </div>
            </CardComponent>
        </Link>
    );
}
