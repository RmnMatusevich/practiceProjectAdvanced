import React from "react";

const CollageItem = obj => {
  return (
    <div className="collage-item">
      <img className="collage-image" src={obj.src} alt="Collage icon" />
      <h6 className="collage-tittle">{obj.tittle}</h6>
      <p className="collage-description">{obj.description}</p>
    </div>
  );
};

export default CollageItem;
