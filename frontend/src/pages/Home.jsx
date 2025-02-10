import Banner from "../components/Banner"
import BlogsSection from "../components/BlogsSection"
import Categories from "../components/Categories"
import DealsSection from "../components/DealsSection"
import HeroSection from "../components/HeroSetion"
import PromoBanner from "../components/PromoBanner"
import ShopPage from "./ShopPage"

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <HeroSection />
            <ShopPage />
            <DealsSection />
            <PromoBanner />
            <BlogsSection />
        </div>
    )
}

export default Home
