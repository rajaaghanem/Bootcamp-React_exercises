import React from "react";

class SearchBar extends React.Component{
    state ={term:""};

    //change the term of state depends of the user input
    handleInputChange=(event)=>{
        this.setState({term: event.target.value});
    };

    handleFormSubmit=(event)=>{
        event.preventDefault();
    }

    render(){
        return (<div className=" search-bar ui segment">
            <form className="ui form" onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <label>Search Video</label>
                    <input type="text" value={this.state.term}
                     onChange={this.handleInputChange}/>
                </div>
            </form>
        </div>);
    }
}

export default SearchBar;