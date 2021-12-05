import React from "react";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  values: string[];
}

const ValuesDisplay = ({ title, values }: Props) => {
  return (
    <div>
      <Typography variant="h3" color="white">
        {title}
      </Typography>
      {values.map((v, i) => (
        <Typography key={v + i} variant="body1" color="white">
          {v}
        </Typography>
      ))}
    </div>
  );
};

export default ValuesDisplay;
