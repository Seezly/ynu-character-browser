import React from 'react';
import DisplayCharacters from './components/DisplayCharacters';
import Footer from './components/Footer';
import Header from './components/Header';
import ModalFilter from './components/ModalFilter';
import SearchTool from './components/SearchTool';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            displayVisible: false,
            modalVisible: false,
            value: '',
            filters: {
                age: null,
                gender: null,
                status: 'Alive',
                race: null
            }
        };
    }

    async componentDidMount() {
        const res = await fetch('../data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        const data = await res.json();

        this.setState(state => ({
            data: data.characters,
            displayVisible: state.displayVisible,
            modalVisible: state.modalVisible,
            value: state.value,
            filters: state.filters
        }));
    }
    

    render() {
        return (
            <>
                <main>
                    <ModalFilter
                        data={this.state.data}
                        visible={this.state.modalVisible}
                        onClick={this.handleClick}
                        onChange={this.handleChange} />
                    <div id="wrapper">
                        <Header />
                        <SearchTool 
                            onClick={this.handleClick}
                            onChange={this.handleChange} />
                    </div>
                    <DisplayCharacters
                        data={this.state.data}
                        visible={this.state.displayVisible}
                        name={this.state.value}
                        filters={this.state.filters} />
                </main>
                <Footer />
            </>
        )
    }
};

export default App;