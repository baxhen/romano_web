import type { NextPage } from "next";

import MainSection from "../components/home-sections/main-section";
import LastEventsSection from "../components/home-sections/last-events-section";

const Home: NextPage = () => {
  return (
    <div>
      <MainSection />
      <LastEventsSection />
    </div>
  );
};

export default Home;
