import { Job, Activity, ActivityAllocations, JobAllocations } from "./types";

const getJobByIds = (jobs: Job[]) => {
  return jobs.reduce((acc, job) => {
    return {
      ...acc,
      [job.id]: {
        ...job,
      },
    };
  }, {} as { [key: string]: Job });
};

const getActivityByIds = (activities: Activity[]) => {
  return activities.reduce((acc, activity) => {
    return {
      ...acc,
      [activity.id]: {
        ...activity,
      },
    };
  }, {} as { [key: string]: Activity });
};

const getActAllocationsByResourceId = (
  actAllocations: ActivityAllocations[]
) => {
  return actAllocations.reduce((acc, actAllocation) => {
    const updated = acc[actAllocation.resourceId]
      ? acc[actAllocation.resourceId].push(actAllocation)
      : [actAllocation];
    return {
      ...acc,
      [actAllocation.resourceId]: updated,
    };
  }, {} as { [key: string]: ActivityAllocations[] });
};

const getJobAllocationsByResourceId = (jobAllocations: JobAllocations[]) => {
  return jobAllocations.reduce((acc, ja) => {
    const updated = acc[ja.resourceId] ? acc[ja.resourceId].push(ja) : [ja];
    return {
      ...acc,
      [ja.resourceId]: updated,
    };
  }, {} as { [key: string]: JobAllocations[] });
};

export {
  getActAllocationsByResourceId,
  getJobAllocationsByResourceId,
  getJobByIds,
  getActivityByIds,
};
