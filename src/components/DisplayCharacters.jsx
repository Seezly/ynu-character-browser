import React from 'react';
import Character from './Character';

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
                className={this.props.visible ? 'display' : 'display none-display'}>

                {
                    filtersKeys.length > 0 ?
                    this.props.data
                        .filter(el => el.name.toLowerCase().includes(this.props.name.toLowerCase()))
                        .filter(el => {
                            if (filters.age) {
                                if (el.age === filters.age) {
                                    return true
                                } else {
                                    return false
                                }
                            }
                        })
                        .filter(el => {
                            if (filters.gender) {
                                if (el.gender === filters.gender) {
                                    return true
                                } else {
                                    return false
                                }
                            }
                        })
                        .filter(el => {
                            if (filters.race) {
                                if (el.race === filters.race) {
                                    return true
                                } else {
                                    return false
                                }
                            }
                        })
                        .filter(el => {
                            if (filters.status) {
                                if (el.status === filters.status) {
                                    return true
                                } else {
                                    return false
                                }
                            }
                        })
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