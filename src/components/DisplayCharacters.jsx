import React from 'react';
import Character from './Character';
import './display.css';

class DisplayCharacters extends React.Component {
    render() {

        //This is a function to filter an object

        const objectFilter = (mainObject, filterFunction) => {
            return Object.fromEntries(Object.entries(mainObject)
                .filter(objKey => filterFunction(mainObject[objKey[0]])))
        };

        const filters = objectFilter(this.props.filters, el => el !== null),
            filtersKeys = Object.entries(filters).map(el => el[0]);

        return (
            <div 
                className='display'>

                {
                    filtersKeys.length > 0 ?
                    this.props.data
                        .filter(el => el.name.toLowerCase().includes(this.props.name.toLowerCase()))
                        .filter(el => !filters.age ? true : (el.age === filters.age) ? true : false)
                        .filter(el => !filters.gender ? true : (el.gender === filters.gender) ? true : false)
                        .filter(el => !filters.race ? true : (el.race === filters.race) ? true : false)
                        .filter(el => !filters.status ? true : (el.status === filters.status) ? true : false)
                        .map(el =>
                            <Character 
                                img={el.img}
                                name={el.name}
                                race={el.race}
                                age={el.age}
                                status={el.status}
                                gender={el.gender}
                                key={el.id} />
                        )
                    :
                    this.props.data
                        .filter(el => el.name.toLowerCase().includes(this.props.name.toLowerCase()))
                        .map(el =>
                            <Character 
                                img={el.img}
                                name={el.name}
                                race={el.race}
                                age={el.age}
                                status={el.status}
                                gender={el.gender}
                                key={el.id} />
                        )
                }

            </div>
        )
    }
};

export default DisplayCharacters;