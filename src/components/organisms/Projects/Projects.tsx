import React, { useMemo, useState } from "react";
import { StyledProjects } from "./Projects.styled";
import { ProjectsProps } from "./Projects.types";
import SectionHeader from "@/components/atoms/SectionHeader/SectionHeader";
import Link from "@/components/atoms/Link/Link";
import Tabs from "@/components/molecules/Tabs/Tabs";
import { ProjectCategory } from "@/enums/ProjectCategory";
import { TabProps } from "@/components/atoms/Tab/Tab.types";
import ProjectGrid from "@/components/molecules/ProjectGrid/ProjectGrid";
import TabButtons from "@/components/atoms/TabButtons/TabButtons";

function Projects(props: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(
    ProjectCategory.All
  );

  const tabConfig: Array<TabProps> = [
    { title: ProjectCategory.All },
    { title: ProjectCategory.Branding },
    { title: ProjectCategory.WebDesign },
    { title: ProjectCategory.DigitalMarketing },
  ];

  const currentIndex = useMemo(
    //   Find the index of the current project category
    () => tabConfig.map((t) => t.title).indexOf(selectedCategory),
    [selectedCategory, tabConfig]
  );

  const next = () => {
    const nextCategory =
      tabConfig[Math.min(currentIndex + 1, tabConfig.length - 1)].title;
    setSelectedCategory(nextCategory as ProjectCategory);
  };

  const previous = () => {
    const previousCategory = tabConfig[Math.max(currentIndex - 1, 0)].title;
    setSelectedCategory(previousCategory as ProjectCategory);
  };

  return (
    <StyledProjects>
      <SectionHeader>
        <span>Some of our</span>
        <span>recent projects</span>
      </SectionHeader>

      <Tabs
        tabs={tabConfig}
        selectedTab={selectedCategory}
        setSelectedTab={setSelectedCategory}
      />
      <ProjectGrid selectedCategory={selectedCategory} />
      <div className={"btn-container"}>
        <Link href={"/"} label={"See all work"} />
        <TabButtons
          canPrevious={currentIndex > 0}
          canNext={currentIndex < tabConfig.length - 1}
          onNext={next}
          onPrevious={previous}
        />
      </div>
    </StyledProjects>
  );
}

export default Projects;
