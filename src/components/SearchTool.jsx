import React from 'react';

class SearchTool extends React.Component {
    render() {
        return (
            <div
                className="search-tool">
                <input 
                    type="text" 
                    className="search" 
                    placeholder="Search Character" 
                    onChange={this.props.onChange}/>
                <button 
                    className="search-btn" 
                    onClick={this.props.onClick}>
                    Search
                </button>
                <button 
                    className="filter-btn" 
                    onClick={this.props.onClick}>
                    Filters
                </button>
            </div>
        )
    }
};

export default SearchTool;