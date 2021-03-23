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
    
    handleChange = (e) => {

        if (e.target.classList.contains('search')){

            if (!e.target.value) {
                this.setState(state => ({
                    data: state.data,
                    displayVisible: false,
                    modalVisible: state.modalVisible,
                    value: e.target.value,
                    filters: state.filters
                }));
                document.getElementById('not').classList.remove('visible');
                document.getElementById('wrapper').classList.remove('top');
            } else {
                this.setState(state => ({
                    data: state.data,
                    displayVisible: state.displayVisible,
                    modalVisible: state.modalVisible,
                    value: e.target.value,
                    filters: state.filters
                }));
            }
        } else if (e.target.id) {
            this.setState(state => ({
                data: state.data,
                displayVisible: state.displayVisible,
                modalVisible: state.modalVisible,
                value: state.value,
                filters: Object.assign({}, state.filters, {[e.target.name]: e.target.value})
            }));
        }
    };

    handleClick = (e) => {
        if (e.target.classList.contains('filter-btn')) {

            this.setState(state => ({
                data: state.data,
                displayVisible: state.displayVisible,
                modalVisible: !state.modalVisible,
                value: state.value,
                filters: state.filters
            }));

        } else if (e.target.classList.contains('search-btn')) {

            if (this.state.value) {

                if(this.state.displayVisible === false){

                    this.setState(state => ({
                        data: state.data,
                        displayVisible: !state.displayVisible,
                        modalVisible: state.modalVisible,
                        value: state.value,
                        filters: state.filters
                    }));
    
                    document.getElementById('not').classList.add('visible');
                    document.getElementById('wrapper').classList.add('top');
                }

            } else {
                this.setState(state => ({
                    data: state.data,
                    displayVisible: state.displayVisible,
                    modalVisible: state.modalVisible,
                    value: '',
                    filters: state.filters
                }));
                document.getElementById('not').classList.remove('visible');
                document.getElementById('wrapper').classList.remove('top');
            }      
        } else if (e.target.classList.contains('exit')) {
            this.setState(state => ({
                data: state.data,
                displayVisible: state.displayVisible,
                modalVisible: !state.modalVisible,
                value: state.value,
                filters: state.filters
            }));
        } else if (e.target.classList.contains('save')) {
            this.setState(state => ({
                data: state.data,
                displayVisible: state.displayVisible,
                modalVisible: !state.modalVisible,
                value: state.value,
                filters: state.filters
            }));
        } else if (e.target.classList.contains('reset')) {
            this.setState(state => ({
                data: state.data,
                displayVisible: state.displayVisible,
                modalVisible: !state.modalVisible,
                value: state.value,
                filters: {
                    age: null,
                    gender: null,
                    status: 'Alive',
                    race: null
                }
            }));
        } else {
            this.setState(state => ({
                data: state.data,
                displayVisible: state.displayVisible,
                modalVisible: state.modalVisible,
                value: state.value,
                filters: {
                    age: null,
                    gender: null,
                    status: 'Alive',
                    race: null
                }
            }));
        }
    };

    render() {
        return (
            <>
                <main>
                    {
                        this.state.modalVisible &&
                        <ModalFilter
                        data={this.state.data}
                        onClick={this.handleClick}
                        onChange={this.handleChange} />
                    }
                    <div id="wrapper">
                        <Header />
                        <SearchTool 
                            onClick={this.handleClick}
                            onChange={this.handleChange} />
                    </div>
                    {
                        this.state.displayVisible &&
                        <DisplayCharacters
                        data={this.state.data}
                        name={this.state.value}
                        filters={this.state.filters} />
                    }
                </main>
                <Footer />
            </>
        )
    }
};

export default App;