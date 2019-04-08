import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import DropDown from 'dropdown';

class Boxes extends React.Component{
	constructor(){
		super();
		this.state ={ 
			type:"beginner"
			, count : {
			beginner:10,
			medium:12,
			large:15,
			},
			currnetCount: "",
			boms: ""
		};
		this.state.currnetCount = this.state.count[this.state.type] ;
		this.state.boms = this.getRandowmNumbers() ;
		console.log(this.state)
	}
	getRandowmNumbers(){
		let Length = this.state.currnetCount ;
		let ary = [];
		for(let i = 0, L = Length; i < L; i++){
			let rand = Math.floor(Math.random() * 100 + 1) ;
			if(ary.indexOf(rand) > -1 ) {
				L++;
				continue;
			}
			else ary.push(rand)
		}
		return ary;
	}
	
	render(){
		return(
			<div className="boxContainer">
			<DropDown />
			{ReactHtmlParser(CeateBox(this.state.currnetCount))}
			</div>
			);
	}
}
function CeateBox(c){
	let boxes = '';
	for(let i = 0, L = c; i<L; i++){
		boxes+= "<div class='row'>"+box(L)+"</div>";
	}
	return boxes;
}
function box(count){
	let boxes = '';
	for(let i = 0, L = count; i<L; i++){
		boxes+="<div class='sweeperBox'></div>" ;
	}	
	return boxes;
}
export default Boxes;
