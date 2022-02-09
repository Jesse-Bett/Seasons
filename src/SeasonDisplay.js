import React from "react";

const seasonConfig = {
  summer: {
    seasonText: "Let's hit the beach",
    iconName: "sun",
  },

  winter: {
    seasonText: "Let's hit the beach",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter"; //returning the result of the ternary expression.
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {seasonText,iconName} = seasonConfig[season]

  return (
    <div>
      <i className={` massive ${iconName} icon`} />
      <h1>{seasonText}</h1>
      <i className={` massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
