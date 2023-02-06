import React, { useMemo } from "react";

import { formatDate } from "../../../common/formatDate";
import EmptyMessage from "../../../components/emptyMessage/EmptyMessage";
import Table from "../../../components/table/Table";

import { JobData } from "./useJobSearch";

interface Props {
  data?: JobData[];
}

const TABLE_PROPERTIES = [
  { key: "name", title: "Job Name" },
  { key: "start", title: "Start" },
  { key: "end", title: "End" },
  { key: "contactName", title: "Contact Name" },
];

const mapJobDataToTableData = (data?: JobData[]) => {
  if (!data) {
    return [];
  }
  return data.map((item, index) => ({
    ...item,
    id: `${item.name}-${index}`,
    start: formatDate(new Date(item.start)),
    end: formatDate(new Date(item.start)),
    contactName: item.contact.name,
  }));
};

const JobTable: React.FC<Props> = ({ data }) => {
  const mappedJobs = useMemo(() => mapJobDataToTableData(data), [data]);

  return (
    <div>
      <Table items={mappedJobs} properties={TABLE_PROPERTIES} />
      {!mappedJobs.length && <EmptyMessage />}
    </div>
  );
};

export default JobTable;
