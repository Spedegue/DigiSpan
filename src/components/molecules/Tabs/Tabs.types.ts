import { TabProps } from "@/components/atoms/Tab/Tab.types";
import { Dispatch, SetStateAction } from "react";
import { ProjectCategory } from "@/enums/ProjectCategory";

export interface TabsProps {
  tabs: Array<TabProps>;
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<ProjectCategory>>;
}
