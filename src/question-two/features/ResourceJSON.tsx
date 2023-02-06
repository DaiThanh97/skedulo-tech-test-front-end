import React from "react";
import { IAppTabContainer } from "../../common/types";
import PageLoading from "../../components/loading/PageLoading";
import useFetchResourceJSON from "./useFetchResourceJSON";

const ResourceJSON: React.FC<IAppTabContainer> = ({ service }) => {
  const { mergedData, isLoading } = useFetchResourceJSON(service);
  if (isLoading) {
    return <PageLoading />;
  }
  return <div>{JSON.stringify(mergedData)}</div>;
};

export default ResourceJSON;
