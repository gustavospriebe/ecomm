import { FeaturedProducts } from "../../components/FeaturedProducts";
import { Slider } from "../../components/Slider";
import { Categories } from "../../components/Categories";
import Contact from "../../components/Contact";

export function Home() {
    return (
        <div>
            <Slider />
            <FeaturedProducts type="Featured" />
            <Categories />
            <FeaturedProducts type="Trending" />
            <Contact />
        </div>
    );
}
