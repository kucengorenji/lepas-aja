import React, { useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
const Pagination = ({ historyPerPage, totalHistory, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumber = [];
  const int = Math.ceil(totalHistory / historyPerPage);
  if (int === 1) return null;
  for (let i = 1; i <= int; i++) {
    pageNumber.push(i);
  }

  const handlePrevious = (e) => {
    if (currentPage > 0) {
      e.preventDefault();
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage < int) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };
  console.log(currentPage);
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
      <div className="flex items-center justify-between flex-1">
        <div></div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <button
                className={currentPage === 1 ? 'opacity-20' : 'opacity-100'}
                disabled={currentPage == 1}
                onClick={handlePrevious}
              >
                <GrFormPreviousLink className="w-5 h-5" />
              </button>
            </a>
            {pageNumber.map((number) => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(number);
                  paginate(number);
                }}
                key={number}
                href="#"
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium   border border-gray-300  ${
                  currentPage === number
                    ? 'bg-ruddy-pink text-white'
                    : 'bg-white text-gray-500'
                }`}
              >
                {number}
              </a>
            ))}
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <button
                className={currentPage === int ? 'opacity-20' : 'opacity-100'}
                disabled={currentPage == int}
                onClick={handleNext}
              >
                <GrFormNextLink className="w-5 h-5" />
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
