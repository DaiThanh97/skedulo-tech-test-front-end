import React from "react";

import Card from "../card/Card";
import "./styles.css";

interface Props {
  jobName: string;
  jobNumber: number;
  jobLocation: string;
  jobDate: string;
  jobTime: string;
  noOfResources: number;
}

const JobCard: React.FC<Props> = ({
  jobName,
  jobNumber,
  jobLocation,
  jobDate,
  jobTime,
  noOfResources,
}) => {
  return (
    <Card>
      <div className="job-card">
        <div className="section-1">
          <span className="job-title">{jobName}</span>{" "}
          <span className="job-number">{`(Job #${jobNumber})`}</span>
          <br />
          <span className="job-location">{jobLocation}</span>
        </div>
        <div className="section-2">
          <div>
            <span className="job-date">{jobDate}</span>
            <br />
            <span className="job-time">{jobTime}</span>
          </div>
          {noOfResources ? (
            <div>
              <div className="allocation-indicator">
                <div>{noOfResources}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
