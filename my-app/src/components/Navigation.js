import React, { useState } from "react";
import NavigationItem from "./NavigationItem";
import Logo from "./Logo";
const nav = {
  obj: ["Projects", "Guides", "Blog", "Training and Certification"]
};
function Navigation() {
  const [visibility, setVisibility] = useState(false);

  const openHide = () => {
    setVisibility(!visibility);
  };
  return (
    <nav>
      <Logo />
      <div className="mob-menu">
        <a href="#top" className="menu-button" onClick={openHide}>
          <span></span>
        </a>
        {visibility && (
          <ul className="mob-navigation">
            {visibility &&
              nav.obj.map(i => {
                return <NavigationItem text={i} key={nav.obj.indexOf(i)} />;
              })}
          </ul>
        )}
      </div>
      <div className="menu">
        <ul className="navigation">
          {nav.obj.map(i => {
            return <NavigationItem text={i} key={nav.obj.indexOf(i)} />;
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
