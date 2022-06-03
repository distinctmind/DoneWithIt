import React from "react";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

function ProgressBar({ progress }) {
  return (
    <Progress.Bar progress={progress} width={200} color={colors.primary} />
  );
}

export default ProgressBar;
