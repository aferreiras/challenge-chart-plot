import React from 'react';
import LineChart from './components/lineChart';
import Inputs from './components/inputs';
import './App.css'; 
/*
import SplitPane from 'react-split-pane';
not used library but was initially considered to provide the split
of the screen with draggable gutter
*/
//the conection between the inputs and the chart is yet to be implemented
function App() {
  return (
    <div className='App'>
      <div className="header-container">André's Challenge</div>
      <div className="content-container">
        <div id="inputs" className="input-container">
          <Inputs />
        </div>
        <div id="chart" >
          <LineChart />
        </div>
      </div>

      <div className="footer-container">
        <button id="generate-button">Generate Chart</button>
      </div>

    </div>


  )

}

export default App
