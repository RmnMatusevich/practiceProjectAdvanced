import React from "react";
import NavigationItem from "./NavigationItem";
import Logo from "./Logo";
const nav = {
  obj: ["Projects", "Guides", "Blog", "Training and Certification"]
};
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.openHide = this.openHide.bind(this);
  }
  openHide() {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  }
  render() {
    return (
      <nav>
        <Logo />
        <div className="mob-menu">
          <a href="#top" className="menu-button" onClick={this.openHide}>
            <span></span>
          </a>
          {this.state.isVisible && (
            <ul className="mob-navigation">
              {this.state.isVisible &&
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
}
export default Navigation;
