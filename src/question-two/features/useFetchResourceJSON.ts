import { useMemo } from "react";
import { useQuery } from "react-query";

import { IDataService } from "../../common/types";

import {
  getActAllocationsByResourceId,
  getActivityByIds,
  getJobByIds,
  getJobAllocationsByResourceId,
} from "../../common/dataHelpers";

function useFetchResourceJSON(service: IDataService) {
  const { data: resources, isLoading: isLoadingResource } = useQuery(
    "resources",
    () => service.getResources()
  );

  const { data: jobAllocations, isLoading: isLoadingJobAllocations } = useQuery(
    "jobAllocations",
    () => service.getJobAllocations()
  );

  const { data: jobs, isLoading: isLoadingJobs } = useQuery("jobs", () =>
    service.getJobs()
  );

  const { data: activities, isLoading: isLoadingAct } = useQuery(
    "activities",
    () => service.getActivities()
  );

  const { data: activityAllocations, isLoading: isLoadingActAllocations } =
    useQuery("activityAllocations", () => service.getActivityAllocations());

  const mergedData = useMemo(() => {
    if (
      !resources ||
      !jobAllocations ||
      !jobs ||
      !activities ||
      !activityAllocations
    ) {
      return [];
    }

    const jobByIds = getJobByIds(jobs);
    const jaByResourceIds = getJobAllocationsByResourceId(jobAllocations);
    const activityByIds = getActivityByIds(activities);
    const actAllocationByResourceIds =
      getActAllocationsByResourceId(activityAllocations);

    return resources.map((resource) => {
      return {
        resourceName: resource.name,
        resourceId: resource.id,
        allocations: [
          ...(actAllocationByResourceIds?.[resource.id]?.map(
            (actAllocation) => {
              const activity = activityByIds[actAllocation.activityId];
              return {
                allocType: "activity",
                name: activity.name,
                start: activity.start,
                end: activity.end,
              };
            }
          ) || []),
          ...(jaByResourceIds?.[resource.id]?.map((jaByResource) => {
            const job = jobByIds[jaByResource.jobId];
            return {
              allocType: "job",
              name: job.name,
              start: job.start,
              end: job.end,
            };
          }) || []),
        ],
      };
    });
  }, [resources, jobAllocations, jobs, activities, activityAllocations]);

  return {
    mergedData,
    isLoading:
      isLoadingResource ||
      isLoadingJobAllocations ||
      isLoadingJobs ||
      isLoadingAct ||
      isLoadingActAllocations,
  };
}

export default useFetchResourceJSON;
