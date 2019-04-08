import React, { Component } from 'react';
import Boxes from './boxes';

class App extends Component {
  render() {
    return (
      <div className="App jumbotron vertical-center bg-white">
		  <div className="container">
				<div className="d-flex justify-content-between">
					<Boxes />
					
				</div>
			
			</div>
      </div>
    );
  }
}
export default App;
