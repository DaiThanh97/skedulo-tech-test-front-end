import { JobAllocations } from "../../../common/types";

export interface Job {
  number: number;
  jobAllocations: JobAllocations | undefined;
  id: number;
  contactId: string;
  start: string;
  end: string;
  location: string;
  name: string;
}
