import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import useFetch from "./useFetch.js"

export default function Shop() {
  const [item, setItem] = useState("");
  const {get, loader} = useFetch();

useEffect(() => {
  get("https://learn.guidedao.xyz/api/student/products")
  .then(data => setItem(data))
  .catch(error => console.error(error))
}, [get])

  if (!item) {
    return null;
  }

  return (
    <>
    {loader ? "Loading..." : <><Item info={item[0][0]} />  <div className="shop"></div></>   }
    </>
  );
}
