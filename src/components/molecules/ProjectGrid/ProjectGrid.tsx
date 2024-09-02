import React, { useEffect } from "react";
import { StyledProjectGrid } from "./ProjectGrid.styled";
import { ProjectGridProps } from "./ProjectGrid.types";
import ProjectTile from "@/components/atoms/ProjectTile/ProjectTile";
import { AnimatePresence } from "framer-motion";
import { AppDispatch } from "@/types/AppDispatch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/RootState";
import { fetchProjects } from "@/features/projects/projectsSlice";
import { ProjectCategory } from "@/enums/ProjectCategory";
import { Project } from "@/types/Project";

function ProjectGrid(props: ProjectGridProps) {
  const dispatch: AppDispatch = useDispatch();
  const projects: Record<ProjectCategory, Array<Project>> = useSelector(
    (state: RootState) => state.projects.config
  );

  const status = useSelector((state: RootState) => state.projects.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [dispatch, status]);

  return (
    <StyledProjectGrid>
      <AnimatePresence mode={"wait"}>
        {projects[props.selectedCategory]?.map((project) => (
          <ProjectTile {...project} key={project.id} />
        ))}
      </AnimatePresence>
    </StyledProjectGrid>
  );
}

export default ProjectGrid;
