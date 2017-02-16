import React from 'react';

const Tile = (props) => {
  console.log(props);
  return (
    <div className="tile" onClick={props.func}>{props.text}</div>
    )
}

// var Tile = function(props){
// }







export default Tile;