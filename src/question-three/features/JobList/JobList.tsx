import React from "react";

import { IAppTabContainer } from "../../../common/types";
import JobCard from "../../../components/jobCard/JobCard";
import PageLoading from "../../../components/loading/PageLoading";

import useJobList from "./useJobList";

import "./styles.css";
import { formatDate } from "../../../common/formatDate";

const FORMAT_DATE = "EEE MMM dd yyyy";
const FORMAT_TIME = "HH:mm";

const JobList: React.FC<IAppTabContainer> = ({ service }) => {
  const { jobs, isLoading } = useJobList(service);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => {
        const date = formatDate(new Date(job.start), FORMAT_DATE);
        const startTime = formatDate(new Date(job.start), FORMAT_TIME);
        const endTime = formatDate(new Date(job.end), FORMAT_TIME);
        return (
          <JobCard
            key={job.id}
            jobName={job.name}
            jobNumber={job.number}
            jobLocation={job.location}
            jobDate={date}
            jobTime={`${startTime} - ${endTime}`}
            noOfResources={job.jobAllocations.length}
          />
        );
      })}
    </div>
  );
};

export default JobList;
