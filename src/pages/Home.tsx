import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import FeaturedRooms from "../components/FeaturedRooms";
// import styled from "styled-components";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      {/* <FeaturedRooms /> */}
    </>
  );
};

export default home;