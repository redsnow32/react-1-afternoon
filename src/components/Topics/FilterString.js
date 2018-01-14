import React, { Component } from 'react';

export default class FliterString extends Component {
    constructor () {
        super()
        this.state = {
            names: 
            ["Brandon", "Derek", "Alyssa","Caden","Alyssa", "Kaylee"],
            userInput:'',
            filteredNames:[]

        };
    }
    handleChange (val) {
        this.setState({userInput: val})
    }
    filterNames (userInput) {
        var names = this.state.names;
        var filteredNames = [];
        for(var i=0; i<names.length;i++) {
            if(names[i].includes(userInput)){
                filteredNames.push([i]);
            }
        }
        this.setState({ filteredNames: filteredNames })
    }


    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>                
                <button className="ConfirmationButton" onClick = { () => this.filterNames(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringPB">Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>

            </div>
        )
    }
}