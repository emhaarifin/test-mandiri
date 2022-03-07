import React from 'react';

const Pagination = ({ page, prevPage, nextPage }) => {
  return (
    <div className='flex'>
      <div>
        <button
          disabled={page === 1}
          onClick={prevPage}
          className='p-2 border rounded border-darkmetalic text-darkmetalic'
        >
          {'<'}
        </button>
      </div>
      <div>
        <span className='p-2 border rounded bg-newblue'>{page}</span>
      </div>
      <div>
        <button onClick={nextPage} className='p-2 border rounded border-darkmetalic text-darkmetalic'>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
