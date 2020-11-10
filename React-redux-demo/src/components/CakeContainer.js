import React from "react";
import { connect } from "react-redux";
import { addCake } from "../redux/cake/Actions";
import { buyCake } from "../redux/index";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.addCake}>Add Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake(2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
