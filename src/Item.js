import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;
  console.log(info);

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <>
      {info.map((info) => (
        <div className="item" key={info.id}>
          <img src={info.image} alt="" />
          <div className="item-info">
            <h2>{info.name}</h2>
            <p>{info.desc}</p>
          </div>
          <div className="item-quantity">
            <button
              className="item-less"
              disabled={total === 0}
              onClick={handleRemoveClick}
            >
              -
            </button>
            <h3  className='text-base'>{total ? total : ""}</h3>
            <button className="item-more" onClick={handleAddClick}>
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
