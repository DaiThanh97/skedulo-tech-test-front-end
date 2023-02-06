import { useMemo } from "react";
import { useQuery } from "react-query";
import { IDataService } from "../../../common/types";

function useJobList(service: IDataService) {
  const { data: jobs, isLoading: isLoadingJobs } = useQuery("jobs", () =>
    service.getJobs()
  );
  const { data: jobAllocations, isLoading: isLoadingJobAllocations } = useQuery(
    "jobAllocations",
    () => service.getJobAllocations()
  );

  const mappedJobs = useMemo(() => {
    if (!jobs || !jobAllocations) {
      return [];
    }

    return jobs.map((job, index) => ({
      ...job,
      number: index,
      jobAllocations: jobAllocations.filter((ja) => ja.jobId === job.id),
    }));
  }, [jobs, jobAllocations]);

  return {
    jobs: mappedJobs,
    isLoading: isLoadingJobs || isLoadingJobAllocations,
  };
}

export default useJobList;
