import React, { useEffect, useRef } from "react";
import { StyledLanding } from "./Landing.styled";
import { LandingProps } from "./Landing.types";
import Image from "next/image";
import SpanielImage from "../../../../public/spaniel_gradient.png";
import SectionHeader from "@/components/atoms/SectionHeader/SectionHeader";
import Link from "@/components/atoms/Link/Link";
import SectionInfo from "@/layouts/SectionInfo";
import { useDispatch } from "react-redux";
import { setNavIntersection } from "@/features/navIntersection/navIntersectionSlice";

function Landing(props: LandingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // When the nav links are no longer behind the image, we want to add a background to it so they stay visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        dispatch(setNavIntersection(entry.isIntersecting));
      },
      //   -120px margin to account for height of nav
      { threshold: 0, rootMargin: "-120px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <StyledLanding>
      <div className={"hero"}>
        <SectionInfo>
          <p className={"slogan"}>BRAND, DEV, ECOM, MARKETING</p>
          <SectionHeader>
            <span>We unleash</span>
            <span>business potential</span>
          </SectionHeader>
          <p className={"info"}>
            We create brand experiences which are memorable and distinct. Our
            experienced team create and develop brands with personality and
            resonance.
          </p>
          <Link href={"/"} label={`Let's talk`} />
        </SectionInfo>
      </div>
      <div className={"img-container"} ref={ref} />
    </StyledLanding>
  );
}

export default Landing;
