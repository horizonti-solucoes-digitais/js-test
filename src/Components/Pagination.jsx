/* import React from 'react';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ( {limit, total, offset, setOffset }) => {
  const currentPage = offset ? (offset / limit) + 1 : 1 ;
  const totalPages = Math.ceil(total / limit);
  const first = Math.max(currentPage - MAX_ITEMS, 1);

  return(
    <ul>
      {Array.from({length: MAX_ITEMS })
      .map((_,index) => index + first )
      .map((page) => (
        <li>
          <button
          onClick={ ()=> setOffset((page - 1) * limit) }>
            { page }
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination; */