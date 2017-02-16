import React from 'react';
import Tile from '../components/Tile';

class TicContainer extends React.Component {
  constructor () {
    super()
    this.gameArrays =  [[null, null, null], [null, null, null], [null, null, null]];
    this.turn = 'x';
    this.state = {gameArrays: this.gameArrays, turn: this.turn, winner: ""};
  }

  setWinner(winner){
    this.state.winner = winner;
  }

  winMethod (){
    this.rowWinMethod()
    this.columnWinMethod()
    this.diagonalWinMethod()
  }

  diagonalWinMethod(){
    var rowOne = this.state.gameArrays[0]
    var rowTwo = this.state.gameArrays[1]
    var rowThree = this.state.gameArrays[2]
    if ((rowOne[0] === rowTwo[1]) && (rowOne[0] === rowThree[2])){
     if (rowOne[0] === 'x'){
       this.setWinner('x wins with diagonal') 
     } else if (rowOne[0] === 'o'){
       this.setWinner('o wins with diagonal')
     }
   }
    if ((rowOne[2] === rowTwo[1]) && (rowOne[2] === rowThree[0])){
     if (rowOne[2] === 'x'){
       this.setWinner('x wins with diagonal') 
     } else if (rowOne[2] === 'o'){
       this.setWinner('o wins with diagonal')
     }
   }
 }

 columnWinMethod(){
  var rowOne = this.state.gameArrays[0]
  var rowTwo = this.state.gameArrays[1]
  var rowThree = this.state.gameArrays[2]
  for (var i = 0; i < this.state.gameArrays[0].length; i++){
   if ((rowOne[i] === rowTwo[i]) && (rowOne[i] === rowThree[i])){
    if (rowOne[i] === 'x'){
      this.setWinner('x wins with column') 
    } else if (rowOne[i] === 'o'){
      this.setWinner('o wins with column')
    }
  }
}
}
rowWinMethod (){
  for (var i = 0; i < this.state.gameArrays.length; i++){
    var row = this.state.gameArrays[i]
    if ((row[0] === row[1]) && (row[0] === row[2])){
      if (row[0] === 'x'){
        this.setWinner('x wins with row') 
      } else if (row[0] === 'o'){
        this.setWinner('o wins with row')
      }
    }
  }
}
clickyClick (array, pos){

  console.log("you clicked a square, it was at position", pos, "in row", array);


  if (this.gameArrays[array][pos] === null){
    this.gameArrays[array][pos] = this.turn;
    console.log(this.gameArrays);
    if (this.turn === 'x'){
      this.turn = 'o';
    } else if (this.turn === 'o') {
      this.turn = 'x';
    } 
  } else {
    console.log("Sorry, that square's taken!!")
  }
  this.setState({gameArrays: this.gameArrays, turn: this.turn})
  this.winMethod()
}

render(){
  return (
    <div>
    <div className= "bigContainer">
    <h3>It is the turn of player {this.state.turn}</h3>
    </div>
    <div className= "bigContainer">
    <div className = "Grid">

    <div className= "rowOne">
    <Tile func={ function(){this.clickyClick(0, 0)}.bind(this) } text={this.state.gameArrays[0][0]} ></Tile>
    <Tile func={ function(){this.clickyClick(0, 1)}.bind(this) } text={this.state.gameArrays[0][1]}></Tile>
    <Tile func={ function(){this.clickyClick(0, 2)}.bind(this) } text={this.state.gameArrays[0][2]}></Tile>
    </div>

    <div className= "rowTwo">
    <Tile func={ function(){this.clickyClick(1, 0)}.bind(this) } text={this.state.gameArrays[1][0]} ></Tile>
    <Tile func={ function(){this.clickyClick(1, 1)}.bind(this) } text={this.state.gameArrays[1][1]} ></Tile>
    <Tile func={ function(){this.clickyClick(1, 2)}.bind(this) } text={this.state.gameArrays[1][2]} ></Tile>
    </div>

    <div className= "rowThree">
    <Tile func={ function(){this.clickyClick(2, 0)}.bind(this) } text={this.state.gameArrays[2][0]} ></Tile>
    <Tile func={ function(){this.clickyClick(2, 1)}.bind(this) } text={this.state.gameArrays[2][1]} ></Tile>
    <Tile func={ function(){this.clickyClick(2, 2)}.bind(this) } text={this.state.gameArrays[2][2]} ></Tile>
    </div>
    </div>
    </div>
    <div className="bigContainer">
    <h4>{this.state.winner}</h4>
    </div>
    </div>
    )
}
}

export default TicContainer;