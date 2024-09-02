import React, { useEffect, useState } from "react";
import { CarouselButton, StyledCarousel } from "./Carousel.styled";
import { CarouselProps } from "./Carousel.types";
import { Testimonial } from "@/types/Testimonial";
import TestimonialCard from "@/components/molecules/TestimonialCard/TestimonialCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonials } from "@/features/testimonials/testimonialsSlice";
import { RootState } from "@/types/RootState";
import { AppDispatch } from "@/types/AppDispatch";

function Carousel(props: CarouselProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const testimonials = useSelector(
    (state: RootState) => state.testimonials.items
  );
  const status = useSelector((state: RootState) => state.testimonials.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTestimonials());
    }
  }, [dispatch, status]);

  return (
    <StyledCarousel>
      <div>
        {testimonials?.map((testimonial: Testimonial, idx: number) => {
          const position =
            (idx - selectedIdx + testimonials.length) % testimonials.length;
          return (
            <TestimonialCard
              onClick={() => {
                setSelectedIdx(idx);
              }}
              isSelected={idx === selectedIdx}
              testimonial={testimonial}
              key={testimonial.id}
              position={position}
            />
          );
        })}
      </div>
      <div className={"carousel-btns"}>
        {Array(testimonials.length)
          .fill(0)
          .map((_, index) => (
            <CarouselButton
              onClick={() => setSelectedIdx(index)}
              isSelected={selectedIdx === index}
              key={`carouselButton${index}`}
            />
          ))}
      </div>
    </StyledCarousel>
  );
}

export default Carousel;
