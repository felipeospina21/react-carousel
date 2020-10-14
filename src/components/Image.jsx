import React from "react";

const Image = ({ src }) => {
  let imgStyles = {
    width: 100 + "%",
    height: "auto"
  };
  return <img src={src} alt="" style={imgStyles} />;
};

export default Image;
