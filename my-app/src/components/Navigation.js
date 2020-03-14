import React from "react";
import NavigationItem from "./NavigationItem";
import Logo from "./Logo";
function Navigation() {
  const props = {
    text: ["Projects", "Guides", "Blog", "Training and Certification"]
  };

  return (
    <nav>
      <Logo />
      <div className="mob-menu">
        <a href="#top" className="menu-button">
          <span></span>
        </a>
        <ul className="mob-navigation">
          {props.text.map(i => {
            return <NavigationItem text={i} key={props.text.indexOf(i)} />;
          })}
        </ul>
      </div>
      <div className="menu">
        <ul className="navigation">
          {props.text.map(i => {
            return <NavigationItem text={i} key={props.text.indexOf(i)} />;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
