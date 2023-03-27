import { ListComponent } from "./styles";
import { Card } from "../Card";

const data = [
    {
        id: 1,
        img: "http://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "http://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "http://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
];

export function List() {
    return (
        <ListComponent>
            {data?.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </ListComponent>
    );
}
