import React from "react";

import { IAppTabContainer } from "../common/types";
import { SectionGroup } from "../components/section/SectionGroup";

import JobSearch from "./features/JobSearch/JobSearch";

import "./QuestionOne.css";

export const QuestionOne: React.FC<IAppTabContainer> = ({ service }) => {
  return (
    <SectionGroup>
      <JobSearch service={service} />
    </SectionGroup>
  );
};
