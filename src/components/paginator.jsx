import React from "react";
import _ from "lodash";

const Paginator = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    //Math.ceil takes a parameter that rounds a number up to the next largest integer. 
    //in this case we have 10 items and a page size of 4 (items per page). 10 / 4 = 2.5 so we want to round up to 3 pages total
  const pagesCount = Math.ceil(itemsCount / pageSize); 
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  console.log("pagesCount", pagesCount);
  console.log("currentPage", currentPage);

  return (
    <nav aria-label="Page navigation example" style={{ cursor: "pointer", marginTop: "150px" }}>
      <ul className="pagination pg-teal">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          {/* clicking this takes us to page 1 */}
          <a onClick={() => onPageChange(1)} className="page-link">
            First
          </a>
        </li>
        {/* if current page is strictly equal to number 1 then disable previous button otherwise don't disable previous button (by adding or removing the disabled class) */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}> 
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {/* Map the number of pages we need using the lodash range function to calculate the number of pages needed based off of page size and number of users */}
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
        {/* same thing as I did for previous but if we are on the last page we need to disable the next button using this ternary operator */}
        {/* ternary operator - if the currentPage number is equal (strictly, type and value) to the total number of pages (pagesCount) then return the diabled class otherwise return an empty string */}
        <li
          className={`page-item ${
            currentPage === pagesCount ? "disabled" : ""
          }`}
        >
          <a
            onClick={() => onPageChange(currentPage + 1)}
            className="page-link"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
        <li
          className={`page-item ${
            currentPage === pagesCount ? "disabled" : ""
          }`}
        >
          {/* clicking this takes us to last page (pagesCount) */}
          <a onClick={() => onPageChange(pagesCount)} className="page-link">
            Last
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;