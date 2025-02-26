import { useState, useRef } from "react";
import Row from "./Row";

function Table({ data, handlePageChange, totalPages }) {
  /* Storing the current state of PageNo */
  const [pageNo, setPageNo] = useState(0);

  /* Defining table headers to be shown in UI  */
  const tableHeaders = useRef(["S.No.", "Percentage funded", "Amount pledged"]);

  /* Function triggered once user clicks on Prev/Next Page Buttons */
  const updatePage = (action) => {
    if (action === "increment") {
      handlePageChange(pageNo + 1);
      setPageNo((prev) => prev + 1);
    } else {
      handlePageChange(pageNo - 1);
      setPageNo((prev) => prev - 1);
    }
  };
  return (
    <div className="Table__Container">
      <table>
        <thead>
          <tr>
            {tableHeaders.current.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <Row key={row[["s.no"]]} rowData={row} />
          ))}
        </tbody>
      </table>
      <div className="page__control__pane">
        <button
          className="page_button"
          disabled={pageNo === 0}
          onClick={() => updatePage("decrement")}
        >
          &lt;&lt;Prev
        </button>
        <div className="page_count_container">Page No: {pageNo + 1}</div>
        <button
          className="page_button"
          disabled={(pageNo + 1) * 5 >= totalPages}
          onClick={() => updatePage("increment")}
        >
          Next&gt;&gt;
        </button>
      </div>
    </div>
  );
}

export default Table;
