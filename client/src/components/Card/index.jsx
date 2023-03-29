import { CardComponent } from "./styles.js";
import { Link } from "react-router-dom";

const url = "http://localhost:1337";

export function Card({ item }) {
    const attributesPath = item?.attributes;
    const img = attributesPath.img?.data?.attributes.url;
    const img2 = attributesPath?.img2?.data?.attributes.url;
    data?.attributes?.img?.data.attributes.url
    console.log(item);


    return (
        <Link className="link" to={`/product/${item.id}`}>
            <CardComponent>
                <div className="image">
                    {attributesPath.isNew && <span>New Season</span>}
                    <img src={url + img} alt="" className="mainImg" />
                    {attributesPath.img2.data && (
                        <img src={url + img2} alt="" className="secondImg" />
                    )}
                </div>
                <h2>{attributesPath.title}</h2>
                <div className="prices">
                    <h3>
                        ${Math.round((attributesPath.price + 20) * 100) / 100}
                    </h3>
                    <h3>${attributesPath.price}</h3>
                </div>
            </CardComponent>
        </Link>
    );
}
