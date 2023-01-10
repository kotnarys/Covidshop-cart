import React from "react";
import ItemButton from "./ItemButton";
import "./index.css";

export default function Item(props) {


  const { info } = props;


  return (
    <>
      {info.map((info) => (
        <div className="mb-5 my-5" key={info.id}>
          <img className="block mx-10  h-52  rounded-2xl" src={info.image} alt="" />
          <div className="mx-10">
            <h2 className="text-3xl font-bold">{info.name}</h2>
            <p className="text-xl mb-3">{info.desc}</p>
          </div>
            <ItemButton/>
        </div>  
      ))}
    </>
  );
}
