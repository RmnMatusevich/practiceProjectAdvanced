import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavigationItem from "./NavigationItem";
import Logo from "./Logo";
import store from "../index";

const ACTION_CHANGE_NAVIGATION_VISIBILITY =
  "ACTION_CHANGE_NAVIGATION_VISIBILITY";
const nav = {
  obj: ["Projects", "Guides", "Blog", "Training and Certification"]
};

function Navigation() {
  const dispatch = useDispatch();
  let visibility = useSelector(state => state.navigationVisibility);

  function setVisibility() {
    console.log(store.getState());
    return {
      type: ACTION_CHANGE_NAVIGATION_VISIBILITY,
      visibility: !visibility
    };
  }
  return (
    <nav>
      <Logo />
      <div className="mob-menu">
        <a
          href="#top"
          className="menu-button"
          onClick={() => dispatch(setVisibility())}
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
