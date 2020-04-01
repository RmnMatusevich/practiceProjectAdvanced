import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavigationItem from "./NavigationItem";
import Logo from "./Logo";
const ACTION_CHANGE_VISIBILITY = "ACTION_CHANGE_VISIBILITY";
const nav = {
  obj: ["Projects", "Guides", "Blog", "Training and Certification"]
};
function setVisibility(visibility) {
  let newVisibility = !visibility;
  return {
    type: ACTION_CHANGE_VISIBILITY,
    newVisibility
  };
}
function Navigation() {
  const dispatch = useDispatch();
  const visibility = useSelector(state => state.navigationVisibility);

  return (
    <nav>
      <Logo />
      <div className="mob-menu">
        <a
          href="#top"
          className="menu-button"
          onClick={() => dispatch(setVisibility(visibility))}
        >
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
