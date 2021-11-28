import type { NextPage } from "next";

import MainSection from "../components/home-sections/main-section";
import LastEventsSection from "../components/home-sections/last-events-section";
import TeamsSection from "../components/home-sections/teams-section";

const Home: NextPage = () => {
  return (
    <div>
      <MainSection />
      <LastEventsSection />
      <TeamsSection />
    </div>
  );
};

export default Home;
