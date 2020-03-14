import React from "react";

const NavigationItem = text => {
  return (
    <li className="navigation-item">
      <a href="#top" className="navigation-item__link">
        {text.text}
      </a>
    </li>
  );
};

export default NavigationItem;
