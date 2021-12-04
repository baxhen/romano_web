import React from "react";
import withHeaderBg from "../../hoc/with-header-bg";

interface Props {}

const Sponsors: React.FC<Props> = () => {
  return <div>Padrocinadores</div>;
};

export default withHeaderBg({ title: "Patrocinadores" })(Sponsors);
