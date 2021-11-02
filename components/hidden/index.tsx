import React from 'react';

interface Props {
  hidden: boolean;
}

export const Hidden: React.FC<Props> = ({ children, hidden }) => {
  if (hidden) return <></>;

  return <>{children}</>;
};

export default Hidden;
