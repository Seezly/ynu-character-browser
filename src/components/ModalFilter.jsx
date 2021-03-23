import React from 'react';
import Filter from './Filter';
import './modal.css';

class ModalFilter extends React.Component {
    render() {

        const mapped = index => {
            let m =  this.props.data.map(el => Object.values(el)[index]);

            return m
        };

        const filters = [
            {
                title: 'Age',
                filter: mapped(2).filter((el, i) => mapped(2).indexOf(el) === i)
            },
            {
                title: 'Status',
                filter: mapped(6).filter((el, i) => mapped(6).indexOf(el) === i)
            },
            {
                title: 'Race',
                filter: mapped(7).filter((el, i) => mapped(7).indexOf(el) === i)
            },
            {
                title: 'Gender',
                filter: mapped(3).filter((el, i) => mapped(3).indexOf(el) === i)
            },
        ];

        return (
            <div
                className={this.props.visible ? 'modal-filter' : 'modal-filter none'}>
                <button className="exit" onClick={this.props.onClick}>X</button>
                <h3>Filters</h3>
                <div 
                    className="filters">
                        {
                            filters.map(el => <Filter
                                title={el.title}
                                filters={el.filter}
                                key={el.title}
                                onChange={this.props.onChange} />)
                        }
                </div>
                <div 
                    className="btns">
                        <button className="save" onClick={this.props.onClick}>Save Filters</button>
                        <button className="reset" onClick={this.props.onClick}>Reset Filters</button>
                </div>
            </div>
        )
    }
};

export default ModalFilter;