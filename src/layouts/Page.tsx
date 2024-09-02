import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Nav from "@/components/molecules/Nav/Nav";

interface PageProps {
  children: React.ReactNode;
}

const StyledPage = styled.main``;

function Page(props: PageProps) {
  return (
    <StyledPage>
      <Nav />
      {props.children}
    </StyledPage>
  );
}

export default Page;
