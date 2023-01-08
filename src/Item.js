import React, { useState } from "react";
import "./index.css";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

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
        <div className="mb-5 my-5" key={info.id}>
          <img className="block mx-10  h-52  rounded-2xl" src={info.image} alt="" />
          <div className="mx-10">
            <h2 className="text-3xl font-bold">{info.name}</h2>
            <p className="text-xl mb-3">{info.desc}</p>
          </div>
          <div className="flex items-center mb-50" >
            <button
              className="ml-10 itmbtn"
              disabled={total === 0}
              onClick={handleRemoveClick}
            >
              -
            </button>
            <h3 className="text-base m-3 p-0">{total ? total : "0"}</h3>
            <button className="itmbtn" onClick={handleAddClick}>
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
