import React, { useState } from "react";
import { StyledTestimonials } from "./Testimonials.styled";
import { TestimonialsProps } from "./Testimonials.types";
import { Testimonial } from "@/types/Testimonial";
import SectionHeader from "@/components/atoms/SectionHeader/SectionHeader";
import Carousel from "@/components/molecules/Carousel/Carousel";
import TestimonialCard from "@/components/molecules/TestimonialCard/TestimonialCard";

// c71ad4c5-8d1c-4846-aa11-543104b7b712
// 79ecbd9a-e763-4ab8-80fd-3098248e5196
function Testimonials(props: TestimonialsProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <StyledTestimonials>
      <SectionHeader>
        <span>Kind words</span>
        <span>from our clients</span>
      </SectionHeader>
      <Carousel />
    </StyledTestimonials>
  );
}

export default Testimonials;
