import React from 'react';

const Pagination = ({ page, prevPage, nextPage }) => {
  return (
    <div className='flex items-center justify-end mt-8'>
      <div>
        <button
          disabled={page === 1}
          onClick={prevPage}
          className='px-3 py-1  border rounded border-darkmetalic text-darkmetalic'
        >
          {'<'}
        </button>
      </div>
      <div className='mx-3'>
        <span className='px-4 py-2 border rounded bg-newblue text-white'>{page}</span>
      </div>
      <div>
        <button onClick={nextPage} className='px-3 py-1  border rounded border-darkmetalic text-darkmetalic'>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
