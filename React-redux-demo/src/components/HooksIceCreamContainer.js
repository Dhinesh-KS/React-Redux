import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux/icecream/Actions";

function HooksIceCreamContainer() {
  const numOfIcecream = useSelector((state) => state.iceCream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Hooks Number of Icecream - {numOfIcecream} </h2>
      <button onClick={()=>dispatch(buyIcecream())}>Buy IceCream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
