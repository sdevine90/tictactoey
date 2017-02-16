import React from 'react';
import Tile from '../components/Tile';

class TicContainer extends React.Component {
  constructor () {
    super()
    this.gameArrays =  [[null, null, null], [null, null, null], [null, null, null]];
    this.turn = 'x';
    this.state = {gameArrays: this.gameArrays, turn: this.turn};
  }

  winMethod (){
    this.rowWinMethod()
    this.columnWinMethod()
    this.diagnolWinMethod()
  }

  columnWinMethod(){
    var rowOne = this.state.gameArrays[0]
    var rowTwo = this.state.gameArrays[1]
    var rowThree = this.state.gameArrays[2]
    for (var i = 0; i < this.state.gameArrays[0].length; i++){
     if ((rowOne[i] === rowTwo[i]) && (rowOne[i] === rowThree[i])){
      if (rowOne[i] === 'x'){
          console.log('x wins') 
        } else if (rowOne[i] === 'o'){
          console.log('o wins')
        }
     }
    }
  }
  rowWinMethod (){
    for (var i = 0; i < this.state.gameArrays.length; i++){
      var row = this.state.gameArrays[i]
      console.log(row)
      if ((row[0] === row[1]) && (row[0] === row[2])){
        if (row[0] === 'x'){
          console.log('x wins') 
        } else if (row[0] === 'o'){
          console.log('o wins')
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
      <h3>It is the turn of player {this.state.turn}</h3>
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
      )
  }
}

export default TicContainer;