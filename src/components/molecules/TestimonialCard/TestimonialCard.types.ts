import { Testimonial } from "@/types/Testimonial";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  isSelected: boolean;
  position: number;
  onClick(): void;
}
