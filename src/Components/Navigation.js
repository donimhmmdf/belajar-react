import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const maskTransitions = useTransition(showMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  //   className="bg-black-t-50 w-full h-full z-50 top-0 left-0 fixed"
  //   className="fixed bg-white w-4/5 top-0 left-0 h-full z-50 shadow"
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {maskTransitions(
        (props, item, key) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="bg-black-t-50 w-full h-full z-50 top-0 left-0 fixed"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}
      {menuTransitions(
        (props, item, key) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-white w-4/5 top-0 left-0 h-full z-50 shadow p-6"
            >
              The Menu
              <span>
                <ul>Home</ul>
              </span>
            </animated.div>
          )
      )}
    </nav>
  );
}
export default Navigation;
