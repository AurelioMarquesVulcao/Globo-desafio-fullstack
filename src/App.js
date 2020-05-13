import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default App;
