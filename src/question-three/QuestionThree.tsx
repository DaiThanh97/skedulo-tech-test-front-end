import React from "react";

import { IAppTabContainer } from "../common/types";

import JobList from "./features/JobList/JobList";
import LeftSideBar from "./LeftSideBar";

import "./QuestionThree.css";

export const QuestionThree: React.FC<IAppTabContainer> = ({ service }) => {
  return (
    <div className="container">
      <div className="left-sidebar">
        <LeftSideBar />
      </div>
      <div className="grid-container">
        <div className="item1">
          <h1>Header</h1>
        </div>
        <div className="item3">
          <JobList service={service} />
        </div>
        <div className="item4">
          <div className="grey-box-container">
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
            <div className="grey-box" />
          </div>
        </div>
      </div>
    </div>
  );
};
