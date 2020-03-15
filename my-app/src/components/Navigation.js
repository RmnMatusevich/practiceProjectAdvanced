import React from "react";
import NavigationItem from "./NavigationItem";
import Logo from "./Logo";

class Navigation extends React.Component {
  openHide() {
    const navigation = document.getElementsByClassName("mob-navigation")[0];

    navigation.classList.toggle("navigation__active");
    if (navigation.style.display === "flex") {
      navigation.style.display = "none";
      navigation.style.top = "-100%";
    } else {
      navigation.style.display = "flex";
      navigation.style.top = "0";
    }
  }
  render() {
    const props = {
      obj: ["Projects", "Guides", "Blog", "Training and Certification"]
    };
    return (
      <nav>
        <Logo />
        <div className="mob-menu">
          <a href="#top" className="menu-button" onClick={this.openHide}>
            <span></span>
          </a>
          <ul className="mob-navigation">
            {props.obj.map(i => {
              return <NavigationItem text={i} key={props.obj.indexOf(i)} />;
            })}
          </ul>
        </div>
        <div className="menu">
          <ul className="navigation">
            {props.obj.map(i => {
              return <NavigationItem text={i} key={props.obj.indexOf(i)} />;
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navigation;
