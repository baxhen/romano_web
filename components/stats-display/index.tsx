import React from "react";
import Typography from "@mui/material/Typography";

interface Props {
  stat: string;
  statName: string;
}

const StatDisplay = ({ stat, statName }: Props) => {
  return (
    <div>
      <Typography variant="h4" color="white">
        {stat}
      </Typography>
      <Typography variant="h6" color="white">
        {statName}
      </Typography>
    </div>
  );
};

export default StatDisplay;
