import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import chevronLeftIcon from '../../assets/chevron-left-icon.svg';
import chevronRightIcon from '../../assets/chevron-right-icon.svg';

import './index.scss';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const { totalItems, itemsPerPage, currentPage, setCurrentPage } = props;
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [visiblePages, setVisiblePages] = useState<number>(9);
  const [pagesQuantity, setPagesQuantity] = useState<number>(
    Math.ceil(totalItems / itemsPerPage)
  );

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    const isMobileMedium = width <= 400;
    if (isMobileMedium) {
      setVisiblePages(5);
    }

    setPagesQuantity(Math.ceil(totalItems / itemsPerPage));

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [totalItems, itemsPerPage]);

  return (
    <ul className="pagination-container">
      <button
        className="pagination-container__button"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <img src={chevronLeftIcon} alt="previous" />
      </button>
      {Array.from({ length: pagesQuantity }, (i, k) => k).map((page) => {
        if (
          page === currentPage - 1 ||
          (page >= currentPage && page <= currentPage + visiblePages)
        ) {
          return (
            <li
              key={`page-${page}`}
              className={`pagination-container__page ${
                page === currentPage
                  ? 'pagination-container__page--current'
                  : ''
              }`}
              onClick={() => page !== currentPage && setCurrentPage(page)}
            >
              {page + 1}
            </li>
          );
        }
      })}
      <button
        className="pagination-container__button"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage + 1 >= pagesQuantity}
      >
        <img src={chevronRightIcon} alt="next" />
      </button>
    </ul>
  );
};

export { Pagination };
