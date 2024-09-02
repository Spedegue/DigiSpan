import React from "react";
import { StyledServices } from "./Services.styled";
import { ServicesProps } from "./Services.types";
import SectionInfo from "@/layouts/SectionInfo";
import SectionHeader from "@/components/atoms/SectionHeader/SectionHeader";
import Link from "@/components/atoms/Link/Link";
import ServiceLinkGroup from "@/components/molecules/ServiceLinkGroup/ServiceLinkGroup";
import { ServiceLinkGroupProps } from "@/components/molecules/ServiceLinkGroup/ServiceLinkGroup.types";

const serviceLinkGroupArray: Array<ServiceLinkGroupProps> = [
  {
    title: "Brand",
    links: [
      { label: "Brand Strategy", href: "/" },
      { label: "Logo & Name", href: "/" },
      { label: "Identity & Collateral", href: "/" },
    ],
  },
  {
    title: "Marketing",
    links: [
      { label: "Digital", href: "/" },
      { label: "Market Research", href: "/" },
    ],
  },
  {
    title: "Development",
    links: [
      { label: "eCommerce", href: "/" },
      { label: "Web Development", href: "/" },
      { label: "Mobile Apps", href: "/" },
    ],
  },
];

function Services(props: ServicesProps) {
  return (
    <StyledServices>
      <div>
        <SectionInfo>
          <SectionHeader>
            <span>What are</span>
            <span>we capable of</span>
          </SectionHeader>
          <p className={"info"}>
            By focusing on design as an enabler and putting a huge emphasis on
            our clients as co-producers, we create innovative, sustainable
            marketing that enhances brand experience and user engagement.
          </p>
          <Link href={"/"} label={`Our process`} />
        </SectionInfo>
      </div>
      <div>
        <div className={"service-link-container"}>
          {serviceLinkGroupArray.map((group) => (
            <ServiceLinkGroup {...group} key={`servives${group.title}`} />
          ))}
        </div>
      </div>
    </StyledServices>
  );
}

export default Services;
