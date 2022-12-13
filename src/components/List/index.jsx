import {Fragment} from 'react'
function List({ render, items }) {
  return (
    <>
      {items.map((item, index) => {
        return < Fragment key={index}>{render(item)}</Fragment>;
      })}
    </>
  );
}

export default List;