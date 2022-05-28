import React, { useState, useEffect } from "react";


const SingleColor = ({ rgb, weight, join, hex, index }) => {
  const [alert, setAlert] = useState(false);
  const storeRgb = rgb.join(",");
 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 50 ?  "color-light" : "color-dark"}`}
      style={{ backgroundColor: `rgb(${storeRgb})` }}
      onClick={() => {
        setAlert(true);
        //to copy to clipboard
        navigator.clipboard.writeText(`#${hex}`);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">Copied to clipboard!</p>}
    </article>
  );
};

export default SingleColor;
