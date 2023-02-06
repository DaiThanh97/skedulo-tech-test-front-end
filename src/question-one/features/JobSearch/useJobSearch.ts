import { useState } from "react";
import { useQuery } from "react-query";

import { Contact, IDataService } from "../../../common/types";
import useDebounce from "../../../common/useDebounce";

interface Options {
  debounceMillis?: number;
  minSearchTerm?: number;
}

export interface JobData {
  name: string;
  start: string;
  end: string;
  contact: Contact;
}

export default function useJobSearch(service: IDataService, options?: Options) {
  const { debounceMillis = 500, minSearchTerm = 3 } = options ?? {};

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, debounceMillis);
  const { data, isLoading } = useQuery(
    ["jobs", debouncedSearchTerm],
    () => service.getJobsWithSearchTerm(debouncedSearchTerm),
    {
      enabled: debouncedSearchTerm.length >= minSearchTerm,
    }
  );

  return {
    searchTerm,
    setSearchTerm,
    data: data as unknown as JobData[],
    isLoading,
  };
}
