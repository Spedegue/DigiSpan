import React, { useEffect, useRef, useState } from "react";
import { StyledNav } from "./Nav.styled";
import { NavProps } from "./Nav.types";
import Image from "next/image";
import Logo from "../../../assets/images/logo.png";
import BurgerButton from "@/components/atoms/BurgerButton/BurgerButton";
import { useSelector } from "react-redux";
import { RootState } from "@/types/RootState";
import BurgerMenu from "@/components/molecules/BurgerMenu/BurgerMenu";
import NavLinks from "@/components/molecules/NavLinks/NavLinks";
import { useWindowSize } from "usehooks-ts";

function Nav(props: NavProps) {
  const [isClient, setIsClient] = useState(false);
  const { width = 0 } = useWindowSize();
  const [hideNav, setHideNav] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const prevScrollY = useRef(0);
  const hideNavBackground = useSelector(
    (state: RootState) => state.navIntersection
  );

  const onScroll = () => {
    const newScrollY = window.scrollY;
    // Added a sensitivity to the nav show/hide so it only reacts to 'meaningful' scrolls
    // Also only hide the nav if the burger menu is not open
    if (Math.abs(newScrollY - prevScrollY.current) > 30 && !burgerOpen) {
      // If the new scrollY val is greater than the previous, then the scroll direction is down
      // Hide nav as the user scrolls down, show when scrolling up
      setHideNav(newScrollY > prevScrollY.current);
      prevScrollY.current = newScrollY;
    }
  };

  useEffect(() => {
    // useEffect will only run in browser, so when this is set to true we know it is not being rendered on the server
    setIsClient(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  // We can only run this on the client as useWindowSize will break when used with SSR
  if (!isClient) return null;

  return (
    <StyledNav hide={hideNav} hideBackground={hideNavBackground}>
      <div>
        <Image
          src={Logo}
          alt={"Digital Spaniel Logo"}
          height={90}
          width={197}
        />
      </div>

      {width < 1024 ? (
        <div className={"burger-wrapper"}>
          <BurgerButton isOpen={burgerOpen} setIsOpen={setBurgerOpen} />
          <BurgerMenu isOpen={burgerOpen} />
        </div>
      ) : (
        <div>
          <NavLinks />
        </div>
      )}
    </StyledNav>
  );
}

export default Nav;
