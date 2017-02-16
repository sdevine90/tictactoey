import React from 'react';

class TicContainer extends React.Component {
  constructor () {
    super()
    this.arrayOne =  [null, null, null] 
    this.arrayTwo = [null, null, null] 
    this.arrayThree = [null, null, null] 
  }

  render(){
    return (
      <div className = "Grid">

      <div className= "rowOne">
      <div className= "positionOne"></div>
      <div className= "positionTwo"></div>
      <div className= "positionThree"></div>
      </div>

      <div className= "rowTwo">
      <div className= "positionOne"></div>
      <div className= "positionTwo"></div>
      <div className= "positionThree"></div>
      </div>

      <div className= "rowThree">
      <div className= "positionOne"></div>
      <div className= "positionTwo"></div>
      <div className= "positionThree"></div>
      </div>

      </div>
      )
  }
}

export default TicContainer;