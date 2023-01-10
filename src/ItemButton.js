import React, { useState } from "react";

export default function ItemButton(props){
    const [total, setTotal] = useState(0);

    
  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }
return<>
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
</>

}