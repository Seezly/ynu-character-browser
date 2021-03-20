import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div
                className="filter">
                <h5>{this.props.title}</h5>
                <select 
                    name={this.props.title.toLowerCase()} 
                    id={this.props.title} 
                    onChange={this.props.onChange}>
                        {
                            this.props.filters.map(el => <option value={el} key={el}>{el}</option>)
                        }
                </select>
            </div>
        )
    }
};

export default Filter;