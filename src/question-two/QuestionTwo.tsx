import React from "react";

import { IAppTabContainer } from "../common/types";
import { SectionGroup } from "../components/section/SectionGroup";
import ResourceJSON from "./features/ResourceJSON";

interface ResourceSchedule {
  resourceName: string;
  resourceId: number;
  allocations: {
    allocType: "job" | "activity";
    name: string;
    start: string;
    end: string;
  }[];
}

export const QuestionTwo: React.FC<IAppTabContainer> = (props) => {
  return (
    <SectionGroup>
      <ResourceJSON service={props.service} />
    </SectionGroup>
  );
};
