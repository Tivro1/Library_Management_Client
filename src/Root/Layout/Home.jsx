
import { Helmet } from "react-helmet";
import BookCategories from "../../Components/BookCategories/BookCategories";
import FeaturedBooks from "../../Components/Feature/FeaturedBooks";
import SpecialOffers from "../../Components/Feature/SpecialOffers";
import Slider from "../../Components/SliderComponent/Slider";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Set dynamic title using React Helmet */}
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Slider Section */}
      <section className="w-full h-[500px] flex flex-col items-center justify-center mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg">
        <Slider />
      </section>

      {/* Books Category */}
      <section className="w-full px-6">
        {/* <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Book Categories</h2> */}
        <BookCategories />
      </section>

      {/* Featured Books */}
      <section className="w-full px-6">
        {/* <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Featured Books</h2> */}
        <FeaturedBooks />
      </section>

      {/* Offer Books */}
      <section className="w-full px-6">
        {/* <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Special Offers</h2> */}
        <SpecialOffers />
      </section>
    </div>
  );
};

export default Home;
