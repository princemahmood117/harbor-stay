import { Helmet } from "react-helmet-async";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Home/Rooms";
import Hero from "../../components/Hero/Hero";
import ExclusiveOffers from "../../components/ExclusiveOffers/ExclusiveOffers";
import Testimonial from "../../components/Testimonial/Testimonial";
import Questions from "../../components/Questions/Questions";
import FadeInWhenVisible from "../../components/FadeInWhenVisible/FadeInWhenVisible";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HarborStay | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Hero></Hero>
      <Categories />

      <FadeInWhenVisible>
        <section className="exclusive-offers">
          <Rooms />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="exclusive-offers">
          <ExclusiveOffers></ExclusiveOffers>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="exclusive-offers">
          <Questions></Questions>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="exclusive-offers">
          <Testimonial></Testimonial>
        </section>
      </FadeInWhenVisible>
    </div>
  );
};

export default Home;
