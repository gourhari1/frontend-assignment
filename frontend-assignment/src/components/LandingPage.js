import { useEffect, useRef, useState, Suspense } from "react";
import Table from "./Table";

function LandingPage() {
  /* Stores the complete data from API */
  const data = useRef([]);

  /* Offset defined for maximum no of records per page */
  const offset = useRef(5);

  /* Stores the data presented on current page */
  const [currentPageData, setCurrentPageData] = useState([]);

  /*Functionality to handle the action of page change by User ,
  this will slice the original array and extract only required index 
  for the current page */
  const handlePageChange = (pageNo) => {
    const startIndex = pageNo * offset.current;
    const endIndex = pageNo * offset.current + offset.current;
    setCurrentPageData(data.current.slice(startIndex, endIndex));
  };

  /* This will load the complete data from API once component is mounted */
  useEffect(() => {
    fetch(
      " https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    )
      .then((res) => res.json())
      .then((response) => {
        data.current = response;
        handlePageChange(0);
      });
  }, []);

  return (
    <div className="App">
      <header>Frontend Assignment</header>
      <div className="data">
        <Table
          data={currentPageData}
          handlePageChange={handlePageChange}
          totalPages={data.current.length}
        />
      </div>
    </div>
  );
}

export default LandingPage;
