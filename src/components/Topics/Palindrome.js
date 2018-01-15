import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor () {
        super (); 
        this.state = {
        userInput:"",
        palindrome:""
        }
    }
    handleChange (val) {
        this.setState({userInput: val })
    }
    isPalindrome (userInput) {
        var norm = userInput;
        var reverse = userInput;
        reverse = reverse.split('');
        reverse = reverse.reverse();
        reverse = reverse.join('');

        if(norm === reverse) {
            this.setState({palindrome:'true'});

        } else {
            this.setState({palindrome:'false'});
        }
        
    }
    render () {
        return (
            <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput)}> Check </button>
        <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
      </div>
        )
    }
}