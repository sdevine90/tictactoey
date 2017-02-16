import React from 'react';

const Tile = (props) => {
  if (props.text === 'x'){
    var src= "../image/boots.png"
    }else if (props.text === 'o'){
      var src= "../image/beard.png"
    } else {

    }
  
  console.log(props);
  return (
    <div className="tile" onClick={props.func}>   
    <img src= {src} ></img>
    </div>
    )
}

// var Tile = function(props){
// }







export default Tile;