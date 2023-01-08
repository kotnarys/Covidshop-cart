import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [item, setItem] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "  https://learn.guidedao.xyz/api/student/products"
        );
        const data = await response.json();
        if (data) {
          setItem(data);
        }
      } catch (err) {
        console.error({ err });
      }
    })();
  }, []);

  if (!item) {
    return null;
  }

  return (
    <>
      <Item info={item[0][0]} />
      <div className="shop"></div>
    </>
  );
}
