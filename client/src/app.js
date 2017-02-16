import React from 'react';
import ReactDOM from 'react-dom';
import TicContainer from "./containers/TicContainer"


window.onload = function(){
  ReactDOM.render(
    <TicContainer></TicContainer>,
    document.getElementById('app')
  );
}
