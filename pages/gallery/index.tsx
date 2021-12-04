import React from "react";
import withHeaderBg from "../../hoc/with-header-bg";

interface Props {}

const Gallery: React.FC<Props> = () => {
  return <div>Photos</div>;
};

export default withHeaderBg({ title: "Fotos" })(Gallery);
