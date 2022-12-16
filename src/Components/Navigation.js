import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [transitions, api] = useTransition(showMenu, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  }));
  // menu className="fixed bg-white w-4/5 top-0 left-0 h-full z-50 shadow"
  // menumask className="bg-black-t-50 w-full h-full z-50 top-0 left-0 fixed"

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
    </nav>
  );
}
export default Navigation;
