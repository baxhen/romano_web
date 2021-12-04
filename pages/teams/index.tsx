import React from "react";
import withHeaderBg from "../../hoc/with-header-bg";

interface Props {}

const Teams: React.FC<Props> = () => {
  return <div>Equipes</div>;
};

export default withHeaderBg({ title: "Equipes" })(Teams);
