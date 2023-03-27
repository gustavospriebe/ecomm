import { FeaturedProducts } from "../../components/FeaturedProducts";
import { Slider } from "../../components/Slider";

export function Home() {
    return (
        <div>
            <Slider />
            <FeaturedProducts />
        </div>
    );
}
