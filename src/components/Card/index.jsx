import React from 'react';

const Card = ({ children, title }) => {
  return (
    <section>
      <div className='card-page--title mb-4'>
        <p>{title}</p>
      </div>
      <section className='card-page'>
        <p className='text-blue4 font-semibold'>{title}</p>
        {children}
      </section>
    </section>
  );
};

export default Card;
