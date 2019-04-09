import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';


class DropDown extends React.Component{
	constructor(){
		super();
		this.state ={ 
		curr:'beginer'
			};
			this.changeType = this.changeType.bind(this);
		console.log(this.state)
	}
	changeType(e){
		this.state.curr = e.target.value ;
		console.log(e.target.value);
	}
	render(){
		return(
			<div className="boxContainer">
			<select onChange={this.changeType}>
			  <option value="beginer">Beginer</option>
			  <option value="medium">Medium</option>
			  <option value="large">Large</option>
			</select>
			</div>
			);
	}
}

export default connect()(DropDown);
