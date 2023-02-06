import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import JobSearch from "../JobSearch";

const mockService = {
  getJobsWithSearchTerm: () =>
    Promise.resolve([
      {
        id: 0,
        name: "Build a fence",
        start: "2018-09-01T10:00:00Z",
        end: "2018-09-01T11:00:00Z",
        location: "Brisbane",
        contact: {
          id: 0,
          name: "John Smith",
        },
      },
    ]),
};

const queryClient = new QueryClient();
const Wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const WrappedJobSearch = () => (
  <Wrapper>
    <JobSearch service={mockService} />
  </Wrapper>
);

test("Load empty", () => {
  const screen = render(<WrappedJobSearch />);
  const { getByText } = screen;
  expect(getByText("No Data Available")).toBeInTheDocument();
});

test("Only search when search text is at least 3 characters", async () => {
  const screen = render(<WrappedJobSearch />);
  const { getByLabelText, findByText } = screen;
  const searchInput = getByLabelText("search-input");
  fireEvent.change(searchInput, { target: { value: "Bu" } });
  const result = await findByText("No Data Available");
  expect(result.textContent).toBe("No Data Available");
});

test("Search successfully", async () => {
  const screen = render(<WrappedJobSearch />);
  const { getByLabelText, findByText } = screen;
  const searchInput = getByLabelText("search-input");
  fireEvent.change(searchInput, { target: { value: "Build" } });
  const result = await findByText("Build a fence");
  expect(result.textContent).toBe("Build a fence");
});

test("Clear result when search text is cleared", async () => {
  const screen = render(<WrappedJobSearch />);
  const { getByLabelText, findByText } = screen;
  const searchInput = getByLabelText("search-input");
  fireEvent.change(searchInput, { target: { value: "Build" } });
  const result = await findByText("Build a fence");
  expect(result.textContent).toBe("Build a fence");
  fireEvent.change(searchInput, { target: { value: "" } });
  const result2 = await findByText("No Data Available");
  expect(result2.textContent).toBe("No Data Available");
});
