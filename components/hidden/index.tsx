import React from "react";

interface Props {
  hidden: boolean;
}

export const Hidden: React.FC<Props> = ({ children, hidden }) => {
  if (hidden) return null;

  return <>{children}</>;
};

export default Hidden;
