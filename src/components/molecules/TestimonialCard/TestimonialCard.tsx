import React from "react";
import {
  InfoWrapper,
  Name,
  Role,
  StyledTestimonialCard,
} from "./TestimonialCard.styled";
import { TestimonialCardProps } from "./TestimonialCard.types";
import Avatar from "@/components/atoms/Avatar/Avatar";

function TestimonialCard(props: TestimonialCardProps) {
  const { isSelected, testimonial, position, onClick } = props;
  return (
    <StyledTestimonialCard
      isSelected={isSelected}
      position={position}
      onClick={onClick}
    >
      <blockquote>
        <p>{testimonial.content}</p>
        <InfoWrapper>
          <Avatar
            src={testimonial.avatarSrc}
            alt={`Image of ${testimonial.author}`}
          />
          <Name>{testimonial.author}</Name>
          <Role>{testimonial.authorRole}</Role>
        </InfoWrapper>
      </blockquote>
    </StyledTestimonialCard>
  );
}

export default TestimonialCard;
