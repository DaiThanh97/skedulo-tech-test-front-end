import React from "react";

import { IAppTabContainer } from "../../../common/types";
import PageLoading from "../../../components/loading/PageLoading";
import SearchBox from "../../../components/searchBox/SearchBox";

import useJobSearch from "./useJobSearch";
import JobTable from "./JobTable";

import "./styles.css";

const JobSearch: React.FC<IAppTabContainer> = ({ service }) => {
  const { data, isLoading, searchTerm, setSearchTerm } = useJobSearch(service);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <SearchBox
        value={searchTerm}
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      {isLoading && <PageLoading />}
      <JobTable data={data} />
    </div>
  );
};

export default JobSearch;
