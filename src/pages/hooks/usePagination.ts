import { useState, useMemo } from 'react';

export const usePagination = (items: any[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  }, [items, currentPage, itemsPerPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return { currentItems, currentPage, totalPages, paginate };
};

export default usePagination;